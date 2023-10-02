const express = require('express');
const studentRouter = require('./routes/studentRouter')
const app = express();


app.use(cors());

app.get('', (req, res) => {
  res.status(200).send({success: true, data: 'Hello world'});
})

// app.get("/students", (req, res) =>{

// })

app.use('/students', studentRouter);

const PORT = 5001;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));