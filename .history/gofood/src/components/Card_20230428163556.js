import React from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
function Card(props) {

let options = props.options || {};
let priceOptions = Object.keys(options);
// let foodItem = props.foodItems;
const [qty,setuseState(1)
const handleAddToCart = () => {}

  return (
    <div>
      <div>
        <div className="card m-3 fs-3" style={{"width":"18rem","maxHeight":"460px"}}>
          <img className="card-img-top" src={props.foodItem.img} alt="Card image cap" style={{height: "210px", objectFit:"fill"
          }}/>
          <div className="card-body bg-dark text-white">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6),(e,i)=>{
                  return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                  )
                })}
              </select>

              <select className="m-2 h-100 bg-success rounded">
                {priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>
              
              <div className='d-inline h-100 fs-5'>Total Price: </div>
            </div>
            <hr></hr>
            <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

// import React from 'react'

// function Card(props) {

//   let options = props.options || {};
//   let priceOptions = Object.keys(options);

//   return (
//     <div>
//       <div>
//         <div className="card m-3" style={{"width":"18rem","maxHeight":"360px"}}>
//           <img className="card-img-top" src="https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap" />
//           <div className="card-body bg-dark text-white">
//             <h5 className="card-title">{props.foodName}</h5>
//             <div className="container w-100">
//               <select className="m-2 h-100 bg-success rounded">
//                 {Array.from(Array(6),(e,i)=>{
//                   return(
//                     <option key={i+1} value={i+1}>{i+1}</option>
//                   )
//                 })}
//               </select>

//               <select className="m-2 h-100 bg-success rounded">
//                 {priceOptions.map((data)=>{
//                   return <option key={data} value={data}>{data}</option>
//                 })}
//               </select>
              
//               <div className='d-inline h-100 fs-5'>Total Price: </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card;

