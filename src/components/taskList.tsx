import React from "react";

type Task = {
  id: number;
  name: string | null;
  description?: string;
};

export const TaskDisplay: React.FC<Task> = (props) => {
  return <h1>{props.name}</h1>;
};
