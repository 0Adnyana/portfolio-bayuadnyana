type SubtitleProps = {
    children: React.ReactNode;
}

const Subtitle = (props: SubtitleProps) => {
  return (
    <h3 className="font-roboto_mono font-medium text-xl text-inherit">{props.children}</h3>
  )
}

export default Subtitle