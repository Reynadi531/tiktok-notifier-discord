import monk from 'monk'
import { config } from 'dotenv'

config()

const { MONGO_URI } = process.env
const db = monk(MONGO_URI)
const collection = db.get('tiktok-user')

export async function editDB(videoCount: number) {
    const latestData = await getLatest()
    collection.findOneAndUpdate({ videoCount: latestData.videoCount }, { $set: { videoCount: videoCount, lastUpdate: new Date() } })
}
export async function insertDB(videoCount: number) {
    try {
        collection.insert({ videoCount: videoCount, lastUpdate: new Date() })
    } catch (error) {
        console.error(error)
    }
}

export async function getAll() {
    const data = await collection.find({})
    return data
}

export async function getLatest() {
    const data = await collection.find({})
    return data[data.length - 1]
}