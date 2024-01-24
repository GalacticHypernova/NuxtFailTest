import {createReadStream} from "node:fs"
import {loadSchema} from ""
export default defineEventHandler({
    handler: async (event) => {
       
        setResponseHeader(event,"Content-Type","text/plain;charset=utf8")
        setResponseHeader(event,'Content-Type',"image/jpeg")
        const fs=useStorage('fs')
        const fs2=useStorage('fs2')
        const route=getRouterParam(event,"image")!
        if(await fs.hasItem(route)){
            const a = await fs.getItemRaw(route)
            await fs2.setItemRaw(route,a)
            console.log(a)
            return a

        }
        
    }
})