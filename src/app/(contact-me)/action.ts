'use server'

import { sesClient } from "@/lib/SES/amazon-ses"
import { createSendEmailCommand } from "@/lib/SES/utils"
import { MessageRejected } from "@aws-sdk/client-ses"

type SendContactMeMailProps = {
    subject: string,
    body: string
    replyToAddresses: string[]
}
export const sendContactMeMail = async ({ body, subject, replyToAddresses}: SendContactMeMailProps) => {
    const toAddress = process.env.CONTACT_ME_EMAIL!
    const fromAddress = process.env.CONTACT_ME_EMAIL!
    try {
        const sendEmailHelper = createSendEmailCommand({
            toAddress,
            fromAddress,
            subject,
            body,
            replyToAddresses
        }) 
        await sesClient.send(sendEmailHelper)
        return {
            success: true,
        }
    } catch (error) {
        if(error instanceof MessageRejected) {
            return {
                success: false,
                error: error.message
            }
        }
        console.log(error)
    }
}