import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/monokai-sublime.css';
import csharp from 'highlight.js/lib/languages/csharp';

hljs.registerLanguage('csharp', csharp);

function CodeSnippet (props) {
    const codeRef = useRef(null);
  
    useEffect(() => {
      hljs.highlightBlock(codeRef.current);
    }, []);
  
    return (
      <pre>
        <code ref={codeRef} className="csharp">
          {props.code}
        </code>
      </pre>
    );
  };
  
  export default CodeSnippet;
  