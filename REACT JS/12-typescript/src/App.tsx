import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todo-context";
import logo from "./img/Life.png";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
      {/* <img src={require("./img/Life.png")} alt="life " /> */}
      <img src={process.env.PUBLIC_URL + "./img/Life.png"} alt="life " />
    </TodosContextProvider>
  );
}

export default App;
