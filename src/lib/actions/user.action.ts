"use server";

import { auth, signOut } from "@/auth";
import { google } from "googleapis";

export const logout = async () => {
  await signOut();
};

export const getemails = async()=>{
  try {
    const session = await auth();
    const accessToken = session?.accessToken;
    const refreshToken = session?.refreshToken;
    

    const oAuth2Client = new google.auth.OAuth2(
      process.env.AUTH_GOOGLE_ID,
      process.env.AUTH_GOOGLE_SECRET
    );

    oAuth2Client.setCredentials({
      access_token: accessToken,
      refresh_token:  refreshToken    
    });
    
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
    const res = await gmail.users.messages.list({
      userId: "me",
      maxResults:10
    });

    const messages = res.data.messages || [];
    const emails = [];

    for (const message of messages) {
      if (message.id) {
        const email = await gmail.users.messages.get({
          userId: 'me',
          id: message.id,
        });

        // Extract `from` email and `subject` from the headers
        const headers = email?.data?.payload?.headers;
        const fromHeader = headers?.find(header => header.name === "From");
        const subjectHeader = headers?.find(header => header.name === "Subject");

        const from = fromHeader ? fromHeader.value : "(No From Address)";
        const subject = subjectHeader ? subjectHeader.value : "(No Subject)";

        emails.push({ from, subject });
      }
    }



    
    return emails
  } catch (error) {
    console.log(error)
  }
}