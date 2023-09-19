"use client";

import { getData } from "@/services/accessInSupabase";
import { TodoListBody } from "@/templates/TodoListBody";
import { use } from "react";

export default function Page() {
  const Todopractice = use(getData());

  return <TodoListBody Todopractice={Todopractice} />;
}
