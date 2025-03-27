"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTableFacetedFilter } from "./MutliSelectFilter";
import { useState } from "react";
import { X } from "lucide-react";

const roles = [
  {
    value: "se/sde",
    label: "SE/SDE",
  },
  {
    value: "productmanagement",
    label: "Product Management",
  },
  {
    value: "ds/ai/ml",
    label: "DS/AI/ML",
  },
  {
    value: "projectmanagement",
    label: "Project Management",
  },
  {
    value: "consulting",
    label: "Consulting",
  },
  {
    value: "quantitativefinance",
    label: "Quantitative Finance",
  },
];

const company = [
  {
    value:"faang",
    label:"FAANG"
  },
  {
    value:"startups",
    label:"Startups"
  },
  {
    value:"mnc",
    label:"MNC's"
  },
  {
    value:"others",
    label:"Others"
  }
]

const slots = [
  {
    value:"thisweek",
    label:"This Week"
  },
  {
    value:"nextweek",
    label:"Next Week"
  },
  {
    value:"anytime",
    label:"Anytime"
  }
]

const rating = [
  {
    value:"lowtohigh",
    label:"Low to High"
  },
  {
    value:"hightolow",
    label:"High to Low"
  }
]

export default function Filters() {
  const [filters, setFilters] = useState<Record<string, string>[]>([]);
  return (
    <div className=" flex flex-col  ">
      <div className=" px-20 py-6  flex justify-between ">
        <div className=" w-[400px] bg-input rounded-md flex items-center px-4">
          <Search className="text-[#94a3b8] w-4 h-4" />
          <Input
            className=" focus-within:outline-none focus-within:border-none focus-visible:ring-0 "
            placeholder={"Search by name"}
          />
        </div>

        <div className=" flex items-center gap-6">
          <DataTableFacetedFilter
            title="Role"
            options={roles}
            setFilters={setFilters}
            filters={filters}
          />
           <DataTableFacetedFilter
            title="Company"
            options={company}
            setFilters={setFilters}
            filters={filters}
          />
           <DataTableFacetedFilter
            title="Slot"
            options={slots}
            setFilters={setFilters}
            filters={filters}
          />
           <DataTableFacetedFilter
            title="Rating"
            options={rating}
            setFilters={setFilters}
            filters={filters}
          />
        </div>
      </div>
      {filters.length > 0 && (
        <div className="py-4 border-t-2 border-muted-foreground/20">
          <div className="px-20 flex gap-2 flex-wrap">
            {filters.map((value) => (
              <span
                key={value.value}
                className=" flex gap-2 items-center border-[1px] py-2 px-3 w-fit border-muted-foreground/20 rounded-md "
                
              >
                {value.label}
                <X className=" text-muted-foreground w-5 h-5 cursor-pointer" onClick={() => {
                  setFilters((prev) =>
                    prev.filter((filter) => filter.value !== value.value)
                  );
                }} />
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
