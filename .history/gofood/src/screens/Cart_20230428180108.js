import React from 'react'
import trash from "../trash.svg"
export default function Cart(){
    return(
        <div>
            <div className="container m-auto mt-5 table-responsive-sm table-responsive-md">
                <table className="table table-hover">
                <thread className="text-success fs-4">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Option</th>
                        <th scope="col">Amount</th>
                        <th scope="col">#</th>
                    </tr>
                </thread>

                </table>
            </div>
        </div>
    )
}