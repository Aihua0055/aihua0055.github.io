// Bar chart to show number of nobel laureates by born Country
var options = {
  series: [{
  data: [0, 0]
}],
  chart: {
  type: 'bar',
  height: '500px',
},
title:{
  text:"Nobel Laureates number by country of birth",
  style:{
    fontSize:'20px',
    
  },
},
subtitle:{
  text:'Number of laureates born in selected countries.',
  style:{
    fontSize:'14px',
    color:'#9699a2'
  }
},
plotOptions: {
  bar: {
    horizontal: true,
    dataLabels:{
      position:'bottom'
    }
  }
},
dataLabels: {
  enabled: true,
},
xaxis: {
  categories: ['United States','United Kingdom','Germany','France','Sweden','Russia','Switzerland','Japan','Canada','Austria','Netherlands',
  'Italy','Poland','Denmark','Norway','India','Australia','South Africa','China'],
 
},
yaxis: {
  labels: {
    style:{
      fontSize:'13px',
    }
  }
},
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

const url = "https://api.nobelprize.org/2.0/laureates";

var male = 0;
var female = 0;

// Pie Chart to show gender info:  genderChart
var optionsGender = {
  series: [54, 950,26],
  labels:['Female Laureates','Male Laureates','Organization Laureates'],
  chart: {
  type: 'donut',
},
legend:{
  position:'bottom',
  fontSize: '14px',
},
title:{
  text:"Gender",
  style:{
    fontSize:'20px',
    
  },
},
subtitle:{
  text:'Female Laureates VS. Male Laureates 54:950',
  style:{
    fontSize:'14px',
    color:'#9699a2'
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 150
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var genderChart = new ApexCharts(document.querySelector("#genderChart"), optionsGender);
genderChart.render();

// Pie Chart to show nobel prize info: awarded to one laureate, shared by two laureates,shared by three laureates
var optionsPrize = {
  series: [350, 141,106],
  labels:['Awarded to one Laureate','Shared by two Laureates','Shared by three Laureates'],
  chart: {
  type: 'donut',
},
legend:{
  position:'bottom',
  fontSize: '14px',
},
title:{
  text:"Nobel Prize Award",
  style:{
    fontSize:'20px',
    
  },
},
subtitle:{
  text:'58.6% of the prize awarded to one laureate',
  style:{
    fontSize:'14px',
    color:'#9699a2'
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 150
    },
    legend: {
      position: 'bottom',
    }
  }
}]
};

var prizeShareChart = new ApexCharts(document.querySelector("#prizeShareChart"), optionsPrize);
prizeShareChart.render();

var usLaureates = 0;
var ukLaureates = 0;
var germanyLaureates = 0;
var franceLaureates = 0;
var SwedenLaureates = 0;
var russiaLaureates = 0;
var swlandLaureates = 0;
var jpLaureates =0;
var canadaLaureates = 0;
var austriaLaureates = 0;
var nlLaureates = 0;
var italyLaureates = 0;
var polandLaureates = 0;
var denmarkLaureates = 0;
var norwayLaureates = 0;
var indiaLaureates = 0;
var AustralizLaureates = 0;
var sfLaureates = 0;
var chLaureates = 0;

function fetchData (url){
    
    fetch(url)
      .then((response)=>response.json())
      .then((response)=>{
          if(response.links.next!==null){
            fetchData(response.links.next);  
          }

          let usLaureate = response.laureates.filter(function(laureate){
            return laureate.birth.place.country.en=="USA"; 
          }).length
          usLaureates = usLaureates+usLaureate;

          let chLaureate = response.laureates.filter(function(laureate){
            return laureate.birth.place.country.en=="China"; 
          }).length

          let SwedenLaureate = response.laureates.filter(function(laureate){
            return laureate.birth.place.country.en=="Sweden"; 
          }).length

          AustralizLaureates = AustralizLaureates + response.laureates.filter(function(laureate){
            return laureate.birth.place.country.en=="Australia"; 
          }).length

          canadaLaureates = canadaLaureates + response.laureates.filter(function(laureate){
            return laureate.birth.place.country.en=="Canada"; 
          }).length
          franceLaureates = franceLaureates + response.laureates.filter(function(laureate){
            return laureate.birth.place.country.en=="France"; 
          }).length

          germanyLaureates = germanyLaureates + response.laureates.filter(function(laureate){
            return laureate.birth.place.country.en=="Germany"; 
          }).length

          ukLaureates = ukLaureates + response.laureates.filter(function(laureate){
            return laureate.birth.place.country.en=="United Kingdom"; 
          }).length

          chLaureates = chLaureates + chLaureate;
          SwedenLaureates = SwedenLaureates +SwedenLaureate;
          chart.updateSeries([{
            data:[
              usLaureates,ukLaureates,germanyLaureates,franceLaureates,SwedenLaureates,
              31,28,28,canadaLaureates,22,21,20,19,13,13,12,AustralizLaureates,11,chLaureates]
          }])

          
      })
      .catch((error)=>console.log(error));
};

fetchData(url);

//List of countries by Nobel laureates per capita: to speed up, use hardcode here.
var optionsRank = {
  series: [{
  name: 'Laureates/10 million people',
  data: [33, 30, 25, 24, 24, 19, 14, 14, 13, 12, 12, 11,9,7,5,3,2,2,2,0.06]
}],
  chart: {
  height: '500px',
  type: 'bar',
},
plotOptions: {
  bar: {
    dataLabels: {
      position: 'top', 
    },
  }
},
dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val;
  },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#304758"]
  }
},

