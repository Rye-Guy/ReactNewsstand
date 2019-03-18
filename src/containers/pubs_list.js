import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getPublications} from '../actions/index'

class PubsList extends Component{
    constructor(props){
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onFormSubmit(ev){
        ev.preventDefault()
        getPublications()
    }

    render(){
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <input type="submit" value="Get code"/>
          </form>
        </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getPublications}, dispatch);
}

export default connect(null, mapDispatchToProps)(PubsList)