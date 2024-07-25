type TagProps = {
    title: string;

}
const Tag = (props: TagProps) => {
  return (
    <p className="text-inherit font-roboto font-normal text-xs p-2 border-[1px] border-inherit rounded-xl opacity-50">{props.title}</p>
  )
}

export default Tag