import Editor, { useMonaco, loader } from "@monaco-editor/react";
import React, { useEffect } from "react";
import { useState } from "react";
import * as monaco from 'monaco-editor'

loader.config({ monaco });

export const MonacoEditor = () => {


  useEffect(() => {
    monaco.init()

    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    if (monaco) {
      console.log("here is the monaco instance:", monaco);
    }
  }, [monaco]);

  const [fileName, setFileName] = useState("about.ts");
  const files = {
    "about.ts": {
      name: "script.js",
      language: "javascript",
      value: "let abcd = 1",
    },
    "experience.md": {
      name: "experience.md",
      language: "markdown",
      value: "#My experience",
    },
  };
  const file = files[fileName];
  return (
    <div id='container'>
      <Editor
        height="90vh"
        path={file.name}
        theme="vs-dark"
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </div>
  );
};
