import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();
    this.changeViews = this.changeViews.bind(this);
    this.state = {
      showMainPage: true
    }
  }
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to _name_</h1>
          </header>
        <MuiThemeProvider>
        {this.state.showMainPage && 
          <UsernameAndPassword changeViews={this.changeViews}/>
        }
        {!this.state.showMainPage && 
          <AdminPage/>
        }
        </MuiThemeProvider>
      </div>
    );
  }

  changeViews(event) {
    // Go from main page to admin page.
    this.setState({
      showMainPage: !this.state.showMainPage
    })
  }
}

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
}

class UsernameAndPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangePassword(event) {
    console.log("handle changed called: " + event.target.value);
    this.setState({
      password: event.target.value
    })
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Please enter your username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={this.handleChangeUsername}
        /> <br/>
        <TextField
          hintText="Please enter your password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={this.handleChangePassword}
        /> <br/>
        <RaisedButton label="Log in" style={style} onClick={this.props.changeViews}/>
      </div>
    )
  }
}

const style = {
  width: "50%",
  margin: "15px",
}

export default App;
