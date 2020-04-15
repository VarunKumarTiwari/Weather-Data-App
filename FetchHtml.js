function parseResponse(FetchXml) {
	var i,j;
	var ForecastTag = FetchXml.getElementsByTagName("forecast");
	var TimeTag = ForecastTag[0].getElementsByTagName("time").length;
	var dd = [];
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var dn = ['.dn1','.dn2','.dn3','.dn4','.dn5'];
	var date = ['.day1','.day2','.day3','.day4','.day5'];
	var tempera = ['.temp1','.temp2','.temp3','.temp4','.temp5'];
	var mintemp = ['.min-temp1','.min-temp2','.min-temp3','.min-temp4','.min-temp5'];
	var maxtemp = ['.max-temp1','.max-temp2','.max-temp3','.max-temp4','.max-temp5'];
	var humi = ['.humidity1','.humidity2','.humidity3','.humidity4','.humidity5']; 
	var win = ['.wind1','.wind2','.wind3','.wind4','.wind5'];
	var icon = ['.img1','.img2','.img3','.img4','.img5'];
	var outputArray = []; 
        var count = 0; 
        var start = false; 
	var DayTag,DayTag2,
		TemperatureTag,
		WindTag,
		CloudTag,
		HumidityTag,
		MMPPSS = [],
				TTEEPP = [],
				dateee = [];
			var	gtime = [];
	var WholeData = [],avgwholeData = [],first3icon = [];

	for (i = 0; i < TimeTag; i++) {

		DayTag = ForecastTag[0].getElementsByTagName("time")[i].getAttribute('from');



		TemperatureTag = parseInt(parseFloat(ForecastTag[0].getElementsByTagName("time")[i].getElementsByTagName("temperature")[0]
			.getAttribute('value')) - 273);
		TemperatureminTag = parseInt(parseFloat(ForecastTag[0].getElementsByTagName("time")[i].getElementsByTagName("temperature")[0]
			.getAttribute('min')) - 273);
		TemperaturemaxTag = parseInt(parseFloat(ForecastTag[0].getElementsByTagName("time")[i].getElementsByTagName("temperature")[0]
			.getAttribute('max')) - 273);

		WindTag = ForecastTag[0].getElementsByTagName("time")[i].getElementsByTagName("windSpeed")[0].getAttribute('name') ;

		CloudTag = ForecastTag[0].getElementsByTagName("time")[i].getElementsByTagName("clouds")[0].getAttribute('value');

		HumidityTag = ForecastTag[0].getElementsByTagName("time")[i].getElementsByTagName("humidity")[0].getAttribute('value') +
			ForecastTag[0].getElementsByTagName("time")[i].getElementsByTagName("humidity")[0].getAttribute('unit');

		IconTag = ForecastTag[0].getElementsByTagName("time")[i].getElementsByTagName("symbol")[0].getAttribute('var');
		//console.log(DayTag.substring(0, 10) + " TTTT" + TemperatureTag + WindTag + CloudTag + HumidityTag);

		
				temp = parseInt(parseFloat(ForecastTag[0].getElementsByTagName("time")[i].getElementsByTagName("temperature")[0].getAttribute('value')) - 273);

				wps = ForecastTag[0].getElementsByTagName("time")[i].getElementsByTagName("windSpeed")[0].getAttribute('mps');

				TTEEPP.push(temp);
				MMPPSS.push(wps);
				dateee.push(DayTag.substring(0, 10));
				

		WholeData.push({
			Date: DayTag.substring(0, 10),
			Date2: DayTag.substring(12, 16),			
			Temperature: TemperatureTag,
			Min:TemperatureminTag,
			Max:TemperaturemaxTag,
			Wind: WindTag,
			Cloud: CloudTag,
			HumidityTag: HumidityTag,
			Icon: IconTag
		})
		//console.log(WholeData);	
	}
	for(var e=0;e<3;e++)
	{
		gtime[e] = WholeData[e].Date2;
	}
	
for (j = 0; j < WholeData.length; j++) { 
            for (k = 0; k < outputArray.length; k++) { 
                if ( WholeData[j].Date == outputArray[k].Date ) { 
                    start = true; 
                } 
            } 
            count++; 
            if (count == 1 && start == false) { 
                outputArray.push(WholeData[j]); 
            } 
            start = false; 
            count = 0; 
        } 
        //console.log(outputArray);
		var tempp = [];
		var wind = [];
		var dayName = [];
		var index =[0,0,0,0,0];
		var sum=0; 
		var time = [];
		for(var i=0;i<outputArray.length;i++)
        { var temp22=0;
        	var min = 0;
        	var max = 0;
        	var Humidity=0;
        	var Cloud=0;
        	var counter=0;
        	var wind;
        	var indexxx=0;
        	var AveragIcon;
        	var backimg;
        	var so = 0;
        	var ti=1;
        	for(var k = 0; k < WholeData.length; k++)
        	{
        		if( WholeData[k].Date == outputArray[i].Date )
        		{	
        			time[k]=WholeData[k].Date2;
        			temp22 += WholeData[k].Temperature;
        			//Humidity += WholeData[k].HumidityTag;
        			min += WholeData[k].Min;
        			max += WholeData[k].Max;
        			Humidity = WholeData[i].HumidityTag;
        			wind =WholeData[i].Wind;
        			AveragIcon =  WholeData[i].Icon;
           			counter++;
        			//wind[i] = WholeData[i].Wind;
        			if(i==0&&sum==0){
        			if(AveragIcon=='09n'||AveragIcon=='09d'||AveragIcon=='10d'||AveragIcon=='10n'||
        				AveragIcon=='11d'||AveragIcon=='11n'||AveragIcon=='13d'||AveragIcon=='13n'||AveragIcon=='50d'||AveragIcon=='50n')
        			{
        				backimg = 'rain';
        				sum = 1;
        			}
        			if(AveragIcon=='04n'||AveragIcon=='03n'||AveragIcon=='02n'||AveragIcon=='04d'||AveragIcon=='03d'||AveragIcon=='02d')
        			{	
        				backimg = 'clouds';
        				sum = 1;
        			}
        			if(AveragIcon=='01n'||AveragIcon=='01d')
        			{
        				
        				backimg = 'clear';
        				sum = 1;
        			}
        			
        			}
        			
        		}

              	}

              	
        	temp22 = temp22/counter;
        	min  = min/counter;
        	max = max/counter;
        	
        	avgwholeData.push({
			Date: outputArray[i].Date,
			Temperature:temp22.toFixed(2),
			Humidity:Humidity,
			wind:wind,
			Min : min.toFixed(2),
			Max:max.toFixed(2),
			icon:AveragIcon,
			back:backimg,
			Time : time
			})

        	var d = new Date(avgwholeData[i].Date);
			dayName[i] = days[d.getDay()];
       	console.log(avgwholeData[i].back);
        }
first3icon[0] = WholeData[0].Icon;
first3icon[1] = WholeData[1].Icon;
first3icon[2] = WholeData[2].Icon;
for(var k=0;k<3;k++)
{
		if(first3icon[k]=='10d'||first3icon[k]=='10n'||first3icon[k]=='09n'||first3icon[k]=='09d')
		{
			first3icon[k]='animated/rain';
		}
        if(first3icon[k]=='11d'||first3icon[k]=='11n')
        {
			first3icon[k]='animated/thunder';
        }
        if(first3icon[k]=='13d'||first3icon[k]=='13n'||first3icon[k]=='50d'||first3icon[k]=='50n')
        {
        	first3icon[k] = 'animated/snow';
        }				
        if(first3icon[k]=='02n'||first3icon[k]=='02d')
        {
        	first3icon[k] = 'animated/few_clouds';			
        }
        if(first3icon[k]=='04n'||first3icon[k]=='03n'||first3icon[k]=='04d'||first3icon[k]=='03d')
        {	
        	first3icon[k] = 'animated/cloud';
        }
        if(first3icon[k]=='01n'||first3icon[k]=='01d')
        {				
        	first3icon[k] = 'animated/clear';
        }
       } 			

// console.log(first3icon[0]);
// console.log(first3icon[1]);
// console.log(first3icon[2]);

for(var i=0;i<5;i++)
        {
        	document.querySelector(tempera[i]).innerHTML = avgwholeData[i].Temperature+'Cels';

        	document.querySelector(humi[i]).innerHTML = avgwholeData[i].Humidity;

			document.querySelector(icon[i]).innerHTML = "<img src='animated/" + avgwholeData[i].icon + ".svg'>";
        	
        	document.querySelector(win[i]).innerHTML = avgwholeData[i].wind;

        	document.querySelector(dn[i]).innerHTML = dayName[i];
			
			document.querySelector(mintemp[i]).innerHTML = avgwholeData[i].Min+'Cels';
     		
     		document.querySelector(maxtemp[i]).innerHTML = avgwholeData[i].Max+'Cels';
  
        	 document.querySelector(date[i]).innerHTML = avgwholeData[i].Date;
        }
    		document.querySelector('.card_image').innerHTML = "<img src='" + avgwholeData[0].back + ".svg'>";
	   		document.querySelector('.scimg1').innerHTML = "<img src='" + first3icon[0] + ".gif'>";
	   		document.querySelector('.scimg2').innerHTML = "<img src='" + first3icon[1] + ".gif'>";
	   		document.querySelector('.scimg3').innerHTML = "<img src='" + first3icon[2] + ".gif'>";
	        document.querySelector('.temp6').innerHTML = avgwholeData[0].Temperature+" Celsius";
	        document.querySelector('.time1').innerHTML = "Time - "+WholeData[0].Date2;
	        document.querySelector('.time2').innerHTML = "Time - "+WholeData[1].Date2;
	        document.querySelector('.time3').innerHTML = "Time - "+WholeData[2].Date2;
	        document.querySelector('.htemp1').innerHTML = "Temp - "+WholeData[0].Temperature;
	        document.querySelector('.htemp2').innerHTML = "Temp - "+WholeData[1].Temperature;
	        document.querySelector('.htemp3').innerHTML = "Temp - "+WholeData[2].Temperature;

DrawGraphChat(TTEEPP, MMPPSS, dateee, gtime);
}


		function DrawGraphChat(TTEEPP, MMPPSS, dateee,gtime) {
			
			document.getElementById('myChart').style.display = 'block';
			document.getElementById('myChartBar').style.display = 'block';

			var ctx = document.getElementById('myChart').getContext('2d');
			var ctx1 = document.getElementById('myChartBar').getContext('2d');

			var chart = new Chart(ctx, {
				// The type of chart we want to create
				type: 'line',

				// The data for our dataset
				data: {
					labels: gtime,
					datasets: [
						{
							label: "Temperature",
							backgroundColor: 'rgb(255, 99, 132)',
							borderColor: 'rgb(255, 99, 132)',
							data: TTEEPP,
						}
					]
					
				},

				// Configuration options go here
				options: {
					maintainAspectRatio: false,
					responsive: false,
						options: { 
					legend: {
						labels: {
							fontColor: "white",
							fontSize: 18
						}
					},
					scales: {
						yAxes: [{
							ticks: {
								fontColor: "white",
								fontSize: 18,
								stepSize: 1,
								beginAtZero: true
							}
						}],
						xAxes: [{
							ticks: {
								fontColor: "white",
								fontSize: 14,
								stepSize: 1,
								beginAtZero: true
							}
						}],
					}	
				}
			}
			});
			var chartBar = new Chart(ctx1, {
				// The type of chart we want to create
				type: 'bar',

				// The data for our dataset
				data: {
					labels: dateee,
					datasets: [{
							label: "Wind Speed",
							backgroundColor: 'rgb(0, 0, 255)',
							borderColor: 'rgb(0, 0, 132)',
							fill: false,
							data: MMPPSS,
						},
						{
							label: "Temperature",
							backgroundColor: 'rgb(255, 99, 132)',
							borderColor: 'rgb(255, 99, 132)',
							data: TTEEPP,
						},


					]
				},

				// Configuration options go here
				options: {
					maintainAspectRatio: false,
					responsive: false
				}
			});
		}


function ResponseCheck(cityName) {
	// //var cityName = document.getElementById("CityName").value;

	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (request) {
		request.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				console.log(request.responseXML);
				parseResponse(this.responseXML);
			}
		};
	}


	request.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName +
		"&APPID=e23ccbd3f8b2a7a6a46372e6934d17af&mode=xml", true);
	request.send();
	document.querySelector('.ct').innerHTML = cityName ;
	console.log(cityName);

}
window.onload = function () {
var input = document.getElementById("CityName");
//var city = document.getElementById("CityName").value;
// 	var buttonClick = document.getElementById("WeatherClick");

// 	buttonClick.onclick = function () {
		
 
// 		ResponseCheck();
// 		console.log("varun");

	
// }
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
   
    ResponseCheck(input.value);
    // Trigger the button element with a click
    document.getElementById("WeatherClick").click();
  }
});

}
