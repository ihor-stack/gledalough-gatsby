import boom from '@hapi/boom'
import siteContent from '../data'


const findDatabyKey = async (data, key) => {
    return Object.keys(data).find(key => object[key] === value)
}


const allData = async (req, h) => {
    try {
        //const key = req.params.key
        //const result = await findDatabyKey(siteContent, key)
        return h.response(siteContent) // result
    } catch (err) {
        throw boom.boomify(err)
    }
}

export default {
    allData
}