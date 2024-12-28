import { z } from "zod";

export const todoSchema = z.object({
    todo: z.string().min(1, "Todo text is required"),
});
