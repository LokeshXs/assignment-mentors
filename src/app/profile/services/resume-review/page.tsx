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
  MessageSquareText,
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
import MessageEditor from "@/components/Editor";

const serviceInfo = [
  {
    cardTitle: "Service type",
    Icon: MessageSquareText,
    serviceLabel: "Priority DM",
  },
  {
    cardTitle: "Replies",
    Icon: Clock,
    serviceLabel: "In 1 day",
  },
  {
    cardTitle: "Amount",
    Icon: IndianRupee,
    serviceLabel: "100",
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
              <p className=" text-xl font-medium">Resume Review</p>
            </div>

            <div className="  flex-1 flex flex-col gap-6">
              <div className=" flex-1">
                <p>I’ll refine your resume to land better opportunities.</p>
              </div>
              <div className=" space-y-2">
                <p className=" text-muted-foreground">Assist you with</p>

                <div className=" bg-secondary p-4 rounded-lg ">
                  <ul className=" list-disc list-inside">
                    <li>I will identify the mistakes in your copy.</li>
                    <li>
                      I will refine and improve your copy for better clarity and
                      impact.
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
        <h2 className=" text-2xl">Your question</h2>
        <div>
          <MessageEditor />
        </div>

        <div className=" flex justify-end">
          <Button disabled>Next</Button>
        </div>
      </section>
    </main>
  );
}
