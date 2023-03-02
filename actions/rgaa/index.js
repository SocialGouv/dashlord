const jsdom = require("jsdom");
const { fuzzy } = require("fast-fuzzy");

const { JSDOM } = jsdom;

const analyseDom = async (dom) => {
  const percentages = [];
  const text = dom.window.document.body.textContent;
  const regexPercentages = /\d+(?:[,.]\d+)?%/g;
  while ((matches = regexPercentages.exec(text))) {
    if (matches[0]) percentages.push(matches[0]);
  }

  return Math.min(
    ...percentages.map((p) =>
      parseFloat(p.replace(",", ".").substring(0, p.length - 1))
    )
  );
};

const analyseFile = async (filePath, { url } = {}) => {
  const dom = await JSDOM.fromFile(filePath);
  return analyseDom(dom, { url });
};

// warn: this wont work for SPA applications
const analyseUrl = async (url) => {
  const dom = await JSDOM.fromURL(url);
  return analyseDom(dom, { url });
};

module.exports = { analyseFile, analyseUrl };

if (require.main === module) {
  const filePath = process.argv[process.argv.length - 1]; // file path to analyse
  analyseFile(filePath)
    .then((result) => console.log(result))
    .catch(() => console.log(""));
}
