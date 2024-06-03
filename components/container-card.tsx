"use client";
import React from "react";
import { Container } from "@/schemas/types";
import { handleAction } from "@/actions/containerButtons";

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
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-2">
      <div
        className={`max-w-sm rounded-2xl overflow-hidden shadow-xl p-4 ${runningClass}`}
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
        <div className="px-6 py-4 flex justify-between">
          <button
            onClick={() => handleAction(container, "start")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
          >
            Start
          </button>
          <button
            onClick={() => handleAction(container, "stop")}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Stop
          </button>
          <button
            onClick={() => handleAction(container, "restart")}
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded"
          >
            Restart
          </button>
          <button
            onClick={() => handleAction(container, "delete")}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
