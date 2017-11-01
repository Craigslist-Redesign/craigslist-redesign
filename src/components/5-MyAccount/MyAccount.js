import React, { Component } from 'react';

class MyAccount extends Component {
    constructor(props){
        super(props)

        

    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            
                      if (user) {
                        console.log(user);
                        this.setState({ successEmail: user.email })
                        console.log(this.state);
                      }
            
                })
    }

   

    render() {
        return (
            <div> MyAccount Page </div>

        )
    }



}

export default MyAccount;