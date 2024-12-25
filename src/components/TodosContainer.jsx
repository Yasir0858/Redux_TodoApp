import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodosContainer = () => {
  const { allTodos } = useSelector((state) => state.todos);

  return (
    <div className="my-5 grid md:grid-cols-3 gap-4">
      {allTodos.map((todo) => (
        <TodoCard key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosContainer;
