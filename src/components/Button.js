export default function Button({onAdd, text}) {
  return (
    <>
      <button onClick={onAdd}>{text}</button>
    </>
  );
}
