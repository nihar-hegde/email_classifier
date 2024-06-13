"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndividaulMailCard } from "./IndividaulMailCard";
import { Button } from "../ui/button";
import { clasiifyEmail } from "@/lib/actions/clasiifyEmail.action";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

interface emailsProps {
  from: string;
  subject: string;
  body: string;
  classification?: string;
}

const EmailList = ({ emails }: { emails: emailsProps[] }) => {
  const [loading, setLoading] = useState(false);
  const [classifiedEmails, setClassifiedEmails] =
    useState<emailsProps[]>(emails);
  const classifyEmails = async () => {
    try {
      setLoading(true);
      const newEmailsPromises = emails.map(async (email) => {
        const classifiedEmail = await clasiifyEmail(email); // Await the classification
        return classifiedEmail || email; // If classification fails, keep the original email
      });

      // Wait for all promises to resolve, ensuring all elements are valid emailsProps
      const newEmails = await Promise.all(newEmailsPromises);
      setClassifiedEmails(newEmails);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Gmails</CardTitle>
          <Button disabled={loading} onClick={classifyEmails}>
            {loading ? <LoaderCircle className={"animate-spin"} /> : "Classify"}
          </Button>
        </CardHeader>
        <CardContent>
          {classifiedEmails.length > 0 ? ( // Conditionally render
            classifiedEmails.map((email, index) => (
              <IndividaulMailCard
                key={index}
                from={email.from}
                subject={email.subject}
                body={email.body}
                classification={email.classification}
              />
            ))
          ) : (
            <p>No emails found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailList;
