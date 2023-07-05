import React from "react";
import CodeSnippet from "./CodeSnippet";

function HomePage() {

  const csharpCode = `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, world!");
    }
}`;



  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Flux, and React Router for ultra-responsive web apps.</p>
      <a href="/about">About</a>
      <div>
      <h1>C# Code Snippet</h1>
      <CodeSnippet code={csharpCode} />
    </div>
    </div>
    
  );
}

export default HomePage;
