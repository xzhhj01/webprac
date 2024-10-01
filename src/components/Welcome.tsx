import React from "react";

// Welcome 컴포넌트 정의
function Welcome(props: { name: string }) {
  return (
    <div>
      <h1>Welcome, {props.name}</h1>
    </div>
  );
}

export default Welcome;

