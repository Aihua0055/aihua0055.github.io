var years = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
var chinaHdi = [0.501,0.509,0.520,0.530,0.537,0.549,0.558,0.566,0.574,0.583,0.591,0.599,0.610,0.622,0.631,0.643,0.657,0.670,0.681,0.690,0.702,0.711,0.719,0.727,0.735,0.742,0.749,0.753,0.758 ];
var usHdi = [0.860,0.862,0.867,	0.872,	0.875,	0.878,	0.879,0.881,	0.884,	0.885,	0.881,	0.884,	0.886,	0.889,	0.892,	0.896,	0.899,	0.902,	0.907,	0.908,	0.911,	0.914,	0.916,	0.914,	0.915,	0.917,	0.919,	0.919,	0.920];

// Show HDI of China and the U.S. as default
var series = [
  {
  name:'No.85 China',
  data:chinaHdi,
},
{
  name: 'No.15 United States',
  data: usHdi
}
];
// Options for the apexcharts - line chart
var options = {
  chart: {
    type: 'line',
    id:"chart"
  },
  legend: {
    horizontalAlign: 'center',
    fontSize:'13px',
    position:'right',
    onItemHover: {
    highlightDataSeries: true,
    },
    tooltipHoverFormatter: function(val, opts) {
      return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    }
  },
  title:{
    text:"The Human Development Index around the world",
    style:{
      fontSize:'24px',
      
    },
  },
  subtitle:{
    text:'This chart only show TOP30 2018 HDI Ranking countries and China as well as baseline data for comparision.',
    style:{
      fontSize:'14px',
      color:'#9699a2'
    }
  },
  noData: {
    text: 'Loading...'
  },
  // Responsive line chart - legend position: right, bottom; legend: show or not
  responsive: [
    {
      breakpoint: 1200,
      options: {

        legend: {
          position: "bottom"
        }
      }
    },
    {
      breakpoint: 992,
      options: {
        legend: {
          position:"bottom"
        }
      }
    },
    {
      breakpoint: 768,
      options: {
        legend: {
          show:false,
        }
      }
    }
  ],

  stroke:{
    width:2,
  },
  series: series,
  xaxis: {
    categories: years,
    labels:{
      rotate: -45,
      style:{
        fontSize:'14px',
      }
    },
    title:{
      text:"Years",
      style:{
        color:'black',
        fontSize:'12PX'
      },
    },
  },
  yaxis: {
    categories: years,
    title:{
      text:"HDI Index Value",
      style:{
        color:'black',
        fontSize:'12PX'
      },
    },
    labels:{
      style:{
        fontSize:'14px',
      }
    }
  }
}


var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
async function loadData(file){
  d3.csv(file,function(d){
    return{
      country: d["Country"],
      hdiRank: +d["HDI Rank (2018)"],
      data: [ 
             +d["1990"],+d["1991"],+d["1992"],+d["1993"],+d["1994"],+d["1995"],+d["1996"],+d["1997"],+d["1998"],+d["1999"],
             +d["2000"],+d["2001"],+d["2002"],+d["2003"],+d["2004"],+d["2005"],+d["2006"],+d["2007"],+d["2008"],+d["2009"],
             +d["2010"],+d["2011"],+d["2012"],+d["2013"],+d["2014"],+d["2015"],+d["2016"],+d["2017"],+d["2018"]
            ]
    }
  }).then(function(data){

     for(const hdi in data){
       const rank = data[hdi]['hdiRank']
       let element = {};
       element.name= data[hdi]["country"];
       element.data= data[hdi]["data"];
       if(rank == 0 ){
        chart.appendSeries(element);
       }
       if(rank >0 && rank <31){
        element.name = 'No.' + rank +' \xa0'+ data[hdi]["country"];
        chart.appendSeries(element);
       }
      //  if (europe.includes(element.name)){
      //   element.name = data[hdi]["country"]+ ' No.' + rank;
      //   chart.appendSeries(element);
      //  }
     }
     for(const hdi in data){
      const rank = data[hdi]['hdiRank']
      let country = data[hdi]["country"]
      if (rank ==0){
        chart.toggleSeries(country);
      }
      if(rank >0 && rank<31 && rank!=8){
        name = 'No.' + rank +' \xa0'+ country;
        chart.toggleSeries(name);
      }
     }
  });
}
loadData("dataset/hdi.csv");
