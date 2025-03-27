import Image from "next/image";
import CardWrapper from "./CardWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function CommentCard({
  rating,
  comment,
  profileImg,
  name,
}: Record<string, string>) {
  return (
    <CardWrapper className=" space-y-4">
      <span className=" flex gap-1 items-center">
        <p className=" text-muted-foreground">5.0</p>

        <Image src="/assets/star.png" alt="start icon" width={20} height={20} />
      </span>

      <div className=" bg-muted py-3 px-2 rounded-md">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
        rerum ad eum dolores expedita consectetur qui totam harum officiis
        tempora dolor accusamus adipisci officia autem non sunt. Voluptatum
        doloribus, omnis error consectetur ratione ab enim mollitia, ipsa amet
        doloremque reiciendis.
      </div>

      <div className=" flex items-center gap-2">
        <Avatar className=" w-10 h-10">
          <AvatarImage src="/assets/personal.png" className=" object-cover" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className=" text-muted-foreground">Arpit Singh</p>
      </div>
    </CardWrapper>
  );
}
