import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;




// import React,{useState} from "react";
// import { Link,useNavigate } from "react-router-dom";
// import Badge from 'react-bootstrap/Badge';
// // import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { useCart } from './ContextReducer';
// import Modal from '../Modal';
// import Cart from '../screens/Cart';
// function Navbar() {
// const navigate = useNavigate();
// const [cartView,setCartView]=useState(false);
// let data = useCart();
// const handleLogout = ()=>{
//   localStorage.removeItem("authToken");
//   navigate("/login");
// }

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <Link className="navbar-brand fs-1 fst-italic" to="/">
//             GoFood
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2">
//             <li className="nav-item fs-2 m-1">
//               <Link className="nav-link active fs-50" to="/">
//                 Home
//               </Link>
//             </li>

//           {(localStorage.getItem("authToken"))?
//           <li className="nav-item fs-2 m-1">
//               <Link className="nav-link active fs-50" to="/">
//                 MyOrders
//               </Link>
//             </li>
//           : ""}

//           </ul>
//           {(!localStorage.getItem("authToken"))?
//           <div className="d-flex">
//               <Link className="btn bg-white text-success mx-1" to="/login">
//                 Login
//               </Link>
//               <Link className="btn bg-white text-success mx-1" to="/createuser">
//                 Sign up
//               </Link>
//           </div>
//           :
//           <div>
//           <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>
//           My Cart{" "}

//           <Badge pill bg="danger">{data.length}</Badge></div>
//           {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
//           <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>Logout</div>
//           </div>
//           }
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// // import React from "react";
// // import { Link } from "react-router-dom";

// // function Navbar() {
// //   return (
// //     <div>
// //       <nav className="navbar navbar-expand-lg navbar-dark bg-success">
// //         <div className="container-fluid">
// //           <Link className="navbar-brand fs-1 fst-italic" to="/">
// //             GoFood
// //           </Link>
// //           <button
// //             className="navbar-toggler"
// //             type="button"
// //             data-bs-toggle="collapse"
// //             data-bs-target="navbarNav"
// //             aria-controls="navbarNav"
// //             aria-expanded="false"
// //             aria-label="Toggle navigation"
// //           >
// //             <span className="navbar-toggler-icon"></span>
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarNav">
// //             <ul className="navbar-nav">
// //               <li className="nav-item">
// //                 <Link className="nav-Link active m-3 fs-1" aria-current="page" to="/">
// //                   Home
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-Link m-3 fs-1 " to="/login">
// //                   Login
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-Link m-3 fs-1 " to="/createuser">
// //                   SignUp
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// // export default Navbar;

