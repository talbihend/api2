import React from 'react'
import UserElement from './UserElement'

const UserList = ({data}) => {
  return (
    <div className="list-form">
        {data&&
        React.Children.toArray(data.map(el=><UserElement user={el} />))
        }
    </div>
  )
}

export default UserList