interface button {
  name: string;
  className?: string;
}

const Button = ({ name, className = "" }: button) => {
  return (
    <button className={`bg-[#2B2F36] text-white! py-2 w-full rounded-md mt-2 cursor-pointer ${className}`}>
      {name}
    </button>
  );
};

export default Button;
