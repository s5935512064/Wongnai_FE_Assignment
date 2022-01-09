import React from "react";
import "./form.css";

const Form = () => {
  return (
    <form>
      <label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="หาที่เที่ยวแล้วไปกัน...."
        />
      </label>
    </form>
  );
};

export default Form;
