import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { NumberSelector } from "./NumberSelector";

interface Props {
  pageNumber: number;
}

export const DataCard = (pageNumber: Props) => {
  return (
    <Card className="p-4 w-full">
      <CardContent>
        <div className="flex items-center justify-between">
          <NumberSelector pageNumber={pageNumber.pageNumber} />
        </div>
      </CardContent>
    </Card>
  );
};
