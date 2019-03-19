import { FETCH_PUBS, FETCH_EMBED_HTML} from '../actions/index';

export default function(state = [], action){
    console.log('Action Received', action)
    switch (action.type){
        case FETCH_PUBS:

        return [action.payload.data, ...state]

        case FETCH_EMBED_HTML:
        
        return [action.payload.data, ...state]
    }
    return state;
}