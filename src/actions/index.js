import axios from 'axios';
import urls from '../coolstuff.js'
export const FETCH_PUBS = 'FETCH_PUBS'
export const FETCH_EMBED_HTML = 'FETCH_EMBED_HTML'

export function getPublications(){
    const url = `${urls.root}`
    console.log(urls)
    const request = axios.get(url)
    console.log('Request: ', request)
    return {
        type: FETCH_PUBS,
        payload: request
    };
}

export function getHTMLSnippet(){
    const url = `${urls.html_embed}`
    const request = axios({
        method: 'get',
        url: url,
        headers: {'content-type': 'text/html'}
    })
    console.log('Request: ', request)
    return {
        type: FETCH_EMBED_HTML,
        payload: request
    };
}