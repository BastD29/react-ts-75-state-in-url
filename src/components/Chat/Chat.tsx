import { FC, useState } from "react";
import style from "./Chat.module.scss";

const Chat: FC = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const apiUrl = "https://api.openai.com/v1/chat/completions";
      const apiKey = import.meta.env.VITE_API_KEY;
      console.log("apiKey:", apiKey);

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };
      console.log("headers:", headers);

      const requestBody = {
        messages: [{ role: "user", content: input }],
        model: "gpt-3.5-turbo",
      };
      console.log("requestBody:", requestBody);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log("data:", data);
      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className={style["chat"]}>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;
