import { auth } from "@/auth";
import { Container } from "@/schemas/types";
import ContainerCard from "@/components/container-card";
import { redirect } from "next/navigation";
import CreateLab from "@/components/create-container";
import { toast } from "@/components/ui/use-toast";

const Account = async () => {
  "use server";
  if (process.env.API_KEY == null) {
    throw new Error("API_KEY is not defined");
  }

  const session = await auth();
  const userEmail = session?.user.email;
  const sshPublicKey = session?.user.sshPublicKey;

  if (!userEmail) {
    throw new Error("User email not found in session");
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
    <div className="flex flex-grow bg-white rounded-2xl p-4">
      <div>
        <div className="">
          <h2 className="text-2xl font-bold px-4 w-full text-center">
            My Containers
          </h2>
          <CreateLab userEmail={userEmail} />
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
