import React, {Component} from 'react';
import './Extras.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as extrasActions from '../../../redux/ducks/extras';
import * as basketActions from '../../../redux/ducks/basket';

const mapStateToProps = (state)=>({extras:state.extras,loading:state.loading && state.loading.get('extrasIsLoading')});
const mapDispatchToProps = (dispatch)=>bindActionCreators(Object.assign(extrasActions,basketActions),dispatch);

class Extras extends Component {
    componentDidMount(){
        if(!this.props.extras.size && !this.props.loading) this.props.fetchExtras();
    }
    render() {
        return (
            <ul className="Extras">
                <li className="extras-title">Available extras:</li>
                {
                    this.props.extrasIds.map((id)=>{
                        const extrasData = this.props.extras.find((extra)=>extra.get('id')===id);
                        return extrasData ? (
                            <li key={id}>
                                <span className="name">{extrasData.get('title')}</span>
                                <span className="price"> ({extrasData.get('price')}$) </span>
                                <span className="buy" onClick={(e)=>this.props.addBasketItems(extrasData)}> Buy </span>
                            </li>
                            ) : null
                    })
                }
            </ul>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Extras);