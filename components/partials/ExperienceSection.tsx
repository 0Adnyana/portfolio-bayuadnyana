'use client'
import ExperienceCard from "../ExperienceCard"
import SectionTitle from "../ui/SectionTitle"
import ExperienceData from "@/data/experience-data.json"
import { cn } from "@/lib/utils"

const data = ExperienceData; 

const ExperienceSection = () => {
  return (
    <section className="w-[70%] mx-auto flex flex-col items-center space-y-2">
      <SectionTitle title="Experience"></SectionTitle>
      <ul className="space-y-3">
        {data.map((data) => {
          return (
            <ExperienceCard
              key={data.id}
              companyName= {data.companyName}
              jobRole= {data.jobRole}
              employmentType= {data.employmentType}
              dateJoined= {data.dateJoined}
              dateLeave= {data.dateLeave}
              description= {data.description}
              className={cn("", (data.id%2==1) ? "border-primary float-start" : "border-secondary float-end" )}
            />
          )
        })
        }
      </ul>
    </section>
  )
}

export default ExperienceSection