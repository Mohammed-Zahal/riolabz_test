import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
     const {id} = useParams;
     
     const [product, setProduct] = useState({})
     const [loading, setLoading] = useState({})

     
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
       setProduct(await responce.json());
       setLoading(false)

    };
    getProducts();
  }, [id, product.title]);
  const Loading =()=>{
     return(<>
     <div className='col-6'>
        <Skeleton height={400}/>
     </div>
     <div className='col-6' style={{lineHeight :2}}>
        <Skeleton height={50} width={300}/>
        <Skeleton height={75} />
        <Skeleton height={25} width={150}/>
        <Skeleton height={50} />
        <Skeleton height={150}/>
        <Skeleton height={50} width={100}/>
        <Skeleton height={50} width={100}/>
     </div>
     </>)
  }
   const showProducts =()=>{
    return (
        <>
        <div className='col-md-6'>
            <img src={product.image} alt={product.title} 
            height="400px"  width="400px"/> </div>
            <div  className='col-md-6'>
                <h4 className='text-uppercase text-black-50' >
                    {product.category}
                </h4>
                <h1 className='display-5 fw-bolder' >
                    {product.title}
                </h1>
                <p  className='lead'>
                     Rating{product.rating && product.rating.rate}
                     <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                <p className='lead'>{product.discription}</p>
            </div>
        </>
    )
   }

  return (
    <div> 
        <div className=' container py-5'>
            <div  className=' row py-4'>
                {loading ? <Loading/> : <showProducts/>}
            </div>
        </div>
    </div>
  )
}

export default ProductDetailPage