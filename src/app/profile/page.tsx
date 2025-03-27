import ProfileCard from "@/components/ProfileCard";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  IndianRupee,
  MessageSquareText,
  Monitor,
  Package,
  ShoppingBag,
  Video,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SERVICES } from "@/lib/data";
import CareerCard from "@/components/cards/ServiceCard";
import Image from "next/image";
import CommentCard from "@/components/cards/CommentCard";

export default function Page() {
  return (
    <main>
      <section className=" px-24 relative border-y-2 border-muted-foreground/10 py-6">
        <Link
          href="/"
          className=" absolute top-6 left-3 text-muted-foreground flex items-center"
        >
          <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          <p className=" text-sm text-muted-foreground">Back</p>
        </Link>

        <div>
          <ProfileCard isProfilePage={true} />
        </div>
      </section>

      <section className=" px-24 py-6 space-y-6 border-b-2 border-muted-foreground/10 pb-20">
        <h2 className=" text-2xl">Services</h2>
        <Tabs defaultValue="all" className="w-full gap-6   ">
          <TabsList className=" w-full ">
            {SERVICES.map((value, index) => (
              <TabsTrigger key={index} value={value.value} className="data-[state=inactive]:text-muted-foreground">
                {value.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="all" className=" grid grid-cols-2 gap-8">
            <CareerCard
              serviceTitle="Career Guidance"
              serviceDescription="I'll give you advice to help with your career decisions.
            I'll give you advice to help with your career decisions."
              serviceInfos={[
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
              ]}
            />
            <CareerCard
              serviceTitle="Resume Review"
              serviceDescription="I’ll refine your resume to land better opportunities."
              serviceInfos={[
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
              ]}

              link="/profile/services/resume-review"
            />
            <CareerCard
              serviceTitle="1 month career guidance full confidence"
              serviceDescription={
                <p>
                  2 x 1:1 call - Carrer guidance <br /> 1x Priority Dm - Resume
                  review
                </p>
              }
              serviceInfos={[
                {
                  cardTitle: "Service type",
                  Icon: Package,
                  serviceLabel: "Package",
                },
                {
                  cardTitle: "Duration",
                  Icon: Clock,
                  serviceLabel: "1 month",
                },
                {
                  cardTitle: "Amount",
                  Icon: IndianRupee,
                  serviceLabel: "1000",
                },
              ]}
            />
            <CareerCard
              serviceTitle="SQL Basics Cheat Sheet"
              serviceDescription="To strength your SQL and data skills"
              serviceInfos={[
                {
                  cardTitle: "Service type",
                  Icon: ShoppingBag,
                  serviceLabel: "Digital product",
                },

                {
                  cardTitle: "Amount",
                  Icon: IndianRupee,
                  serviceLabel: "500",
                },
              ]}
              additionalBlock={
                <div className=" rounded-lg flex flex-col gap-4 px-4 py-20 bg-[#05192d]">
                  <p className=" text-center text-xl font-medium text-green-500">
                    Associate Data engineer in SQL
                  </p>
                  <p className=" text-center text-lg font-medium text-primary-foreground">
                    Gain practical knowledge in ETL, SQl and data warehousing
                    for data engineering
                  </p>
                </div>
              }
              className=" row-span-2"
            />
            <CareerCard
              serviceTitle="Interview tips and tricks advice"
              serviceDescription="Practical strategies to boost your interview confidence."
              serviceInfos={[
                {
                  cardTitle: "Service type",
                  Icon: Monitor,
                  serviceLabel: "Webinar",
                },
                {
                  cardTitle: "Date",
                  Icon: Clock,
                  serviceLabel: "On 28th Oct",
                },
                {
                  cardTitle: "Amount",
                  Icon: IndianRupee,
                  serviceLabel: "1000",
                },
              ]}
            />
          </TabsContent>
          <TabsContent value="call" className=" grid grid-cols-2 gap-8">
            <CareerCard
              serviceTitle="Career Guidance"
              serviceDescription="I'll give you advice to help with your career decisions.
            I'll give you advice to help with your career decisions."
              serviceInfos={[
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
              ]}
            />
          </TabsContent>
          <TabsContent value="proritydm" className=" grid grid-cols-2 gap-8">
            <CareerCard
              serviceTitle="Resume Review"
              serviceDescription="I’ll refine your resume to land better opportunities."
              serviceInfos={[
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
              ]}
            />
          </TabsContent>
          <TabsContent value="package" className=" grid grid-cols-2 gap-8">
            <CareerCard
              serviceTitle="1 month career guidance full confidence"
              serviceDescription={
                <p>
                  2 x 1:1 call - Carrer guidance <br /> 1x Priority Dm - Resume
                  review
                </p>
              }
              serviceInfos={[
                {
                  cardTitle: "Service type",
                  Icon: Package,
                  serviceLabel: "Package",
                },
                {
                  cardTitle: "Duration",
                  Icon: Clock,
                  serviceLabel: "1 month",
                },
                {
                  cardTitle: "Amount",
                  Icon: IndianRupee,
                  serviceLabel: "1000",
                },
              ]}
            />
          </TabsContent>
          <TabsContent value="webinar" className=" grid grid-cols-2 gap-8">
            <CareerCard
              serviceTitle="Interview tips and tricks advice"
              serviceDescription="Practical strategies to boost your interview confidence."
              serviceInfos={[
                {
                  cardTitle: "Service type",
                  Icon: Monitor,
                  serviceLabel: "Webinar",
                },
                {
                  cardTitle: "Date",
                  Icon: Clock,
                  serviceLabel: "On 28th Oct",
                },
                {
                  cardTitle: "Amount",
                  Icon: IndianRupee,
                  serviceLabel: "1000",
                },
              ]}
            />

            <CareerCard
              serviceTitle="Dealing with stakeholder"
              serviceDescription="I'll tell you practical strategies to deal with your stakeholder and how to conduct it smoothly"
              serviceInfos={[
                {
                  cardTitle: "Service type",
                  Icon: Monitor,
                  serviceLabel: "Webinar",
                },
                {
                  cardTitle: "Date",
                  Icon: Clock,
                  serviceLabel: "On 28th Oct",
                },
                {
                  cardTitle: "Amount",
                  Icon: IndianRupee,
                  serviceLabel: "350",
                },
              ]}
            />
          </TabsContent>
          <TabsContent value="digitalproduct" className=" grid grid-cols-2 gap-8">
          <CareerCard
              serviceTitle="SQL Basics Cheat Sheet"
              serviceDescription="To strength your SQL and data skills"
              serviceInfos={[
                {
                  cardTitle: "Service type",
                  Icon: ShoppingBag,
                  serviceLabel: "Digital product",
                },

                {
                  cardTitle: "Amount",
                  Icon: IndianRupee,
                  serviceLabel: "500",
                },
              ]}
              additionalBlock={
                <div className=" rounded-lg flex flex-col gap-4 px-4 py-20 bg-[#05192d]">
                  <p className=" text-center text-xl font-medium text-green-500">
                    Associate Data engineer in SQL
                  </p>
                  <p className=" text-center text-lg font-medium text-primary-foreground">
                    Gain practical knowledge in ETL, SQl and data warehousing
                    for data engineering
                  </p>
                </div>
              }
              className=" row-span-2"
            />

          
          </TabsContent>
        </Tabs>
      </section>

      <section className=" py-6 px-24">
        <div className=" space-y-2">
          <h2 className=" text-2xl">Reviews</h2>
          <span className=" flex gap-1 items-center">
            <p className=" text-muted-foreground">3 Reviews | 5.0</p>

            <Image
              src="/assets/star.png"
              alt="start icon"
              width={20}
              height={20}
            />
          </span>
        </div>

        <div className=" py-12 space-y-6">
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </section>
    </main>
  );
}
