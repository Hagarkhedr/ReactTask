import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import BusinessService from './service';
import SortIcon from '@material-ui/icons/Sort';
import { connect } from 'react-redux';
import actionTypes from '../../statemanager/actionTypes/index';
import PriceFilter from './priceFilter';
class SearchFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            businessName: '',
            location: '',
        }
        this.service = new BusinessService();
    }
    setBusinessName(e) {
        this.setState({
            businessName: e.target.value
        })
    }
    setLocation(e) {
        this.setState({
            location: e.target.value
        })
    }
    Search() {
        if (this.state.businessName && this.state.location) {
            this.service.searchBusiness(this.state.businessName, this.state.location); }
        else {
            alert('Enter Both businessname and location')
        }

    }
    sort() {
        this.props.sort()
    }
    render() {
        return (
            <form style={{ paddingTop: '2vw' }} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Business Name" variant="outlined" onChange={this.setBusinessName.bind(this)} />
                <TextField id="outlined-basic" label="Location" variant="outlined" onChange={this.setLocation.bind(this)} />
                <Button
                    variant="contained"
                    startIcon={<SearchIcon />}
                    onClick={this.Search.bind(this)} >
                    Search
                  </Button>
                <SortIcon onClick={this.sort.bind(this)} />
              <PriceFilter />
            </form>


        );
    }
}
export default connect(null, dispatch => {
    return {
        sort: () => dispatch({ type: actionTypes.SORT }),
    }
}
)(SearchFilter);


