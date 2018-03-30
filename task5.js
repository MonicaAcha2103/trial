function makeAllCaps(...args){

return new Promise((resolve, reject)=> {

args.map(x=>{ return x.toUpperCase()});

 var x= args.every(function(i){ return typeof i === "string" });

 if(!x)

 {

 reject("promise rejected")}

 else{

args = args.map(function(x) { return x.toUpperCase(); });
setTimeout(() => resolve(args),3000 );
 

  }
})

}

function sortWords(args){
	args.sort();
console.log(args);
}

makeAllCaps("testd","testb","testa")
.then(args=> {sortWords(args);
	});

