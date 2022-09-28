---
title: "Nodejs Cli"
date: 2022-02-21T20:50:56+11:00
draft: false
---

View V8 options

```bash
node --v8-options
```

Check the syntax of a script

```
node --check index.js
```

or

```
node -c index.js
```

Check the syntax of all files in a directory

⚠️ The only way to do this is to write some sort of a script which executes the check for each file.
Preload a module in CLI

A module can be preloaded with —require option or -r in short

```
node --require ./someModule.js myScript.js
```

Stack Trace Size

Use **—stack-trace-limit** option which is a V8 option to increase the size of the stack trace

For example, the command below will increase the size of stack trace to 200

```
node --stack-trace-limit=200 myScript.js
```
