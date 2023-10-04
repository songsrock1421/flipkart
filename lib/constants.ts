export const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://flipkartdemo.vercel.app/api/webhook"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/webhook`
    : `${process.env.NGROK_URL}/api/webhook`;

export const DEFAULT_PATTERN =
  "https://i.ibb.co/KWs4z4d/black.jpg";
