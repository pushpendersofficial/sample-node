const express = require("express");

const app = express();

app.get('/', (req,res) => {
  res.status(200).json({change: 'Well hello, softobiz technologies'});
});


app.listen(process.env.PORT || 8080, () => {
  console.log('app started')
});
