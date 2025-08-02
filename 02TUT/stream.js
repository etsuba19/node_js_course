const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join("files", "lorem.txt"));
const ws = fs.createWriteStream(path.join("files", "writeStream.txt"));

// rs.on('data', (dataChuck) => {
//   ws.write(dataChuck)
// })

rs.pipe(ws);

// both work the same way, meaning the above two
// mkdir - to make directory in fs
// exitsSync - to check existance of a specific file or folder
// rmdir - deletes the directory
