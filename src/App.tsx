import { useState } from "react";

function App() {
  const [value, setValue] = useState("")
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value); // 상태 업데이트
    const { currentTarget: { value } } = event;
    setValue(value)
  };
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value)
  }
   
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username" />
        <button>Log in</button>
      </form>
    </div>
  )
}

export default App;
