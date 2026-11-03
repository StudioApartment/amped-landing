import { createSocialImageResponse, socialImageSize } from "@/lib/og-image-response";

export const alt =
  "Amped — Organizing the clean energy revolution. New American Energy.";
export const size = socialImageSize;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return createSocialImageResponse();
}
