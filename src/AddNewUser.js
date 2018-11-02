import React, { Component } from 'react'
class AddNewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            addDisabled : true
        }
        
        this.determineIfCanAdd = this.determineIfCanAdd.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    determineIfCanAdd = () => {
        if (this.state.firstname !== "" && this.state.lastName !== "" && this.state.username !== "") {
            if (!this.props.hasDuplicate(this.state.username)) {
              
                return false;
            }
        }
        return true;
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
    handleAddButton = (event) => {
        event.preventDefault();
        this.props.AddNewUser(this.state.username);
        this.setState ({
            firstName: "",
            lastName: "",
            username: "",
            addDisabled : true
        })
    }
    render() {
        return (
            <div>
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
                    disabled = {this.determineIfCanAdd()}
                    onClick = {(event) => this.handleAddButton(event)}
                    >Add User</button>

                </div>
            </div>
        )
    }

}

export default AddNewUser