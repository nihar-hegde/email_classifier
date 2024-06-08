
// //import { useSession } from 'next-auth/react'; 
// import { auth } from '@/auth';
// import { google } from 'googleapis';

// export async function fetchEmails() {
//   const session = await auth();
//   console.log(session?.accessToken);
  
//   if (!session) {
//     throw new Error('Not authenticated');
//   }

//   const oauth2Client = new google.auth.OAuth2(
//     process.env.AUTH_GOOGLE_ID!,
//     process.env.AUTH_GOOGLE_SECRET!
//   );
//   oauth2Client.setCredentials({
//     access_token: session.accessToken, 
//   });

//   const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  
  
//   const res = await gmail.users.messages.list({ userId: 'me' });
//   const messages = res.data.messages;

//   if (messages && messages.length) {
//     const emailData = await Promise.all(
//       messages.map(async (message) => {
//         const messageDetails = await gmail.users.messages.get({
//           userId: 'me',
//           id: message.id!,
//         });
//         return {
//           from: messageDetails.data.payload?.headers?.find((header) => header.name === 'From')?.value,
//           subject: messageDetails.data.payload?.headers?.find((header) => header.name === 'Subject')?.value,
//           // ...extract other relevant data from messageDetails.data
//         };
//       })
//     );
//     return emailData;
//   } else {
//     console.log('No messages found.');
//     return [];
//   }
// }