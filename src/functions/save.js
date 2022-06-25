var writeJson = require("write");

export default async function save(data) {
  writeJson.sync("data.json", data);
}
