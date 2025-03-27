import { Clock, IndianRupee, Video } from "lucide-react";
import { Button } from "../ui/button";
import CardWrapper from "./CardWrapper";
import ServiceCard from "./ServiceInfoCard";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ServiceInfoType = {
  cardTitle: string;
  Icon: any;
  serviceLabel: string;
};

export default function CareerCard({
  serviceTitle,
  serviceDescription,
  serviceInfos,
  additionalBlock,
  className,
  link = "/profile/services/career-guidance"
}: {
  serviceTitle: string;
  serviceDescription: React.ReactNode | string;
  serviceInfos: ServiceInfoType[];
  additionalBlock?: React.ReactNode;
  className?: string;
  link?:string
}) {
  return (
    <CardWrapper className={` flex flex-col gap-8 ${className}`}>
      {additionalBlock}
      <div className=" flex justify-between items-center">
        <p className=" text-xl font-medium">{serviceTitle}</p>
        <Button asChild size="sm">
          <Link href={link}>
          View Details
          </Link> 
        </Button>
      </div>

      <div className="  flex-1 flex flex-col gap-6">
        <div className=" flex-1">
          <p>{serviceDescription}</p>
        </div>

        <div className=" flex items-center gap-2">
          {serviceInfos.map((value, index) => (
            <div key={index} className=" flex items-center gap-2 flex-1">
              <ServiceCard
                cardTitle={value.cardTitle}
                serviceLabel={value.serviceLabel}
                Icon={value.Icon}
                className=" flex-1"
              />
              <hr
                className={cn(" h-16 w-[2px] bg-muted-foreground/20", {
                  hidden: index === serviceInfos.length - 1,
                })}
              />
            </div>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}
