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
import { auth, signOut } from "@/auth";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import db from "@/lib/db";

import { ImLab } from "react-icons/im";
import { Poppins } from "next/font/google";
import UserButton from "@/components/user-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const fallbackImage = "https://placekitten.com/300/300";

const roomPrefix = "/room/";

const Dashboard = async () => {
  const session = await auth();
  const rooms = await db.room.findMany({
    where: {
      published: true,
    },
  });

  return (
    <div className="max-w-6xl mx-auto">
      <br></br> {/* NEUMIM CSS */}
      <nav className="flex items-center justify-between rounded-2xl bg-white m-6 px-8">
        <div className="flex items-center m-4">
          <ImLab size={35} className="text-black mr-2" />
          <h1
            className={cn(
              "text-5xl font-semibold text-black drop-shadow-md",
              font.className
            )}
          >
            NextLabs
          </h1>
        </div>
        <UserButton />
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-6">
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
    </div>
  );
};

export default Dashboard;