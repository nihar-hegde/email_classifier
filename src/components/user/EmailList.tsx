import { getemails } from "@/lib/actions/user.action";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EmailList =async () => {
 const emails = await getemails();  
 
 console.log("Emails",emails)
  return (
    <div>
       <Card>
  <CardHeader>
    
    <CardTitle></CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  
</Card>
    </div>
  );
};

export default EmailList;
