import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getPublications, getHTMLSnippet} from '../actions/index'

class PubsList extends Component{
    constructor(props){
        let state = []
        super(props)
        console.log(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.getHTMLForm = this.getHTMLForm.bind(this)
    }
    onFormSubmit(ev){
        ev.preventDefault()
        getPublications()
    }

    getHTMLForm(ev){
        console.log(ev)
        console.log(this.props)
        ev.preventDefault()
        let data = getHTMLSnippet()
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

            <div id='data'>

            </div>
        </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getPublications, getHTMLSnippet}, dispatch);
}

export default connect(null, mapDispatchToProps)(PubsList)