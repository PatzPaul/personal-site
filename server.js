require("dotenv").config({
  path: './.env'
});

const morgan = require('morgan')
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");


const app = express();
app.use(cors())
const port = process.env.PORT || 4000;
app.use(express.json());

const options = {
  method: 'GET',
  headers: {
    'Host': 'http://localhost:3000'
  }
};

/*
app.get("*", (req, res) =>
req('/', options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error)));*/

if (process.env.NODE_ENV === "production") {
  app.use(morgan('dev'))
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.get('/api/v1/portfolio', (req, res) => [
  res.status(200).json({
    data: 'success'
  })
]) 
app.use('/api/v1/portfolio', contactRoute)

app.listen(port, () => {
  console.log(`server listening to port ${port}`)
});
