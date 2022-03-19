---
title: "Bundle Install Error Mac M1"
date: 2022-03-19T13:13:06+11:00
draft: true
---

I am going through the excellent [Getting Started with Rails](https://guides.rubyonrails.org/getting_started.html) to start my learning journey.

Things were going well up to the part where I generated a new Rails Application. After this I ran `bundle install` and got an error saying that the gem for Sqlite could not be installed.

Something error compiling native extensions.

I have come across this type of error ever since I got a new laptop which has Apple's M1 chip.

Most of the time the issue has been that I'm compiling for the wrong architecture.

That's what it was this time.

The problem went away after specifying the correct architecture for bundle install.

```
arch -arch arm64 bundle install
```

I now have all the required gems installed and I'm back on track.
