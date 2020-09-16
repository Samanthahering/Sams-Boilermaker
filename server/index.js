const path = require('path')
const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000; 


//creating our app
const app = express()

//logging middleware (server logs that help with debugging)
app.use(morgan('dev'));

//static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

//body parser (in order to use req.body)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mounting our routes on api
app.use('/api', require('./api'))

//sends the index.html
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

//handling 500 errors
app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

//server listening for requests
app.listen(port, function () {
    console.log(`Your server, listening on port ${port}`);
  });

