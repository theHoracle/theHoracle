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
        const { cache_url } = JSON.parse(response)
        return cache_url
    } catch (error) {
       console.log(error)
       return; 
    }   
}