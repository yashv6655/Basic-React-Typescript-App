import React, { useRef, useState } from "react";

interface TextFieldProps {
  text: string;
  ok?: boolean; // optional field
  i?: number; //optional field
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Person {
  firstName: string;
  lastName: string;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<TextFieldProps> = ({ handleChange }) => {
  const [count, setCount] = useState<TextNode>({ text: "Hello" });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input value="hello" ref={inputRef} onChange={handleChange} />
    </div>
  );
};
