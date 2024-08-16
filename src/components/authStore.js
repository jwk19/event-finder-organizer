
// import create from 'zustand';
// import { supabase } from './supabaseClient';

// const useAuthStore = create((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),

//   signUp: async (email, password) => {
//     const { user, error } = await supabase.auth.signUp({ email, password });
//     if (error) throw error;
//     set({ user });
//   },

//   signIn: async (email, password) => {
//     const { user, error } = await supabase.auth.signIn({ email, password });
//     if (error) throw error;
//     set({ user });
//   },

//   signOut: async () => {
//     const { error } = await supabase.auth.signOut();
//     if (error) throw error;
//     set({ user: null });
//   },
// }));

// export default useAuthStore;
