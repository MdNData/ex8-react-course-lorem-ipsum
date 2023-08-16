import { useState } from "react";
import { Form } from "./assets/components/form/Form";
import text from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [paragraph, setParagraph] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraph(text.slice(0, count));
  };

  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <Form count={count} setCount={setCount} handleSubmit={handleSubmit} />
      <article className="lorem-text">
        {paragraph.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
