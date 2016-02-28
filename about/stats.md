---
layout: page 
title: User Statistics
description: "Stats for usage, etc"

---

<link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<script src="/assets/js/stats.js"></script>

<div class="row marketing">
  <div class="col-xs-6 col-md-4">
    <h2 class="center">Active Users This Week</h2>
    <canvas id="users" width="400" height="400"></canvas>
    <div id="usersLegend"></div>
  </div>
  <div class="col-xs-6 col-md-4">
    <h2 class="center">New Installs This Week</h2>
    <canvas id="installs" width="400" height="400"></canvas>
    <div id="installLegend"></div>
  </div>
  <div class="col-xs-6 col-md-4">
    <h2 class="center">Platform Installs</h2>
    <canvas id="platforms" width="400" height="400"></canvas>
    <div id="platformLegend"></div>
  </div>
</div>

