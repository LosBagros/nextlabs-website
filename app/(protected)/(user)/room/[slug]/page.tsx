import db from "@/lib/db";
import Link from "next/link";
import Image from "next/image";

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
      <div className="flex items-center justify-center h-screen">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-x-4">
          <h2 className="text-xl font-medium text-black">
            Room: {params.slug}
          </h2>
          <p className="text-gray-500">Požadovaná roomka nebyla nalezena</p>
          <p className="text-blue-500">
            Zobrazit <Link href="/dashboard">všechny roomky</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h1>
      <Image
        alt={"Image of " + room.name}
        src={room.imageUrl ?? ""}
        width={600}
        height={600}
        className="object-cover object-center rounded-lg"
      />
      <p className="text-gray-700 mt-4">{room.description}</p>
      <p className="text-gray-600 mt-2">{room.content}</p>
    </div>
  );
}
