import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Section from './components/section/Section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: []
     }
  }

  componentDidMount(){
    fetch("https://api.myjson.com/bins/qzuzi")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      this.setState({
        list: data
      })
    });
  }

  render() { 
    const { list } = this.state;
    return ( 
      <div className="container-fluid App">
      <Header/>
      <Section shoppingList={list}/>
      <div className="mob-view visible-xs">
      <div className="mob-item-list">
      </div>
      </div>
      <Footer/>
    </div>
     );
  }
}
 
export default App;

