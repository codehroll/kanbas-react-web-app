const hello = () => {
  alert("Hello World!hahaha");
};
const lifeIs = (aaa: string) => {
  alert(`Life is ${aaa}`);
};
export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button onClick={hello} id="wd-hello-world-click">
        Hello World!
      </button>
      <button onClick={() => hello()} id="wd-hello-world-click">
        Hello World2!
      </button>
      <button onClick={() => lifeIs("Good!")} id="wd-life-is-good-click">
        Life is Good!
      </button>
      <button
        onClick={() => {
          hello();
          lifeIs("Great!!!");
        }}
        id="wd-life-is-great-click"
      >
        Life is Great!
      </button>
      <hr />
    </div>
  );
}
