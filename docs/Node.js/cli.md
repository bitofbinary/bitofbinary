# CLI

### View V8 options

```jsx
node --v8-options
```

### Check the syntax of a script

```jsx
node --check index.js
```

or

```jsx
node -c index.js
```

### Check the syntax of all files in a directory

⚠️ The only way to do this is to write some sort of a script which executes the check for each file.

### Preload a module in CLI

A module can be preloaded with **—require option** or **-r** in short

```jsx
node --require ./someModule.js myScript.js
```

### Stack Trace Size

Use **—stack-trace-limit option** which is a V8 option to increase the size of the stack trace

For example, the command below will increase the size of stack trace to 200

```jsx
node --stack-trace-limit=200 myScript.js
```
