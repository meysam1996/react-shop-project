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
    <div className='cart-container container align-items-start'>
			<div className='row w-100'>
				<div className='h3 pb-2 mb-4 border-bottom border-black'>
					ShoppingCartDetails
				</div>
				<div className='border border-1 rounded-3 h-auto p-0'>
					<table className="table table-hover">
							<thead className='table-light'>
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
		</div>
  )
}

export default ShoppingCartDetails