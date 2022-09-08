---
title: "Building My Bookshelf"
date: 2022-06-01T19:57:27+10:00
draft: false
categories: [Technology]
tags: [Programming, Python]
---

Few days ago, I wrote about [tracking what I read](/blog/tracking-what-i-read/). What I want out of this is add books I have read to my [bookshelf](/books). There are 116 books that I have marked as read on Goodreads and my goal is to add them to my bookshelf.

One way of doing this is to add each book manually. Afterall 116 is not a big number. But, what's the fun in adding them manually.

In true developer style, I thought of automating the process.

This is a log of how I did it.

Add this extension to Firefox

https://github.com/nirantak/copytables

Copy the table by selecting it on my Goodreads page.

![list-of-books](/images/posts/goodreads-capture.png)

This gives a nice csv which I can parse with some code

```
cover,title,author,"avg rating",rating,shelves,"date read","date added",""
"",Exodus,"Uris, Leon",4.34,"1 of 5 stars 2 of 5 stars 3 of 5 stars 4 of 5 stars 5 of 5 stars","read [edit]","Jan 12, 2017 [edit]","Dec 22, 2016","edit view »"
"","The Simpsons and Their Mathematical Secrets","Singh, Simon",3.88,"1 of 5 stars 2 of 5 stars 3 of 5 stars 4 of 5 stars [ 5 of 5 stars ]","read [edit]","Sep 11, 2014 [edit]","Oct 08, 2013","edit view »"
"","First Raj of the Sikhs: The Life and Times of Banda Singh Bahadur","Dhillon, Harish",3.96,"1 of 5 stars 2 of 5 stars 3 of 5 stars 4 of 5 stars [ 5 of 5 stars ]","read , 2014 [edit]","Jun 24, 2014 [edit]","Jun 24, 2014","edit view »"
"","The Secret of the Nagas (The Shiva Trilogy, #2)","Tripathi, Amish *",4.08,"1 of 5 stars 2 of 5 stars 3 of 5 stars [ 4 of 5 stars ] 5 of 5 stars","read , 2014 [edit]","May 13, 2014 [edit]","May 13, 2014","edit view »"
"","The Immortals of Meluha (Shiva Trilogy, #1)","Tripathi, Amish *",4.12,"1 of 5 stars 2 of 5 stars 3 of 5 stars 4 of 5 stars [ 5 of 5 stars ]","read , 2014 [edit]","May 08, 2014 [edit]","May 08, 2014","edit view »"
```

What I need is the title, author and the date I read the book. I thought of also getting the stars but my rating system is much different from what it use to be and I honestly don't remember my rating system of that time when these books were added to Goodreads.

The output I want for each book in the csv file is a tiny bit of markup which display the placeholder image with title and date I finished the book (if available).

This simple and dirty Python script gives me the markup I need

```python
#!/usr/bin/env python3

import csv
from datetime import datetime

def parse_date(date_str):
    date_str = date_str.replace('[edit]','').strip()
    format_str = '%b %d, %Y'
    try:
        date = datetime.strptime(date_str, format_str)
        return date
    except:
        return ""



with open('goodreads.csv') as file:
    csv_reader = csv.reader(file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count > 0:
            parsed_date = parse_date(row[6])
            if parsed_date != "":
                month_name = parsed_date.strftime("%b")
                date = f'{parsed_date.day} {month_name} {parsed_date.year}'
                date = f'Date Finished: {date}'
            else:
                date = ""
            print(
                    f'''
                    <div class="book-list-item">
                        <img src="/images/covers/placeholder.png" alt="{row[1]}" class="book-cover" />
                        <div>
                            <span>{row[1]}</span>
                            <div>{date}</div>
                        </div>
                    </div>
                    '''
                    )
        line_count += 1

```

And that's about it. Most of the [books I have read](/books) are now in my bookshelf.

One of the things I need to do is add cover images for all the books I have added. Maybe I will automate that too, but I have not decided that yet.
