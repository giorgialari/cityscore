import '/assets/css/style.css'
import '/assets/img/homepageimg.jpeg'

//Scores
function submit() {
  document.getElementById('errorMessage').style.display = 'none';
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  const resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/scores/')
  .then(response => {
    //Summary
    let summaryTxt = document.getElementById('summary');
    summaryTxt.innerHTML = response.data.summary; 
    //Housing
    let housing = `
    <div class="containerInfo">
    <div class="nomeElemento">`+ response.data.categories[0].name + `</div>
    <div class="valoreContainer">
    <div class="valoreElemento">`+ _.round(response.data.categories[0].score_out_of_10) + `</div>
    <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[0].score_out_of_10) / 10 * 100 + `%; 
    background-color:` + response.data.categories[0].color + `;">` + _.round(response.data.categories[0].score_out_of_10) + `</div></div>
    </div> 
    </div> 
    </div>`
    let housingTxt = document.getElementById('messageHousing');
    housingTxt.innerHTML = housing; 
    
     //Cost of living
     let costofliving = `
     <div class="containerInfo">
     <div class="nomeElemento">`+ response.data.categories[1].name + `</div>
     <div class="valoreContainer">
     <div class="valoreElemento">`+ _.round(response.data.categories[1].score_out_of_10) + `</div>
     <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[1].score_out_of_10) / 10 * 100 + `%; 
     background-color:` + response.data.categories[1].color + `;">` + _.round(response.data.categories[1].score_out_of_10) + `</div></div>
     </div> 
     </div>
     </div>`
  let costoflivingTxt = document.getElementById('messageCostOfLiving');
  costoflivingTxt.innerHTML = costofliving; 
   
  //Startups
    let startups = `
    <div class="containerInfo">
    <div class="nomeElemento">`+ response.data.categories[2].name + `</div>
    <div class="valoreContainer">
    <div class="valoreElemento">`+ _.round(response.data.categories[2].score_out_of_10) + `</div>
    <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[2].score_out_of_10) / 10 * 100 + `%; 
    background-color:` + response.data.categories[2].color + `;">` + _.round(response.data.categories[2].score_out_of_10) + `</div></div>
    </div> 
    </div>
    </div>`
  let startupsTxt = document.getElementById('messageStartups');
  startupsTxt.innerHTML = startups; 
  //Venture Capital
  let ventureCapital = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[3].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[3].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[3].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[3].color + `;">` + _.round(response.data.categories[3].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let ventureCapitalTxt = document.getElementById('messageVentureCapital');
ventureCapitalTxt.innerHTML = ventureCapital; 

//Travel Connectivity
let travelConnectivity = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[4].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[4].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[4].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[4].color + `;">` + _.round(response.data.categories[4].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let travelConnectivityTxt = document.getElementById('messageTravelConnectivity');
travelConnectivityTxt.innerHTML = travelConnectivity; 

//Commute
let commute = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[5].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[5].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[5].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[5].color + `;">` + _.round(response.data.categories[5].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let commuteTxt = document.getElementById('messageCommute');
commuteTxt.innerHTML = commute; 

//Business Freedom
let businessFreedom = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[6].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[6].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[6].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[6].color + `;">` + _.round(response.data.categories[6].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let businessFreedomTxt = document.getElementById('messageBusinessFreedom');
businessFreedomTxt.innerHTML = businessFreedom; 

//Safety
let safety = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[7].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[7].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[7].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[7].color + `;">` + _.round(response.data.categories[7].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let SafetyTxt = document.getElementById('messageSafety');
SafetyTxt.innerHTML = safety; 
//Healthcare
let healthcare = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[8].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[8].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[8].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[8].color + `;">` + _.round(response.data.categories[8].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let healthcareTxt = document.getElementById('messageHealthcare');
healthcareTxt.innerHTML = healthcare; 
//Education
let education = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[9].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[9].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[9].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[9].color + `;">` + _.round(response.data.categories[9].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let educationTxt = document.getElementById('messageEducation');
educationTxt.innerHTML = education; 

//Environmental Quality
let environmentalQuality = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[10].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[10].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[10].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[10].color + `;">` + _.round(response.data.categories[10].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let environmentalQualityTxt = document.getElementById('messageEnvironmentalQuality');
environmentalQualityTxt.innerHTML = environmentalQuality; 
//Economy
let economy = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[11].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[11].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[11].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[11].color + `;">` + _.round(response.data.categories[11].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let economyTxt = document.getElementById('messageEconomy');
economyTxt.innerHTML = economy; 

//Taxation
let taxation = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[12].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[12].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[12].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[12].color + `;">` + _.round(response.data.categories[12].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`

let taxationTxt = document.getElementById('messageTaxation');
taxationTxt.innerHTML = taxation; 
//Internet Access
let internetAccess = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[13].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[13].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[13].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[13].color + `;">` + _.round(response.data.categories[13].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`

let internetAccessTxt = document.getElementById('messageInternetAccess');
internetAccessTxt.innerHTML = internetAccess; 
//Leisure&Culture
let leisureCulture = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[14].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[14].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[14].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[14].color + `;">` + _.round(response.data.categories[14].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let leisureCultureTxt = document.getElementById('messageLeisureCulture');
leisureCultureTxt.innerHTML = leisureCulture; 

//Tolerance
let tolerance = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[15].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[15].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[15].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[15].color + `;">` + _.round(response.data.categories[15].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let toleranceTxt = document.getElementById('messageTolerance');
toleranceTxt.innerHTML = tolerance; 
//Outdoors
let outdoors = `
  <div class="containerInfo">
  <div class="nomeElemento">`+ response.data.categories[16].name + `</div>
  <div class="valoreContainer">
  <div class="valoreElemento">`+ _.round(response.data.categories[16].score_out_of_10) + `</div>
  <div class="progress"><div class="progress-bar" role="progressbar" style="width: `+ _.round(response.data.categories[16].score_out_of_10) / 10 * 100 + `%; 
  background-color:` + response.data.categories[16].color + `;">` + _.round(response.data.categories[16].score_out_of_10) + `</div></div>
  </div> 
  </div>
  </div>`
let outdoorsTxt = document.getElementById('messageOutdoors');
outdoorsTxt.innerHTML = outdoors; 

  })
  .catch(error => {
    console.log(error);
    alert("This city does not exist")
    window.location.href = "/dist";
  })
}

//Details
//Housing
function extraInfoHousingClick (){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  const resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      //Large apartment
      if(JSON_Obj[key].label == 'Large apartment') {
        var extraInfoHousing1 = 
         `<p><div class="infoContainer">
                           <div>`+ JSON_Obj[key].label + `</div>
                           <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                           </div></p>` 
                          }
                          //Medium apartment                      
        if(JSON_Obj[key].label == 'Medium apartment') {
          var extraInfoHousing2 = 
               `<p><div class="infoContainer">
                                 <div>`+ JSON_Obj[key].label + `</div>
                                 <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                                 </div></p>`
                               }
         //Small apartment                      
         if(JSON_Obj[key].label == 'Small apartment') {
           var extraInfoHousing3 = 
                `<p><div class="infoContainer">
                                  <div>`+ JSON_Obj[key].label + `</div>
                                  <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                                  </div></p>`
                                }
          //Rent index                      
         if(JSON_Obj[key].label == 'Rent index [Teleport score]') {
           var extraInfoHousing4 = 
                `<p><div class="infoContainer">
                                  <div>`+ JSON_Obj[key].label + `</div>
                                  <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                                  </div></p>`
                                }
      let extraBodyHousingTxt = document.getElementById('extraBodyHousing');
      extraBodyHousingTxt.innerHTML = extraInfoHousing1 + extraInfoHousing2 + extraInfoHousing3 +extraInfoHousing4 ; 
    }}
})
.catch(error => {
  console.log(error);
})
}

//Cost Of Living
function extraInfoCostOfLiving (){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Inflation [Teleport score]') { 
        var extraInfoCostOfLiving1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'A kilogram of Apples') { 
        var extraInfoCostOfLiving2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Bread') { 
        var extraInfoCostOfLiving3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'A Cappuccino') { 
        var extraInfoCostOfLiving4= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Movie ticket') { 
        var extraInfoCostOfLiving5= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Monthly fitness club membership') { 
        var extraInfoCostOfLiving6= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'A beer') { 
        var extraInfoCostOfLiving7= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Monthly public transport') { 
        var extraInfoCostOfLiving8= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Lunch') { 
        var extraInfoCostOfLiving9= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == '5km taxi ride') { 
        var extraInfoCostOfLiving10= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                            </div></p>` 
      }
    
      if(JSON_Obj[key].label == 'Price of a meal at a restaurant') { 
        var extraInfoCostOfLiving11= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div> $`+ JSON_Obj[key].currency_dollar_value + `</div>
                            </div></p>` 
      }      
        let extraBodyCostOfLivingTxt = document.getElementById('extraBodyCostOfLiving');
        extraBodyCostOfLivingTxt.innerHTML = extraInfoCostOfLiving1 + extraInfoCostOfLiving2 + extraInfoCostOfLiving3 + extraInfoCostOfLiving4 + extraInfoCostOfLiving5 +
        extraInfoCostOfLiving6 + extraInfoCostOfLiving7 + extraInfoCostOfLiving8 + extraInfoCostOfLiving9 + extraInfoCostOfLiving10 + extraInfoCostOfLiving11 ; 
    }
  }
})
.catch(error => {
  console.log(error);
})
}

//Startups
function extraInfoStartups (){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Coworking spaces [Teleport score]') { 
        var extraInfoStartups1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Startup events') { 
        var extraInfoStartups2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Number of startup events in the last 12 months') { 
        var extraInfoStartups3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Startup events [Teleport score]') { 
        var extraInfoStartups4= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Total number of startups') { 
        var extraInfoStartups5= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Number of upcoming meetup events') { 
        var extraInfoStartups6= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Meetups groups') { 
        var extraInfoStartups7= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Meetups members') { 
        var extraInfoStartups8= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Meetups [Teleport score]') { 
        var extraInfoStartups9= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Number of investors') { 
        var extraInfoStartups10= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Average monthly increase in number of startups') { 
        var extraInfoStartups11= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Average monthly increase in number of startups [Teleport score]') { 
        var extraInfoStartups12= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Startup climate scene [Teleport score]') { 
        var extraInfoStartups13= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Startups [Teleport score]') { 
        var extraInfoStartups14= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Coworking spaces on WorkFrom.co') { 
        var extraInfoStartups15= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>` 
      }
    
    let extraBodyStartupsTxt = document.getElementById('extraBodyStartups');
    extraBodyStartupsTxt.innerHTML = extraInfoStartups1 + extraInfoStartups2 + extraInfoStartups3 + extraInfoStartups4 + extraInfoStartups5 +
    extraInfoStartups6 + extraInfoStartups7 + extraInfoStartups8 + extraInfoStartups9 + extraInfoStartups10 + extraInfoStartups11 + extraInfoStartups12 +
    extraInfoStartups13 + extraInfoStartups14 + extraInfoStartups15;   
    }
  }
})
.catch(error => {
  console.log(error);
})
}

//Venture capital
function extraInfoVentureCapital(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Venture capital [Teleport score]') { 
        var extraInfoVentureCapital= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>` 
      }                                                                                                                                                                                        
      let extraBodyVentureCapitalTxt = document.getElementById('extraBodyVentureCapital');
      extraBodyVentureCapitalTxt.innerHTML = extraInfoVentureCapital;
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Travel connectivity
function extraInfoTravelConnectivity(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Airport hub') { 
        var extraInfoTravelConnectivity1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>` 
      }  
      if(JSON_Obj[key].label == 'Airport hub [Teleport score]') { 
        var extraInfoTravelConnectivity2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>` 
      }
      if(JSON_Obj[key].label == 'Intercity train connectivity [Teleport score]') { 
        var extraInfoTravelConnectivity3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>` 
      }
      let extraBodyTravelConnectivityTxt = document.getElementById('extraBodyTravelConnectivity');
      extraBodyTravelConnectivityTxt.innerHTML = extraInfoTravelConnectivity1 + extraInfoTravelConnectivity2 + extraInfoTravelConnectivity3;
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Commute
function extraInfoCommute(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Traffic handling [Teleport score]') { 
        var extraInfoCommute= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>` 
      } 
      let extraBodyCommuteTxt = document.getElementById('extraBodyCommute');
      extraBodyCommuteTxt.innerHTML = extraInfoCommute;
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Business Freedom
function extraInfoBusinessFreedom(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Business freedom') { 
        var extraInfoBusinessFreedom1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
        }   
        if(JSON_Obj[key].label == 'Business freedom [Teleport score]') { 
          var extraInfoBusinessFreedom2= 
          `<p><div class="infoContainer">
                              <div>`+ JSON_Obj[key].label + `</div>
                              <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                              </div></p>`     
          }  
        if(JSON_Obj[key].label == 'Freedom from corruption') { 
            var extraInfoBusinessFreedom3= 
            `<p><div class="infoContainer">
                                <div>`+ JSON_Obj[key].label + `</div>
                                <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                                </div></p>`     
         } 
        if(JSON_Obj[key].label == 'Freedom from corruption [Teleport score]') { 
              var extraInfoBusinessFreedom4= 
              `<p><div class="infoContainer">
                                  <div>`+ JSON_Obj[key].label + `</div>
                                  <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                                  </div></p>`     
        }
        if(JSON_Obj[key].label == 'Lack of labor restrictions') { 
          var extraInfoBusinessFreedom5= 
          `<p><div class="infoContainer">
                              <div>`+ JSON_Obj[key].label + `</div>
                              <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                              </div></p>`     
        }
      if(JSON_Obj[key].label == 'Lack of labor restrictions [Teleport score]') { 
          var extraInfoBusinessFreedom6= 
          `<p><div class="infoContainer">
                              <div>`+ JSON_Obj[key].label + `</div>
                              <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                              </div></p>`     
        }
      if(JSON_Obj[key].label == 'Time to open a business') { 
          var extraInfoBusinessFreedom7= 
          `<p><div class="infoContainer">
                              <div>`+ JSON_Obj[key].label + `</div>
                              <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                              </div></p>`     
        }
      if(JSON_Obj[key].label == 'Time to open a business [Teleport score]') { 
          var extraInfoBusinessFreedom8= 
          `<p><div class="infoContainer">
                              <div>`+ JSON_Obj[key].label + `</div>
                              <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                              </div></p>`     
      }
      let extraBodyBusinessFreedomTxt = document.getElementById('extraBodyBusinessFreedom');
      extraBodyBusinessFreedomTxt.innerHTML = extraInfoBusinessFreedom1 + extraInfoBusinessFreedom2 + extraInfoBusinessFreedom3 + extraInfoBusinessFreedom4,
      extraInfoBusinessFreedom5 + extraInfoBusinessFreedom6 + extraInfoBusinessFreedom7 + extraInfoBusinessFreedom8;
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Safety
function extraInfoSafety(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Crime rate [Teleport score]') { 
        var extraInfoSafety1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Gun-related deaths per 100,000 residents per year') { 
        var extraInfoSafety2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Lack of gun related deaths [Teleport score]') { 
        var extraInfoSafety3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Guns per 100 residents') { 
        var extraInfoSafety4= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Lack of guns [Teleport score]') { 
        var extraInfoSafety5= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Lack of guns and gun-related deaths [Teleport score]') { 
        var extraInfoSafety6= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }      
      let extraBodySafetyTxt = document.getElementById('extraBodySafety');
      extraBodySafetyTxt.innerHTML = extraInfoSafety1 + extraInfoSafety2 + extraInfoSafety3 + extraInfoSafety4 + extraInfoSafety5 + extraInfoSafety6;
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Healthcare
function extraInfoHealthcare(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Healthcare expenditure [Teleport score]') { 
        var extraInfoHealthcare1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Life expectancy (years)') { 
        var extraInfoHealthcare2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Life expectancy [Teleport score]') { 
        var extraInfoHealthcare3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Healthcare quality [Teleport score]') { 
        var extraInfoHealthcare4= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }    
      let extraBodyHealthcareTxt = document.getElementById('extraBodyHealthcare');
      extraBodyHealthcareTxt.innerHTML = extraInfoHealthcare1 + extraInfoHealthcare2 + extraInfoHealthcare3 + extraInfoHealthcare4;
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Education
function extraInfoEducation(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Percent of happy students') { 
        var extraInfoEducation1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ ((JSON_Obj[key].percent_value).toFixed(2))*100 + `%</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Percent of top performers in PISA math test') { 
        var extraInfoEducation2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ ((JSON_Obj[key].percent_value).toFixed(2))*100 + `%</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Percent of low performers in PISA math test') { 
        var extraInfoEducation3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ ((JSON_Obj[key].percent_value).toFixed(2))*100 + `%</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Country mean scores in PISA math test') { 
        var extraInfoEducation4= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ JSON_Obj[key].float_value.toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Percent of top performers in PISA reading test') { 
        var extraInfoEducation5= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ ((JSON_Obj[key].percent_value).toFixed(2))*100 + `%</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Percent of low performers in PISA reading test') { 
        var extraInfoEducation6= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ ((JSON_Obj[key].percent_value).toFixed(2))*100 + `%</div>
                            </div></p>`     
      }
    
      if(JSON_Obj[key].label == 'Percent of top performers in PISA science test') { 
        var extraInfoEducation7= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ ((JSON_Obj[key].percent_value).toFixed(2))*100 + `%</div>
                            </div></p>`     
      }
    
      if(JSON_Obj[key].label == 'Country mean scores in PISA science test') { 
        var extraInfoEducation8= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'PISA math ranking (high school)') { 
        var extraInfoEducation9= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'PISA ranking') { 
        var extraInfoEducation10= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'PISA ranking (high school) [Teleport score]') { 
        var extraInfoEducation11= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'PISA reading (high school)') { 
        var extraInfoEducation12= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'PISA science (high school)') { 
        var extraInfoEducation13= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'University quality [Teleport score]') { 
        var extraInfoEducation14= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      } 
      if(JSON_Obj[key].label == 'Best university in ranking') { 
        var extraInfoEducation15= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ JSON_Obj[key].string_value + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Best university ranking') { 
        var extraInfoEducation16= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      } 
      let extraBodyEducationTxt = document.getElementById('extraBodyEducation');
      extraBodyEducationTxt.innerHTML = extraInfoEducation1 + extraInfoEducation2 + extraInfoEducation3 + extraInfoEducation4 + extraInfoEducation5 + extraInfoEducation6 +
        extraInfoEducation7 + extraInfoEducation8 + extraInfoEducation9 + extraInfoEducation10 + extraInfoEducation11 + extraInfoEducation12 + extraInfoEducation13 + extraInfoEducation14 +
        extraInfoEducation15 + extraInfoEducation16;                                                                                                                                                                            
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Environmental quality
function extraInfoEnvironmentalQuality(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Air quality [Teleport score]') { 
        var extraInfoEnvironmentalQuality1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Cleanliness [Teleport score]') { 
        var extraInfoEnvironmentalQuality2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }  
      if(JSON_Obj[key].label == 'Drinking water quality [Teleport score]') { 
        var extraInfoEnvironmentalQuality3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }   
      if(JSON_Obj[key].label == 'Urban greenery [Teleport score]') { 
        var extraInfoEnvironmentalQuality4= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }  
      let extraBodyEnvironmentalQualityTxt = document.getElementById('extraBodyEnvironmentalQuality');
      extraBodyEnvironmentalQualityTxt.innerHTML = extraInfoEnvironmentalQuality1 + extraInfoEnvironmentalQuality2 +
      extraInfoEnvironmentalQuality3 + extraInfoEnvironmentalQuality4;                                                                                                                                                                            
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Economy
function extraInfoEconomy(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Currency for urban area') { 
        var extraInfoEconomy1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ JSON_Obj[key].string_value + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Currency exchange rate per US dollar for urban area') { 
        var extraInfoEconomy2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }    
      if(JSON_Obj[key].label == 'GDP growth rate') { 
        var extraInfoEconomy3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].percent_value).toFixed(2)*100 + `</div>
                            </div></p>`     
      }  
      if(JSON_Obj[key].label == 'GDP growth rate [Teleport score]') { 
        var extraInfoEconomy4= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'GDP per capita') { 
        var extraInfoEconomy5= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].currency_dollar_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'GDP per capita [Teleport score]') { 
        var extraInfoEconomy6= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }       
      let extraBodyEconomyTxt = document.getElementById('extraBodyEconomy');
      extraBodyEconomyTxt.innerHTML = extraInfoEconomy1 + extraInfoEconomy2 + extraInfoEconomy3 + extraInfoEconomy4 + extraInfoEconomy5 + extraInfoEconomy6;                                                                                                                                                                            
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Taxation
function extraInfoTaxation(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Profit tax (%% of profit)') { 
        var extraInfoTaxation1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].percent_value).toFixed(2)*100 + `%</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Effective company profit tax rate on payouts as dividends [Teleport score]') { 
        var extraInfoTaxation2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2)+ `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Income tax level [Teleport score]') { 
        var extraInfoTaxation3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2)+ `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'VAT (Sales Tax)') { 
        var extraInfoTaxation4= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].percent_value).toFixed(2)*100 + `%</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Income tax level [Teleport score]') { 
        var extraInfoTaxation5= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2)+ `</div>`
        
    }  
      let extraBodyTaxationTxt = document.getElementById('extraBodyTaxation');
      extraBodyTaxationTxt.innerHTML = extraInfoTaxation1 + extraInfoTaxation2 + extraInfoTaxation3 + extraInfoTaxation4 + extraInfoTaxation5;                                                                                                                                                                            
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Internet Access
function extraInfoInternetAccess(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Download speed (Mbps)') { 
        var extraInfoInternetAccess1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Upload speed (Mbps)') { 
        var extraInfoInternetAccess2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Internet access (download) [Teleport score]') { 
        var extraInfoInternetAccess3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Internet access (upload) [Teleport score]') { 
        var extraInfoInternetAccess4= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }   
      let extraBodyInternetAccessTxt = document.getElementById('extraBodyInternetAccess');
      extraBodyInternetAccessTxt.innerHTML = extraInfoInternetAccess1 + extraInfoInternetAccess2 + extraInfoInternetAccess3 + extraInfoInternetAccess4;                                                                                                                                                                            
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Leisure&Culture
function extraInfoLeisureCulture(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Art galleries [Teleport score]') { 
        var extraInfoLeisureCulture1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Art galleries') { 
        var extraInfoLeisureCulture2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Cinemas [Teleport score]') { 
        var extraInfoLeisureCulture3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      } 
      if(JSON_Obj[key].label == 'Cinemas') { 
        var extraInfoLeisureCulture4= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Comedy clubs [Teleport score]') { 
        var extraInfoLeisureCulture5= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Comedy clubs') { 
        var extraInfoLeisureCulture6= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Concerts [Teleport score]') { 
        var extraInfoLeisureCulture7= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Concert venues') { 
        var extraInfoLeisureCulture8= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Historical sites [Teleport score]') { 
        var extraInfoLeisureCulture9= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Historical sites') { 
        var extraInfoLeisureCulture10= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Museums [Teleport score]') { 
        var extraInfoLeisureCulture11= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Museums') { 
        var extraInfoLeisureCulture12= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Performing arts [Teleport score]') { 
        var extraInfoLeisureCulture13= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      } 
      if(JSON_Obj[key].label == 'Performing art venues') { 
        var extraInfoLeisureCulture14= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      } 
      if(JSON_Obj[key].label == 'Sports [Teleport score]') { 
        var extraInfoLeisureCulture15= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      } 
      if(JSON_Obj[key].label == 'Sport venues') { 
        var extraInfoLeisureCulture16= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Zoos [Teleport score]') { 
        var extraInfoLeisureCulture17= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }
      if(JSON_Obj[key].label == 'Zoos') { 
        var extraInfoLeisureCulture18= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].int_value).toFixed(0) + `</div>
                            </div></p>`     
      }   
      let extraBodyLeisureCultureTxt = document.getElementById('extraBodyLeisureCulture');
      extraBodyLeisureCultureTxt.innerHTML = extraInfoLeisureCulture1 + extraInfoLeisureCulture2 + extraInfoLeisureCulture3 + extraInfoLeisureCulture4 + 
      extraInfoLeisureCulture5 + extraInfoLeisureCulture6 + extraInfoLeisureCulture7 + extraInfoLeisureCulture8 + extraInfoLeisureCulture9 + 
      extraInfoLeisureCulture10 + extraInfoLeisureCulture11 + extraInfoLeisureCulture12 + extraInfoLeisureCulture13 + extraInfoLeisureCulture14 + extraInfoLeisureCulture15 + 
      extraInfoLeisureCulture16 + extraInfoLeisureCulture17 + extraInfoLeisureCulture18;                                                                                                                                                                            
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Tolerance
function extraInfoTolerance(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) 
    {if(JSON_Obj[key].label == 'LGBT adoption rights') { 
      var extraInfoTolerance1= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ JSON_Obj[key].string_value + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT age of consent') { 
      var extraInfoTolerance2= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ JSON_Obj[key].string_value + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT gender changing rights') { 
      var extraInfoTolerance3= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ JSON_Obj[key].string_value + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT gender changing rights') { 
      var extraInfoTolerance4= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ JSON_Obj[key].string_value + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT conversion therapy regulations') { 
      var extraInfoTolerance5= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ JSON_Obj[key].string_value + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT discrimination legality') { 
      var extraInfoTolerance6= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ JSON_Obj[key].string_value + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT blood donation regulations') { 
      var extraInfoTolerance7= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ JSON_Obj[key].string_value + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT employment discrimination legality') { 
      var extraInfoTolerance8= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ JSON_Obj[key].string_value + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT homosexuality rights') { 
      var extraInfoTolerance9= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ JSON_Obj[key].string_value + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT housing discrimination legality') { 
      var extraInfoTolerance10= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ JSON_Obj[key].string_value + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT marriage rights') { 
      var extraInfoTolerance11= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ JSON_Obj[key].string_value + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'Homosexuality acceptance (percent of the surveyed population in favor)') { 
      var extraInfoTolerance12= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ (JSON_Obj[key].percent_value).toFixed(2)*100 + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT Equality Index') { 
      var extraInfoTolerance13= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'LGBT Equality Index [Teleport score]') { 
      var extraInfoTolerance14= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                          </div></p>`     
    }
    if(JSON_Obj[key].label == 'Tolerance towards minorities [Teleport score]') { 
      var extraInfoTolerance15= 
      `<p><div class="infoContainer">
                          <div>`+ JSON_Obj[key].label + `</div>
                          <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                          </div></p>`     
    }
      let extraBodyToleranceTxt = document.getElementById('extraBodyTolerance');
      extraBodyToleranceTxt.innerHTML = extraInfoTolerance1 + extraInfoTolerance2 + extraInfoTolerance3 + extraInfoTolerance4 + extraInfoTolerance5 + extraInfoTolerance6 + 
      extraInfoTolerance7 + extraInfoTolerance8 + extraInfoTolerance9 + extraInfoTolerance10 + extraInfoTolerance11 + extraInfoTolerance12 + extraInfoTolerance13 + extraInfoTolerance14 +
      extraInfoTolerance15;                                                                                                                                                                            
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Outdoors
function extraInfoOutdoors(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  let resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
axios.get ('https://api.teleport.org/api/urban_areas/slug:' + resultUrl + '/details/')
.then(response => {
  for (let i=0; i<response.data.categories.length; i++){
    let JSON_Obj = response.data.categories[i].data
    for (let key in JSON_Obj) {
      if(JSON_Obj[key].label == 'Urban area elevation (meters)') { 
        var extraInfoOutdoors1= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }   
      if(JSON_Obj[key].label == 'Presence of hills in city') { 
        var extraInfoOutdoors2= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      }                                                                                                                                                                        
      if(JSON_Obj[key].label == 'Presence of mountains in city') { 
        var extraInfoOutdoors3= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      } 
      if(JSON_Obj[key].label == 'Median peak in meters') { 
        var extraInfoOutdoors4= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      } 
      if(JSON_Obj[key].label == 'Elevation (hills or mountains) [Teleport score]') { 
        var extraInfoOutdoors5= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      } 
      if(JSON_Obj[key].label == 'Water access [Teleport score]') { 
        var extraInfoOutdoors6= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      } 
      if(JSON_Obj[key].label == 'Seaside waterbody') { 
        var extraInfoOutdoors7= 
        `<p><div class="infoContainer">
                            <div>`+ JSON_Obj[key].label + `</div>
                            <div>`+ (JSON_Obj[key].float_value).toFixed(2) + `</div>
                            </div></p>`     
      } 
      let extraBodyOutdoorsTxt = document.getElementById('extraBodyOutdoors');
      extraBodyOutdoorsTxt.innerHTML = extraInfoOutdoors1 + extraInfoOutdoors2 + extraInfoOutdoors3 + extraInfoOutdoors4 + 
      extraInfoOutdoors5 + extraInfoOutdoors6 + extraInfoOutdoors7;                                                                                                                                                                            
  }   
  }
})
.catch(error => {
  console.log(error);
})
}

//Refresh
document.getElementById("accordionPanelsStayOpenExample").style.display = "none";
document.getElementById("image-containerId").style.display = "none";
document.getElementById("summary").style.display = "none";
document.querySelector("body").style.backgroundColor="black"; 

let citySelect = document.getElementById('citySelect');
function citySelectSubmit() { 
if (citySelect.value.length !== 0) {
    document.querySelector("#summary").removeAttribute("style");
    document.querySelector("#image-containerId").removeAttribute("style");
    document.querySelector("#accordionPanelsStayOpenExample").removeAttribute("style");
    document.querySelector("body").style.backgroundImage="none";
    document.querySelector(".input-group").style.marginTop="2%";
    document.querySelector("body").style.backgroundColor="aliceblue";
    document.querySelector(".title-form").style.color="black"; 
    if (window.matchMedia("(max-width:1024px)").matches) {
      document.querySelector(".title-form").style.marginTop="2%";
    }
  }
}

//Append Title 
function appendTitle() {
  let citySelect = document.getElementById('citySelect');
  let cityName = citySelect.value;
  let cityNameUp = cityName.toUpperCase();
  let cityNameUpTxt = document.getElementById('cityName');
  cityNameUpTxt.innerHTML = cityNameUp; 
}

function imageCity(){
  let citySelect = document.getElementById('citySelect');
  let urlSpace = citySelect.value;
  const resultUrl = urlSpace.toLowerCase().replace(/\s/g, '-');
  axios.get ('https://api.teleport.org/api/urban_areas/slug:' +resultUrl+'/images/')
  .then(response => {
    let getImage = document.getElementById('image');
    getImage.setAttribute('src', response.data.photos[0].image.mobile)
  })
  .catch(error => {
    console.log(error);
  })
}


//Autocomplete
function getAx(){
  var data= [];
  axios.get('https://api.teleport.org/api/urban_areas/')
    .then(function (response) {
      const city = response.data._links['ua:item']
      city.forEach(function(val) {
        data.push(val.name)
      });
      // console.log(data);
      $("#citySelect").autocomplete({
         source:data
        });
    })
    .catch(function (error) {
      console.log(error);
    });
}

//Reload Details

function reloadDetails(){
  //Housing
  document.querySelector("#panelsStayOpen-collapseOne").classList.remove('show');
  document.querySelector("#extraInfoHousing").classList.add('accordion-button', 'collapsed')

  // Cost of living
  document.querySelector("#panelsStayOpen-collapseTwo").classList.remove('show');
  document.querySelector("#extraInfoCostOfLiving").classList.add('accordion-button', 'collapsed')

  // Startups
  document.querySelector("#panelsStayOpen-collapseThree").classList.remove('show');
  document.querySelector("#extraInfoStartups").classList.add('accordion-button', 'collapsed')
  
  //Venture capital
  document.querySelector("#panelsStayOpen-collapseFour").classList.remove('show');
  document.querySelector("#extraInfoVentureCapital").classList.add('accordion-button', 'collapsed')

  //Travel connectivity
  document.querySelector("#panelsStayOpen-collapseFive").classList.remove('show');
  document.querySelector("#extraInfoTravelConnectivity").classList.add('accordion-button', 'collapsed')

  //Commute
  document.querySelector("#panelsStayOpen-collapseSix").classList.remove('show');
  document.querySelector("#extraInfoCommute").classList.add('accordion-button', 'collapsed')

  //Business Freedom
  document.querySelector("#panelsStayOpen-collapseSeven").classList.remove('show');
  document.querySelector("#extraInfoBusinessFreedom").classList.add('accordion-button', 'collapsed')

  //Safety
  document.querySelector("#panelsStayOpen-collapseEight").classList.remove('show');
  document.querySelector("#extraInfoSafety").classList.add('accordion-button', 'collapsed')

  //Healthcare
  document.querySelector("#panelsStayOpen-collapseNine").classList.remove('show');
  document.querySelector("#extraInfoHealthcare").classList.add('accordion-button', 'collapsed')

  //Education
  document.querySelector("#panelsStayOpen-collapseTen").classList.remove('show');
  document.querySelector("#extraInfoEducation").classList.add('accordion-button', 'collapsed')

  //Environmental Quality
  document.querySelector("#panelsStayOpen-collapseEleven").classList.remove('show');
  document.querySelector("#extraInfoEconomy").classList.add('accordion-button', 'collapsed')
  
  //Economy
  document.querySelector("#panelsStayOpen-collapseTwelve").classList.remove('show');
  document.querySelector("#extraInfoEconomy").classList.add('accordion-button', 'collapsed')

  //Taxation
  document.querySelector("#panelsStayOpen-collapseThirteen").classList.remove('show');
  document.querySelector("#extraInfoTaxation").classList.add('accordion-button', 'collapsed')

  //Internet Access
  document.querySelector("#panelsStayOpen-collapseFourteen").classList.remove('show');
  document.querySelector("#extraInfoInternetAccess").classList.add('accordion-button', 'collapsed')

  //Leisure&Culture
  document.querySelector("#panelsStayOpen-collapseFifthteen").classList.remove('show');
  document.querySelector("#extraInfoLeisureCulture").classList.add('accordion-button', 'collapsed')

  //Tolerance
  document.querySelector("#panelsStayOpen-collapseSixteen").classList.remove('show');
  document.querySelector("#extraInfoTolerance").classList.add('accordion-button', 'collapsed')

  //Outdoors
  document.querySelector("#panelsStayOpen-collapseSeventeen").classList.remove('show');
  document.querySelector("#extraInfoOutdoors").classList.add('accordion-button', 'collapsed')
}


