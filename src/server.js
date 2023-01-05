const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// middle ware

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

const port = 3001;

const accountsRoute = require("./routes/Accounts");
app.use("/accounts", accountsRoute);

app.listen(port, () => {
console.log("Listening on port", port);

  // DB.connect((error)=>{

  //     if(error){
  //             console.log("error:",error)
  //     }else{
  //       DB.query('SELECT * FROM accounts',(error, results )=>
  //       {
  //         console.log("error: ",error)
  //         console.log("results: ",results)

  //       })
  //     }
  // })
});
