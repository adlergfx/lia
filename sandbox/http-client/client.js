const express = require("express");
const cors = require("cors");
const app = express();
const port = 8001;

app.use(express.json());
app.use(cors());

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
});

app.post("/api", (req, resp)=>
{
    let data = req.body;

    console.log(`data: ${JSON.stringify(data)}`);

    resp.status(200).json({status: true});
} );