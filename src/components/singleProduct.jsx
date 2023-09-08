import { useLoaderData, useParams } from "react-router-dom"
import ProductDetail from "../views/ProductDetail"


const SingleProduct = () => {

    const singleProduct = useLoaderData()
    const newItem = []
    newItem.push(singleProduct)
    console.log(newItem)
  return (
    <div>
        <ProductDetail item={newItem}/>
    </div>
  )
}

export async function LoadSingleProduct({params}){
    const id = params.id
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    if(!response.ok){
        return <h1>Error</h1>
    }
    const data = await response.json()
    console.log(data) 
    return data
}
export default SingleProduct

