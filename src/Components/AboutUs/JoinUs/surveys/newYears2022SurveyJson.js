var newYears2022SurveyJson = {
  pages: [
    {
      name: 'newYear2022',
      elements: [
        {
          type: 'rating',
          name: 'TripLikelyhood',
          title:
            'How likely are you of joining us on a trip December 26 2022 ?  (5 most likely)',
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

export default newYears2022SurveyJson
