require('dotenv').config();


const express = require('express');
const app = express();

const PORT = 3000; // Use your port number here
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.set('view engine', 'ejs');
