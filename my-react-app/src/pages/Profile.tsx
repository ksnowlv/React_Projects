import React from 'react';


interface UserInfoProps {
  name: string;
  imageUrl: string;
}

const Profile: React.FC<UserInfoProps> = ({ name, imageUrl }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img
        className="avatar"
        src={imageUrl}
        alt={'Photo of ' + name}
        style={{
          width: 90,
          height: 90
        }}
      />

      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}

export default Profile;
