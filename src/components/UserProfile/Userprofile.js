import React, { Component } from 'react'



class UserProfile extends Component {
    state = {  }
    render() { 
        console.log(this.props)
        return ( 
            <div>
                <p>Profile page</p>
            </div>
         );
    }
}
 
export default UserProfile;