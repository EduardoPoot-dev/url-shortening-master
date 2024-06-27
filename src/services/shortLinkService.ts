import axios from 'axios';
import { DraftLink, DraftLinkSchema, LinkSchema } from "../types";

export async function newUrlShorter(link : DraftLink) {
    const url = 'https://api-ssl.bitly.com/v4/shorten'
    const body = DraftLinkSchema.safeParse(link)

    if (body.success) {
        try {
            const {data} = await axios.post(url, body.data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${import.meta.env.VITE_API_TOKEN}`
                }
            })
            const result = LinkSchema.safeParse(data) 

            if (result.success) {
                console.log(result.data)
                return result.data
            }  
        } catch (error) {
            console.log(error)
        }
    }
}
    


