var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: '{iam_api_key}'
});

var images_file= fs.createReadStream('./testWrite/canvas.jpg');
//var owners = ["me"];
//var threshold = 0.6;

var params = {
  images_file: images_file,
  //owners: owners,
  //threshold: threshold
};

visualRecognition.classify(params, function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(response, null, 2))
  }
});



/////////TESTED Successfulll 07/11/2018
curl -X POST -u "apikey:8-Rj9GT4s1zsvI3LDGvvKtuRulW86EmU2eSArET5QTRf" --form "images_file=@./testWrite/canvas.png" "https://gateway.watsonplatform.net/visual-recognition/api/v3/classify?version=2018-03-19"
//////////////////////////////////////









