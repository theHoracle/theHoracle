import * as screenshotone from "screenshotone-api-sdk";

const sc1AccessKey = process.env.SCREENSHOT1_ACCESS_KEY!
const sc1SecretKey = process.env.SCREENSHOT1_SECRET_KEY!
// create API client
export const screenshotClient = new screenshotone.
                Client(
                    sc1AccessKey, 
                    sc1SecretKey
                );


type TakeScreenshotOptions = {
    url: string,
    width?: number,
    height?: number,
    format?: "png" | "jpeg" | "webp",
    quality?: number,
    type?: "url" | "buffer"
}
export const takeScreenshotOptions = ({ 
    url,
    format = 'png',
    quality = 80,
}: TakeScreenshotOptions) => {
    return screenshotone.TakeOptions.url(url)
    .delay(0)
    .blockAds(true)
    .format(format)
    .cache(true)
    .cacheTtl(648000) // 7.5 days
    .blockCookieBanners(true)
    .blockTrackers(true)
    .imageQuality(quality)
    .responseType('json')
    .styles('html%20%7Bcolor-scheme%3A%20dark%7D%3B%0A')
    .scripts("document.documentElement.classList.add('dark')");
}