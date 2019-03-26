import axios from 'axios';
import api_tools from '../coolstuff.js'
export const FETCH_PUBS = 'FETCH_PUBS'
export const FETCH_EMBED_HTML = 'FETCH_EMBED_HTML'

export function getPublications(){
    
    
    console.log(api_tools)
    let additional_params = {format:'json', pageSize: 30}
    let params = new api_tools.create_base_parameters_obj('issuu.document_embeds.list', api_tools.api_key, additional_params)
    console.log(params)
    let api_call = api_tools.add_custom_params(params)
    api_tools.call_issuu(api_call)
    

}

export function getHTMLSnippet(){
    const url = `${urls.html_embed}`
    const request = axios({
        method: 'get',
        url: url,
        headers: {'Content-Type': 'text/html'}
        
    })
    console.log('Request: ', request)
    return {
        type: FETCH_EMBED_HTML,
        payload: request
    };
}