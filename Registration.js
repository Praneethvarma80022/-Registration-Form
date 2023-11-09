import React, { Component } from 'react';
import './style.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      fathername: '',
      mothername: '',
      Email: '',
      Gender: '',
      address: '',
    };
  }

  validate = () => {
    const {
      fname,
      lname,
      fathername,
      mothername,
      address,
    } = this.state;

    if (!fname) {
      alert('Enter the first name');
      return false;
    }

    if (!lname) {
      alert('Enter the last name');
      return false;
    }

    if (!fathername) {
      alert('Enter the Father Name');
      return false;
    }

    if (!mothername) {
      alert('Enter the Mother Name');
      return false;
    }

    if (!address) {
      alert('Enter the Address');
      return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      // Handle your form submission here
      console.log('Form submitted:', this.state);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='registration' >
  <center><h1>Registration Form</h1></center>
  <center>
  <table>
    <tr>
      <td><label for="fname">First name:</label></td>
      <td><input type="text" id="fname" name="fname" placeholder="Enter First name" value={this.state.fname} onChange={this.handleChange} /></td>
    </tr>
    <tr>
      <td><label for="lname">Last name:</label></td>
      <td><input type="text" id="lname" name="lname" placeholder="Enter Last name" value={this.state.lname} onChange={this.handleChange} /></td>
    </tr>
    <tr>
      <td><label for="fathername">Father name:</label></td>
      <td><input type="text" id="fathername" name="fathername" placeholder="Enter Father name" value={this.state.fathername} onChange={this.handleChange}/></td>
    </tr>
    <tr>
      <td><label for="mothername">Mother name:</label></td>
      <td><input type="text" id="mothername" name="mothername" placeholder="Enter Mother name" value={this.state.mothername} onChange={this.handleChange}/></td>
    </tr>
    <tr>
      <td><label for="Email">Email:</label></td>
      <td><input type="email" id="Email" name="Email" placeholder="example@email.com" value={this.state.Email} onChange={this.handleChange}/></td>
    </tr>
    <tr>
      <td><label for="Gender">Gender:</label></td>
      <td>
      <label class="radio-inline">
      <input type="radio" name="optradio" />Male  </label>
    <label class="radio-inline">
      <input type="radio" name="optradio" />Female
    </label>
      </td>
    </tr>
    <tr>
      <td><label for="Address">Address:</label></td>
      <td><textarea id="address" name="address" cols="50" rows="5" value={this.state.address} onChange={this.handleChange}></textarea></td>
    </tr>
  </table>
  </center>
  
  <div>
    <center>
    <button type="submit" >Submit</button>
    <button type="reset">Reset</button>
    </center>
  </div>

</form>



      
    );
  }
}

export default RegistrationForm;
