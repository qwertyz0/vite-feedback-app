import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom"; //redirect to page
import NotFound from "../pages/NotFound";

function Post() {
  //   const params = useParams(); //reacr-router-dom hook for grab parametr from url
  const status = 200;
  const navigate = useNavigate(); // hook for navigate

  const onClick = () => {
    console.log("Hello");
    navigate('/about')
  };

  if (status === 404) {
    return <Navigate to={<NotFound />} />;
  }

  return (
    <div>
      {/* <h1>POST {params.id}</h1>
      <p>Name: {params.name}</p> */}
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello hiden text</h1>}/> {/* show hiden text if 'show' in link url */}
      </Routes>
    </div>
  );
}

export default Post;
