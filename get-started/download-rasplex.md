---
layout: page 
title: Manual Installation Instructions
description: "How to Download RasPlex"
---


# Graphical Unified Installer

**Note**: Try using the <a href="https://github.com/RasPlex/RasPlex/releases" target="_blank">graphical installer</a> first.

##  Before you download

Please remember it runs best on a Raspberry Pi Model B 2 but also runs on a 512MB Raspberry Pi B or B+. For best results, you should run pre-caching on first boot as detailed in our [faq](/docs/faq.html) section.

## You will need

+ A Raspberry Pi Model B 512MB or Model B+ 512MM or a Model B2 1024MB
+ A case to protect your Raspberry Pi (optional)
+ A 4GB Class 10 SD (Model B) or MicroSD (Model B+ and B2) card with compatible reader
+ A USB micro power supply (should be at least 2A at 5v, if you experience crashing it's probably because you have a bad power supplyor poor quality USB power cable)
+ An HDMI cord

You will probably want:

+ A remote control

# Mac OSX / Linux

Grab your desired image (img.gz) file from <a href="https://github.com/RasPlex/RasPlex/releases" target="_blank">github</a>, and flash it with the following commands:

## Linux
```
gunzip image_name.img.gz
blkid # find out what device you want to flash to, /dev/sdX
dd if=image_name.img of=/dev/sdX bs=1MB #BE VERY CAREFUL you select the right value for X
```

## OS X
```
gunzip image_name.img.gz
diskutil list # find out what device you want to flash to, /dev/diskX
diskutil unmount /dev/diskX
dd if=image_name.img of=/dev/rdiskX bs=1M #The "rdisk" will make it flash much faster
```

# Windows

## Step 1 - Get the flasher program

To do this, download and run <a href="http://sourceforge.net/projects/win32diskimager/">win32 disk imager</a> 

## Step 2 - Get the image and flash it

Get the latest build like from <a href="https://github.com/RasPlex/RasPlex/releases">github releases</a>, unzip it (may need Winrar to handle gzip files), and select the file using win32 disk imager. Insert the SD card, select it, and flash it. A more detailed guide is available <a href="http://squirrelhosting.co.uk/hosting-blog/hosting-blog-info.php?id=36" target="_blank">here</a>.

## To get the latest build manually

Get the latest gzip image (img.gz file) from the <a href="https://github.com/RasPlex/RasPlex/releases">Github releases</a> Extract it (may need winrar or something, not sure if windows handles gzip files), and flash it to an SD card using disk imager like <a href="http://squirrelhosting.co.uk/hosting-blog/hosting-blog-info.php?id=36" target="_blank">here</a>

