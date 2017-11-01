import React, { Component } from 'react';
import firebase from '../../firebase.js';
import axios from 'axios';

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

          const uid = user.uid
          console.log(uid)
         
          axios.get('/api/getUserPosts/' + uid).then((response) => {
            console.log(response)
        })

        })

        
        
        // axios.get('/api/getItems/' + uid ).then((res) => {
        //     console.log(res)
        // })
            
        // axios.post('/api/getUserPost/' + ).then((response) => {
        //     console.log(response)
        // })
    



    }
            

    render() {
        return(
            <div> <h1>My Account </h1></div>
        )
    }


}


export default MyAccount;

// firebase.auth().onAuthStateChanged(user => {
    
//               if (user) {
//                 console.log(user);
//                 this.setState({ successEmail: user.email })
//                 console.log(this.state);
//               }
    
//             })

// this.setState({ userUid: user.uid })