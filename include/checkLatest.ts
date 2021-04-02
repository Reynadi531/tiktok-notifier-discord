import { getAll, insertDB, getLatest, editDB } from './db'
import { vidCount } from './getUser'
import videoArray from './getVideo'
import messageSender from './messageSender'

export default async function(username: string) {
    let status;
    const userVideoCount = await vidCount(username)
    const allDB = await getAll()
    if(allDB.length == 0) {
        const { text, webVideoUrl } = await videoArray(username, true)
        await insertDB(Number(userVideoCount))
        await messageSender(webVideoUrl, text)
        status = true
    } else {
        const latestDBdata = await getLatest()
        if(latestDBdata.videoCount == userVideoCount) {
            status = false
        }
        else if(userVideoCount != latestDBdata.videoCount) {
            const { text, webVideoUrl } = await videoArray(username, true)
            await editDB(userVideoCount)
            await messageSender(webVideoUrl, text)
            status = true
        }
    }

    return status
}