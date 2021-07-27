type Props = {
  title: string;
  children?: React.ReactNode;
};

const InputGroup = ({ title, children }: Props) => {
  return (
    <div className="m-4 p-4 shadow">
      <h3 className="text-xl font-bold leading-7">{title}</h3>
      <div className="grid grid-cols-5 gap-4 p-1">{children}</div>
    </div>
  );
};

export default InputGroup;
