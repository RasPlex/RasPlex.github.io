---
layout: page 
title: FAQ
description: "Frequently Asked Questions"

redirect_from:
  - /about/faq/
  - /about/faq.html
---

## How can I control RasPlex?

There are a few options here.

+ Using a USB keyboard is probably easiest. Wireless keyboards are more convenient, but make sure that the wireless transmitter doesn't draw too much power, or else use a powered hub.
+ One of the most popular ways to control RasPlex is with the official Plex Inc iOS and Android apps. Please note that the API has recently been changed by Plex Inc, so you need to use the most recent version of the app and RasPlex. You can also use the plex.tv web ui.
+ A user contributed a <a href="http://errorfreeit.com.au/blog/2014/1/4/free-online-rasplex-remote" target="_blank">free RasPlex remote</a> useable from a web browser. You can get the source <a href="https://github.com/RasPlex/Simple-RasPlex-Remote" target="_blank">on github.</a>
+ All or most remote controls supported by LIRC should work plug and play. The original Xbox remote is very popular and known to be working. There are still lots of surplus units which can be obtained for about $5, but you'll need an xbox to USB adapter, or a soldering iron.
+ Many newer TVs support HDMICEC, which would allow you to use your TV's remote to control RasPlex. Please note that HDMICEC is kind of sketchy, so it won't work with all TVs, even if they say they support CEC.

## What is up with these 9.9.X builds? Why the jump from 0.3.1 to 9.9.9?

We've decided to separate our stable and experimental (dev) builds. While we are working on new features, improvements, etc, they will be regularly released as 9.9.X builds for testing purposes. They are not officially supported builds, but may fix a lot of problems users are experiencing, at the risk of instability or new bugs.

Once we have determined an experimental build is stable, it gets promoted to our stable branch with the lower versioning numbers. The 9.9.X is a pretty common versioning scheme, used by Gentoo and other open source projects. This enables us to have the highest quality standards of stable builds, while still being agile and shipping regularly.

You should try an experimental build if you want the latest, but keep in mind it may not be the greatest :). If you find bugs, please <a href="https://github.com/RasPlex/RasPlex/wiki/How-to-report-a-bug" target="_blank">file a bug report.</a>

## Why use Plex instead of XBMC?

In short, Plex uses a Client / Server architecture that enables really thin clients, making it the perfect companion for the Raspberry pi. There are many other reasons, [detailed](/about/why-rasplex.html). XBMC is great, and Rasplex uses code that is actually built on top of XBMC. You can think of Plex as a superset of XBMC.

There is also a very <a href="http://lifehacker.com/5991757/should-i-use-plex-or-xbmc-for-my-home-theater-pc" target="_blank">fair, informative lifehacker article</a> about this.A

## How much does RasPlex cost

### RasPlex is free

RasPlex is and always will be free to download, use, and mod. As our [mission statement](/about/mission-statement.html) states, RasPlex fights for the users, and belongs to the community.

We encourage users to support the project by contributing ideas, code, complaints, donating, flattr'ing, and purchasing our case and pre-flashed SD cards. We also have plans for Kickstarter and Indygogo campaigns that will be unveiled soon.

Even the STL files for the case will be released and OpenSourced once we are a little happier with the prototypes (within the next few weeks).A

## I think I found a bug or something isn't working right

Please follow our <a href="https://github.com/RasPlex/RasPlex/wiki/How-to-report-a-bug" target="_blank">bug submission guidelines</a>, keep in mind the better and more detailed your bug report is, the better chance we will be able to fix your problem. Please be patient, polite, and as helpful as you can. Remember, we are all volunteers.

## What are similar projects?

There are several other media centers for the Raspberry Pi that can offer similar functionality. They are all great projects and we recommend you give them a try. As we are relatively new to the scene, you might find these other solutions to be more stable.A