xaxis: {
  categories: ["Switzerland", "Sweden", "Austria", "Denmark", "Norway", "UK", "Israel", "Germany", "Hungary", "USA",
   "Netherlands", "France","Belgium","Canada","Poland","Australia","Italy","Japan","South Africa","Russia","China"],
  position: 'bottom',
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#D8E3F0',
        colorTo: '#BED1E6',
        stops: [0, 100],
        opacityFrom: 0.4,
        opacityTo: 0.5,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: false,
    formatter: function (val) {
      return val;
    }
  }

},
title:{
  text:"Nobel laureates by number of per capita (2018)",
  style:{
    fontSize:'20px',
    
  },
},
subtitle:{
  text:'Only show countries have more Nobel Laureates than China.',
  style:{
    fontSize:'14px',
    color:'#9699a2'
  }
}
};

var countryRank = new ApexCharts(document.querySelector("#countryRank"), optionsRank);
countryRank.render();

// NobelPrize API 2.0 format. Could not find documendation that explains the data scheme.
// {
//   "laureates":[
//   {
//     "id":"745",
//     "knownName":{
//        "en":"A. Michael Spence",
//        "se":"A. Michael Spence"
//     },
//     "givenName":{
//        "en":"A. Michael",
//        "se":"A. Michael"
//     },
//     "familyName":{
//        "en":"Spence",
//        "se":"Spence"
//     },
//     "fullName":{
//        "en":"A. Michael Spence",
//        "se":"A. Michael Spence"
//     },
//     "gender":"male",
//     "birth":{
//        "date":"1943-00-00",
//        "place":{
//           "city":{
//              "en":"Montclair, NJ",
//              "no":"Montclair, NJ",
//              "se":"Montclair, NJ"
//           },
//           "country":{
//              "en":"USA",
//              "no":"USA",
//              "se":"USA"
//           },
//           "cityNow":{
//              "en":"Montclair, NJ",
//              "no":"Montclair, NJ",
//              "se":"Montclair, NJ"
//           },
//           "countryNow":{
//              "en":"USA",
//              "no":"USA",
//              "se":"USA"
//           },
//           "continent":{
//              "en":"North America"
//           },
//           "locationString":{
//              "en":"Montclair, NJ, USA",
//              "no":"Montclair, NJ, USA",
//              "se":"Montclair, NJ, USA"
//           }
//        }
//     },
//     "links":{
//        "rel":"laureate",
//        "href":"http:\/\/masterdataapi.nobelprize.org\/2\/laureate\/745",
//        "action":"Get",
//        "types":"application\/json"
//     },
//     "nobelPrizes":[
//        {
//           "awardYear":"2001",
//           "category":{
//              "en":"Economic Sciences",
//              "no":"\u00d8konomi",
//              "se":"Ekonomi"
//           },
//           "categoryFullName":{
//              "en":"The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel",
//              "no":"Sveriges Riksbanks pris i \u00f8konomisk vitenskap til minne om Alfred Nobel",
//              "se":"Sveriges Riksbanks pris i ekonomisk vetenskap till Alfred Nobels minne"
//           },
//           "sortOrder":"2",
//           "portion":"1\/3",
//           "dateAwarded":"2001-10-10",
//           "prizeStatus":"received",
//           "motivation":{
//              "en":"for their analyses of markets with asymmetric information",
//              "se":"f\u00f6r deras analys av marknader med assymetrisk informations"
//           },
//           "prizeAmount":10000000,
//           "prizeAmountAdjusted":12295082,
//           "affiliations":[
//              {
//                 "name":{
//                    "en":"Stanford University",
//                    "no":"Stanford University",
//                    "se":"Stanford University"
//                 },
//                 "nameNow":{
//                    "en":"Stanford University"
//                 },
//                 "city":{
//                    "en":"Stanford, CA",
//                    "no":"Stanford, CA",
//                    "se":"Stanford, CA"
//                 },
//                 "country":{
//                    "en":"USA",
//                    "no":"USA",
//                    "se":"USA"
//                 },
//                 "cityNow":{
//                    "en":"Stanford, CA",
//                    "no":"Stanford, CA",
//                    "se":"Stanford, CA"
//                 },
//                 "countryNow":{
//                    "en":"USA",
//                    "no":"USA",
//                    "se":"USA"
//                 },
//                 "locationString":{
//                    "en":"Stanford, CA, USA",
//                    "no":"Stanford, CA, USA",
//                    "se":"Stanford, CA, USA"
//                 }
//              }
//           ],
//           "links":{
//              "rel":"nobelPrize",
//              "href":"https:\/\/masterdataapi.nobelprize.org\/2\/nobelPrize\/eco\/2001",
//              "action":"Get",
//              "types":"application\/json"
//           }
//        }
//     ]
//  },
//  {},
//  {},
//  {}
// ],
//   "meta":{
//      "offset":0,
//      "limit":25,
//      "count":943
//   },
//   "links":{
//      "first":"https:\/\/masterdataapi.nobelprize.org\/2.0\/laureates?offset=0&limit=25",
//      "self":"https:\/\/masterdataapi.nobelprize.org\/2.0\/laureates?offset=0&limit=25",
//      "next":"https:\/\/masterdataapi.nobelprize.org\/2.0\/laureates?offset=25&limit=25",
//      "last":"https:\/\/masterdataapi.nobelprize.org\/2.0\/laureates?offset=925&limit=25"
//   }
// }



