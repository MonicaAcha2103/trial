var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* GET home page. */
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "welcome@123", 
  database: "ex2"
});
// router.get('/', function(req, res, next) {
//   res.render('index');
// });
// router.post('/', function(req, res, next) {
 
//    var eid=req.body.eid; 
//    var from='\"'+req.body.from+'\"';
//    var to='\"'+req.body.to+'\"';
//   con.connect(function(err) {
//   if (err) throw err;
//   var query="SELECT * FROM  hub_temp_shift WHERE eid ="+eid +" AND shiftdate>" +from+" AND shiftdate<"+to;
//   console.log(query);
//   con.query(query, function (err, result, fields) {
//     if (err) throw err;
//     console.log( JSON.parse(JSON.stringify(result)));
//    });
// });
// });
 router.get('/shift', function(req, res, next) {
 	var eid=req.query.eid;
 	var from=req.query.from;
 	var to=req.query.to;

 	 con.connect(function(err) {
   if (err) throw err;
var query="SELECT * FROM  hub_temp_shift WHERE eid ="+eid +" AND shiftdate >'" +from+"' AND shiftdate<'"+to+"'";

  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json( JSON.parse(JSON.stringify(result)));
   });

 });


});
  router.post('/shift', function(req, res, next) {
 	var eid=req.body.eid;
 	var from=req.body.from;
 	var to=req.body.to;

 	 con.connect(function(err) {
   if (err) throw err;
var query="SELECT * FROM  hub_temp_shift WHERE eid ="+eid +" AND shiftdate >'" +from+"' AND shiftdate<'"+to+"'";

  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json( JSON.parse(JSON.stringify(result)));
   });

 });


});


module.exports = router;
