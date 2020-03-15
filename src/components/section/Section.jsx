import React, { Component } from "react";
import Filter from '../filter/Filter';
import Sort from '../sort/Sort';
import Items from '../items/Items';

class Section extends Component {
    constructor(props) {
        super(props);
        
    }
    
  render() {
      const { shoppingList } = this.props;
    return (
      <div className="main">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6 filter">
          <Filter/>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-6" style={{borderLeft: '1px solid rgb(221, 217, 217)'}}>
          <Sort/>
          <div className="items_list">
          <Items/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
