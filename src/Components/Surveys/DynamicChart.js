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

// Firebase
import { rt_db as db } from '../../firebase-config'
import { update, onValue, ref } from 'firebase/database'
// Firebase

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// I need the trip name
// Also will need to get all the labels - I can pass this as a parameter
function DynamicChart(props) {
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const dbRef = ref(db, '/tripSurvey/joinUsSurvey/')

  const { tripId, tripName, tripMessage, tripLabels, done } = props

  const [openTrips, setOpenTrips] = useState([])

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

    setTripData(getTripData(openTrips, tripId))

    renderAggregateCounts()

    addChartData()

    return
  }

  // We need to use this function to either return Survey graph or NULL
  const activeGraphBar = (tripId) => {
    console.log('In active graph function')
    console.log('In active graph function')

    console.log(tripId)
    let counter = 0
    openTrips.map((item) => {
      if (item.tripName === tripId) counter++
    })

    console.log(counter)

    return counter
  }

  const getOpenTrips = async () => {
    onValue(dbRef, (data) => {
      var openTripSurveys = data.val()
      setOpenTrips(openTripSurveys)
      aggregateTripCounts()
      done(true)
    })

    console.log('after get open trips')
    console.log(openTrips)
  }

  useEffect(() => {
    console.log('in dynamic use effect')

    console.log(tripName)

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      getOpenTrips()
    } else {
      window.addEventListener('load', getOpenTrips)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', getOpenTrips)
    }
  }, [])

  return (
    <>
      {activeGraphBar(tripId) > 3 ? (
        <div style={{ maxHeight: '50vw' }}>
          <Bar options={chartOptions} data={chartData} />
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}
export default DynamicChart
