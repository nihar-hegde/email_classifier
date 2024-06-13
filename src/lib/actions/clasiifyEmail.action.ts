"use server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAPI_KEY, // Make sure your API key is correctly set
});

export const clasiifyEmail = async (email: {
  from: string;
  subject: string;
  body: string;
  classification?: string;
}) => {
  try {
    const prompt = `Classify this email into ONLY ONE of these categories: Important, Promotions, Social, Marketing, Spam, General. Do not provide any additional explanation or details.
    Make the classifications based on the follwoing criteria:
    1.Important: Emails that are personal or work-related and require immediate
      attention.
    2.Promotions: Emails related to sales, discounts, and marketing campaigns.
    3.Social: Emails from social networks, friends, and family.
    4.Marketing: Emails related to marketing, newsletters, and notifications.
    5.Spam: Unwanted or unsolicited emails.
    6.General: If none of the above are matched, use General
    From: ${email.from}
    Subject: ${email.subject}
    Body: ${email.body}
    Classification:`;

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    const classification = response.choices[0].message.content || "UNKNOWN";

    return {
      ...email,
      classification,
    };
  } catch (error) {
    console.log(error);
  }
};
