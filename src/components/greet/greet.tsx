import { GreetProps } from "./greet.types";

export const Greet = ({ name }: GreetProps) => {
  return <h1>Hello {name ? name : "Guest"}</h1>;
};
