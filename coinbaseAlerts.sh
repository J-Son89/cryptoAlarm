#!/bin/bash
TOKEN=<TOKEN>
CHAT_ID=<CHAT_ID>
CB_RESPONSE=$(curl https://api.coinbase.com/v2/prices/BTC-USD/sell)
URL="https://api.telegram.org/bot$TOKEN/sendMessage"

# update to absolute path to coinbaseTrigger.js
MESSAGE=$(/usr/local/bin/node coinbaseTrigger.js --cbResponse=$CB_RESPONSE --phaseMinimum=8000 --lowPoint=8500 --highPoint=11000 --phaseMaximum=12000);

if [ $MESSAGE != "false" ];
then
    curl -s -X POST $URL -d chat_id=$CHAT_ID -d text="$MESSAGE"
fi

