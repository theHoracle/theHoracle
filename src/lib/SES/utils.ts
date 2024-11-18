import { SendEmailCommand } from "@aws-sdk/client-ses";

interface CreateSendEmailCommandProps {
    fromAddress: string;
    toAddress: string;
    subject: string;
    body: string;
    isHtml?: boolean;
    ccAddresses?: string[];
    replyToAddresses?: string[];
}

export const createSendEmailCommand = ({
    fromAddress, 
    toAddress, 
    subject, 
    body, 
    isHtml = false, 
    ccAddresses = [], 
    replyToAddresses = []
}: CreateSendEmailCommandProps) => {
  const messageBody: any = isHtml 
    ? { 
        Html: {
          Charset: "UTF-8",
          Data: body,
        }
      }
    : { 
        Text: {
          Charset: "UTF-8",
          Data: body,
        }
      };

  return new SendEmailCommand({
    Destination: {
      CcAddresses: ccAddresses,
      ToAddresses: [toAddress],
    },
    Message: {
      Body: messageBody,
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: replyToAddresses,
  });
};

// Example usages:
/*
// Send a plain text email
const textEmailCommand = createSendEmailCommand({
  fromAddress: 'sender@example.com',
  toAddress: 'recipient@example.com',
  subject: 'Plain Text Email',
  body: 'This is a plain text email.',
});

// Send an HTML email
const htmlEmailCommand = createSendEmailCommand({
  fromAddress: 'sender@example.com',
  toAddress: 'recipient@example.com',
  subject: 'HTML Email',
  body: '<h1>Welcome!</h1><p>This is an HTML email.</p>',
  isHtml: true,
  ccAddresses: ['cc@example.com'],
  replyToAddresses: ['support@example.com']
});
*/