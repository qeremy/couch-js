##Couch##
Simply port of [Couch](https://github.com/qeremy/couch) for Node.js.

Notice: See CouchDB's official documents before using this library.

##In a Nutshell##
```js
// create a fresh document
var doc = new Couch.Document(client);
doc.name = "The Doc!";
doc.save();

// append an attachment
doc.setAttachment(new Couch.DocumentAttachment(doc, "./file.txt"));
doc.save();
```

##Configuration##
Configuration is optional but you can provide all these options;

```js
var config = {};

// default=localhost
config.host = "couchdb_host";
// default=5984
config.port = 1234;
// default=null
config.username = "couchdb_user";
// default=null
config.password = "************";
```

##Objects##
#####Couch Object#####
```js
// init couch object with default config
couch = new Couch.Couch();

// init couch object with given config
couch = new Couch.Couch(config);
// or
couch.setConfig(config);
```

##Structure##
```js
// console.log(Couch);
{ NAME: "Couch",
  VERSION: "1.0",
  Couch: [Function],
  Util: {
     extend: [Function],
     format: [Function],
     quote: [Function],
     forEach: [Function],
     execSync: [Function],
     fileInfo: [Function],
     fileExists: [Function],
     Base64: { encoding: "utf-8", encode: [Function], decode: [Function] } },
  Query: { [Function: Class] nameOrig: "Query", parse: [Function] },
  Client: { [Function: Class] nameOrig: "Client" },
  Server: { [Function: Class] nameOrig: "Server" },
  Database: { [Function: Class] nameOrig: "Database" },
  Document: { [Function: Class] nameOrig: "Document" },
  DocumentAttachment: { [Function: Class] nameOrig: "DocumentAttachment" },
  DocumentDesign: { [Function: Class] nameOrig: "DocumentDesign" },
  Uuid: {
     [Function: Class]
     nameOrig: "Uuid",
     generate: [Function],
     HEX_8: 8,
     HEX_32: 32,
     HEX_40: 40,
     TIMESTAMP: 0 } }
```
