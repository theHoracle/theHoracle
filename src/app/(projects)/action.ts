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
        const imageobj = await fetch(url)
        const { cache_url } = await JSON.parse(await imageobj.text())
        return cache_url
    } catch (error) {
       console.log(error)
       return; 
    }   
}