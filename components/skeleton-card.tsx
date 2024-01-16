import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <Skeleton className="h-6 w-1/3 mx-auto" />
        <Skeleton className="h-4 w-1/6 mx-auto mt-2" />
        <Skeleton className="h-72 w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mt-4" />
        <Skeleton className="h-4 w-full mt-4" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
};

export default SkeletonCard;
