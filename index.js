const { error } = require("console");
const fs = require("fs");
const xml2js = require("xml2js");

// Parse XML data and finds id
function findIdXml(id) {
  const xml = fs.readFileSync("sma_gentext.xml");

  xml2js.parseString(xml, (err, result) => {
    if (err) throw err;

    const value = result.root.file[0].body[0]["trans-unit"].find(
      (unit) => unit.$.id === id
    );

    const data = JSON.stringify({ target: value.target[0] });
    fs.writeFileSync("result.json", data);
  });
}
findIdXml("42007");
