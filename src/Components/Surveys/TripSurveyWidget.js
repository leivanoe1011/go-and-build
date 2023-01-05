// The widget will intake the Model and also the trip ID
import { React, useCallback } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'

import { Survey } from 'survey-react'
import { StylesManager, Model } from 'survey-core'
// import newYears2022SurveyJson from './surveyConfiguration'

import 'react-toastify/dist/ReactToastify.css'
// Default V2 theme
import 'survey-core/defaultV2.min.css'
// Modern theme
// import 'survey-core/modern.min.css';

import './tripSurveyWidget.css'

StylesManager.applyTheme('defaultV2')

// Here we going to intake the Model and the Trip ID
function TripSurveyWidget({ tripId, surveyConfiguration }) {
  const openTripsCollectionRef = collection(db, 'OpenTrips')

  const addOpenTrips = async (survey) => {
    await addDoc(openTripsCollectionRef, {
      tripName: tripId,
      surveyResponse: survey,
    })
  }

  const alertResults = useCallback((sender) => {
    addOpenTrips(sender.data)
  }, [])

  const survey = new Model(surveyConfiguration)

  survey.onComplete.add(alertResults)

  return <Survey model={survey} />
}

export default TripSurveyWidget
