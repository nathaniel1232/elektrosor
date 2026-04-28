import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const builder = client ? imageUrlBuilder(client as any) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!builder) return { url: () => "", width: () => ({ url: () => "", height: () => ({ url: () => "" }) }) } as any;
  return builder.image(source);
}
