# Disable drag with JavaScript

Recently I was working on an interesting application which runs on a very old version of web-kit. The device this ran on was a very small touch screen somewhere around 640 pixels wide and 250 pixels in height. On the UI, there were these not so large buttons which on pressing would most of the time also result in a drag.

I used this simple solution to **disable drag**

```html
<body ondragstart="return false;" ondrop="return false;"></body>
```
