import { DeleteDocumentIcon } from "@/commons/Icons/DeleteDocumentIcon";
import { Todopractice } from "@/commons/interfaces/todopractice";
import { deleteTask } from "@/services/accessInSupabase";
import { Button, Checkbox, Listbox, ListboxItem } from "@nextui-org/react";

interface TodoListProps {
  todos: Todopractice[] | null;
  setTodos: React.Dispatch<React.SetStateAction<Todopractice[] | null>>;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <Listbox
      className="my-auto"
      variant="faded"
      aria-label="Listbox menu with icons"
    >
      {props.todos?.map((todo) => (
        <ListboxItem
          key={todo.id}
          variant="bordered"
          startContent={<Checkbox lineThrough />}
          endContent={
            <Button
              isIconOnly
              color="danger"
              variant="bordered"
              aria-label="Like"
              onClick={(): Promise<void> =>
                deleteTask(todo.id, props.todos, props.setTodos)
              }
            >
              <DeleteDocumentIcon />
            </Button>
          }
        >
          {todo.title}
        </ListboxItem>
      ))}
    </Listbox>
  );
};
