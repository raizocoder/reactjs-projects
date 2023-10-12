import Card from "./Card";
function App() {
  const users = [
    { id: 1, name: "rohit", classes: "A" },
    { id: 2, name: "rony", classes: "B" },
    { id: 3, name: "raizo", classes: "C" },
    { id: 4, name: "raisin", classes: "D" },
  ];
  return (
    <>
      <div>
        {users.map((user) => {
          return(
            <Card key={user.id} name={user.name} class={user.classes}/>
          )
         
        })}
      </div>
    </>
  );
}

export default App;
