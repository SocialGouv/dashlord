const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const field_names = {
  id: '🕶 ID',
  edition: 'Lien vers statistiques édition',
  // a11y: '[Dashlord] - Mention accessibilité',
  // a11yLink: "[Dashlord] - Lien de la déclaration d'accessibilité",
  // rgaaTaux: '[Dashlord] - Taux RGAA',
  // rgaaDate: "[Dashlord] - Date de la déclaration d'accessibilité",
  jdmaCount: '[Dashlord] - JDMA nombre de réponses',
  jdmaSatisfactionCount: '[Dashlord] - JDMA satisfaction nombre de réponses',
  jdmaSatisfactionMark: '[Dashlord] - JDMA satisfaction note',
  // jdmaEasyCount: '[Dashlord] - JDMA facilité nombre de réponses',
  // jdmaEasyMark: '[Dashlord] - JDMA facilité note',
  jdmaComprehensibleCount: '[Dashlord] - JDMA complexité nombre de réponses',
  jdmaComprehensibleMark: '[Dashlord] - JDMA complexité note'
};

const getDataFromJdmaNumbers = (postive, neutral, negative) => {
  const count = postive + neutral + negative;
  const mark = (postive + neutral) / count;
  return {
    count,
    mark
  };
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

  // // A11Y
  // const a11y = JSON.parse(JSON.parse(a11y_json).toString());
  // body.fields[field_names.a11y] = a11y.mention
  //   ? a11y.mention
  //   : 'Aucune mention';
  // body.fields[field_names.a11yLink] = a11y.declarationUrl
  //   ? a11y.declarationUrl
  //   : '';

  // //RGAA
  // const rgaa = JSON.parse(JSON.parse(rgaa_json).toString());
  // body.fields[field_names.rgaaTaux] = rgaa.taux ? rgaa.taux + '%' : '';
  // body.fields[field_names.rgaaDate] = rgaa.date ? rgaa.date : '';

  //JDMA
  const jdma = JSON.parse(JSON.parse(jdma_json).toString());
  body.fields[field_names.jdmaCount] = jdma.answersTotal
    ? parseInt(jdma.answersTotal)
    : 0;

  // jdma satisfaction
  if (
    jdma.satisfaction &&
    jdma.satisfaction.positive &&
    jdma.satisfaction.neutral &&
    jdma.satisfaction.negative
  ) {
    const jdmaSatisfactionData = getDataFromJdmaNumbers(
      parseInt(jdma.satisfaction.positive),
      parseInt(jdma.satisfaction.neutral),
      parseInt(jdma.satisfaction.negative)
    );
    body.fields[field_names.jdmaSatisfactionCount] = jdmaSatisfactionData.count;
    body.fields[field_names.jdmaSatisfactionMark] = jdmaSatisfactionData.mark;
  }

  // jdma easy
  // if (
  //   jdma.easy &&
  //   jdma.easy.positive &&
  //   jdma.easy.neutral &&
  //   jdma.easy.negative
  // ) {
  //   const jdmaEasyData = getDataFromJdmaNumbers(
  //     parseInt(jdma.easy.positive),
  //     parseInt(jdma.easy.neutral),
  //     parseInt(jdma.easy.negative)
  //   );
  //   body.fields[field_names.jdmaEasyCount] = jdmaEasyData.count;
  //   body.fields[field_names.jdmaEasyMark] = jdmaEasyData.mark;
  // }

  // jdma comprehensible
  if (
    jdma.comprehensible &&
    jdma.comprehensible.positive &&
    jdma.comprehensible.neutral &&
    jdma.comprehensible.negative
  ) {
    const jdmaComprehensibleData = getDataFromJdmaNumbers(
      parseInt(jdma.comprehensible.positive),
      parseInt(jdma.comprehensible.neutral),
      parseInt(jdma.comprehensible.negative)
    );
    body.fields[field_names.jdmaComprehensibleCount] =
      jdmaComprehensibleData.count;
    body.fields[field_names.jdmaComprehensibleMark] =
      jdmaComprehensibleData.mark;
  }

  // console.log('body a11y mention : ', body.fields[field_names.a11y]);
  // console.log('body a11y link : ', body.fields[field_names.a11yLink]);
  // console.log('body rgaa taux : ', body.fields[field_names.rgaaTaux]);
  // console.log('body rgaa date : ', body.fields[field_names.rgaaDate]);
  console.log('body jdma count : ', body.fields[field_names.jdmaCount]);
  console.log(
    'body jdma satisfaction count : ',
    body.fields[field_names.jdmaSatisfactionCount]
  );
  console.log(
    'body jdma satisfaction mark : ',
    body.fields[field_names.jdmaSatisfactionMark]
  );
  // console.log(
  //   'body jdma easy count : ',
  //   body.fields[field_names.jdmaEasyCount]
  // );
  // console.log('body jdma easy mark : ', body.fields[field_names.jdmaEasyMark]);
  console.log(
    'body jdma comprehensible count : ',
    body.fields[field_names.jdmaComprehensibleCount]
  );
  console.log(
    'body jdma comprehensible mark : ',
    body.fields[field_names.jdmaComprehensibleMark]
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
