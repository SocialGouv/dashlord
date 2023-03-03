const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getXWikiJdmaData = (id, startDate, endDate) => {
  console.log(
    JSON.stringify({
      id,
      answersTotal: 1524,
      satisfaction: {
        negative: 500,
        neutral: 24,
        positive: 1000,
      },
      easy: {
        negative: 200,
        neutral: 300,
        positive: 400,
      },
      comprehensible: null,
      dateStart: startDate,
      dateEnd: endDate,
    })
  );
};

module.exports = { getAirtableUrls };

if (require.main === module) {
  getXWikiJdmaData(
    process.argv[process.argv.length - 1],
    process.argv[process.argv.length - 2],
    process.argv[process.argv.length - 3]
  );
}
