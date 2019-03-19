import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getPublications, getHTMLSnippet} from '../actions/index'

class PubsList extends Component{
    constructor(props){
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onFormSubmit(ev){
        ev.preventDefault()
        getPublications()
    }

    getHTMLForm(ev){
        ev.preventDefault()
        getHTMLSnippet()
    }


    render(){
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <input type="submit" value="Get list"/>
            </form>

            <form onSubmit={this.getHTMLForm}>
            <input type="submit" value="Get html snippet"/>
            </form>
        </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getPublications, getHTMLSnippet}, dispatch);
}

export default connect(null, mapDispatchToProps)(PubsList)