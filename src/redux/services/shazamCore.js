import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '22e3ee9ae2msh01377fa93cebad4p1ca4e7jsnc63c5f8d44be',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','22e3ee9ae2msh01377fa93cebad4p1ca4e7jsnc63c5f8d44be')
            return headers
        }
    }),
    endpoints: (builders) => ({
        getTopCharts: builders.query({
            query: () => '/charts/world'
        })
    })
})

export const {
    useGetTopChartsQuery
} = shazamCoreApi