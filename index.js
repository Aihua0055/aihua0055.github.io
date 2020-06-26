// Enter your code below

let data = {
    blue: 21,
    yellow: 11,
    red: 4,
    teal: 18,
    purple: 9,
    orange: 9,
    unknown: 4,
  };
  
  // Colors used :
  var backgroundColor=[
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(255, 99, 132, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(199, 199, 199, 0.8)',
  ]
  var borderColor = [
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(159, 159, 159, 1)',
  ]
  
  
  
  new Chart(document.getElementById("hdi"), {
    type: 'doughnut',
    data: {
      // labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      labels: Object.keys(data),
  
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: backgroundColor,
  
          borderColor: borderColor,
          data: Object.values(data),
        }
      ]
    },
    options: {
      legend: { display: true, position:'bottom' },
      title: {
        display: true,
        text: 'GINI',
        fontSize:20

      }
    }
  });
  
  var years = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]
  var chinaHdi = [0.501,0.509,0.520,0.530,0.537,0.549,0.558,0.566,0.574,0.583,0.591,0.599,0.610,0.622,0.631,0.643,0.657,0.670,0.681,0.690,0.702,0.711,0.719,0.727,0.735,0.742,0.749,0.753,0.758 ];
  var canadaHdi = [0.850,	0.853,	0.856,	0.854,	0.859,	0.861,	0.863,	0.863,	0.861,	0.864,	0.868,	0.872,	0.877,	0.882,	0.887,	0.892,	0.895,	0.891,	0.893,	0.893,	0.895,	0.899,	0.906,	0.910,	0.914,	0.917,	0.920,	0.921,	0.922  ];
  var swedenHdi = [0.816,	0.818,	0.821,	0.840,	0.849,	0.857,	0.864,	0.874,	0.888,	0.893,	0.897,	0.900,	0.903,	0.908,	0.896,	0.899,	0.902,	0.905,	0.901,	0.899,	0.906,	0.906,	0.908,	0.927,	0.929,	0.932,	0.934,	0.935,	0.937  ];
  var usHdi = [0.860,	0.862,	,	0.872,	0.875,	0.878,	0.879,,	0.884,	0.885,	0.881,	0.884,	0.886,	0.889,	0.892,	0.896,	0.899,	0.902,	0.907,	0.908,	0.911,	0.914,	0.916,	0.914,	0.915,	0.917,	0.919,	0.919,	0.920];
  var japanHdi = [0.816,	0.821,	0.824,	0.829,	0.835,	0.840,	0.845,	0.848,	0.847,	0.850,	0.855,	0.859,	0.862,	0.865,	0.869,	0.873,	0.877,	0.880,	0.881,	0.880,	0.885,	0.890,	0.895,	0.900,	0.904,	0.906,	0.910,	0.913,	0.915];
 
 
  var eduChart = new Chart(document.getElementById("edu"), {
    type: 'line',
  data: {
    labels:years,
    datasets: [{ 
        data: chinaHdi,
        label: "China",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: usHdi,
        label: "the U.S.",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Human Development Index',
      fontSize:20
    }
  }
  });



new Chart(document.getElementById("gdp"), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'GDP',
        fontSize:20

      }
    }
});

new Chart(document.getElementById("income"), {
    type: 'horizontalBar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Nobel Laureate',
        fontSize:20

      }
    }
});

const addData = [1.501,1.509,0.520,0.530,0.537,0.549,0.558,0.566,0.574,0.583,0.591,0.599,0.610,0.622,0.631,0.643,0.657,0.670,0.681,0.690,0.702,0.711,0.719,0.727,0.735,0.742,0.749,0.753,0.758 ];
const label = "add";
var chart = eduChart;

function updateEdu(chart,label,addData){
    console.log(label);
    // eduChart.data.labels.push(label);
    // eduChart.data.datasets.forEach((dataset) => {
    //     dataset.data.push(data);
    // });
    // eduChart.update();
};

