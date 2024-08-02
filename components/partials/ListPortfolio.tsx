import PortfolioCard from "../PortfolioCard"
import Tag from "../ui/Tag"

import PortfolioData from "@/data/portfolio-data.json"

type ListPortfolioProps = {
  isTech: boolean;
}

const ListPortfolio = (props: ListPortfolioProps) => {
  if (props.isTech) {
    var data = PortfolioData.tech;
  } else {
    var data = PortfolioData.creative;
  }
  return (
    <div className="w-full grid grid-flow-row grid-cols-1">
      <ul className="space-y-2">
        {
          data.map((data) => {
            return(
              <PortfolioCard 
                key={`${data.collectionName}_${data.id.toString()}`}
                imgSrc= {data.imgSrc}
                imgAlt= {data.imgAlt}
                name= {data.name}
                year= {data.year}
                link= {data.link}
                linkTitle= {data.linkTitle}
                description= {data.description}
                client= {data.client}
              >{
                data.tags.map((tag, key) => {
                  return (
                    <Tag key={key} title={tag}/>
                  )
                })
              }</PortfolioCard>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListPortfolio