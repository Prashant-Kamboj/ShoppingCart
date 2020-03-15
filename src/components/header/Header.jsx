import React, { Component } from "react";
import "./Header.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faStar
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { count } = this.props;
    return (
      <div className="row header-top">
        <header className="col-md-12 col-lg-12 col-sm-12 col-xs-12 header">
          <FontAwesomeIcon
            icon={faStar}
            size="3x"
            style={{
              color: "yellow",
              padding: '.5rem',
                margin: '.3rem',
              position: "absolute",
              left: "0"
            }}
          />
          <div className="search">
          <div className="search-bar">
            <input value="Search" style={{background:'transparent', border: 'none', outline:'none', height:'27px', width:'179px', marginRight:'21px'}}></input>
            </div>
            <FontAwesomeIcon
              icon={faSearch}
              size="3x"
              style={{ color: 'white',
              padding: '.8rem',
              margin: '.3rem', cursor: 'pointer' }}
            />
            
          </div>
          <div className="cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="cart"
              size="3x"
              style={{
                color: 'white',
                padding: '.8rem',
                margin: '.3rem',
                cursor: 'pointer'
              }}
            />
            {count !== 0 ? (
              <div className="add-to-cart">
                <p className={count.toString().length>1 ? "large_count" : "small_count" }>{count}</p>
              </div>
            ) : null}
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.itemCount
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);
