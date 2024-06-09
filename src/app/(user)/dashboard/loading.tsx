import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const skeletonItems = Array.from({ length: 10 }, (_, index) => index);
const Loading = () => {
  return (
    <main className="flex flex-col items-center gap-5 w-full">
      <div className="w-full flex items-center ">
        <Card className="p-4 w-full">
          <CardContent>
            <div className="flex items-center justify-between">
              <Skeleton className="w-[100px] h-[20px] rounded-medium" />
              <Skeleton className="w-[100px] h-[20px] rounded-medium" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>Gmails</CardTitle>
          </CardHeader>
          <CardContent>
            {skeletonItems.map((index) => (
              <div key={index}>
                <Card>
                  <CardHeader>
                    <Skeleton className="w-[200px] h-[30px] rounded-medium" />
                    <Skeleton className="w-[300px] h-[20px] rounded-medium" />
                  </CardHeader>
                </Card>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="w-full  "></div>
    </main>
  );
};

export default Loading;
