const fs = require("fs");
var num = parseInt(process.argv[2]);
var data = "";

for (var i = num; i > 0; i--) {
    for (var j = i; j > 0; j--) {
        data += "#";
    }
    data += " Hello\n";
}

fs.writeFile("pattern2.md", data, "UTF-8", function (err) {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});


