import { SectionStructure } from "../layouts/SectionStructure"
import { IAList } from "../data/IAsData"



export const Category = ({ category }) => {

const currentIA = IAList.filter( IA => IA.category === category)

  return (
    <SectionStructure name={ category }>

        <div className=" grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {
                currentIA.map( IA => {
                    return(
                        <div key={ IA.name } className="bg-white rounded p-4 hover:bg-gray-300">
                            <a href={ IA.link } target="_blank">
                                <h3 className="text-xl underline font-semibold mb-4">{ IA.name }</h3>
                                <img src={ IA.imgURL } alt="" className="mb-4"/>
                                <p className="text-sm">{ IA.description }</p>
                            </a>
                        </div>
                    )
                })
            }
        </div>


    </SectionStructure>
  )
}
