# Serverless Telegram Bot
Example of a Telegram bot made on top of [Serverless](http://serverless.com) framework for [AWS Lambda](https://aws.amazon.com/lambda/).

## Demo
Just send a message to [@serverless_example_bot](https://telegram.me/serverless_example_bot)

## Setup

1. Create a [Telegram Bot](https://core.telegram.org/bots).
2. Install [Serverless](http://serverless.com) framework
3. Create a Serverless project
4. Clone this component repo inside the project's root directory
5. Run `npm install` in the component directory
6. Add `TELEGRAM_TOKEN=XXX` and `WEBHOOK_URL=https://ENDPOINT/bot/process`  to `.env` file

## Deploy
1. Set the env vars:

```
serverless env set -k TELEGRAM_TOKEN -v XXXX
serverless env set -k WEBHOOK_URL -v "https://ENDPOINT/bot/process"
```

2. Run `serverless dash deploy` to deploy your bot's functions
3. Run `setup` function (open `https://ENDPOINT/bot/setup`)
4. Enjoy your serverless telegram bot!
