const { Client } = require('ynlu');
const { ClassifierHandler } = require('bottender');
// const B = require('bottender-compose');

const YNLU_TOKEN =
  process.env.YNLU_TOKEN ||
  'AddTokenHere';

const client = Client.connect(YNLU_TOKEN);
const classifier = client.findClassifierById('ClassifierID'); 

module.exports = new ClassifierHandler(classifier, 0.4)
  .onIntent('溫度控制', async (context, result) => {
    await context.sendText(
      '心靜自然涼'
    );
  })
  .onIntent('車窗控制', async (context, result) => {
    await context.sendText(
      '已為您啟用防彈模式'
    );
  })
  .onUnmatched(async (context, result) => {
    if (result.intents[0].score < 0.4) {
      await context.sendText('我聽不懂你在說什麼');
    } else {
      await context.sendText('不要玩機器人');
    }
  });
