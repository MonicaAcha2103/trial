function fakeAjax(url)
{

return new Promise ((resolve, reject) => {
    	//readfile
		var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);
          setTimeout(() => resolve(fake_responses[url]), randomDelay);
    })
}
function output(text) {
	console.log(text);
}

async function getFile(file) {                                  

	let x=await fakeAjax(file);
	
	fileReceived(file,x);
	}
			
			function fileReceived(file,text) {
	// haven't received this text yet?
	if (!responses[file]) {
		responses[file] = text;
	}

	var files = ["file1","file2","file3"];

	// loop through responses in order for rendering
	for (var i=0; i<files.length; i++) {
		// response received?l
		if (files[i] in responses) {
			// response needs to be rendered?
			if (responses[files[i]] !== true) {
				output(responses[files[i]]);
				responses[files[i]] = true;
			}
		}
		// can't render yet
		else {
			// not complete!
			return false;
		}
	}

	output("Complete!");
}
	var responses = {};
getFile("file1");
getFile("file2");
getFile("file3");
