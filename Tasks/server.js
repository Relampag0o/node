const express = require('express');
const bodyParser = require('body-parser');


const taskRouter = require("./routes/task");
const app = express();
const port = 3001;



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/task", taskRouter);



app.listen(port, () => {
console.log(`Listening on port ${port}`)
})