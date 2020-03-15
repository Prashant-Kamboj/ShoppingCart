import React, { Component } from "react";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Slider } from "@material-ui/core";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 100,
      max: 1000,
      valueRange: [],
    }
  }

  handleSliderValue = (event) => {
    const valueRange = []
    let index = event.target.getAttribute('data-index');
    valueRange[index] = event.target.getAttribute('aria-valuenow');
    console.log(event.target)
    this.setState({
      valueRange: valueRange
    })

  }
  
  render() {
    const { min, max, valueRange } = this.state;
    return (
        <React.Fragment>
            <div className="filter_body">
              <FontAwesomeIcon
                icon={faFilter}
                className="visible-xs"
                size="3x"
                style={{ padding: "1rem .5rem", margin: "0rem" }}
              />
              <h4>
                <strong>Filters</strong>
              </h4>
            </div>
            <div className="visible-md visible-lg visible-sm filter-container">
            <div className="price-header">
            <p style={{color:'grey'}}><strong>&#8377;{min}</strong></p>
             <p style={{color:'grey'}}><strong>&#8377;{max}</strong></p>
             </div>
              <div className="slider">
                <Slider
                  min={min}
                  max={max}
                  defaultValue={[100, 1000]}
                  onChangeCommitted={this.handleSliderValue}
                  getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
                  aria-labelledby="range-slider"
                />
              </div>
              <div className="price">
              <p style={{color:'grey', fontWeight:"bold", marginTop:'-.4rem'}}><strong>Price</strong></p>
              </div>
              <div className="apply_button">
              <button className="apply_btn">Apply</button>
              </div>
            </div>
            </React.Fragment>
    );
  }
}

export default Filter;
