import { Link } from "../types";

export async function copyText(text: Link["link"]) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Error al copiar al portapapeles:", err);
  }
}
