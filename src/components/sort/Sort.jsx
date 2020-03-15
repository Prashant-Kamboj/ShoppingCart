import React, { Component } from "react";
import "./Sort.css";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByHigh: false,
      sortByLow: false,
      sortByDis: false
    };
  }

  handleHighClick = () => {
    const { sortByHigh } = this.state;
    // sortByHigh ? this.setState({
    //   sortByHigh: false
    // }) :
    this.setState({
      sortByDis: false,
      sortByHigh: true,
      sortByLow: false
    })
  }

  handleLowClick = () => {
    const { sortByLow } = this.state;
    // sortByLow ? this.setState({
    //   sortByLow: false
    // }) : 
    this.setState({
      sortByDis: false,
      sortByHigh: false,
      sortByLow: true
    })
  }

  handleDiscountClick = () => {
    const { sortByDis } = this.state;
    // sortByDis ? this.setState({
    //   sortByDis: false
    // }) : 
    this.setState({
      sortByDis: true,
      sortByHigh: false,
      sortByLow: false
    })
  }

  render() {
    const { sortByHighToLow, sortByLowToHight, sortByDiscount} = this.props;
    const { sortByLow, sortByHigh, sortByDis } = this.state;
  
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{paddingLeft: '0'}}>
        <div className="visible-xs">
        <div  className="sort-box">
        <span style={{padding:'1rem .5rem'}}><FontAwesomeIcon icon={faSort} className="visible-xs" size="2x"/></span>
        <h4 className="visible-xs" style={{paddingTop:'.4rem', paddingLeft:'.6rem'}}><strong>Sort By</strong></h4>
        </div>
        </div>
          <div className="visible-lg visible-md visible-sm">
            <div className="flex-container">
              <div className="sort_order">
                <h4>
                  <strong>Sort By</strong>
                </h4>
              </div>
              <div className="sort_order">
                <p className={sortByHigh ? "tab_active": "tab"} onClick={() => { 
                  this.handleHighClick()
                  sortByHighToLow()}}>Price -- High Low</p>
              </div>
              <div className="sort_order">
                <p className={sortByLow ? "tab_active": "tab"} onClick={() => {
                  this.handleLowClick()
                  sortByLowToHight()}}>Price -- Low High</p>
              </div>
              <div className="sort_order">
                <p className={sortByDis ? "tab_active": "tab"} onClick={() => {
                this.handleDiscountClick()
                sortByDiscount()}
                }>Discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sortByHighToLow: () => dispatch({type:"SORT_BY_HIGH_LOW"}),
    sortByLowToHight: () => dispatch({type:"SORT_BY_LOW_HIGH"}),
    sortByDiscount: () => dispatch({type:"SORT_BY_DISCOUNT"})
  }
}

export default connect(null, mapDispatchToProps)(Sort);
