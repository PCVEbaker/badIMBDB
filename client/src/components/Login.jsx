import React from 'react';

const styles = {
  margin: "auto",
  textAlign: "center",
  marginTop: "200px"
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  updatePasswordValue(e) {
    this.setState({
      password: e.target.value
    })
  }

  updateUsernameValue(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div style={styles}>
        <h1>Login</h1>
        <p>Username: <input value={this.state.username} onChange={e => this.updateUsernameValue(e)} type="text"/></p>
        <p>Password: <input value={this.state.password} onChange={e => this.updatePasswordValue(e)} type="password"/></p>
        <button onClick={() => {this.props.checkUser({"username": this.state.username, "password": this.state.password})}}>Login</button>
      </div>
    )
  }
}

export default Login