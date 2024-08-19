import create from 'zustand';
import { supabase } from './supabaseClient';

const useAuthStore = create((set) => ({
  user: null,
  favorites: [],
  setUser: (user) => set({ user }),
  setFavorites: (favorites) => set({ favorites }),

  signUp: async (email, password) => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    set({ user });
  },

  signIn: async (email, password) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    set({ user });
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    set({ user: null, favorites: [] });
  },

  loadUser: async () => {
    const user = supabase.auth.user();
    set({ user });
    if (user) {
      const { data } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', user.id);
      set({ favorites: data || [] });
    }
  },

  addFavorite: async (event) => {
    const { user } = supabase.auth;
    if (!user) return;

    const { data, error } = await supabase
      .from('favorites')
      .insert([
        {
          user_id: user.id,
          event_id: event.id,
          event_name: event.name,
          event_date: event.dates.start.localDate,
          event_venue: event._embedded.venues[0].name,
        },
      ]);
    if (error) throw error;
    set((state) => ({
      favorites: [...state.favorites, ...data],
    }));
  },

  fetchFavorites: async () => {
    const { user } = supabase.auth;
    if (!user) return;

    const { data, error } = await supabase
      .from('favorites')
      .select('*')
      .eq('user_id', user.id);
    if (error) throw error;
    set({ favorites: data || [] });
  },
}));

export default useAuthStore;