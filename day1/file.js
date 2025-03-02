const fs = require ('fs');
const os = require ('os');

console.log(os.cpus().length);

// *Write
// sync-blocking code , async- non blocking code
fs.writeFileSync("./text.txt", "this is sync file");
//async
fs.writeFileSync("./asynctext.txt", "this is async file", (err) => {
    if(err) {
        console.log(err);
    }
    console.log("file created");
});


// *Read
//sync
const data = fs.readFileSync("./text.txt", "utf-8");
console.log(data);
//async 
const asyncData = fs.readFile("./asynctext.txt", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
});

// *Update
//sync

fs.appendFileSync("./text.txt", "  this is appended text");
//async
fs.appendFile("./asynctext.txt", "  --this is appended text", (err) => {
    if(err) {
        console.log(err);
    }
    console.log("file updated");
});


//1 cpsysnc
//2 unlinksync
//3 mkdirsync
//4 statSync
