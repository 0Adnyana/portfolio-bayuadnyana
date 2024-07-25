import PortfolioCard from "../PortfolioCard"
import Tag from "../ui/Tag"
import PlaceholderImage from "@/public/placeholderImage.jpg"
import PortfolioData from "@/data/portfolio-data.json"

const data = PortfolioData;

const ListPortfolio = () => {
  return (
    <div className="w-full grid grid-flow-row grid-cols-1 space-y-2">
      <ul>
        {
          data.map((data, key) => {
            return(
              <PortfolioCard 
                key={key}
                imgSrc= {data.imgSrc}
                imgAlt= {data.imgAlt}
                name= {data.name}
                year= {data.year}
                link= {data.link}
                linkTitle= {data.linkTitle}
                description= {data.description}
                client= {data.client}
              />
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListPortfolio