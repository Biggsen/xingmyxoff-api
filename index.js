const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(cors())

app.get('/', (req, res) => {
   res.json('Server up and running')
})

app.get('/getnoun', (req, res) => {
   //build api URL with user zip
   const baseUrl = 'http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=1000&maxCorpusCount=10000&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1'
   //ENTER YOUR API KEY HERE (make sure to no include < >)
   const apiId = '&api_key=' + process.env.API_KEY

   const apiUrl = baseUrl + apiId

   fetch(apiUrl)
   .then(res => res.json())
   .then(data => {
      res.send({ data })
   })
   .catch(err => {
      res.redirect('/error')
   })
})

app.get('/getverb', (req, res) => {
   //build api URL with user zip
   const baseUrl = 'http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=verb&minCorpusCount=1000&maxCorpusCount=10000&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1'
   //ENTER YOUR API KEY HERE (make sure to no include < >)
   const apiId = '&api_key=' + process.env.API_KEY

   const apiUrl = baseUrl + apiId

   fetch(apiUrl)
   .then(res => res.json())
   .then(data => {
      res.send({ data })
   })
   .catch(err => {
      res.redirect('/error')
   })
})

app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port 5000')
})