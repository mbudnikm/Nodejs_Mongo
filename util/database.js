const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://NodeMB:nodemb@clustermb-fyajt.mongodb.net/test?retryWrites=true&w=majority')
  .then(client => {
    console.log("CONNECTED");
    callback(client);
  }
  ).catch(err =>
    console.log(err)
  )
}

module.exports = mongoConnect