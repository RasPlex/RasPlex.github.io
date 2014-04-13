---
layout: page 
title: 
description: "Describe this nonsense."
tags: [Jekyll, theme, themes, responsive, blog, modern]
image:
feature: abstract-1.jpg
credit: dargadgetz
creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/

redirect_from:
  - /about/faq/
  - /about/faq.html

---



<div class="container">
  

  <div id="content" class="main">
    <h1>FAQ</h1>
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span2"> </div>
        <div class="span10">
          <h2>How can I control RasPlex?</h2>
          There are a few options here.
          <ul>
            <li>Using a USB keyboard is probably easiest. Wireless keyboards are more convenient, but make sure that the wireless transmitter doesn't draw too much power, or else use a powered hub.</li>
            <li>One of the most popular ways to control RasPlex is with the official Plex Inc iOS and Android apps. Please note that the API has recently been changed by Plex Inc, so you need to use the most recent version of the app and RasPlex. You can also use the plex.tv web ui.</li>
            <li>A user contributed a <a href="http://errorfreeit.com.au/blog/2014/1/4/free-online-rasplex-remote" target="_blank">free RasPlex remote</a> useable from a web browser. You can get the source <a href="https://github.com/RasPlex/Simple-RasPlex-Remote" target="_blank">on github.</a></li>
            <li>All or most remote controls supported by LIRC should work plug and play. The original Xbox remote is very popular and known to be working. There are still lots of surplus units which can be obtained for about $5, but you'll need an xbox to USB adapter, or a soldering iron.</li>
            <li>Many newer TVs support HDMICEC, which would allow you to use your TV's remote to control RasPlex. Please note that HDMICEC is kind of sketchy, so it won't work with all TVs, even if they say they support CEC</li>
          </ul>
          <h2>What is up with these 9.9.X builds? Why the jump from 0.3.1 to 9.9.9?</h2>
          We've decided to separate our stable and experimental (dev) builds. While we are working on new features, improvements, etc, they will be regularly released as 9.9.X builds for testing purposes. They are not officially supported builds, but may fix a lot of problems users are experiencing, at the risk of instability or new bugs.
          <p>Once we have determined an experimental build is stable, it gets promoted to our stable branch with the lower versioning numbers. The 9.9.X is a pretty common versioning scheme, used by Gentoo and other open source projects. This enables us to have the highest quality standards of stable builds, while still being agile and shipping regularly.</p>
          <p>You should try an experimental build if you want the latest, but keep in mind it may not be the greatest :). If you find bugs, please <a href="https://github.com/RasPlex/RasPlex/wiki/How-to-report-a-bug" target="_blank">file a bug report.</a></p>
          <h2>Why use Plex instead of XBMC?</h2>
          <p>In short, Plex uses a Client / Server architecture that enables really thin clients, making it the perfect companion for the Raspberry pi. There are many other reasons, detailed <a href="../about/why-rasplex.html"> here</a>. XBMC is great, and Rasplex uses code that is actually built on top of XBMC. You can think of Plex as a superset of XBMC.</p>
          <p>There is also a very <a href="http://lifehacker.com/5991757/should-i-use-plex-or-xbmc-for-my-home-theater-pc" target="_blank">fair, informative lifehacker article</a> about this.</p>
          <h2>How much does RasPlex cost</h2>
          <h3>RasPlex is free</h3>
          <p>RasPlex is and always will be free to download, use, and mod. As our <a href="../about/mission-statement.html">mission statement</a> states, RasPlex fights for the users, and belongs to the community.</p>
          <p>We encourage users to support the project by contributing ideas, code, complaints, donating, flattr'ing, and purchasing our case and pre-flashed SD cards. We also have plans for Kickstarter and Indygogo campaigns that will be unveiled soon</p>
          <p>Even the STL files for the case will be released and OpenSourced once we are a little happier with the prototypes (within the next few weeks).</p>
          <h2>I think I found a bug or something isn't working right</h2>
          <p>Please follow our <a href="https://github.com/RasPlex/RasPlex/wiki/How-to-report-a-bug" target="_blank">bug submission guidelines</a>, keep in mind the better and more detailed your bug report is, the better chance we will be able to fix your problem. Please be patient, polite, and as helpful as you can. Remember, we are all volunteers.</p>
          <h2>What are similar projects?</h2>
          <p>There are several other media centers for the Raspberry Pi that can offer similar functionality. They are all great projects and we recommend you give them a try. As we are relatively new to the scene, you might find these other solutions to be more stable.</p>
          <ul>
            <li><a href="http://www.openelec.tv/" target="_blank"> OpenELEC </a> is a platform for XBMC that we are currently based on</li>
            <li><a href="http://xbian.org/" target="_blank"> XBian </a> is a platform for XBMC that runs on raspbian</li>
            <li><a href="http://www.raspbmc.com/" target="_blank"> Raspbmc </a>is another platform for XBMC that runs on raspbian.</li>
            <li><a href="http://wiki.xbmc.org/index.php?title=Add-on:PleXBMC" target="_blank">PleXBMC</a> is a Python addon to XBMC that can be used with any of the above to provide Plex functionality on the Raspberry Pi</li>
            <li><a href="https://github.com/dalehamel/pyplex" target="_blank">PyPlex</a> is a light weight frontend for Plex on Raspberry Pi that requires the iOS or Android app to control it</li>
          </ul>
          <h2>How can I help</h2>
          <p>Lots of ways! See <a href="../contribute/how-to-help.html"> here </a></p>
          <h2>Does RasPlex run the Plex Media Server?</h2>
          <p>No.</p>
          <p>RasPlex is designed to be a thin client for the Plex Media Server. You must have a Plex Media Server set up on PC, Mac, or Linux, or compatible NaS to get the most out of RasPlex.</p>
          <p>While it may be possible to run the Plex Media Server on a Raspberry Pi, I think that the performance would be terrible. Anyone who wants the client and server on the same device should just use XBMC, though it is the opinion of many that the client/server separation is a much better architecture, especially for Raspberry Pi.</p>
          <h2>Where Can I get help?</h2>
          <p>There are many places!</p>
          <ul>
            <li>Our <a href="http://chat.srvthe.net/"> live developer chat</a> is pretty lively, with members from around the world</li>
            <li>The <a href="http://forums.plexapp.com/index.php/forum/126-rasplex/"> RasPlex forums</a> are great if you don't mind waiting</li>
          </ul>
          <h2>How do I setup Wifi</h2>
          <p>We are using the same process OpenELEC uses. The config options are under "Preferences-&gt;Rasplex Settings". You have to reboot to test your network configuration.</p>
          <h2>Is AirPlay and AirTunes supported?</h2>
          <p>Thanks to XBMC there is support for AirPlay video and AirTunes. AirPlay mirroring is currently not supported. iOS 7 broke AirPlay support, but using the latest experimental rasplex and the latest iOS should bring it back.</p>
          <h2>How do I get the latest updates?</h2>
          <p>Auto-update for stable releases is enabled by default. They will download automatically and you'll get a notification when the update is ready for install via reboot. It's also possible to update testing/bleeding releases without reflashing (which would overwrite all settings). Take a look at the <a href="https://sourceforge.net/p/rasplex/wiki/Update/">corresponding wiki article</a> on how to do this.</p>
          <h2><span style="font-size: 1.5em; font-weight: normal; line-height: 1.5em;">Why does the UI for RasPlex seem so slow?</span></h2>
          RasPlex should perform like <a href="http://www.youtube.com/watch?v=Ytu1suJiSCc" target="_blank">this</a>, and usually does. However, the first boot is typically much slower, as RasPlex has a "cold cache". Newer experimental versions have the option of precaching, and are much faster out of the box. Give the 9.9.X builds a try, unless 0.4.0 or higher is out at the time you are reading this.
          <div class="offset1">
            <h3>Why does this happen?</h3>
            RasPlex has a client side cache of images, thumbnails, and metadata. On the first boot, the cache is "cold", and it takes a while to warm it up. If you notice that RasPlex is running slow on first boot, you can force warm up the cache
            <h3>How do I force warm-up the cache?</h3>
            <p>It's easy - you just need to be a little patient. The goal is to make as many requests as you can, to get everything on-disk. Do this by entering an "all" section (such as going to "All Movies", "All TV Shows", or better, do both of these), and scroll through it until all of the thumbs and fanart show up. This will force RasPlex to cache the images, and will make subsequent runs much faster. Recent experimental bulids automate this process.</p>
          </div>
          <h2>Why do I have to recache after updating?</h2>
          <p>When you completely image RasPlex, you destroy the cache. However, automatic updates are designed to leave the cache, as well as settings, intact.</p>
          <h2>How come I have a problem no one else has!</h2>
          <p>This is beacuse you have something unique about your RasPlex setup. Usually, this means you have an odd network configuration, or a weird router. Sometimes, it's because you don't have a good USB power supply for rasplex. Other times, your SD card is faulty, or your Raspberry Pi itself is defective. In some cases, certain NaS devices running the Plex Media Server won't perform well. Ensure you are running the latest version of the media server, and if all else fails please file a bug report.</p>
          <h2>What happened to the Kickstarter for the RasPlex case</h2>
          For various reasons (Dale changing jobs, moving, delays getting Kickstarter in Canada, etc) the project has been cancelled. The STL and solidworks files are available on <a href="http://sourceforge.net/projects/rasplex/files/case/" target="_blank">sourceforge</a>, and you can purchase 3D printed models from <a href="http://www.shapeways.com/shops/rasplex" target="_blank">Shapeways</a> if you choose. If you made a large donation and expected to receive a case, please email us and we'll work something out for you.</div>
      </div>
    </div>
  </div>
</div>
