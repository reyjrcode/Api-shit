const Connection = require("../database/Connection");

module.exports = async (username, password) => {
  try {
    const query = `INSERT INTO tblaccount (username,PASSWORD) VALUES ( '${username}', '${password}')`;

    //     const query = `INSERT INTO ` +
    //     `tblaccount ` +
    //     `(id,username,password) ` +
    //   `VALUES ` +
    //     `(null, '${username}', '${password}')`

    await Connection(query);

    return true;
  } catch (err) {
    return false;
  }
};
