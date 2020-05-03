var fs = require("fs");
var GetGPXFile = require("gpx-route-generator-core");

const args = process.argv.slice(2).reduce((acc, arg) => {
  const [k, v] = arg.split("=");
  acc[k] = v;
  return acc;
}, {});

const saveToFile = (data) => {
  fs.writeFile(`${args["out"] || "default_route"}.gpx`, data, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    // success case, the file was saved
    console.log("Route saved!");
  });
};

try {
  const contents = fs.readFileSync(`${args["in"] || "coords.txt"}`, "utf8");
  const data = GetGPXFile(contents);
  saveToFile(data);
} catch (err) {
  console.error(`File '${args["in"] || "coords.txt"}' doesnt exists or content is in wrong format!`);
}
