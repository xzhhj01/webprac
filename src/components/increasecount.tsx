import React, { useState } from "react";

function Counter() {
  const [i_count, setCount] = useState(0); // 카운트 상태
  const [increment, setIncrement] = useState(1); // 증가할 값 상태
  // 증가하는 함수
  const handleIncrease = () => {
    setCount(i_count + increment);
  };
  // 증가할 값을 입력받는 함수
  const handleIncrementChange = (e) => {
    setIncrement(Number(e.target.value)); // 입력 값을 숫자로 변환
  };

  return (
    <div>
      <h2>현재 카운트: {i_count}</h2>
      <input
        type="number"
        value={increment}
        onChange={handleIncrementChange}
        placeholder="증가할 값을 입력하세요"
      />
      <button onClick={handleIncrease}>증가</button>
    </div>
  );
}

export default Counter;
