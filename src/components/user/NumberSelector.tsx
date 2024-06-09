'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";



export const NumberSelector = ({pageNumber}:{pageNumber:number}) => {
  const numbers = [10, 15, 20, 30, 50, 100];
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleOnClick = (pageNumber:number) =>{
    router.push(`/dashboard?pageSize=${pageNumber}`)
  }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-28" asChild >
          <Button className="flex items-center gap-2">
            <span>{pageNumber}</span> <ChevronDown />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-28">
          {numbers.map((number) => (
            <DropdownMenuItem
              key={number}           
              onClick={()=>handleOnClick(number)}   
              className={cn(
                "cursor-pointer flex items-center justify-center",
                pageNumber === number && "bg-muted", 
              )}
            >
             
              {number}
             
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
