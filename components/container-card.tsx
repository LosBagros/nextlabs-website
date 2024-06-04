"use client";
import React from "react";
import { Container } from "@/schemas/types";
import {
  startContainer,
  stopContainer,
  restartContainer,
  deleteContainer,
} from "@/actions/containerActions";
import { toast } from "@/components/ui/use-toast";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";

interface ContainerCardProps {
  container: Container;
}

const ContainerCard: React.FC<ContainerCardProps> = ({ container }) => {
  const [isPending, startTransition] = useTransition();

  const runningClass = container.running ? "bg-green-50" : "bg-red-50";
  const runningText = container.running ? "Yes" : "No";
  const runningTextColor = container.running
    ? "text-green-700"
    : "text-red-700";

  function deleteSlef() {
    startTransition(() => {
      deleteContainer(container).then(() => {
        toast({
          title: "Container deleted",
          variant: "destructive",
        });
      });
    });
  }
  function startSelf() {
    startTransition(() => {
      startContainer(container);
    });
  }

  function stopSelf() {
    startTransition(() => {
      stopContainer(container);
    });
  }

  function restartSelf() {
    startTransition(() => {
      restartContainer(container).then(() => {
        toast({
          title: `Container "${container.name}" is restarting`,
          description: "Please wait a moment.",
        });
      });
    });
  }

  return (
    <div
      className={`max-w-sm rounded-2xl overflow-hidden shadow-xl p-2 ${runningClass}`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{container.name}</div>
        <p className="text-gray-700 text-base">
          <strong>Hostname:</strong> {container.hostname}
        </p>
        <p className="text-gray-700 text-base">
          <strong>State:</strong> {container.state}
        </p>
        <p className={`text-base ${runningTextColor}`}>
          <strong>Running:</strong> {runningText}
        </p>
        <p className="text-gray-700 text-base">
          <strong>IP Address:</strong> {container.ipaddress || "N/A"}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Image:</strong> {container.image}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between space-x-2">
        <Button
          disabled={isPending}
          onClick={() => startSelf()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
        >
          Start
        </Button>
        <Button
          disabled={isPending}
          onClick={() => stopSelf()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Stop
        </Button>
        <Button
          disabled={isPending}
          onClick={() => restartSelf()}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded"
        >
          Restart
        </Button>
        <Button
          disabled={isPending}
          onClick={() => deleteSlef()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ContainerCard;
