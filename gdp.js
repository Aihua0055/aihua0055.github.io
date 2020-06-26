// 0Gross domestic product (GDP) per capita (2011 PPP $)
var years = [1990,1995,2000,2005,2010,2011,2012,2013,2014,2015,2016,2017,2018];

var chinaGDP= [1522,2557,3690,5703,9498,10355,11115,11920,12725,13535,14369,15254,16187];
var usGDP= [36813,39171,45661,49513,49479,49883,50632,51209,52081,53188,53632,54471,55681];

// TODO: add "Loading Data"
var series = [
  {
  name:'China',
  data:chinaGDP,

}
];

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
    text:"GDP per captia around the World",
    style:{
      fontSize:'24px',
      
    },
  },
  subtitle:{
    text:'This line chart only show TOP25 countries with the highest GDP per captia',
    style:{
      fontSize:'14px',
      color:'#9699a2'
    }
  },
  stroke:{
    width:2,
  },

  series: series,
  xaxis: {
    categories: years,
    labels:{
      style:{
        fontSize:'14px',
      }
    },
    title:{
      text:"Years",
      style:{
        color:'black',
        fontSize:'14PX'
      },
    },
  },
  yaxis: {
    categories: years,
    title:{
      text:"GDP/Captia",
      style:{
        color:'black',
        fontSize:'14PX'
      },
    },
    labels:{
      style:{
        fontSize:'14px',
      }
    }
  }
}
var gdpChart = new ApexCharts(document.querySelector("#gdpChart"), options);
gdpChart.render();



async function loadData(file){
  d3.csv(file,function(d){

    return{
      country: d["Country"],
      hdiRank: +d["GDP per Capita Rank"],
      data: [ 
             +d["1990"],+d["1995"],+d["2000"],+d["2005"],+d["2010"],+d["2011"],+d["2012"],+d["2013"],+d["2014"],+d["2015"],+d["2016"],+d["2017"],+d["2018"]

            ]
    }

  }).then(function(data){

     
     for(const hdi in data){
       const rank = data[hdi]['hdiRank']
       let element = {};
       element.name= data[hdi]["country"];
       element.data= data[hdi]["data"];

       if(rank == 0 ){
        gdpChart.appendSeries(element);

       }
       if(rank >0 && rank <25){
        gdpChart.appendSeries(element);
       }


     }

     for(const hdi in data){

      const rank = data[hdi]['hdiRank']
      let country = data[hdi]["country"]
      if (rank ==0){
        gdpChart.toggleSeries(country);
      }
      if(rank >0 && rank<25 && rank!=8){
        gdpChart.toggleSeries(country);
      }


     }

  });
}

loadData("dataset/gdp_rank.csv");

