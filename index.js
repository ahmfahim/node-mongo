const express = require('express');


const app = express()


app.get('/',(req, res) => {
    res.send("I know how to open Node.... yey");
});

app.listen(3000, () => console.log("listening to port 3000"));