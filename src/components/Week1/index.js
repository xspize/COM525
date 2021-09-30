import React from "react";

//function Week1(props) {
//  console.log(props);
//  return <h1>Hello </h1>;
//}

const Week1 = (props) => {
  const { name, location } = props;
  console.log(props);
  return (
    <h1>
      {" "}
      hello {name} you are in {location}{" "}
    </h1>
  );
};

export default Week1;
