import {Inngest} from "inngest";

export const inngest = new Inngest({
    id: "stockapp_client",
    ai: {gemini: {apiKey: process.env.GEMINI_API_KEY}},
})