import axios from 'axios';
import ROOT_URL from '../coolstuff.js'
export const FETCH_PUBS = 'FETCH_PUBS'

export function getPublications(){
    const url = `${ROOT_URL}`
    console.log(url)
    const request = axios.get(url)
    console.log('Request: ', request)
    return {
        type: FETCH_PUBS,
        payload: request
    };
}