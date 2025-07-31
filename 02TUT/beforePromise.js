const fs = require("fs");

// fs.readFile("./files/starter.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const path = require("path");

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "This is an amazing experience, I am doing this in a place that I love.",
  (err) => {
    if (err) throw err;
    console.log("Writing Completed!");

    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\nThank you for having me here.",
      (err) => {
        if (err) throw err;
        console.log("Appending Completed!");

        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "response.txt"),
          (err) => {
            if (err) throw err;
            console.log("Renaming Completed!");
          }
        );
      }
    );
  }
);

process.on("uncaughtException", (err) => {
  console.log(`Uncaught Error Exception ${err}`);
  process.exit(1);
});
