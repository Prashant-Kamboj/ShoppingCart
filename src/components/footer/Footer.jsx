import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row">
            <footer className="col-md-12 footer">
            <p style={{margin:'.5rem auto'}}><span style={{paddingRight:'.3rem'}}>&copy;</span>copyright</p>
            </footer>
            </div>
         );
    }
}
 
export default Footer;