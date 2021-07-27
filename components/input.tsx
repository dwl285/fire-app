type Props = {
  label: string;
  initialValue: number;
};

const Input = ({ label, initialValue }: Props) => {
  return (
    <div className=" min-w-1 max-w-2">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name={label}
          id={label}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          defaultValue={initialValue}
        />
      </div>
    </div>
  );
};

export default Input;
