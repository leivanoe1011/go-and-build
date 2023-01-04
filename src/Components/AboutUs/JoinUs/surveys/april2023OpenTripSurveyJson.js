var april2023OpenTripSurveyJson = {
  pages: [
    {
      name: 'april2023',
      elements: [
        {
          type: 'rating',
          name: 'TripLikelyhood',
          title:
            'How likely are you of joining us on a trip April 15 2023 ?  (5 most likely)',
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

export default april2023OpenTripSurveyJson
