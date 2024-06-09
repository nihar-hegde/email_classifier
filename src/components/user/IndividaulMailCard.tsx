import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface Props {
  from: string;
  subject: string;
  body: string;
}

export const IndividaulMailCard = (data: Props) => {
    const nameMatch = data.from.match(/^(.*?) </); 
    const name = nameMatch ? nameMatch[1] : data.from;
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{data.subject}</CardDescription>
        </CardHeader>  
      </Card>
    </div>
  );
};
