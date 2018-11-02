import React from 'react'
import PropTypes from 'prop-types'

const User = props => {
    return props.username
}

User.propType = { 
    firstName : PropTypes.string.isRequired,
    lastName : PropTypes.string.isRequired,
    username : PropTypes.string.isRequired
}

export default User