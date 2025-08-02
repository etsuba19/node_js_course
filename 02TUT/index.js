const fspromise = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fspromise.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fspromise.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fspromise.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you my dear."
    );
    await fspromise.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );

    const newData = await fspromise.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"), 'utf8'
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
