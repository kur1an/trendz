import { useParams} from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import './ProductDetails.css'
import { useState } from "react";
function ProductDetails({ products,handleCartCountIncrement }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));



  const [addCart, setAddCart] = useState(true);

  const handleHide = () => {
    setAddCart(!addCart); 
  };



  



if(!product){
return(
<h4 className=" text-center mt-4"> 
Invalid Product ID


</h4>

)
}

  return (

<>
  
      <div className=" d-flex flex-row">
    <Image  src={product.productImage} alt=""  />
        <div className=" product-details shadow-lg d-flex flex-column m-4 ">
          <h2>{product.productName}</h2>
          <p>{product.productDiscripption}</p> 
          <p>Price: ${product.productPrice}</p>



  

     <Button  className="m-5 btn-toolbar bg-secondary"   onClick={handleCartCountIncrement}
>Items:  + </Button>


    <Button  onClick={handleHide} 
className={addCart ? "text-black btn-success" : "text-black btn-danger bg-warning"}
    
>
      {addCart ? "Add Cart" : "Added to Cart >"}

    
    </Button>

   
      </div>
      </div>
</>
  );
}

export default ProductDetails;
