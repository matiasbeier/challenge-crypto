import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

function Graphic({dataState}) {

    const options = {
        responsive: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                display: false
            },
            x: {
                display: false
            }
        }
    }
    let last3000 = dataState.map(obj => obj.p)
    last3000 = last3000.slice(-3000)
    let last3mil = dataState.map(obj => obj.t)
    last3mil = last3mil.slice(-3000)

    const data = {
        labels: last3mil,
        datasets: [
          {
            data: last3000,
            borderColor: "blue",
            pointRadius: 1,
            fill: true, 
            background: "linearGradient(176deg, rgba(47,144,221,1) 0%, rgba(245,248,249,1) 45%)"
        }
    ],
      };
  return (
    <Line data={data} options={options} />
  )
}

export default Graphic