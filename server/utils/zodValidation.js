import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters long"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be min 3 characters long")
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be min 3 characters long")
});

export const registerProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.number().positive("Price must be a positive number"),
  category: z.string().optional(),
  image: z.string().url("Image must be a valid URL").optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})