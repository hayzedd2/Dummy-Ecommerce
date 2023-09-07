import { useLoaderData, useParams } from "react-router-dom"
import Categories from "../components/Categories"
import CategoryProducts from "../components/CategoryProducts"



const SingleCategory = () => {
    const singleCategory = useLoaderData()
    const newCategory = []
    newCategory.push(singleCategory)
    console.log(newCategory)
  return (
    <div>
      <CategoryProducts category={newCategory}/>
    </div>
  )
}

export async function LoadCategory({params}){
    const catName = params.cat
    const response = await fetch(`https://dummyjson.com/products/category/${catName}`)
    if(!response.ok){
        return <h1>Error</h1>
    }
    const data = await response.json()
    return data.products
}
export default SingleCategory