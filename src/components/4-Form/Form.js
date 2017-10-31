import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';


class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {

        console.log(event);
        const formObject = this.state;
        console.log(formObject);


      axios.post('/api/createForSaleForm', formObject)
      .then(response => {
        console.log(response);
      })

    }
  
    render() {
      return (

        <div>
        <form >


          <div className="title-form-box">
          <label>
            Title: 
            <input className="" type="text" onChange={ (event) => this.setState({ title: event.target.value })}/>
          </label>
          </div>


          <br/>
          <label>
            Tag:
            <input type="text" onChange={ (event) => this.setState({ tag: event.target.value })}/>
          </label>
          <br/>
          <label>
            Price:
            <input type="text" onChange={ (event) => this.setState({ price: event.target.value })}/>
          </label>
          <br/>
          <label>
            Description:
            <textarea type="text" onChange={ (event) => this.setState({ description: event.target.value })}/>
          </label>
          <br/>
          <label>
            Condition:
            <input type="text" onChange={ (event) => this.setState({ condition: event.target.value })}/>
          </label> 
          <br/>
          <label>
            Location:
            <input type="text" onChange={ (event) => this.setState({ location: event.target.value })}/>
          </label>
          <br/>
          <label>
            Make:
            <input type="text" onChange={ (event) => this.setState({ make: event.target.value })}/>
          </label>
          <br/>
          <label>
            Model:
            <input type="text" onChange={ (event) => this.setState({ model: event.target.value })}/>
          </label>
          <br/>
          <label>
            Size:
            <input type="text" onChange={ (event) => this.setState({ size: event.target.value })}/>
          </label>
          <br/>
          
        </form>
        <button type="submit" onClick={ (event) => this.handleSubmit(event) }>Submit</button>

        </div>
      );
    }
  }

  export default Form;