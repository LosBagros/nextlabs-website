"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ContainerLab = () => {
  const [isRunning, setIsRunning] = useState(false);

  function extendContainer() {
    console.log("TODO: extend container");
  }

  const containerData = {
    stopped: {
      title: "Úvod do MariaDB",
      buttonText: "Spustit kontejner",
      ip: "N/A",
      port: "N/A",
      remainingTime: "N/A",
    },
    running: {
      title: "Běžící kontejner",
      destroyButtonText: "Zničit kontejner",
      extendButtonText: "Prodloužit kontejner",
      ip: "10.0.0.69",
      port: "3306",
      remainingTime: "30min",
    },
  };

  return (
    <div className="flex justify-center items-center space-x-4 m-4">
      {!isRunning ? (
        <div className="border p-4 rounded-lg shadow-lg">
          <h1 className="font-bold">{containerData.stopped.title}</h1>
          <p>IP: {containerData.stopped.ip}</p>
          <p>Port: {containerData.stopped.port}</p>
          <p>Zbývající čas: {containerData.stopped.remainingTime}</p>
          <Button className="mt-2" onClick={() => setIsRunning(true)}>
            {containerData.stopped.buttonText}
          </Button>
        </div>
      ) : (
        <div className="border p-4 rounded-lg shadow-lg">
          <h1 className="font-bold">{containerData.running.title}</h1>
          <p>IP: {containerData.running.ip}</p>
          <p>Port: {containerData.running.port}</p>
          <p>Zbývající čas: {containerData.running.remainingTime}</p>
          <div className="flex justify-between gap-2">
            <Button
              className="my-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={() => setIsRunning(false)}
            >
              {containerData.running.destroyButtonText}
            </Button>
            <Button className="my-2" onClick={() => extendContainer()}>
              {containerData.running.extendButtonText}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContainerLab;
