import { http, HttpResponse } from 'msw'

export const JmaGetHandler = [
  http.get('https://www.jma.go.jp/bosai/forecast/data/forecast/*.json', () => {
    return HttpResponse.json([
      {
        publishingOffice: 'Mock気象庁',
        reportDatetime: '2026-01-08T11:00:00+09:00',
        timeSeries: [],
      },
      {
        publishingOffice: 'Mock気象庁',
        reportDatetime: '2026-01-08T11:00:00+09:00',
        timeSeries: [],
        tempAverage: {
          areas: [],
        },
        precipAverage: {
          areas: [],
        },
      },
    ])
  }),
]
