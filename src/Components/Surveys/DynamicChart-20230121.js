import React, { useState, useEffect, ComponentState } from 'react'
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
function DynamicChart({
  tripName,
  tripLabels,
  tripMessage,
  AllTripData,
  tripId,
}) {
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [loadCharts, setLoadCharts] = useState(AllTripData)

  const [chartOptions, setChartOptions] = useState({})

  const [tripData, setTripData] = useState([])

  const [labelsObj, setLabelsObj] = useState([])

  const dataSetObj = []

  const getTripData = (openTrips, tripName) => {
    const tripLikelyHoodArr = []
    openTrips.map((data) => {
      if (data.tripName === tripName) tripLikelyHoodArr.push(data)
    })
    return tripLikelyHoodArr.sort()
  }

  const addChartData = () => {
    setChartData({
      labels: tripLabels,
      datasets: [
        {
          label: tripName,
          data: dataSetObj,
          borderWidth: 1,
          borderColor: 'rgb(196, 65, 65)',
          backgroundColor: 'rgba(220, 53, 69, 1)',
        },
      ],
    })
    setChartOptions({
      indexAxis: 'y',
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      scales: { x: { grid: { display: false } } },
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: tripMessage,
          font: {
            size: '25vw',
            family: 'Montserrat',
          },
        },
      },
    })
  }

  const checkOccurrence = (array, element) => {
    let counter = 0
    array.map((data) => {
      if (parseInt(data.surveyResponse.TripLikelyhood) === element) counter++
    })
    return counter
  }

  const renderAggregateCounts = () => {
    setLabelsObj(tripLabels)

    labelsObj.map((label) => {
      dataSetObj.push(checkOccurrence(tripData, label))
    })

    return
  }

  const aggregateTripCounts = async () => {
    console.log(tripData)
    renderAggregateCounts()
    addChartData()

    return
  }

  useEffect(() => {
    console.log('in dynamic use effect')
    console.log('')

    console.log(tripName)

    setTripData(getTripData(AllTripData, tripId))

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
    <div style={{ maxHeight: '50vw' }}>
      <Bar options={chartOptions} data={chartData} />
    </div>
  )
}
export default DynamicChart