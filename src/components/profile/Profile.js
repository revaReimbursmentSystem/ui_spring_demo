import React, { useState, useEffect } from "react";
import { current_user } from "../data/data";
import { ProfileContainer, ProfileBox } from "./profile-style-component";
import { Navigate } from "react-router-dom";

/******************************
 * Profile Component
 ******************************/
export default function Profile() {
  const [data, setData] = useState([]);
  const [logedOut, setLogedOut] = useState(false);

  useEffect(() => {
    const timeID = setTimeout(() => {
      if (!data.length) {
        setData(current_user);
        console.log('works');
      }
    }, 0);

    return () => {
      clearTimeout(timeID);
    };
  }, [data, logedOut]);

  
  console.log(!data.length);
  console.log(data);
  return (
    <>
    <ProfileContainer>
      <ProfileBox>
        {data.map((item) => {
          return <div style={{ color: "white" }}>{item.first_name}</div>;
        })}
      </ProfileBox>
    </ProfileContainer>
    {}
    </>
    
  );
}
