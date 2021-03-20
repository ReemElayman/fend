const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
var request = require('request');
var bodyParser = require('body-parser')
const axios = require('axios');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js')


const app = express()
app.use(bodyParser.json())
app.use(express.static('dist'))
app.use(cors())

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})



//evaluating URL post request
app.post('/evaluate',async  function (req, res) {
   
    const {url}= req.body
    console.log(url)

    var meaningcloudUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`
    var analysis;
    
   await axios.get(meaningcloudUrl)
      .then(async function (response) {
        analysis= {"agreement":response.data.agreement,
        "score_tag":response.data.score_tag,
        "subjectivity":response.data.subjectivity,
        "confidence":response.data.confidence,
        "irony":response.data.irony}

        console.log(analysis);

      })
      .catch(function (error) {
        console.log(error);
      })

     res.send(analysis);
});



// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
