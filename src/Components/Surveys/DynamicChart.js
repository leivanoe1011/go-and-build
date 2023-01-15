import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import './tripSurveyWidget.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// I need the trip name
// Also will need to get all the labels - I can pass this as a parameter
function DynamicChart(props) {
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({})
  const [tripData, setTripData] = useState([])
  const labelsObj = []
  const dataSetObj = []

  const addChartData = () => {
    setChartData({
      labels: labelsObj,
      datasets: [
        {
          label: props.tripMessage,
          data: dataSetObj,
          borderWidth: 2,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.4)',
        },
      ],
    })
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: props.tripName,
        },
      },
    })
  }

  const checkOccurrence = (array, element) => {
    let counter = 0
    for (let i = 0; i <= array.length; i++) {
      if (array[i] === element) {
        counter++
      }
    }

    return counter
  }

  const renderAggregateCounts = () => {
    labelsObj.map((label) => {
      dataSetObj.push(checkOccurrence(tripData, label))
    })

    return
  }

  const renderLabels = () => {
    tripData.map((data) => {
      if (!labelsObj.includes(data)) labelsObj.push(data)
    })

    renderAggregateCounts()

    return
  }

  useEffect(() => {
    console.log('in dynamic chart use effect')
    const aggregateTripCounts = async () => {
      setTripData(props.tripData.sort())
      renderLabels()
      addChartData()

      return
    }

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      aggregateTripCounts()
    } else {
      window.addEventListener('load', aggregateTripCounts)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', aggregateTripCounts)
    }
  }, [])

  return (
    <div>
      <Bar options={chartOptions} data={chartData} />
    </div>
  )
}
export default DynamicChart
