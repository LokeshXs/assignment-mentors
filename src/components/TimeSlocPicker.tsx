"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const TIME_SLOTS = [
    "6:00 - 6:30PM",
    "7:00 - 7:30PM",
    "8:00 - 8:30PM",
    "9:00 - 9:30PM",
    "10:00 - 10:30PM",
    "11:00 - 11:30PM",
    "12:00 - 12:30PM",
    "1:00 - 1:30PM",
    "2:00 - 2:30PM",
    "3:00 - 3:30PM",
  ];

export default function TimeSlotPicker({ date }: { date?: Date }) {

    const [selectedSlot,setSelectedSlot] = useState(TIME_SLOTS[0]);

  return (
    <div className="p-3 bg-muted border-2 border-muted-foreground/20  rounded-md flex flex-col gap-4">
      <p className=" text-base font-medium">25 Nov, Monday</p>

      <div className=" grid grid-cols-2 gap-4">
        {TIME_SLOTS.map((value, index) => (
          <span
            key={index}
            onClick={()=>setSelectedSlot(value)}
            className={cn(" block py-2  rounded-md px-4 text-center cursor-pointer ",{
                "bg-muted-foreground/10 border-2 border-muted-foreground/20":selectedSlot === value
            })}
          >
            <p>{value}</p>
          </span>
        ))}

       
      </div>
    </div>
  );
}
