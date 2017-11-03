import React, { Component } from 'react';

class Favorites extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentWillMount(){

        const uid = this.state.props.uid;

        axios.get('/api/getFavorites/' + uid).then((response) => {
            let favorites = response.data

            this.setState({ favorites })

        })

    }

    render(){
        console.log(this);
        return(
            <div>
                <h1>Test</h1>
            </div>
        )
    }

}

export default Favorites