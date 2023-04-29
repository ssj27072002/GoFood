import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducer'
// import { Dropdown, DropdownButton } from 'react-bootstrap';
export default function Card(props) {
  let data = useCart();

  let navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.item;
  const dispatch = useDispatchCart();
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  // useEffect(()=>{
  // checkBtn();
  //   },[data])

  let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing
  // totval += finalPrice;
  // console.log(totval)
  return (
    <div>

      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.ImgSrc} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          {/* <p className="card-text">This is some random text. This is description.</p> */}
          <div className='container w-100 p-0' style={{ height: "38px" }}>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} onClick={handleClick} onChange={handleQty}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} ref={priceRef} onClick={handleClick} onChange={handleOptions}>
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
              ₹{finalPrice}/-
            </div>
          </div>
          <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
          {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
        </div>
      </div>
    </div>
  )
}
//



// import React,{useEffect, useState, useRef} from 'react'
// import { useDispatchCart, useCart } from './ContextReducer';
// function Card(props) {
// let dispatch = useDispatchCart();
// const [finalPrice, setFinalPrice] = useState(0);
// let data= useCart(null);
// const priceRef = useRef();
// let options = props.options || {};
// let priceOptions = Object.keys(options);
// // let foodItem = props.foodItems;
// const [qty,setQty]=useState(1)
// const [size,setSize]=useState("")
// // let finalPrice=qty*parseInt(options[size]);
// const handleAddToCart = () => {
//   let food =[]
//   for(const item of data){
//     if(item.id === props.foodItem._id){
//       food = item;

//       break;
//     }
//   }
//   if(food !== []){
//     if(food.size === size){
//       dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty});
//       return
//     }
  
//   else if(food.size !== size){
//     dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty: qty,size: size})
//     return
//   }
//   return
// }
//   dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty: qty,size: size})
//   //  console.log(data)
// }
  
//   // useEffect(()=>{
//   //   setSize(priceRef.current.value)
//   // },[])
//   useEffect(() => {
//     if (priceRef.current !== null) {
//       setSize(priceRef.current.value);
//       setFinalPrice(qty * parseInt(options[size]));
//     }
//   }, [priceRef.current, qty, size, options]);
//   return (
//     <div>
//       <div>
//         <div className="card m-3 fs-3" style={{"width":"18rem","maxHeight":"460px"}}>
//           <img className="card-img-top" src={props.foodItem.img} alt="Card image cap" style={{height: "210px", objectFit:"fill"
//           }}/>
//           <div className="card-body bg-dark text-white">
//             <h5 className="card-title">{props.foodItem.name}</h5>
//             <div className="container w-100">
//               <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
//                 {Array.from(Array(6),(e,i)=>{
//                   return(
//                     <option key={i+1} value={i+1}>{i+1}</option>
//                   )
//                 })}
//               </select>

//               <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
//                 {priceOptions.map((data)=>{
//                   return <option key={data} value={data}>{data}</option>
//                 })}
//               </select>
              
//               <div className='d-inline h-100 fs-5'>
//               ₹{finalPrice}/-
//               </div>
//             </div>
//             <hr></hr>
//             <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add To Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card

// // import React from 'react'

// // function Card(props) {

// //   let options = props.options || {};
// //   let priceOptions = Object.keys(options);

// //   return (
// //     <div>
// //       <div>
// //         <div className="card m-3" style={{"width":"18rem","maxHeight":"360px"}}>
// //           <img className="card-img-top" src="https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap" />
// //           <div className="card-body bg-dark text-white">
// //             <h5 className="card-title">{props.foodName}</h5>
// //             <div className="container w-100">
// //               <select className="m-2 h-100 bg-success rounded">
// //                 {Array.from(Array(6),(e,i)=>{
// //                   return(
// //                     <option key={i+1} value={i+1}>{i+1}</option>
// //                   )
// //                 })}
// //               </select>

// //               <select className="m-2 h-100 bg-success rounded">
// //                 {priceOptions.map((data)=>{
// //                   return <option key={data} value={data}>{data}</option>
// //                 })}
// //               </select>
              
// //               <div className='d-inline h-100 fs-5'>Total Price: </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Card;

