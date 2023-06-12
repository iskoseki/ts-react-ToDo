import React from "react";

type Task = {
  id: number;
  name: string | null;
  done?: boolean;
};

export const TaskDisplay: React.FC<Task> = (props) => {
  return <h1 className="displayTask">{props.name}</h1>;
};
