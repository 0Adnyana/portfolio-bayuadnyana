type InputProps = {
  className?: string;
}

const Input = (props: InputProps) => {
  return (
    <input type="text" className={`bg-background-lighter ${props.className}`}/>
  )
}

export default Input