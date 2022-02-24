import Editor from "@/components/Editor";
import "braft-editor/dist/index.css";
import "@/styles/index.css";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center items-center min-h-screen p-8 md:px-28">
      <div className="border rounded w-full h-[400px] md:h-[600px]">
        <Editor text={text} setText={setText} />
      </div>
      <textarea
        className="border rounded outline-none p-4 w-full h-[400px] md:h-[600px] "
        value={text}
        readOnly
      />
    </div>
  );
};

export default App;
