"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { NumberSelector } from "./NumberSelector";
import { useState } from "react";

export const DataCard = () => {
  const [selectedNumber, setSelectedNumber] = useState(10);

  const handlePageSize = (newPageSize: number) => {
    setSelectedNumber(newPageSize);
  };
  

  return (
    <div>
      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <NumberSelector
              selectedNumber={selectedNumber}
              onNumberChange={handlePageSize}
            />
            <Button>Categorize</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
