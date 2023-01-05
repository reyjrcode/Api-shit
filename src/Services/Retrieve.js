const Connection = require('../database/Connection')

module.exports = async (fields) => {
  try {
    const query = `SELECT ` +
                    `${fields} ` +
                  `FROM ` + 
                    `tblaccount`

    const results = await Connection(query)

    return results
  } catch (err) {
    return []
  }
}