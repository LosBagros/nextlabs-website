"use server";
import { Container } from "@/schemas/types";
import { revalidateTag } from "next/cache";
import db from "@/lib/db";

const startContainer = async (container: Container) => {
  if (process.env.API_KEY == null) {
    throw new Error("API_URL is not defined");
  }

  await fetch(
    process.env.API_URL +
      "/containers/start/?container_hostname=" +
      container.hostname,
    {
      method: "POST",
      headers: { secret: process.env.API_KEY },
      cache: "no-store",
    }
  );

  revalidateTag("collection");
};

const stopContainer = async (container: Container) => {
  if (process.env.API_KEY == null) {
    throw new Error("API_URL is not defined");
  }

  await fetch(
    process.env.API_URL +
      "/containers/stop/?container_hostname=" +
      container.hostname,
    {
      method: "POST",
      headers: { secret: process.env.API_KEY },
      cache: "no-store",
    }
  );

  revalidateTag("collection");
};

const restartContainer = async (container: Container) => {
  if (process.env.API_KEY == null) {
    throw new Error("API_URL is not defined");
  }

  await fetch(
    process.env.API_URL +
      "/containers/restart/?container_hostname=" +
      container.hostname,
    {
      method: "POST",
      headers: { secret: process.env.API_KEY },
      cache: "no-store",
    }
  );

  revalidateTag("collection");
};

const deleteContainer = async (container: Container) => {
  if (process.env.API_KEY == null) {
    throw new Error("API_URL is not defined");
  }

  await fetch(
    process.env.API_URL +
      "/containers/?container_hostname=" +
      container.hostname,
    {
      method: "DELETE",
      headers: { secret: process.env.API_KEY },
      cache: "no-store",
    }
  );

  revalidateTag("deleteContainer");
};

const createContainer = async (userEmail: string, image: string) => {
  if (process.env.API_KEY == null) {
    throw new Error("API_URL is not defined");
  }

  const user = await db.user.findUnique({
    where: { email: userEmail },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.sshPublicKey == null) {
    throw new Error("User does not have an SSH key");
  }

  const public_key = user.sshPublicKey;

  const response = await fetch(
    process.env.API_URL +
      `/containers/?email=${userEmail}&container_image=${image}&public_key=${public_key}`,
    {
      method: "POST",
      headers: { secret: process.env.API_KEY },
      cache: "no-store",
    }
  );

  revalidateTag("collection");
  if (response.ok) {
    return response.json();
  }
};

export {
  startContainer,
  stopContainer,
  restartContainer,
  deleteContainer,
  createContainer,
};
