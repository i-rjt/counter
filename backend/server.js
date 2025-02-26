const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5555;

app.use(cors());
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
})

const obj = [
    {
        quote: "Do what you can, with what you have, where you are. — Theodore Roosevelt"
    },
    {
       quote: "Happiness depends upon ourselves. — Aristotle"
    },
    {
        quote: "Turn your wounds into wisdom. — Oprah Winfrey"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop. — Confucius"
    },
];

app.listen(PORT,()=>{
    console.log(  `Server started at port ${PORT}`);
});

app.get("/data",(req, res)=>{
    obj.forEach(object => {
        res.json(object);
        console.log(res);
    })
});



