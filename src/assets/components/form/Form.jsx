export const Form = ({ count, setCount, handleSubmit }) => {
  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="">Paragraphs :</label>
      <input
        type="number"
        min={1}
        max={8}
        step={1}
        value={count}
        onChange={handleCountChange}
      />
      <button className="btn">Generate</button>
    </form>
  );
};
