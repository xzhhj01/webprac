import React, { useState } from "react";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);



  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        {isChecked ? "Checked" : "Not Checked"}
      </label>
    </div>
  );
}

export default Checkbox;
