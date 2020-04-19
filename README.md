# morphir-dapr-example


#### Compile example

morphir-dapr -d

`morphir-dapr --help` to see options
 
#### Install and run the dapr app in standalone mode:
```
cd dapr-output
npm install
dapr run --app-id bar --app-port 3000 --port 3500 node DaprAppShell.js
```

#### Publish message to the app using Dapr command line tools:
```
dapr publish --topic A --payload '{"key" : "Deal1234", "command" : { "$type" : { "openDeal" : { "arg1" : "Deal1234", "arg2" : "cusip", "arg3" : 34.56, "arg4" : 100 } } } }'

dapr publish --topic A --payload '{"key" : "Deal1234", "command" : { "$type" : { "closeDeal" : { "arg1" : "Deal1234" } } } }'
```