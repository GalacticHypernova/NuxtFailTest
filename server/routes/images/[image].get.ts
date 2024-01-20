import {createReadStream} from "node:fs"
export default defineEventHandler({
    handler: async (event) => {
        setResponseHeader(event,'Content-Type',"image/jpeg")
        const fs=useStorage('fs')
        const route=getRouterParam(event,"image")!
        if(await fs.hasItem(route)){
            console.log("Yes")
            const a = await fs.getItemRaw(route)
            return sendStream(event, a)

        }
        
    }
})