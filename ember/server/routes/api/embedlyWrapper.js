/**
 * Expose
 */

module.exports = Embedly;


var EMBEDLY_KEY = 'bea49c8ae437401a9286e2909508495a';

var embedly = require('embedly'),
    util = require('util');

function Embedly (req, res, next) {

  console.log("Calling embedly apis ...");

  new embedly({key: EMBEDLY_KEY}, function(err, api) {
    if (!!err) {
      console.error('Error creating Embedly api');
      console.error(err.stack, api);
      return;
    }

    // call single url
    // TODO: the candidateUrl should get in here
    var url = 'https://medium.com/@joulee/85aa70a0b87d';
    api.extract({url: url}, function(err, objs) {
      if (!!err) {
        console.error('request #1 failed');
        console.error(err.stack, objs);
        return;
      }
      var target = util.inspect(objs[0]);
      
      console.log('---------------------------------------------------------');
      console.log("Below is the whole structure: ");
      console.log(objs[0]);
      console.log('---------------------------------------------------------');

      res.send(objs[0].content);
    });
  });


} 




