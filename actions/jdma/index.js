const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const getXWikiJdmaData = (
  id,
  startDate,
  endDate,
  usernameXWiki,
  passwordXWiki
) => {
  fetch(
    `https://observatoire.numerique.gouv.fr/rest/observatoire/avistats/aggregatebyday/demarche/${id}?media=json&question=easy&question=satisfaction&question=comprehensible&date_start=${startDate}&date_end=${endDate}`,
    {
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(`${usernameXWiki}:${passwordXWiki}`).toString('base64')
      }
    }
  ).then(response => {
    response.json().then(json => {
      console.log(JSON.stringify(json));
    });
  });
};

module.exports = { getXWikiJdmaData };

if (require.main === module) {
  getXWikiJdmaData(
    process.argv[process.argv.length - 5],
    process.argv[process.argv.length - 4],
    process.argv[process.argv.length - 3],
    process.argv[process.argv.length - 2],
    process.argv[process.argv.length - 1]
  );
}
