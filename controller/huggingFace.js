const {HfInference} = require('@huggingface/inference')
const fs = require('fs');
const PdfParse = require('pdf-parse');

const questGen = (req, res, next)=>{
let myfile = fs.readFileSync('sec.pdf')
PdfParse(myfile).then((data)=>{
  console.log(data)
})
next()
}

module.exports = questGen