type TagProps = {
    title: string;

}
const Tag = (props: TagProps) => {
  return (
    <p className="text-inherit font-roboto font-normal text-xs p-2 border-2 border-inherit rounded-xl opacity-75">{props.title}</p>
  )
}

export default Tag