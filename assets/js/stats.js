

function draw_users(users)
{
  labels = [];
  data = [];

  $.each(users.days_ago, function(k,v) {
    labels.push(k+" days ago")
    data.push(v)
  });
  labels = labels.reverse();
  data = data.reverse();

  var plot = {
    labels : labels,
    datasets : [
    {
      fillColor : "rgb(255, 127, 0)",
      strokeColor : "rgb(243, 134, 48)",
      pointColor : "rgb(243, 134, 48)",
      pointStrokeColor : "#fff",
      data : data,
      title: "Active Users"
    }
    ]

  }

  var options = {scaleFontColor : "#FFF", scaleGridLineColor : "#FFF"}
  var users = $("#users").get(0).getContext("2d");
  new Chart(users).Line(plot, options);
  legend(document.getElementById("usersLegend"), plot);
}

function draw_installs(installs)
{
  labels  = [];
  windows = [];
  linux   = [];
  osx     = [];
  unknown = [];

  $.each(installs.days_ago, function(k,v) {
    labels.push(k+" days ago")
    windows.push(v.windows);
    linux.push(v.linux);
    osx.push(v.osx);
  });
  labels  = labels.reverse();
  windows = windows.reverse();
  linux   = linux.reverse();
  osx     = osx.reverse();

  var plot = {
    labels : labels,
    datasets : [
    {
      fillColor : "rgb(255, 127, 0)",
      strokeColor : "rgb(243, 134, 48)",
      pointColor : "rgb(243, 134, 48)",
      pointStrokeColor : "#fff",
      data : windows,
      title : "Windows"
    },
    {
      fillColor : "rgb(255, 78, 0)",
      strokeColor : "rgb(255, 78, 0)",
      pointColor : "rgb(255, 78, 0)",
      pointStrokeColor : "#fff",
      data : osx,
      title : "OS X"
    },
    {
      fillColor : "rgb(255, 190, 0)",
      strokeColor : "rgb(255, 190, 0)",
      pointColor : "rgb(255, 190, 0)",
      pointStrokeColor : "#fff",
      data : linux,
      title : "Linux"
    }

    ]

  }

  var options = {scaleFontColor : "#FFF", scaleGridLineColor : "#FFF"}
  var users = $("#installs").get(0).getContext("2d");
  new Chart(users).Line(plot, options);
  legend(document.getElementById("installLegend"), plot);

  var platformPlot = [
    {
      value: installs.total.windows,
      color: "rgb(243, 134, 48)",
      title : "Windows"
    },
    {
      value: installs.total.osx,
      color: "rgb(255, 78, 0)",
      title : "OS X"
    },
    {
      value: installs.total.linux,
      color: "rgb(255, 190, 0)",
      title : "Linux"
    }

  ]


  var options = {scaleFontColor : "#FFF", scaleGridLineColor : "#FFF"}
  var platforms = $("#platforms").get(0).getContext("2d");
  new Chart(platforms).Pie(platformPlot,options);
  legend(document.getElementById("platformLegend"), plot);
}


function main(data)
{

  draw_users(data.users)
  draw_installs(data.installs)


}

$.ajax({
  url: "/json/stats",
  context: document.body,
  crossDomain: true
}).done(function(data) {
  result =jQuery.parseJSON( data );
  main(result);
});
