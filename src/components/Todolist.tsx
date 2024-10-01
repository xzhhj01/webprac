import React, { useState } from "react";

function Todolist() {
  const [todos, setTodos] = useState([]); // 할 일 목록을 저장하는 상태 변수
  const [inputValue, setInputValue] = useState(""); // 입력 필드의 값을 저장하는 상태 변수

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]); // 새로운 할 일을 목록에 추가
      setInputValue(""); // 입력 필드 초기화
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // 해당 인덱스의 아이템 제거
    setTodos(newTodos); // 상태 업데이트
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue} // 입력 필드의 값과 상태를 연결
        onChange={(e) => setInputValue(e.target.value)} // 입력 변경 시 상태 업데이트
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>삭제</button>{" "}
            {/* 아이템 삭제 기능 */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;