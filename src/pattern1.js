const fs = require("fs");
var num = parseInt(process.argv[2]);
var data = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        data += "#";
    }
    data += " Hello\n";
}

fs.writeFile("pattern1.md", data, "UTF-8", function (err) {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});


