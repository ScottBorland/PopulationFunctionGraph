var data = [];
var x0 = 0.5;
var xn = 0.5;
var k = 0.6;

var numberOfPoints = 20;

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Xn+1 = kx(1-x)',
                data: data,
                fill: false,
                showLine: true,
                borderColor: 'red',
                backgroundColor: 'red',
                borderWidth: 1
            }]
        },
        options: lineChartOptions
    });

function renderChart(data, labels) {
    myChart.update()
}

var lineChartOptions = {
    showLine: true,
    scales:{
      xAxes:[{
        type: 'linear',
        position: 'bottom'
      }],
      yAxes:[
        {
         
        }
      ]
    }
  }

// $("#renderBtn").click(
//     function(){
//     var x = Math.random(0, 1);
//     generatePoints(numberOfPoints, x, 0.3)
//     }
// );

$(document).ready(
function(){
    generatePoints()
    }
)

function generatePoints(){
    // myChart.data.labels.pop();
    // myChart.data.datasets.forEach((dataset) => {
    //     dataset.data.pop();
    // });
    xn = x0;
    data.splice(0, data.length)
    for(var i = 0; i < numberOfPoints; i++){
        let xnPlusOne = k * xn * (1 - xn);
            let newPoint = {
                x: i,
                y: xn
            }
            data.push(newPoint);
            xn = xnPlusOne;
        }
    
    myChart.update();
    console.log(myChart.data)
}






