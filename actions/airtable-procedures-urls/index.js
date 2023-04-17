const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const urlRegex =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
const field_names = {
  id: 'ID',
  link: 'Lien',
  edition: '📡 Édition',
  jdmaStartDate: '[Dashlord] - JDMA à partir de',
  jdmaEndDate: "[Dashlord] - JDMA jusqu'à"
};

const repeatRequest = async (url, headers, filters, offset, records = []) => {
  return fetch(
    `${url}?${new URLSearchParams(filters).toString()}${
      offset ? `${filters ? '&' : ''}offset=${offset}` : ''
    }`,
    {
      headers
    }
  ).then(response => {
    return response.json().then(json => {
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

const getAirtableUrls = async (
  api_key,
  base_id,
  procedures_table_name,
  editions_table_name
) => {
  let startDate = new Date(0).getTime();
  let endDate = new Date().getTime();

  let response = await repeatRequest(
    `https://api.airtable.com/v0/${base_id}/${editions_table_name}`,
    {
      Authorization: `Bearer ${api_key}`
    },
    {
      filterByFormula: `{Éditions} = 'Édition actuelle'`
    }
  );

  if (response && response[0]) {
    startDate = new Date(
      response[0].fields[field_names.jdmaStartDate]
    ).getTime();
    endDate = new Date(response[0].fields[field_names.jdmaEndDate]).getTime();
  }

  response = await repeatRequest(
    `https://api.airtable.com/v0/${base_id}/${procedures_table_name}`,
    {
      Authorization: `Bearer ${api_key}`
    },
    {
      // filterByFormula: `AND({${field_names.id}} = '1860' ,FIND('Édition actuelle', ARRAYJOIN({${field_names.edition}})))`,
      filterByFormula: `FIND('Édition actuelle', ARRAYJOIN({${field_names.edition}}))`
    }
  );

  console.log(
    JSON.stringify(
      response
        .map(record => ({
          id: record.fields[field_names.id],
          link: record.fields[field_names.link]
            ? record.fields[field_names.link].replaceAll('\n', '')
            : '',
          startDate,
          endDate
        }))
        .filter(record => !!record.id && urlRegex.test(record.link)),
      null,
      2
    )
  );
};

module.exports = { getAirtableUrls };

if (require.main === module) {
  getAirtableUrls(
    process.argv[process.argv.length - 4],
    process.argv[process.argv.length - 3],
    process.argv[process.argv.length - 2],
    process.argv[process.argv.length - 1]
  );
}
