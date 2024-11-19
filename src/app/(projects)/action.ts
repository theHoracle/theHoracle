'use server'

import { screenshotClient, takeScreenshotOptions } from "@/lib/screenshot-one/client"

type GetScreenshotsProps = {
    url: string
}

export const getScreenshots = async ({ 
    url 
}: GetScreenshotsProps ) => {
    try {
        const response = await screenshotClient.generateTakeURL(takeScreenshotOptions({
            url
        }))
        return response
    } catch (error) {
       console.log(error)
       return; 
    }   
}