var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "welcome@123", 
  database: "ex2"
});

 router.get('/shift', function(req, res, next) {
 	var eid=req.query.eid;
 	var from=req.query.from;
 	var to=req.query.to;
console.log(eid);
console.log(from);
console.log(to);
 con.connect(function(err) {
  if (err) throw err;
var query="SELECT scode FROM  hub_temp_shift WHERE eid ="+eid +" AND shiftdate >'" +from+"' AND shiftdate<'"+to+"'";
console.log(query);
 con.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json( JSON.parse(JSON.stringify(result)));
   });
 });
 });


router.get('/announce',function(req, res, next) {
 
  con.connect(function(err) {
   if (err) throw err;
 
  var query="SELECT * FROM `hub_announce`  WHERE `to` >= CURRENT_TIMESTAMP ORDER BY `from` DESC LIMIT 3";
console.log(query);
 con.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json( JSON.parse(JSON.stringify(result)));
   });
 });


});

module.exports = router;
