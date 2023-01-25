function Children() {
  return (
    <div>
      <h1>App Component</h1>
      <New>
        <Extra />
      </New>
      <New>
        <h3>Some random component</h3>
      </New>
    </div>
  );
}

function New(props) {
  return (
    <div style={{ background: "green" }}>
      <h1>This is my new component</h1>
      {props.children}
    </div>
  );
}

function Extra() {
  return (
    <div style={{ background: "lightblue", border: "1px solid green" }}>
      <h1 style={{ background: "yellow" }}>Extra Component</h1>
    </div>
  );
}

export default Children;
