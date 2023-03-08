+++
title = "Github SSH Key per Organisation"
date = 2022-10-26

[taxonomies]
categories = ["technology"]
tags = ["git", "linux"]
+++

To perform git operations, I want the right key to be used.

This is how I configure it. This approach works when the Github account is an organisation account.

In `~/.ssh/config` add

```bash
Host <CompanyName>.github.com
    HostName github.com
    User git
    IdentifyFile ~/.ssh/<KeyIWantToUse>
    IdentitiesOnly yes
```

Then in `~/.gitconfig` I add

```bash
[url "git@<CompanyName>:github.com:<CompanyName"]
```

I add this information for each organisation I have access to.
