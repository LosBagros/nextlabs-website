import { auth } from "@/auth";
import { CreateRoomForm } from "@/components/create-room-form";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { redirect } from "next/navigation";

const CreateRoom = async () => {
  const session = await auth();
  if (session && session?.user.role !== "ADMIN") {
    return redirect(DEFAULT_LOGIN_REDIRECT);
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <CreateRoomForm />
    </div>
  );
};

export default CreateRoom;
