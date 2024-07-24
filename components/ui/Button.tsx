type ButtonProps = {
    className?: string;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`max-w-fit font-roboto_mono font-medium text-base mx-1 px-4 py-1.5  hover:scale-105 ease-in-out rounded-xl duration-200 cursor-pointer ${props.className}`}>
        {props.children}
    </button>
  )
}

export default Button