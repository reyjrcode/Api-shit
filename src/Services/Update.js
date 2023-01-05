const Connection = require('../database/Connection')

module.exports = async (id, username, password) => {
  try {
    const query = `UPDATE ` +
                    `tblaccount ` +
                  `SET ` +
                    `username = '${username}', ` +
                    `password = '${password}' ` +
                  `WHERE ` +
                    `id = ${id}`

    await Connection(query)

    return true
  } catch (err) {
    return false
  }
}


//( `UPDATE tblaccount SET PASSWORD='ssasdasd',username='asdasdddddd' WHERE id =2`)