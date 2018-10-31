import React, { Component } from 'react'

class AddNewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            username: ""
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }
    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });
    }
    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }
    handleAddButton(event) {

    }
    render() {
        return (
            <div>
                <div>
                <p>
                    <input
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                    ></input>

                    </p>
<p>
                    <input
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                    ></input>

</p>
                    <input
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    ></input>
                </div>
                <div >
                    <button

                    >Add User</button>

                </div>
            </div>
        )
    }

}

export default AddNewUser