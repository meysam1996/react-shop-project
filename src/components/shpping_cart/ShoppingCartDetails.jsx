import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./ShoppingCartDetails.css"
import { FaPlus } from 'react-icons/fa';


const ShoppingCartDetails = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

	const addToCart = (product) => {

    const objectData = {
      type: "ADD_PRODUCT",
      payload: product
    };
		dispatch(objectData);
  };
  return (
    <div className='cart-container container'>
			<div className='row w-100'>
				<h2 className="mb-5">ShoppingCartDetails</h2>
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Title</th>
							<th scope="col">Quantity</th>
							<th scope="col">ADD</th>
						</tr>
					</thead>
					<tbody>
						{
							state.map(product => (
								<tr key={product.id}>
									<th scope="row">{product.id}</th>
										<td>{product.title}</td>
										<td>{product.count}</td>
										<td><button onClick={() => addToCart(product)} className='btn btn-outline-success'><FaPlus /></button></td>
								</tr> 
							))
						}
					</tbody>
				</table>
			</div>
		</div>
  )
}

export default ShoppingCartDetails