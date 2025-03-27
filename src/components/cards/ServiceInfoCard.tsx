import { cn } from "@/lib/utils";
import { Video } from "lucide-react";

export default function ServiceCard({className,cardTitle,Icon,serviceLabel}:{className?:string,cardTitle:string,Icon:any,serviceLabel:string}){

    return (
        <div className={cn(" bg-secondary px-2 py-3 rounded-md space-y-2",className)}>
        <p className=" text-secondary-foreground">{cardTitle}</p>
        <span className=" flex gap-1 items-center">
          <Icon className={cn(" w-4 h-4 text-[#3b82f6]",{
            "text-green-500":cardTitle ==="Amount"
          })} />
          <p className=" text-sm">{serviceLabel}</p>
        </span>
      </div>
    )
}