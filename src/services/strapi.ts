import axios from 'axios'

const { REACT_APP_STRAPI_TOKEN } = process.env

export const api = axios.create({
  baseURL: 'http://localhost:1337',
  headers: {
    Authorization: `bearer ${REACT_APP_STRAPI_TOKEN}`
  }
})
