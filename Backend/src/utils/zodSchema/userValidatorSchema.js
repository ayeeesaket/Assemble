import { z } from "zod";

const registerUserSchema = z.object({
    email: z.string().email({ message: "Invalid Email Format" }),
    username: z.string().min(5, { message: "Minimum Username Length Should Be 5 Characters." }),
    password: z.string().min(5, { message: "Minimum Password Length Should Be 5 Characters." }),
});

const loginUserSchema = z.object({
    username: z.string().min(5, { message: "Minimum Username Length Should Be 5 Characters." }),
    password: z.string().min(5, { message: "Minimum Password Length Should Be 5 Characters." }),
});

export {
    registerUserSchema,
    loginUserSchema,
};