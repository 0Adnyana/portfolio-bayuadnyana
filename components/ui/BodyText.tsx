type BodyTextProps = {
    className?: string;
    children: React.ReactNode;
}

const BodyText = (props: BodyTextProps) => {
  return (
    <p className={`font-roboto font-normal text-base text-justify ${props.className}`}>{props.children}</p>
  )
}

export default BodyText