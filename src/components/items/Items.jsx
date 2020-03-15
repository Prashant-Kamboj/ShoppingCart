import React, { PureComponent } from "react";
import "./Items.css";
import {connect} from 'react-redux';

class Items extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: []
    };
  }
  componentDidMount() {
      const { allItems } = this.props
    fetch("https://api.myjson.com/bins/qzuzi")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          list: data
        });
        allItems(data);
      });
  }

  addToCart = (e) =>{
      const { addItem, itemList } = this.props;
    //   console.log(e.target.id)
      const item = itemList[e.target.id];
      const discountAmount = Math.floor((item.price*item.discount)/100);
      const newItem = {...item, discountAmount: discountAmount};
      addItem(newItem);
    //   console.log(item);
  }

  render() {
      const { itemList } = this.props;
    return (
      <div className="row" style={{ marginLeft: "0" }}>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="visible-lg visible-md visible-sm">
            <div className="items">
              {itemList.map((ele, index) => {
                return (
                  <div key={ele.id} className="item-card">
                    <div className="img" style={{}}>
                      <img
                        src={ele.img_url}
                        alt={ele.category}
                        style={{
                          width: "100%",
                          height: "350px",
                          backgroundColor: "grey"
                        }}
                      />
                    </div>
                    <div style={{ paddingRight: "19rem" }}>
                      <p>{ele.name}</p>
                    </div>
                    <div className="item-price">
                      <p className="price-item">&#8377;{ele.price}</p>
                      <p className="actual-price">
                        {Math.floor(
                          ele.price + (ele.price * ele.discount) / 100
                        )}
                      </p>
                      <p className="discount">{ele.discount}% off</p>
                    </div>
                    <div className="cart-add-btn">
                      <button className="add-btn" id={index} onClick={this.addToCart}>Add to Cart</button>
                    </div>
                  </div>
                );
              })}
              {/* {this.state.list.map((ele, index) => {
                return (
                  <div key={ele.id} className="item-card">
                    <div className="img" style={{}}>
                      <img
                        src={ele.img_url}
                        alt={ele.category}
                        style={{
                          width: "100%",
                          height: "350px",
                          backgroundColor: "grey"
                        }}
                      />
                    </div>
                    <div style={{ paddingRight: "19rem" }}>
                      <p>{ele.name}</p>
                    </div>
                    <div className="item-price">
                      <p className="price-item">&#8377;{ele.price}</p>
                      <p className="actual-price">
                        {Math.floor(
                          ele.price + (ele.price * ele.discount) / 100
                        )}
                      </p>
                      <p className="discount">{ele.discount}% off</p>
                    </div>
                    <div className="cart-add-btn">
                      <button className="add-btn" id={index} onClick={this.addToCart}>Add to Cart</button>
                    </div>
                  </div>
                );
              })}
              {this.state.list.map((ele, index) => {
                return (
                  <div key={ele.id} className="item-card">
                    <div className="img" style={{}}>
                      <img
                        src={ele.img_url}
                        alt={ele.category}
                        style={{
                          width: "100%",
                          height: "350px",
                          backgroundColor: "grey"
                        }}
                      />
                    </div>
                    <div style={{ paddingRight: "19rem" }}>
                      <p>{ele.name}</p>
                    </div>
                    <div className="item-price">
                      <p className="price-item">&#8377;{ele.price}</p>
                      <p className="actual-price">
                        {Math.floor(
                          ele.price + (ele.price * ele.discount) / 100
                        )}
                      </p>
                      <p className="discount">{ele.discount}% off</p>
                    </div>
                    <div className="cart-add-btn">
                      <button className="add-btn" id={index} onClick={this.addToCart}>Add to Cart</button>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addItem: (item) => dispatch({type:"ADD_TO_CART", item}),
    allItems: (list) => dispatch({type:"ALL_ITEMS", list})
})

const mapStateToProps = (state, ownProps) => ({
    itemList: state.allItems

})

export default connect(mapStateToProps, mapDispatchToProps)(Items);
