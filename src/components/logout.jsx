import { Component } from 'react';
import { logoutUser } from '../services/authUser';

class Logout extends Component {
    componentDidMount() {
        logoutUser()
        window.location="/mobiles"
    }

    render(){
        return null
    }
    
}

export default Logout;