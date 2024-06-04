"use client";
import React from "react";
import { Container } from "@/schemas/types";
import {
  startContainer,
  stopContainer,
  restartContainer,
  deleteContainer,
} from "@/actions/containerActions";

interface ContainerCardProps {
  container: Container;
}

const ContainerCard: React.FC<ContainerCardProps> = ({ container }) => {
  const runningClass = container.running ? "bg-green-50" : "bg-red-50";
  const runningText = container.running ? "Yes" : "No";
  const runningTextColor = container.running
    ? "text-green-700"
    : "text-red-700";

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
        <button
          onClick={() => startContainer(container)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
        >
          Start
        </button>
        <button
          onClick={() => stopContainer(container)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Stop
        </button>
        <button
          onClick={() => restartContainer(container)}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded"
        >
          Restart
        </button>
        <button
          onClick={() => deleteContainer(container)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContainerCard;
