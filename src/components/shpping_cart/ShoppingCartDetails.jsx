import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./ShoppingCartDetails.css"
import { FaMinus, FaPlus } from 'react-icons/fa';


const ShoppingCartDetails = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

	const increaseProductCount = (product) => {

    const objectData = {
      type: "ADD_PRODUCT",
      payload: product
    };
		dispatch(objectData);
  };

	const decreaseProductCount = (product) => {
		const objectData = {
			type: "DECREASE_PRODUCT_COUNT",
			payload: product
		}
		dispatch(objectData);
	}

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
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							state.map(product => (
								<tr key={product.id}>
									<th scope="row">{product.id}</th>
										<td>{product.title}</td>
										<td>{product.count}</td>
										<td>
											<button onClick={() => increaseProductCount(product)} className='btn btn-outline-success btn-sm me-1'><FaPlus /></button>
											<button onClick={() => decreaseProductCount(product)} className='btn btn-outline-danger btn-sm ms-1'><FaMinus /></button>
										</td>
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