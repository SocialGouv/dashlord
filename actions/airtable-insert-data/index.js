const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const field_names = {
  id: '🕶 ID',
  edition: '📡 Édition',
  a11y: '[Dashlord] - Mention accessibilité',
  a11yLink: "[Dashlord] - Lien de la déclaration d'accessibilité",
  rgaaTaux: '[Dashlord] - Taux RGAA',
  rgaaDate: "[Dashlord] - Date de la déclaration d'accessibilité",
  jdmaCount: '[Dashlord] - JDMA nombre de réponses',
  jdmaSatisfactionPositive: '[Dashlord] - JDMA satisfaction bien',
  jdmaSatisfactionNeutral: '[Dashlord] - JDMA satisfaction neutre',
  jdmaSatisfactionNegative: '[Dashlord] - JDMA satisfaction mauvaise',
  jdmaEasyPositive: '[Dashlord] - JDMA facilité bien',
  jdmaEasyNeutral: '[Dashlord] - JDMA facilité neutre',
  jdmaEasyNegative: '[Dashlord] - JDMA facilité mauvaise',
  jdmaComprehensiblePositive: '[Dashlord] - JDMA compréhension bien',
  jdmaComprehensibleNeutral: '[Dashlord] - JDMA compréhension neutre',
  jdmaComprehensibleNegative: '[Dashlord] - JDMA compréhension mauvaise'
};

const insertAirtableData = async (
  id,
  api_key,
  base_id,
  procedures_table_name,
  a11y_json,
  rgaa_json,
  jdma_json
) => {
  const body = { fields: {} };

  // A11Y
  const a11y = JSON.parse(JSON.parse(a11y_json).toString());
  body.fields[field_names.a11y] = a11y.mention
    ? a11y.mention
    : 'Aucune mention';
  body.fields[field_names.a11yLink] = a11y.declarationUrl
    ? a11y.declarationUrl
    : '';

  //RGAA
  const rgaa = JSON.parse(JSON.parse(rgaa_json).toString());
  body.fields[field_names.rgaaTaux] = rgaa.taux ? rgaa.taux + '%' : '';
  body.fields[field_names.rgaaDate] = rgaa.date ? rgaa.date : '';

  //JDMA
  const jdma = JSON.parse(JSON.parse(jdma_json).toString());
  body.fields[field_names.jdmaCount] = jdma.answersTotal
    ? parseInt(jdma.answersTotal)
    : 0;

  // jdma satisfaction
  body.fields[field_names.jdmaSatisfactionPositive] =
    jdma.satisfaction && jdma.satisfaction.positive
      ? parseInt(jdma.satisfaction.positive)
      : 0;
  body.fields[field_names.jdmaSatisfactionNeutral] =
    jdma.satisfaction && jdma.satisfaction.neutral
      ? parseInt(jdma.satisfaction.neutral)
      : 0;
  body.fields[field_names.jdmaSatisfactionNegative] =
    jdma.satisfaction && jdma.satisfaction.negative
      ? parseInt(jdma.satisfaction.negative)
      : 0;

  // jdma easy
  body.fields[field_names.jdmaEasyPositive] =
    jdma.easy && jdma.easy.positive ? parseInt(jdma.easy.positive) : 0;
  body.fields[field_names.jdmaEasyNeutral] =
    jdma.easy && jdma.easy.neutral ? parseInt(jdma.easy.neutral) : 0;
  body.fields[field_names.jdmaEasyNegative] =
    jdma.easy && jdma.easy.negative ? parseInt(jdma.easy.negative) : 0;

  // jdma comprehensible
  body.fields[field_names.jdmaComprehensiblePositive] =
    jdma.comprehensible && jdma.comprehensible.positive
      ? parseInt(jdma.comprehensible.positive)
      : 0;
  body.fields[field_names.jdmaComprehensibleNeutral] =
    jdma.comprehensible && jdma.comprehensible.neutral
      ? parseInt(jdma.comprehensible.neutral)
      : 0;
  body.fields[field_names.jdmaComprehensibleNegative] =
    jdma.comprehensible && jdma.comprehensible.negative
      ? parseInt(jdma.comprehensible.negative)
      : 0;

  console.log('body a11y mention : ', body.fields[field_names.a11y]);
  console.log('body a11y link : ', body.fields[field_names.a11yLink]);
  console.log('body rgaa taux : ', body.fields[field_names.rgaaTaux]);
  console.log('body rgaa date : ', body.fields[field_names.rgaaDate]);
  console.log('body jdma count : ', body.fields[field_names.jdmaCount]);
  console.log(
    'body jdma satisfaction positive : ',
    body.fields[field_names.jdmaSatisfactionPositive]
  );
  console.log(
    'body jdma satisfaction neutral : ',
    body.fields[field_names.jdmaSatisfactionNeutral]
  );
  console.log(
    'body jdma satisfaction negative : ',
    body.fields[field_names.jdmaSatisfactionNegative]
  );
  console.log(
    'body jdma easy positive : ',
    body.fields[field_names.jdmaEasyPositive]
  );
  console.log(
    'body jdma easy neutral : ',
    body.fields[field_names.jdmaEasyNeutral]
  );
  console.log(
    'body jdma easy negative : ',
    body.fields[field_names.jdmaEasyNegative]
  );
  console.log(
    'body jdma comprehensible positive : ',
    body.fields[field_names.jdmaComprehensiblePositive]
  );
  console.log(
    'body jdma comprehensible neutral : ',
    body.fields[field_names.jdmaComprehensibleNeutral]
  );
  console.log(
    'body jdma comprehensible negative : ',
    body.fields[field_names.jdmaComprehensibleNegative]
  );

  let response = await fetch(
    `https://api.airtable.com/v0/${base_id}/${procedures_table_name}?${new URLSearchParams(
      {
        filterByFormula: `AND({${field_names.id}} = "${id}", FIND('Édition actuelle', ARRAYJOIN({${field_names.edition}})))`
      }
    ).toString()}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${api_key}`,
        'Content-Type': 'application/json'
      }
    }
  );
  const json = await response.json();

  const record = json.records[0];

  if (record) {
    console.log('body', JSON.stringify(body));
    const patchDemarche = await fetch(
      `https://api.airtable.com/v0/${base_id}/${procedures_table_name}/${record.id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${api_key}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    );
    console.log(patchDemarche);
  }
};

module.exports = { insertAirtableData };

if (require.main === module) {
  insertAirtableData(
    process.argv[process.argv.length - 7],
    process.argv[process.argv.length - 6],
    process.argv[process.argv.length - 5],
    process.argv[process.argv.length - 4],
    process.argv[process.argv.length - 3],
    process.argv[process.argv.length - 2],
    process.argv[process.argv.length - 1]
  );
}
