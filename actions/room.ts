"use server";
import * as z from "zod";

import { RoomSchema } from "@/schemas";
import db from "@/lib/db";

export const createRoom = async (values: z.infer<typeof RoomSchema>) => {
  const validatedFields = RoomSchema.safeParse(values);
  if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }

  const { name, imageUrl, description, published, difficulty, content, slug } = validatedFields.data;
  console.log(published);

  const existingRoom = await db.room.findUnique({
    where: {
      slug,
    },
  });

  if (existingRoom) {
    return { error: "Room already exists! Slug must be unique!" };
  }

    await db.room.create({
        data: {
            name,
            imageUrl,
            description,
            difficulty,
            content,
            slug,
            published,
        },
    });

    return { success: "Room created!" };
    
};