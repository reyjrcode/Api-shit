const Connection = require ('../database/Connection')// connection sa database

module.exports= async (id)=>{

    try {
        const  query= `DELETE FROM ` +
                    `tblaccount ` +
                    `WHERE ` +
                    `id=${id} `

    await Connection(query)
        return true

    } catch (error) {
        return false
    }

}