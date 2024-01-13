import db from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default async function RoomTest({
  params,
}: {
  params: { slug: string };
}) {
  const room = await db.room.findUnique({
    where: { slug: params.slug, published: true },
  });

  if (!room) {
    return (
      <div className="flex items-center justify-center">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-x-4">
          <h2 className="text-xl font-medium text-black">
            Room: {params.slug}
          </h2>
          <p className="text-gray-500">Požadovaná roomka nebyla nalezena</p>
          <p className="text-blue-500">
            <Link href="/dashboard">Zobrazit všechny roomky</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mb-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
        {room.name}
      </h1>
      <Badge
        className={cn({
          "bg-green-600": room.difficulty === "Easy",
          "bg-orange-600": room.difficulty === "Medium",
          "bg-red-600": room.difficulty === "Hard",
          "w-min flex mx-auto": true,
        })}
      >
        {room.difficulty}
      </Badge>
      <Image
        alt={"Image of " + room.name}
        src={room.imageUrl ?? ""}
        width={300}
        height={300}
        className="m-4 rounded-lg mx-auto"
      />
      <p className="text-gray-600 mt-2">{room.content}</p>
    </div>
  );
}
