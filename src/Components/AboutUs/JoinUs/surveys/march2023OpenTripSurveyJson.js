var march2023OpenTripSurveyJson = {
  pages: [
    {
      name: 'march2023',
      elements: [
        {
          type: 'rating',
          name: 'TripLikelyhood',
          title:
            'How likely are you of joining us on a trip March 1st 2023 ?  (5 most likely)',
        },
        {
          type: 'text',
          name: 'FullnameQuestion',
          visibleIf: '{TripLikelyhood} notempty',
          title: 'What is your full name? ',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'EmailQuestion',
          visibleIf: '{TripLikelyhood} notempty',
          title: 'What is your email address?',
          isRequired: true,
          validators: [{ type: 'email', text: 'Please enter valid email' }],
        },
      ],
    },
  ],
}

export default march2023OpenTripSurveyJson
