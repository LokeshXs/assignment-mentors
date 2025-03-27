import { Bell,ChevronDown  } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  return (
    <nav className=" p-4 flex justify-end">
      <div className=" flex gap-4">
        <Button
          variant="outline"
          className=" shadow-md border-muted-foreground/20"
        >
          <Bell className=" text-[#94a3b8]" />
        </Button>

        <DropdownMenu >
          <DropdownMenuTrigger>
            <div className=" flex gap-2 items-center border-2 border-muted-foreground/20 px-4 py-1 rounded-lg ">
              <Avatar className=" w-6 h-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <p>Jimmy</p>

              <ChevronDown className=" w-4 h-4 text-muted-foreground"/>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="  border-muted-foreground/20">
        
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
