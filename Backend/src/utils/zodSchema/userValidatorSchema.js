import { z } from "zod";

const registerUserSchema = z.object({
    username: z.string().min(5, { message: "Minimum Username Length Should Be 5 Characters." }),
    email: z.string().email({ message: "Invalid Email Format" }),
    password: z.string().min(5, { message: "Minimum Password Length Should Be 5 Characters." }),
});

export {
    registerUserSchema,
};