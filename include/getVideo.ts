import { user } from 'tiktok-scraper'

export default async function(username: string, latest: boolean) {
    let returnData;
    try {
        const videoArray = (await user(username)).collector
        if(latest == true) returnData = videoArray[0];
        else returnData = videoArray
    } catch (error) {
        console.error(error)
        returnData = null        
    }

    return returnData
}