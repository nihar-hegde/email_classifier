"use server";

import { auth, signOut } from "@/auth";
import { google } from "googleapis";
import { revalidatePath } from "next/cache";

export const logout = async () => {
  await signOut();
};

interface GetGmailsParams {
  pageSize?: number;
}

export const getemails = async (params: GetGmailsParams) => {
  try {
    const maximumResults = params.pageSize;
    console.log(maximumResults)
    const session = await auth();
    const accessToken = session?.accessToken;
    const refreshToken = session?.refreshToken;

    const oAuth2Client = new google.auth.OAuth2(
      process.env.AUTH_GOOGLE_ID,
      process.env.AUTH_GOOGLE_SECRET,
    );

    oAuth2Client.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
    const res = await gmail.users.messages.list({
      userId: "me",
      maxResults: maximumResults,
    });

    const messages = res.data.messages || [];
    const emails = [];

    for (const message of messages) {
      if (message.id) {
        const email = await gmail.users.messages.get({
          userId: "me",
          id: message.id,
        });

        // Extract `from` email and `subject` from the headers
        const headers = email?.data?.payload?.headers;
        const fromHeader = headers?.find((header) => header.name === "From");
        const subjectHeader = headers?.find(
          (header) => header.name === "Subject",
        );

        const from = fromHeader?.value ?? "Unknown Sender";
        const subject = subjectHeader?.value ?? "(No Subject)";

        let body = email.data.payload?.body?.data;
        if (!body) {
          const parts = email.data.payload?.parts;
          body = parts?.find((part) => part.mimeType === "text/plain")?.body
            ?.data;
        }

        // Decode the base64url encoded body (if necessary)
        if (body) {
          body = Buffer.from(body, "base64").toString("utf-8");
        } else {
          body = "(No Body Found)"; // Handle cases where body extraction fails
        }

        emails.push({ from, subject, body });
      }
    }
    revalidatePath('/dashboard')
    return emails;
  } catch (error) {
    console.log(error);
  }
};

