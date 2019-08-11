# cryptoAlarm
bash/node script to check crypto vendors prices and send alert messages

`npm i` to install neccessary jobs.
 On mac to run this as a cronjob 

Set up your telegram bot by the following:
https://www.shellhacks.com/telegram-api-send-message-personal-notification-bot/
and update `$TOKEN` & $ `$CHAT_ID` tokens in .sh script.

in terminal
`crontab e`
then to run every 15 minutes:
`*/15 * * * * /Path/To/Script/coinbaseAlerts.sh

https://stackoverflow.com/questions/5849402/how-can-you-execute-a-node-js-script-via-a-cron-job

