import React from 'react';
import imgAvatar from "./images/profile-photo.png";

function Avatar() {
    return (
        <img src={imgAvatar} className="avatar" alt="profile-image" />
    )
}

export default Avatar;