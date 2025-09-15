const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function getDatabase(dataSourceId) {
    try {
        const response = await notion.dataSources.query({
            data_source_id: dataSourceId,
        });

    if (!response.results.length) {
      console.log("No data found in database");
      return;
    }

    // Build FAQ string
    const FAQ_CONTEXT = response.results.map((page) => {
      const question = page.properties.Question?.title[0]?.plain_text || "Unknown Question";
      const answer = page.properties.Answer?.rich_text[0]?.plain_text || "No Answer Provided";
      return `Q: ${question}\nA: ${answer}\n`;
    }).join("\n");

  } catch (error) {
    console.error("Error fetching database:", error.body || error);
  }
}

module.exports = { getDatabase };
