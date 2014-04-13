---
layout: page 
title: 
description: "Describe this nonsense."
tags: [Jekyll, theme, themes, responsive, blog, modern]
image:
feature: abstract-1.jpg
credit: dargadgetz
creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/

---

<div class="container">
  

  <div id="content" class="main">
    <h1>Manual Installation Instructions</h1>
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span2"> </div>
        <div class="span10">
          <h1>Graphical Unified Installer</h1>
          In response to public demand, we will have a simpler, GUI based, unified installer coming soon. Untill then, please bear with us on the more manual setup.
          <p><strong>Note: </strong>We have gotten the installer running on all platforms, it's just a matter of bundling it up for distribution now. As of writing this, we only have it bundled for OS-X and Windows, and Linux  try the <a href="https://github.com/RasPlex/RasPlex/releases" target="_blank">beta installer</a></p>
          <h2>Before you download</h2>
          <div class="offset1">Please remember it's still in early development, it runs best on a 512MB Raspberry Pi, but we are striving to support 256MB as well. For best results, you should force caching on first boot as detailed in our <a href="../documentation/faq.html">faq</a>, but basically amounts to scrolling through the "All Movies" and "All TV Shows" sections.
            <h2>We're still young</h2>
            Please be patient with us, especially on the first boot, as RasPlex has only been around for about 2 months. While things have come a long way really fast, there are still bugs, which is why it is still late Alpha / early Beta quality. However, with automatic updates, downloading RasPlex today will ensure you're always getting the latest improvements.
            <h2>You will need</h2>
            <ul>
              <li>A Raspberry Pi mini computer (512MB recommended, it should have a blue analog audio jack, if it's black then it's 256MB)</li>
              <li>A case to protect your Raspberry Pi (optional)</li>
              <li>A 2GB or larger SD card (class 10+) with compatible reader</li>
              <li>A USB micro power supply (should be at least 2A at 5v, if you experience crashing it's probably because you have a bad power supply)</li>
              <li>An HDMI cord</li>
            </ul>
            <p>You will probably want:</p>
            <ul>
              <li>A remote control</li>
              <li>A USB Wifi dongle</li>
              <li>A USB Bluetooth adapter</li>
            </ul>
          </div>
          <h1>Mac OSX / Linux</h1>
          Grab your desired image (img.gz) file from <a href="https://github.com/RasPlex/RasPlex/releases" target="_blank">github</a>, and flash it with the following commands:
          <h2>Linux</h2>
          <pre>gunzip image_name.img.gz
sudo blkid # find out what device you want to flash to, /dev/sdX
sudo dd if=image_name.img of=/dev/sdX bs=1MB #BE VERY CAREFUL you select the right value for X
          </pre>
          <h2>OS X</h2>
          <pre>gunzip image_name.img.gz
sudo diskutil list # find out what device you want to flash to, /dev/diskX
sudo diskutil unmount /dev/diskX
sudo dd if=image_name.img of=/dev/rdiskX bs=1M #The "rdisk" will make it flash much faster
          </pre>
        </div>
        <h1>Windows / fallback</h1>
        <div class="offset1">
          <h2>Step 1 - Get the flasher program</h2>
          To do this, download and run <a href="http://sourceforge.net/projects/win32diskimager/">win32 disk imager</a> 
          <h2>Step 2 - Get the image and flash it</h2>
          Get the latest build like from <a href="https://github.com/RasPlex/RasPlex/releases">github releases</a>, unzip it (may need Winrar to handle gzip files), and select the file using win32 disk imager. Insert the SD card, select it, and flash it. A more detailed guide is available <a href="http://squirrelhosting.co.uk/hosting-blog/hosting-blog-info.php?id=36" target="_blank">here</a>.</div>
        <h2>To get the latest build manually</h2>
        <div class="marketing">
          <div><a class="btn btn-inverse btn-large" href="download-rasplex.html">Download RasPlex</a></div>
        </div>
        Get the latest gzip image (img.gz file) from the <a href="https://github.com/RasPlex/RasPlex/releases">Github releases</a> Extract it (may need winrar or something, not sure if windows handles gzip files), and flash it to an SD card using disk imager like <a href="http://squirrelhosting.co.uk/hosting-blog/hosting-blog-info.php?id=36" target="_blank">here</a></div>
    </div>
  </div>
</div>

