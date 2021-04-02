import { VercelRequest, VercelResponse } from '@vercel/node';
import isLatest from '../include/checkLatest'

import { config } from 'dotenv'
config()
const { tiktokusername } = process.env

export default async function(req: VercelRequest, res: VercelResponse) {
    const check = await isLatest(tiktokusername)
    if(check == false) {
        console.log('No latest video')
        res.json({
            message: "No new video were found"
        }).status(304)
    }
    else if(check == true) {
        console.log('New video')
        res.json({
            message: "updating and send new data"
        }).status(200)
    }
}