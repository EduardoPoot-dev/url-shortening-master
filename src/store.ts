import { create } from "zustand";
import { DraftLink, Link } from "./types";
import { newUrlShorter } from "./services/shortLinkService";

export type ShorterState = {
    links: Link[],
    error: string
    newLink: (link: DraftLink) => void,
    newError: (error : string) => void
} 

export const useShorterStore = create<ShorterState>()((set) => ({
    links: [],
    error: '',
    newLink: async (link) => {
        const newLink = await newUrlShorter(link)

        if (newLink) {
            set((state) => ({
                links: [...state.links, newLink]
            }))
        } else {
            set(() => ({
                error: 'Hubo un error en la conexión'
            }))
        }
    },
    newError: error => {
        set({
            error
        })
    }
}))