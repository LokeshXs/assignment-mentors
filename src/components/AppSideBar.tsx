"use client";

import {
  UserRound,
  BriefcaseBusiness,
  Clock10,
  MessageSquareText,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useRef } from "react";


// Menu items.
const items = [
  {
    title: "Mentor",
    url: "/",
    icon: UserRound,
  },
  {
    title: "Job",
    url: "#",
    icon: BriefcaseBusiness,
  },
  {
    title: "Booking",
    url: "#",
    icon: Clock10,
  },
  {
    title: "Priority DM",
    url: "#",
    icon: MessageSquareText,
  },
];

export function AppSidebar() {
  const { setOpen } = useSidebar();
  const sideBarRef = useRef(null);

  return (
    <Sidebar
      ref={sideBarRef}
      collapsible="icon"
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
      className=" border-muted-foreground/20"
    >
      <SidebarContent className="py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url === "/"}>
                    <a href={item.url}>
                      <item.icon className=" text-[#94a3b8]" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
