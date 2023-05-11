import boom from '@hapi/boom'
import data from '../data'


const findData = async (key) => {
    // const keys = Object.keys(data)
    console.log(data[key])
    return data[key]
}


const allData = async (req, h) => {
    try {
        //const key = req.params.key
        //const result = await findData(key)
        return h.response(data)
    } catch (err) {
        throw boom.boomify(err)
    }
}

export default {
    allData
}