import React, { useEffect, useRef } from "react";

const Focus = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div>
      <h2>Input focus</h2>
      <br></br>
      <br />
      <input ref={ref} type="text" placeholder="Enter Something" />
      <br />
      <br />
      <input ref={ref} type="number" placeholder="Enter Something" />
      <br />
      <br />
      <button>Submit</button>
    </div>
  );
};

export default Focus;
