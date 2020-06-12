import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BusinessCard from './businessCard';
import { connect } from 'react-redux';
class BusinessList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Grid container spacing={1}>
                {this.props.business.map((item, i) =>
                    this.props.filteredPrice.includes(item.price) &&
                    <BusinessCard key={i} name={item.name} img={item.image_url} review={item.review_count}
                        price={item.price} location={item.location} />


                )}


            </Grid>


        );
    }
}
export default connect(() => state => {
    return {
        business: state.business.businesses,
        filteredPrice: state.business.priceFilter


    };
},
)(BusinessList);
