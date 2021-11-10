---
tags: [Programming, JS Swiss Knife, Browser Behaviour]
---

# Disable drag with JavaScript

Recently I was working on an interesting application which runs on a very old version of web-kit in a tiny little browser. On the UI, there were these not so large buttons which on pressing would most of the time also result in a drag.

This simple solution will **disable drag**

```html
<body ondragstart="return false;" ondrop="return false;"></body>
```
