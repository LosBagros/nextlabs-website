import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

import Link from "next/link";
import db from "@/lib/db";

const fallbackImage = "https://placekitten.com/300/300";

const roomPrefix = "/room/";

const Dashboard = async () => {
  const rooms = await db.room.findMany({
    where: {
      published: true,
    },
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <Card key={room.id} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-xl mx-auto">{room.name}</CardTitle>
            <Badge
              className={cn({
                "bg-green-600": room.difficulty === "Easy",
                "bg-orange-600": room.difficulty === "Medium",
                "bg-red-600": room.difficulty === "Hard",
                "w-min mx-auto": true,
              })}
            >
              {room.difficulty}
            </Badge>

            <Image
              className="rounded mx-auto"
              src={room.imageUrl || fallbackImage}
              width={600}
              height={300}
              alt={"Image of " + room.name}
            />
          </CardHeader>
          <CardContent>
            <CardDescription>{room.description}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={roomPrefix + room.slug} className="w-full">
              <Button className="w-full">Vstoupit do Místnosti</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
