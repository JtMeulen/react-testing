type GreetProps = {
  name?: string;
};

export const Greet = ({ name }: GreetProps) => {
  return <h1>Hello {name}</h1>;
};
