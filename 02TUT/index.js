const fspromise = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fspromise.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
