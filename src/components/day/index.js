function Day({ number }) {
  return (
    <div className="day" onClick={() => alert(number)}>
      {number}
    </div>
  );
}

export default Day;
