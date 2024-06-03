import { auth } from "@/auth";
import { Container } from "@/schemas/types";
import ContainerCard from "@/components/container-card";

const Account = async () => {
  "use server";
  if (process.env.API_KEY == null) {
    throw new Error("API_URL is not defined");
  }

  const session = await auth();
  const userEmail = session?.user.email;

  const response = await fetch(
    process.env.API_URL + "/user/containers/?user_email=" + userEmail,
    {
      headers: { secret: process.env.API_KEY },
      next: { tags: ["collection"] },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const containers = await response.json();
  return (
    <div className="flex flex-grow bg-white rounded-2xl">
      <div>
        <h2>My containers</h2>
        <div className="flex flex-wrap">
          {containers.map((container: Container) => (
            <ContainerCard key={container.name} container={container} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
