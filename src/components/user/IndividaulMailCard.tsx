import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
interface Props {
  from: string;
  subject: string;
  body: string;
  classification?: string;
}

export const IndividaulMailCard = (data: Props) => {
  const nameMatch = data.from.match(/^(.*?) </);
  const name = nameMatch ? nameMatch[1] : data.from;

  const classificationClass = data.classification
    ? `classification-${data.classification.toLowerCase()}`
    : `classification-unknown`;
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <CardTitle>{name}</CardTitle>
            <Badge className={classificationClass}>{data.classification}</Badge>
          </div>
          <CardDescription>{data.subject}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
