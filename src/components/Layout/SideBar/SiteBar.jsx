import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './SiteBar.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as typesAction from '../../../redux/ducks/types';


const mapStateToProps = (state)=>({types:state.types,loading:state.loading && state.loading.get('typesIsLoading')});
const mapDispatchToProps = (dispatch)=>bindActionCreators(typesAction,dispatch);

class SiteBar extends Component {
    componentDidMount(){
        if(!this.props.types.size) this.props.fetchTypes();
    }
    render() {
        return (
            <ul className="SiteBar">
                <li className="category-title">Categories:</li>
                {this.props.loading && (<div className="loading"></div>)}
                {
                    this.props.types.map((item)=>(
                        <li key={item.get('id')}>
                            <Link to={`/${item.get('title').toLowerCase()}`}>{item.get('title')}</Link>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SiteBar);