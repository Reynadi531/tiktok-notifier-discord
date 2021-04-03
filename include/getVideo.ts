import { user } from 'tiktok-scraper'

export default async function(username: string, latest: boolean) {
    try {
        if(latest == true) {
            const videoArray = await user(username, { number: 1 })
            return videoArray
        }
        else if(latest == false) {
            const videoArray = await user(username, { number: 3 })
            return videoArray
        }
    } catch (error) {
        console.error(error)     
    }
}