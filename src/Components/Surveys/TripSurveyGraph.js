// The widget will intake the Model and also the trip ID
import { React, useEffect, useRef, useState } from 'react'
import DynamicChart from './BarChart'
import { UserData } from './Data'

import './tripSurveyWidget.css'

// Here we going to intake the Model and the Trip ID
function TripSurveyGraph({ tripName, surveyDb }) {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    displayBar()
    setUserData({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: 'Users Gained',
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            'rgba(75,192,192,1)',
            '#ecf0f1',
            '#50AF95',
            '#f3ba2f',
            '#2a71d0',
          ],
          borderColor: 'black',
          borderWidth: 2,
        },
      ],
    })
  }, [])

  const displayBar = () => {
    var data = JSON.stringify(surveyDb)
    return data
  }

  return (
    <div className="barChartDiv">
      <DynamicChart />
    </div>
  )
}

export default TripSurveyGraph
