import { create } from "zustand";
import { DraftLink, Link } from "./types";
import { newUrlShorter } from "./services/shortLinkService";

export type ShorterState = {
  links: Link[];
  error: string;
  newLink: (link: DraftLink) => void;
  newError: (error: string) => void;
  isMenuActive: boolean;
  setIsMenuActive: (value: boolean) => void;
};

export const useShorterStore = create<ShorterState>()((set) => ({
  isMenuActive: false,
  setIsMenuActive: (value) => set(() => ({ isMenuActive: value })),

  links: [],
  error: "",
  newLink: async (link) => {
    const newLink = await newUrlShorter(link);

    if (newLink) {
      set((state) => ({
        links: [...state.links, newLink],
      }));
    } else {
      set(() => ({
        error: "Hubo un error en la conexión",
      }));
    }
  },
  newError: (error) => {
    set({
      error,
    });
  },
}));
