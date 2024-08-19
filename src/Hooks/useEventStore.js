
import { create } from "zustand";
export const useEvent=create((set)=>({
    events:[],
    setEvents:(data)=>set({events:[...data]})
}))
