![ci status](https://travis-ci.org/RasPlex/RasPlex.github.io.svg)

# RasPlex Website

## Why Jekyll

The most compelling reason was because it is supported by Github. There are a number of ohter features that were appealing to me though:

+ Site generator instead of CMS or bloated app.
 + Means that it can literally be hosted anywhere, and be lightning fast.
+ Markdown is a joy to write and eliminates the struggle of working with an in-browser text editor.
+ Don't worry about hosting, just blog!

# What I did

My old blog was on wordpress, so I used the Jekyll wordpress importer to scrape out most of the data. I had some pretty ugly formatting, as I had tried using a few plugins and a markdown converter with wordpress before so the output didn't load properly into jekyll.

I used pandoc to clean up the output by converting my HTML to markdown - this actually worked pretty good. 

The biggest problem was that my blog had already been up for a few years and was indexed by google and referenced on a number of places on the internet. I needed to keep my old links from 404ing or else i'd lose all the visibility my blog had gained. This was actually pretty easy - I just used some sed hackery plus the 'jekyll-redirect-from' gem and was able to redirect from pretty much any link that already existed to my blog.

# Auxiliary tools

My old blog had hooks to post to Facebook and Twitter when I made a new post. Since I can't use server side webhooks anymore, I'm using some command line tools to reference the post after it's been generated.

## Tiny.cc

I really like tiny.cc for url minification because it allows you to create meaningful slugs.

Read the [api docs](http://tiny.cc/api-docs) and check out my poster.rb tool to see how I minify the urls.


## Twitter

Using [t](http://sferik.github.io/t/) it's really easy to start posting from command line:

```
 t update "My update with a minified link to my blog"
```

## Facebook

Unfortunately the best toolkit I found was in PHP. Oh well. I followed [this guide](http://xmodulo.com/2014/01/access-facebook-command-line-linux.html) and posting is done like:

```
 fbcmd post "A post to my facebook wall"
```
