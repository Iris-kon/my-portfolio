import axios from 'axios'

const { REACT_APP_STRAPI_TOKEN } = process.env

export const api = axios.create({
  baseURL: 'https://strapi-production-6a86.up.railway.app/',
  headers: {
    Authorization: `bearer ${REACT_APP_STRAPI_TOKEN}`
  }
})
