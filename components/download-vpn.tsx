"use client";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadVpn } from "@/actions/vpnActions";
import { useTransition } from "react";

const DownloadVpn = ({
  userEmail,
  userName,
}: {
  userEmail: string;
  userName: string;
}) => {
  const [isPending, startTransition] = useTransition();

  function getVpn() {
    startTransition(() => {
      downloadVpn(userEmail).then((data) => {
        const element = document.createElement("a");
        const file = new Blob([data], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = `${userName}.ovpn`;
        document.body.appendChild(element);
        element.click();
      });
    });
  }

  return (
    <Button onClick={() => getVpn()} disabled={isPending} className="m-2">
      {isPending ? (
        <div className="flex">
          <Loader2 className="mr-2 mt-1 h-4 w-4 animate-spin" />
          Please wait
        </div>
      ) : (
        "Download VPN"
      )}
    </Button>
  );
};

export default DownloadVpn;
