
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
  let rawdata = fs.readFileSync('products.json');
  let products = JSON.parse(rawdata);

  res.send(products)
})

app.post("/getPurchase", function(req, res) {
    console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
