import useLLM from "usellm";
import { useState } from "react";
 
export default function Demo() {
  const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });
  const [result, setResult] = useState("");
 
  
  async function handleClick() {
    try {
      await llm.chat({
        method: 'POST',
        mode: 'no-cors',
        messages: [{ role: "user", content: "What is a language model?" }],
        stream: true,
        onStream: ({ message }) => setResult(message.content),
      });
    } catch (error) {
      console.error("Something went wrong!", error);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Send</button>
      <div style={{ whiteSpace: "pre-wrap" }}>{result}</div>
    </div>
  );
}
