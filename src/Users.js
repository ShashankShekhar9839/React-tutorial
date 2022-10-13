import React from 'react';

function Users(){
    return(
    <div>

        <h1>
            Hello Brother, you are doing great 
        </h1>
    </div>


    );

    
}

class User extends React.Component{
    render(){
      return(
     <h1>Hello from class user component</h1>
  
  
      )
    }
  }
  export default User;

// export default Users