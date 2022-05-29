---
title: "Building My Bookshelf"
date: 2022-05-24T19:57:27+10:00
draft: true
---

Few days ago, I wrote about tracking what I read. What I'm really doing is adding books to my bookshelf. I thought of staring with my Goodreads page and then adding each book one by one. There are 116 books that I'll need to add and it should not take too long to do that. But, what's the fun in adding them manually.

In true developer style, I thought of automating the process.

This is a log of how I did it.

Add this extension to Firefox

https://addons.mozilla.org/en-US/firefox/addon/copywebtables/

Copy the table by selecting it and

![list-of-books](/images/posts/goodreads-capture.png)

this gives a nice csv which I then parsed

```
cover,title,author,"avg rating",rating,shelves,"date read","date added",""
"",Exodus,"Uris, Leon",4.34,"1 of 5 stars 2 of 5 stars 3 of 5 stars 4 of 5 stars 5 of 5 stars","read [edit]","Jan 12, 2017 [edit]","Dec 22, 2016","edit view »"
"","The Simpsons and Their Mathematical Secrets","Singh, Simon",3.88,"1 of 5 stars 2 of 5 stars 3 of 5 stars 4 of 5 stars [ 5 of 5 stars ]","read [edit]","Sep 11, 2014 [edit]","Oct 08, 2013","edit view »"
"","First Raj of the Sikhs: The Life and Times of Banda Singh Bahadur","Dhillon, Harish",3.96,"1 of 5 stars 2 of 5 stars 3 of 5 stars 4 of 5 stars [ 5 of 5 stars ]","read , 2014 [edit]","Jun 24, 2014 [edit]","Jun 24, 2014","edit view »"
"","The Secret of the Nagas (The Shiva Trilogy, #2)","Tripathi, Amish *",4.08,"1 of 5 stars 2 of 5 stars 3 of 5 stars [ 4 of 5 stars ] 5 of 5 stars","read , 2014 [edit]","May 13, 2014 [edit]","May 13, 2014","edit view »"
"","The Immortals of Meluha (Shiva Trilogy, #1)","Tripathi, Amish *",4.12,"1 of 5 stars 2 of 5 stars 3 of 5 stars 4 of 5 stars [ 5 of 5 stars ]","read , 2014 [edit]","May 08, 2014 [edit]","May 08, 2014","edit view »"
```

What I need is the title, author and the date I read the book. I thought of also getting the stars but my rating system is much different from what it use to be and I honestly don't remember my rating system of that time when these books were added to Goodreads

I can write a macro in Vim to achieve what I want is a script. So I turned to Bash.
