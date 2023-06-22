import React from 'react';
import Face2Icon from '@mui/icons-material/Face2';


const Profile = () => {
  return (
    <div className='profile'>
      <div className="profile_img">
        <Face2Icon sx={{width: '100px', height: '100px'}} />
      </div>
      <div className="name">Monica Gamage</div>
    </div>
  )
}

export default Profile