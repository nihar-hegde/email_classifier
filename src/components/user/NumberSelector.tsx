import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

interface NumberSelectorProps {
  selectedNumber: number;
  onNumberChange: (newNumber: number) => void;
}

export const NumberSelector = ({
  selectedNumber,
  onNumberChange,
}: NumberSelectorProps) => {
  const numbers = [10, 15, 20, 30, 50, 100];

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-28" asChild>
          <Button className="flex items-center gap-2">
            <span>{selectedNumber}</span> <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-28">
          {numbers.map((number) => (
            <DropdownMenuItem
              key={number}
              onClick={() => onNumberChange(number)}
              className={cn(
                "cursor-pointer flex items-center justify-center",
                selectedNumber === number && "bg-muted", // Add background for selected item
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
