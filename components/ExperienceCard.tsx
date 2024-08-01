import Subtitle from "./ui/Subtitle"
import BodyText from "./ui/BodyText"

type ExperienceCardProps = {
    companyName: string;
    jobRole: string,
    employmentType: string;
    dateJoined: string;
    dateLeave: string;
    description: string;
    className?: string;
}

const ExperienceCard = (props: ExperienceCardProps) => {

  return (
    <div className={`w-[70%] h-fit rounded-xl border-dashed border-2 py-4 px-6 text-foreground space-y-4 ${props.className}`}>
      <div className="space-y-2.5">
        <Subtitle>{props.jobRole}</Subtitle>
        {/* <h3 className="font-roboto font-medium text-lg text-inherit leading-none"></h3> */}
        <h4 className="font-roboto font-normal text-base text-inherit brightness-90 leading-none">{`${props.companyName} • ${props.employmentType}`}</h4>
        <h5 className="font-roboto font-normal text-base text-inherit brightness-75 leading-none">{`${props.dateJoined} - ${props.dateLeave}`}</h5>
      </div>
      
      <BodyText>{props.description}</BodyText>
    </div>
  )
}

export default ExperienceCard