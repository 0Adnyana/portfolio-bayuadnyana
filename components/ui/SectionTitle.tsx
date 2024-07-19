type SectionTitleProps = {
    title: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <h2 className="font-roboto_mono font-bold text-2xl text-foreground">{props.title}</h2>
  )
}

export default SectionTitle