import Filters from "@/components/Filters";
import ProfileCard from "@/components/ProfileCard";
import { Button } from "@/components/ui/button";
import { MENTORS } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <div className=" px-20 py-4 flex items-center justify-between bg-[#dbeafe]">
        <h1 className=" text-2xl">Mentors</h1>
        <Button
          variant="outline"
          className=" font-normal border-muted-foreground/20 "
          size="sm"
        >
          Become a mentor
        </Button>
      </div>
      <Filters />

      <div className=" px-20 space-y-8 py-4">
        {MENTORS.map((mentor, index) => (
          <div
            key={mentor.name}
            className="p-6 border-2 border-muted-foreground/20 rounded-lg flex  gap-8 shadow-lg"
          >
            <ProfileCard
              name={mentor.name}
              designation={mentor.job_role}
              description={mentor.description}
              imgUrl={mentor.imgUrl}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