+ <a href="http://www.openelec.tv/" target="_blank"> OpenELEC </a> is a platform for XBMC that we are currently based on
+ <a href="http://xbian.org/" target="_blank"> XBian </a> is a platform for XBMC that runs on raspbian.
+ <a href="http://www.raspbmc.com/" target="_blank"> Raspbmc </a>is another platform for XBMC that runs on raspbian.
+ <a href="http://wiki.xbmc.org/index.php?title=Add-on:PleXBMC" target="_blank">PleXBMC</a> is a Python addon to XBMC that can be used with any of the above to provide Plex functionality on the Raspberry Pi.
+ <a href="https://github.com/dalehamel/pyplex" target="_blank">PyPlex</a> is a light weight frontend for Plex on Raspberry Pi that requires the iOS or Android app to control it.

## How can I help

Lots of ways! See [how you can help](/contribute/how-to-help.html)

## Does RasPlex run the Plex Media Server?

No.

RasPlex is designed to be a thin client for the Plex Media Server. You must have a Plex Media Server set up on PC, Mac, or Linux, or compatible NaS to get the most out of RasPlex.
While it may be possible to run the Plex Media Server on a Raspberry Pi, I think that the performance would be terrible. Anyone who wants the client and server on the same device should just use XBMC, though it is the opinion of many that the client/server separation is a much better architecture, especially for Raspberry Pi.

## Where Can I get help?

There are many places!

+ Our <a href="http://chat.srvthe.net/"> live developer chat</a> is pretty lively, with members from around the world
+ The <a href="http://forums.plexapp.com/index.php/forum/126-rasplex/"> RasPlex forums</a> are great if you don't mind waiting

## How do I setup Wifi

We are using the same process OpenELEC uses. The config options are under "Preferences-&gt;Rasplex Settings". You have to reboot to test your network configuration.

## Is AirPlay and AirTunes supported?

Thanks to XBMC there is support for AirPlay video and AirTunes. AirPlay mirroring is currently not supported. iOS 7 broke AirPlay support, but using the latest experimental rasplex and the latest iOS should bring it back.A

## How do I get the latest updates?

You can select from multiple update channels in Preferences -> System -> Software update. Selecting "PreRelease" will get you the most up-to-date works in progress. Selecting "Stable" will only get you the most stable releases. You can manually update, or a new update will be downloaded once available for your chosen channel.

## Why does the UI for RasPlex seem so slow?

RasPlex should perform like <a href="http://www.youtube.com/watch?v=Ytu1suJiSCc" target="_blank">this</a>, and usually does. However, the first boot is typically much slower, as RasPlex has a "cold cache". Newer experimental versions have the option of precaching, and are much faster out of the box. Give the 9.9.X builds a try, unless 0.4.0 or higher is out at the time you are reading this.

### Why does this happen?

RasPlex has a client side cache of images, thumbnails, and metadata. On the first boot, the cache is "cold", and it takes a while to warm it up. If you notice that RasPlex is running slow on first boot, you can force warm up the cache

### How do I force warm-up the cache?

It's easy - you just need to be a little patient. The goal is to make as many requests as you can, to get everything on-disk. Do this by entering an "all" section (such as going to "All Movies", "All TV Shows", or better, do both of these), and scroll through it until all of the thumbs and fanart show up. This will force RasPlex to cache the images, and will make subsequent runs much faster. Recent experimental bulids automate this process.

## Why do I have to recache after updating?

When you completely image RasPlex, you destroy the cache. However, automatic updates are designed to leave the cache, as well as settings, intact.

## How come I have a problem no one else has!

This is beacuse you have something unique about your RasPlex setup. Usually, this means you have an odd network configuration, or a weird router. Sometimes, it's because you don't have a good USB power supply for rasplex. Other times, your SD card is faulty, or your Raspberry Pi itself is defective. In some cases, certain NaS devices running the Plex Media Server won't perform well. Ensure you are running the latest version of the media server, and if all else fails please file a bug report.

## What happened to the Kickstarter for the RasPlex case?

For various reasons (Dale changing jobs, moving, delays getting Kickstarter in Canada, etc) the project has been cancelled. The STL and solidworks files are available on <a href="http://sourceforge.net/projects/rasplex/files/case/" target="_blank">sourceforge</a>, and you can purchase 3D printed models from <a href="http://www.shapeways.com/shops/rasplex" target="_blank">Shapeways</a> if you choose. If you made a large donation and expected to receive a case, please email us and we'll work something out for you.</div>
