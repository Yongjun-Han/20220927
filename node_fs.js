const fs = require('fs');

let directoryName = "hello-filesystem";

fs.mkdir("./" + directoryName, (err) => {
  if(err) {
    console.log(err)
  }
})