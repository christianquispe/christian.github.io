import React from "react";
const Main: React.FC = (props) => {
  return (
    <main>
      <div>{props.children}</div>
    </main>
  );
};
export default Main;
