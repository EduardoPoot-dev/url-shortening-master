import { z } from "zod";

export const DraftLinkSchema = z.object({
    long_url: z.string()
})

export const LinkSchema = z.object({
    long_url: z.string(),
    link: z.string()
})

export type DraftLink = z.infer<typeof DraftLinkSchema>
export type Link = z.infer<typeof LinkSchema>