import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, { message: "Name is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const RoomSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  imageUrl: z.string().url({ message: "Invalid image URL"}),
  description: z.string(),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  content : z.string(),
  slug: z.string().min(1, { message: "Slug is required" }),
  published: z.boolean(),
  // TODO: docker validation
});