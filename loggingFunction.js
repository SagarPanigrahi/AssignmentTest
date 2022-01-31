const { Consumer } = require('sqs-consumer');
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-1',
  accessKeyId: 'XXXXX',
  secretAccessKey: 'XXXX'
});
const app = Consumer.create({
  queueUrl: 'XXXXX',
  handleMessage: async (message) => {
    console.log(message);
  },
  sqs: new AWS.SQS()
});

app.on('error', (err) => {
    console.error(err.message);
  });
  
  app.on('processing_error', (err) => {
    console.error(err.message);
  });
  
  app.on('timeout_error', (err) => {
   console.error(err.message);
  });
  
app.start();