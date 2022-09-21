import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {followUser, unfollowUser} from '../../actions/UserAction'

const User = ({person}) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const {user} = useSelector((state) => state.authReducer.authData)
    const [following, setFollowing] = useState(person.followers.includes(user._id))
    const dispatch = useDispatch()

    const handleFollow = () => {
        following ? 
        dispatch(unfollowUser(person._id, user)) :
        dispatch(followUser(person._id, user))

        setFollowing((prev)=>!prev)
    }


  return (
    <div className="follower">
        <div>
            <img src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "defaultProfile.png"} alt="" className='followerImg' />
            <div className="name">
                <span>{person.firstname}</span>
                <span>{person.username}</span>
            </div>
        </div>
        <button className={following ? "button fc-button unFollowBtn" : "button fc-button"} onClick={handleFollow}>
            {following? "Unfollow" : "Follow"}
        </button>
    </div>
  )
}

export default User