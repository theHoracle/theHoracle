'use server'

import { sesClient } from "@/lib/SES/amazon-ses"
import { createSendEmailCommand } from "@/lib/SES/utils"
import { MessageRejected } from "@aws-sdk/client-ses"

type SendContactMeMailProps = {
    fromAddress: string,
    subject: string,
    body: string
}
export const sendContactMeMail = async ({fromAddress, body, subject}: SendContactMeMailProps) => {
    const toAddress = process.env.CONTACT_ME_EMAIL!
    try {
        const sendEmailHelper = createSendEmailCommand({
            toAddress,
            fromAddress,
            subject,
            body
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