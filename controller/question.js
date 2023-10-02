const Question = require('../model/questions');
// const {questGen} = require('./huggingFace');
const { HfInference } = require('@huggingface/inference');
const pdf = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const single_question = async (req, res) => {
  try {
    const access_token = process.env.HUGGING_FACE;
    const model = 'potsawee/t5-large-generation-race-Distractor';

    const interface = new HfInference(access_token);
    let text_data;

    const filePath = path.join(__dirname, 'set.pdf');
    let dataBuffer = fs.readFileSync(filePath);

    text_data = await pdf(dataBuffer);
    const result = await interface.textTo
    res.status(200).json('single');
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json('An error occurred');
  }
};

const all_question = (req, res) => {
  // fetch all question and their options from db
  res.status(200).json('Success');
};
const create_question = (req, res) => {
  // this will create question
  const {HfInference} = require('@huggingface/inference')
  let dataBuffer = fs.readFileSync('./Asset/sec.pdf');
  pdf(dataBuffer).then(function(data) {
    console.log(data.text);
});
  res.status(200).json('post question to database');
};

module.exports = { single_question, all_question, create_question};
