import React, { Component } from 'react'
import DupeErrorDisplay from './DupeErrorDisplay.js'
class AddNewUser extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        addDisabled: true,
        dupeError: false
    }


    determineIfCanAdd = () => {
        if (this.state.firstName !== "" && this.state.lastName !== "" && this.state.username !== "") {
            if (!this.hasDuplicate(this.state.username)) {

                return false;
            }
        }
        return true;
    }

    hasDuplicate = (input) => {
        return ((this.props.userList.find(user => user === input))) 
    }

    handleFirstNameChange = (event => {
        this.setState({ firstName: event.target.value });
    })
    handleLastNameChange = (event => {
        this.setState({ lastName: event.target.value });
    })
    handleUsernameChange = (event => {
        this.setState({ username: event.target.value });
    })
    handleAddButton = ((event) => {
        event.preventDefault();
        this.props.AddNewUser(this.state.username);
        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            addDisabled: true
        })
    })
    render() {
        return (
            <div>
                <div hidden={!this.hasDuplicate(this.state.username)} ><DupeErrorDisplay dupeError={this.state.dupeError} /></div>
                <div>
                    <p>
                        <input
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={(event) => this.handleFirstNameChange(event)}
                        ></input>

                    </p>
                    <p>
                        <input
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={(event) => this.handleLastNameChange(event)}
                        ></input>

                    </p>
                    <input
                        placeholder="Username"
                        value={this.state.username}
                        onChange={(event) => this.handleUsernameChange(event)}
                    ></input>
                </div>

                <div >
                    <button
                        disabled={this.determineIfCanAdd()}
                        onClick={(event) => this.handleAddButton(event)}
                    >Add User</button>

                </div>
            </div>
        )
    }

}

export default AddNewUser