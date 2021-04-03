import { user } from 'tiktok-scraper'

export default async function(username: string, latest: boolean) {
    try {
        if(latest == true) {
            const videoArray = (await user(username, { number: 1 })).collector
            return videoArray[0]
        }
        else if(latest == false) {
            const videoArray = (await user(username, { number: 3 })).collector
            return videoArray
        }
    } catch (error) {
        console.error(error)     
    }
}