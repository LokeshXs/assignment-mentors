import { ShieldCheck, Linkedin, Instagram, Share2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function ProfileCard({
  isProfilePage = false,
  name="Johny Rose",
  designation="Sr. Software Engineering at Google",
  description="PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA ||Team Developement || Growth Management || Full Stack Developer(MERN) || Full Stack Developer(MERN)|| Growth Management || || Growth Management || Full Stack Developer",
  imgUrl="/assets/personal.png"
}: {
  isProfilePage?: boolean;
  name?:string,
  designation?:string,
  description?:string,
  imgUrl?:string
}) {
  return (
    <div className=" flex  gap-8 w-full ">
      <div className=" relative   overflow-hidden  rounded-lg">
        <div className="w-[184px] h-[168px]">
        <Image
          src={imgUrl}
          alt="Profile"
         fill

          className=" object-cover overflow-hidden  "
        />
        </div>
        
        <span className=" flex flex-wrap items-center gap-2 bg-black/40 p-2 absolute bottom-0 left-0 w-full ">
          <span className=" flex ">
            <Image
              src="/assets/star.png"
              alt="start icon"
              width={10}
              height={10}
            />
            <Image
              src="/assets/star.png"
              alt="start icon"
              width={10}
              height={10}
            />
            <Image
              src="/assets/star.png"
              alt="start icon"
              width={10}
              height={10}
            />
            <Image
              src="/assets/star.png"
              alt="start icon"
              width={10}
              height={10}
            />
            <Image
              src="/assets/star.png"
              alt="start icon"
              width={10}
              height={10}
            />
          </span>
          <p className=" text-primary-foreground text-sm">|</p>
          <p className=" text-primary-foreground text-sm">3 Reviews</p>
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-2  ">
        <div className=" flex justify-between items-start w-full">
          <div className=" flex flex-col gap-2">
            <span className=" flex items-center gap-4">
              <p className=" text-xl font-medium">{name}</p>
              <ShieldCheck className=" text-green-500" />
            </span>
            <p className=" text-lg">{designation}</p>
          </div>

          {isProfilePage ? (
            <div className=" flex flex-col gap-2 items-end">
              <Badge className=" rounded-xs bg-muted text-muted-foreground font-medium">
                20 Sessions
              </Badge>

              <span className=" flex gap-2">
                <Button size="icon" variant="outline">
                  <Linkedin />
                </Button>
                <Button size="icon" variant="outline">
                  <Instagram />
                </Button>
                <Button size="icon" variant="outline">
                  <Share2 />
                </Button>
              </span>
            </div>
          ) : (
            <Button size="sm" asChild>
              <Link href="/profile">
              View Profile
              </Link>
            </Button>
          )}
        </div>

        <div className=" w-full  flex-1 bg-muted py-3 px-2 rounded-md">
          {description}
        </div>
      </div>
    </div>
  );
}
