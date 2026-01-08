import { http, HttpResponse } from 'msw'

const TypicodeGetHandler = [
  http.get('https://jsonplaceholder.typicode.com/todos/*', () => {
    return HttpResponse.json({
      userId: -1,
      id: -1,
      title: 'MSWによるモックデータ',
      completed: false,
    })
  }),
]

export { TypicodeGetHandler }
