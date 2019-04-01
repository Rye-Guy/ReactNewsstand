import axios from 'axios';
import api_tools from '../coolstuff.js'
export const FETCH_PUBS = 'FETCH_PUBS'
export const FETCH_EMBED_HTML = 'FETCH_EMBED_HTML'

export function getPublications(){
    
     
    console.log(api_tools)
    let additional_params = {format:'json'}
    let params = new api_tools.create_base_parameters_obj('issuu.document_embeds.list', api_tools.api_key, additional_params)
    console.log(params)
    let api_call = api_tools.add_custom_params(params)
    const request = api_tools.call_issuu(api_call)
    

    console.log('Request: ', request)
    return {
        type: FETCH_PUBS,
        payload: request
    }

}

export function getHTMLSnippet(){
    let additional_params = {embedId: 52719718}
    let params = new api_tools.create_base_parameters_obj('issuu.document_embed.get_html_code', api_tools.api_key, additional_params)
    console.log(params)
    let api_call = api_tools.add_custom_params(params)
    const request = api_tools.call_issuu(api_call).then((data)=>{
        return data.data
        })
    return {
            type: FETCH_EMBED_HTML,
            payload: request,
        };    
    

   
}