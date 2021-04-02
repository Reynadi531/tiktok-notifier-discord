import { getUserProfileInfo } from 'tiktok-scraper'

export async function vidCount(username: string) {
    const rawUserData = await getUserProfileInfo(username)
    const videoCount = rawUserData.stats.videoCount
    return videoCount
}