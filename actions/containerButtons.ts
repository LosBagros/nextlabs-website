"use server";
import { Container } from "@/schemas/types";
import { revalidateTag } from "next/cache";

const handleAction = async (
  container: Container,
  action: "start" | "stop" | "restart" | "delete"
) => {
  if (process.env.API_KEY == null) {
    throw new Error("API_URL is not defined");
  }
  const urlMap: { [key: string]: string } = {
    start: `/containers/start/?container_hostname=${container.hostname}`,
    stop: `/containers/stop/?container_hostname=${container.hostname}`,
    restart: `/containers/restart/?container_hostname=${container.hostname}`,
    delete: `/containers/?container_hostname=${container.hostname}`,
  };

  const response = await fetch(process.env.API_URL + urlMap[action], {
    method: action === "delete" ? "DELETE" : "POST",
    headers: { secret: process.env.API_KEY },
  });

  // console log response text
  console.log(await response.text());
  revalidateTag("collection");
};

export { handleAction };
