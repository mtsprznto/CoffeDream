import { Skeleton } from "./ui/skeleton";

type SkeletonSchemaPropos = {
  grid: number;
};

export const SkeletonSchema = (props: SkeletonSchemaPropos) => {
  const { grid } = props;
  return Array.from({ length: grid }).map((_, index) => (
    <div key={index} className="flex flex-col gap-8 mx-auto space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl"></Skeleton>
        <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]"></Skeleton>
            <Skeleton className="h-4 w-[250px]"></Skeleton>
        </div>
    </div>
  ));
};
