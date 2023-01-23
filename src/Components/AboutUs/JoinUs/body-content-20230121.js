const chartSettings = [
  {
    tripId: 'newYear2022',
    tripName: 'New Year 2022',
    tripMessage: 'New Year 2022 Trip Likelyhood',
    tripLabels: [1, 2, 3, 4, 5],
  },
  {
    tripId: 'march2023',
    tripName: 'March 2023 ',
    tripMessage: 'March 2023 Trip Likelyhood',
    tripLabels: [1, 2, 3, 4, 5],
  },
  {
    tripId: 'april2023',
    tripName: 'April 2023',
    tripMessage: 'April 2023 Trip Likelyhood',
    tripLabels: [1, 2, 3, 4, 5],
  },
]

const newYearChart = null
const marchChart = null
const aprilChart = null

useEffect(() => {
  newYearChart = (
    <DynamicChart
      tripId="newYear2022"
      tripName="New Year 2022"
      tripMessage="New Year 2022 Trip Likelyhood"
      tripLabels={[1, 2, 3, 4, 5]}
    />
  )

  marchChart = (
    <DynamicChart
      tripId="march2023"
      tripName="March 2023"
      tripMessage="March 2023 Trip Likelyhood"
      tripLabels={[1, 2, 3, 4, 5]}
    />
  )

  aprilChart = (
    <DynamicChart
      tripId="april2023"
      tripName="April 2023"
      tripMessage="April 2023 Trip Likelyhood"
      tripLabels={[1, 2, 3, 4, 5]}
    />
  )
})
