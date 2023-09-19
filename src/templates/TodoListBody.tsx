import { Todopractice } from "@/commons/interfaces/todopractice";
import { Header } from "@/components/Header";
import { TodoList } from "@/components/TodoList";
import { addTask } from "@/services/accessInSupabase";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

interface TodoListBodyProps {
  Todopractice: Todopractice[] | null;
}

export const TodoListBody: React.FC<TodoListBodyProps> = (props) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [todos, setTodos] = useState<Todopractice[] | null>(props.Todopractice);

  const onAddTask = () => {
    addTask(inputTitle, todos, setTodos);
    setInputTitle("");
  };

  return (
    <>
      <Header />
      <div className="lg:w-1/2 w-11/12 mx-auto">
        <div className="mb-5 grid grid-cols-12 items-end">
          <div className="col-span-9 mr-3">
            <Input
              type="text"
              variant="bordered"
              label="タスク"
              labelPlacement="outside"
              placeholder="タスクを入力してください"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
          </div>
          <div className="col-span-2 md:col-span-3 text-center">
            <Button color="secondary" variant="ghost" onClick={onAddTask}>
              追加
            </Button>
          </div>
        </div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};
