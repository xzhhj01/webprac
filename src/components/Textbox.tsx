import React, { useState } from "react";

function Textbox() {
  const [text, setText] = useState(""); // 상태 변수를 빈 문자열로 초기화

  return (
    <div>
      <input
        type="text"
        value={text} // 입력 필드의 값과 상태를 연결
        onChange={(e) => setText(e.target.value)} // 입력 변경 시 상태 업데이트
        placeholder="텍스트를 입력하세요"
      />
      <p>입력한 내용: {text}</p> {/* 상태 값을 화면에 표시 */}
    </div>
  );
}

export default Textbox;