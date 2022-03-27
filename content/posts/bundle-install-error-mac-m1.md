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

The M1 issue did not end here. When I executed

```
rails server
```

I got this error

```
/opt/homebrew/lib/ruby/gems/3.1.0/gems/msgpack-1.4.5/lib/msgpack.rb:7:in `require': dlopen(/opt/homebrew/lib/ruby/gems/3.1.0/gems/msgpack-1.4.5/lib/msgpack/msgpack.bundle, 0x0009): tried: '/opt/homebrew/lib/ruby/gems/3.1.0/gems/msgpack-1.4.5/lib/msgpack/msgpack.bundle' (mach-o file, but is an incompatible architecture (have 'x86_64', need 'arm64e')), '/usr/local/lib/msgpack.bundle' (no such file), '/usr/lib/msgpack.bundle' (no such file) - /opt/homebrew/lib/ruby/gems/3.1.0/gems/msgpack-1.4.5/lib/msgpack/msgpack.bundle (LoadError)
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/msgpack-1.4.5/lib/msgpack.rb:7:in `<top (required)>'
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/bootsnap-1.11.1/lib/bootsnap/load_path_cache/store.rb:5:in `require'
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/bootsnap-1.11.1/lib/bootsnap/load_path_cache/store.rb:5:in `block in <top (required)>'
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/bootsnap-1.11.1/lib/bootsnap/explicit_require.rb:45:in `rescue in with_gems'
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/bootsnap-1.11.1/lib/bootsnap/explicit_require.rb:41:in `with_gems'
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/bootsnap-1.11.1/lib/bootsnap/load_path_cache/store.rb:5:in `<top (required)>'
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/bootsnap-1.11.1/lib/bootsnap/load_path_cache.rb:54:in `require_relative'
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/bootsnap-1.11.1/lib/bootsnap/load_path_cache.rb:54:in `<top (required)>'
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/bootsnap-1.11.1/lib/bootsnap.rb:5:in `require_relative'
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/bootsnap-1.11.1/lib/bootsnap.rb:5:in `<top (required)>'
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/bootsnap-1.11.1/lib/bootsnap/setup.rb:3:in `require_relative'
        from /opt/homebrew/lib/ruby/gems/3.1.0/gems/bootsnap-1.11.1/lib/bootsnap/setup.rb:3:in `<top (required)>'
        from /Users/deepak/code/rails/blog/config/boot.rb:4:in `require'
        from /Users/deepak/code/rails/blog/config/boot.rb:4:in `<top (required)>'
        from bin/rails:3:in `require_relative'
        from bin/rails:3:in `<main>'
```

This looked like another one of those architecture issues

I have a feeling that I will get into these issues more and more.

Maybe it is time to consider a different approach.

I have installed Ruby through Homebrew and maybe I should consider a version manager such as asdf

Handy Links

https://andrewm.codes/blog/how-to-install-ruby-on-rails-6-1-with-asdf-on-macos-big-sur/
https://mindaslab.github.io/apple/mac/m1/programming/ruby/asdf/2021/10/16/installing-ruby-3-0-2-on-mac-m1.html
