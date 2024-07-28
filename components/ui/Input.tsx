type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
} 

const Input = (props: InputProps) => {
  return (
    <input type="text" className={`bg-background-lighter ${props.className}`} {...props}/>
  )
}

export default Input