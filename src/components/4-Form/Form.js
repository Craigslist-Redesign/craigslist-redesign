import React, {Component} from 'react';
import axios from 'axios';


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
        const title = this.state.title;
        const tag = this.state.tag;
        // const price = this.state.price;
        // const description = this.state.description;
        // const condition = this.state.condition;


      axios.post('/api/createForSaleForm', [title, tag])
      .then(response => {
        console.log(response);
      })

    }
  
    render() {
      return (

        <div>
        <form >
          <label>
            Title:
            <input type="text" onChange={ (event) => this.setState({ title: event.target.value })}/>
          </label>
          <label>
            Tag:
            <input type="text" onChange={ (event) => this.setState({ tag: event.target.value })}/>
          </label>
          {/* <label>
            Price:
            <input type="text" onChange={ (event) => this.setState({ price: event.target.value })}/>
          </label>
          <label>
            Description:
            <input type="text" onChange={ (event) => this.setState({ description: event.target.value })}/>
          </label>
          <label>
            Condition:
            <input type="text" onChange={ (event) => this.setState({ condition: event.target.value })}/>
          </label>  */}
          
        </form>
        <button type="submit" onClick={ (event) => this.handleSubmit(event) }>Submit</button>

        </div>
      );
    }
  }

  export default Form;