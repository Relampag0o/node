const express = require('express');
const bodyParser = require('body-parser');


const cinemaRouter = require("./routes/cinema");
const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/cinema", cinemaRouter);



app.listen(port, () => {
console.log(`Listening on port ${port}`)
})