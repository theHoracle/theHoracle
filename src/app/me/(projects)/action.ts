'use server'

import { screenshotClient, takeScreenshotOptions } from "@/lib/screenshot-one/client"

type GetScreenshotsProps = {
    url: string
}

export const getScreenshots = async ({ url }: GetScreenshotsProps) => {
     
    try {
        // Generate the screenshot URL
        const response = await screenshotClient.generateTakeURL(
            takeScreenshotOptions({ url })
        );

        // Fetch the generated screenshot data
        const imageResponse = await fetch(response, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Check the Content-Type to ensure it's JSON
        const contentType = imageResponse.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error(`Unexpected response type: ${contentType}`);
        }

        const { cache_url } = await imageResponse.json();

        console.log('Screenshot generated:', response, 'Cache URL:', cache_url);
        return cache_url;
    } catch (error) {
        console.error('Error generating screenshot:', error);
        return null; 
    }
};
