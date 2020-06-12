import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionTypes from '../../statemanager/actionTypes/index';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class PriceFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredPrice :-1

        }
    }

    filterPrice(e) 
    {  this.setState({filteredPrice:e.target.value})
       this.props.filterPrice(e.target.value)
    }
    render() {
        return (
               <React.Fragment >
                <InputLabel id="demo-simple-select-label">Prices</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={this.filterPrice.bind(this)}
                    value={this.state.filteredPrice} >
                    <MenuItem value={-1}>All</MenuItem>
                    {
                    this.props.pricesRange.map((item, i) =>
                      <MenuItem key={i}value={i}>{item}</MenuItem> )
                    }
             </Select>
</React.Fragment>

        );
    }
}
export default connect(() => state => {
    return {
        pricesRange: state.business.pricesRange
    };
}, dispatch => {
    return {
        filterPrice: (index) => dispatch({ type: actionTypes.PRICE_FILTER ,payload:index }),
    }
}
)(PriceFilter);


