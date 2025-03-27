import CardWrapper from "@/components/cards/CardWrapper";
import ServiceCard from "@/components/cards/ServiceInfoCard";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Clock,
  IndianRupee,
  ShieldCheck,
  Video,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";
import DatePicker from "@/components/DatePicker";
import TimeSlotPicker from "@/components/TimeSlocPicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const serviceInfo = [
  {
    cardTitle: "Service type",
    Icon: Video,
    serviceLabel: "1:1 call",
  },
  {
    cardTitle: "Duration",
    Icon: Clock,
    serviceLabel: "30 min",
  },
  {
    cardTitle: "Amount",
    Icon: IndianRupee,
    serviceLabel: "300",
  },
];

export default function Page() {
  return (
    <main>
      <section className=" px-24 relative border-y-2 border-muted-foreground/10 py-6">
        <Link
          href="/profile"
          className=" absolute top-6 left-3 text-muted-foreground flex items-center"
        >
          <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          <p className=" text-sm text-muted-foreground">Back</p>
        </Link>

        <div className=" space-y-8">
          <span className=" flex items-center gap-4">
            <p className=" text-xl font-medium">Johny Rose</p>
            <ShieldCheck className=" text-green-500" />
          </span>

          <CardWrapper className={` flex flex-col gap-4`}>
            <div className=" flex justify-between items-center">
              <p className=" text-xl font-medium">Career Guidance</p>
            </div>

            <div className="  flex-1 flex flex-col gap-6">
              <div className=" flex-1">
                <p>
                  I&apos;ll give you advice to help with your career decisions.
                  I&apos;ll give you advice to help with your career decisions.
                </p>
              </div>
              <div className=" space-y-2">
                <p className=" text-muted-foreground">Assist you with</p>

                <div className=" bg-secondary p-4 rounded-lg ">
                  <ul className=" list-disc list-inside">
                    <li>I can help you figure out your next steps.</li>
                    <li>
                      I can guide you through career transitions and help you
                      explore new fields.
                    </li>
                    <li>
                      Need advice on software engineering roles? I’ll help you
                      navigate your options.
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" flex items-center gap-2">
                {serviceInfo.map((value, index) => (
                  <>
                    <ServiceCard
                      cardTitle={value.cardTitle}
                      serviceLabel={value.serviceLabel}
                      Icon={value.Icon}
                      className=" flex-1"
                    />
                    <hr
                      className={cn(" h-16 w-[2px] bg-muted-foreground/20", {
                        hidden: index === serviceInfo.length - 1,
                      })}
                    />
                  </>
                ))}
              </div>
            </div>
          </CardWrapper>
        </div>
      </section>

      <section className=" py-6 px-24 space-y-8">
        <h2 className=" text-2xl">Slot</h2>
        <CardWrapper className=" space-y-6">
          <div className=" flex gap-4">
            <div className=" flex-[2] space-y-2">
              <span className=" flex items-center gap-2">
                <CalendarDays className=" w-6 h-6 text-[#3b82f6]" />
                <p className=" text-lg ">Date</p>
              </span>

              <div>
                <DatePicker />
              </div>
            </div>
            <div className=" flex-1 space-y-2">
              <span className=" flex items-center gap-2">
                <Clock className=" w-6 h-6 text-[#3b82f6]" />
                <p className=" text-lg ">Time</p>
              </span>

              <div>
                <TimeSlotPicker />
              </div>
            </div>
          </div>

          <div className=" space-y-2">
            <p className=" text-lg">Timezone</p>
            <Select defaultValue="ist" >
              <SelectTrigger defaultValue="ist" className="w-full shadow-md border-2 border-muted-foreground/20">
                <SelectValue defaultValue="ist" placeholder="Select Timezone" />
              </SelectTrigger>
              <SelectContent defaultValue="ist">
                <SelectItem value="ist">
                  (GMT + 5:30) Chennai, Kolkata, Mumbai, New Delhi(IST)
                </SelectItem>
                <SelectItem value="pst">
                  PST (Pacific Standard Time) – UTC-8
                </SelectItem>
                <SelectItem value="cet">
                  CET (Central European Time) – UTC+1
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className=" flex justify-end">
            <Button> Confirm details</Button>
          </div>
        </CardWrapper>
      </section>
    </main>
  );
}
