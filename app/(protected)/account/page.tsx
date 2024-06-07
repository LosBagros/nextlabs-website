import { auth } from "@/auth";
import { Container } from "@/schemas/types";
import ContainerCard from "@/components/container-card";
import { redirect } from "next/navigation";
import CreateLab from "@/components/create-container";
import DownloadVpn from "@/components/download-vpn";

const Account = async () => {
  "use server";
  if (process.env.API_KEY == null) {
    throw new Error("API_KEY is not defined");
  }

  const session = await auth();
  const userEmail = session?.user.email;
  const sshPublicKey = session?.user.sshPublicKey;
  const userName = session?.user.name;

  if (!userEmail) {
    throw new Error("User email not found in session");
  }

  if (!userName) {
    throw new Error("User name not found in session");
  }

  if (!sshPublicKey) {
    redirect("/addpublickey");
  }

  const response = await fetch(
    `${process.env.API_URL}/user/containers/?user_email=${userEmail}`,
    {
      headers: { secret: process.env.API_KEY },
      next: { tags: ["collection", "deleteContainer"] },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const containers: Container[] = await response.json();

  return (
    <div className="flex flex-grow bg-white rounded-2xl p-4 w-full">
      <div className="w-full">
        <div>
          <h2 className="text-2xl font-bold px-4 w-full text-center">
            My Containers
          </h2>
          <div className="flex m-2 justify-between">
            <CreateLab userEmail={userEmail} />
            <DownloadVpn userEmail={userEmail} userName={userName} />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {containers.map((container) => (
            <ContainerCard key={container.name} container={container} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
