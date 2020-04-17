# morphir-dapr-example

 
### Install and run the dapr app
```
npm install

dapr run --app-id counter --app-port 3000 --port 3500 node DaprAppShell.js
```

Publish message to the app
```
dapr publish --topic A --payload '{"key" : "Deal1234", "command" : { "$type" : { "openDeal" : { "arg1" : "Deal1234", "arg2" : "cusip", "arg3" : 34.56, "arg4" : 100 } } } }'

dapr publish --topic A --payload '{"key" : "Deal1234", "command" : { "$type" : { "closeDeal" : { "arg1" : "Deal1234" } } } }'
```