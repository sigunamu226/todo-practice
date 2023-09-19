import { createClient } from "@supabase/supabase-js";

import { Todopractice } from "@/commons/interfaces/todopractice";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});

export const getData = async (): Promise<Todopractice[] | null> => {
  const { data: Todopractice } = await supabase
    .from("Todo-practice")
    .select("*");

  const todoData = Todopractice as Todopractice[] | null;
  return todoData;
};

export const addTask = async (
  taskTitle: string,
  data: Todopractice[] | null,
  setData: React.Dispatch<React.SetStateAction<Todopractice[] | null>>
): Promise<void> => {
  const { data: todoData, error } = await supabase
    .from("Todo-practice")
    .insert([{ title: taskTitle }])
    .select("*");

  const todos = todoData as Todopractice[] | null;

  if (error) {
    alert(error.message);
    return;
  }

  if (!todos) return;

  setData([
    ...data!,
    {
      id: todos[todos.length - 1].id,
      title: taskTitle,
      status: false,
      created_at: todos[todos.length - 1].created_at,
    },
  ]);
};

export const deleteTask = async (
  deleteId: string,
  data: Todopractice[] | null,
  setData: React.Dispatch<React.SetStateAction<Todopractice[] | null>>
): Promise<void> => {
  const { error } = await supabase
    .from("Todo-practice")
    .delete()
    .eq("id", deleteId);

  if (error) {
    alert(error.message);
    return;
  }

  const newData = data?.filter((item) => item.id !== deleteId);

  if (!newData) return;

  setData(newData);
};
