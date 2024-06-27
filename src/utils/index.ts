import { Link } from "../types";

export async function copyText(text : Link['link']) {
    const textToCopy = text;

    try {
        await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
        console.error('Error al copiar al portapapeles:', err);
    }
}