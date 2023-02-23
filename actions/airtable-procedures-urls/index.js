const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const urlRegex =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

const repeatRequest = async (url, headers, filters, offset, records = []) => {
  return fetch(
    `${url}?${new URLSearchParams(filters).toString()}${
      offset ? `${filters ? "&" : ""}offset=${offset}` : ""
    }`,
    {
      headers,
    }
  ).then((response) => {
    return response.json().then((json) => {
      if (json.offset) {
        return repeatRequest(
          url,
          headers,
          filters,
          json.offset,
          records.concat(json.records)
        );
      } else {
        return records.concat(json.records);
      }
    });
  });
};

const getAirtableUrls = async (api_key, base_id, procedures_table_name) => {
  let response = await repeatRequest(
    `https://api.airtable.com/v0/${base_id}/${procedures_table_name}`,
    {
      Authorization: `Bearer ${api_key}`,
    },
    {
      filterByFormula: `FIND('Édition actuelle', ARRAYJOIN({📡 Édition}))`,
    }
  );

  console.log(
    JSON.stringify(
      response
        .map((record) => ({
          id: record.fields["🕶 ID"],
          link: record.fields["Lien"]
            ? record.fields["Lien"].replaceAll("\n", "")
            : "",
        }))
        // TO UNCOMMENT FOR PRODUCTION
        // .filter((record) => !!record.id && urlRegex.test(record.link)),
        .filter((record) => !!record.id && urlRegex.test(record.link)).slice(0, 10),
      null,
      2
    )
  );
};

module.exports = { getAirtableUrls };

if (require.main === module) {
  getAirtableUrls(
    process.argv[process.argv.length - 3],
    process.argv[process.argv.length - 2],
    process.argv[process.argv.length - 1]
  );
}
