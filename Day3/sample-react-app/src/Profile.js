import React from "react";

function Profile(props) {
    let username=props.username;
    let age=props.age;
  
  return (
    <div>
      <p>Name: {username},Age: {age}</p>
    </div>
  );
}


export function Picture(props) {
  let url=props.url;
      return (
    <div>
      <img src={url} width="100" height="100" />
    </div>
  );
}

export default Profile;
