import { SectionStructure } from "../layouts/SectionStructure"
import { categoriesData } from "../data/IAsData"
import { Link } from "react-router-dom"




export const Categories = () => {
  return (
    <SectionStructure name="Categories">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                categoriesData.map( cat => {
                    return(
                        <div key={ cat.category } className="hover:bg-slate-300 rounded bg-slate-50 p-4 min-w-1/2">
                            <Link to={ cat.link }>
                                <h3 className="text-lg font-bold mb-2">{ cat.category }</h3>
                                <p>{ cat.description }</p>
                            </Link>

                        </div>
                    )
                })
            }
        </div>    
    </SectionStructure>
  )
}
