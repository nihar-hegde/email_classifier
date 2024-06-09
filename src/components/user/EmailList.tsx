import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndividaulMailCard } from "./IndividaulMailCard";

interface emailsProps {
  from: string;
  subject: string;
  body: string;
}

const EmailList = async ({ emails }: { emails: emailsProps[] }) => {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Gmails</CardTitle>
        </CardHeader>
        <CardContent>
          {emails.length > 0 ? ( // Conditionally render
            emails.map((email, index) => (
              <IndividaulMailCard
                key={index}
                from={email.from}
                subject={email.subject}
                body={email.body}
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
