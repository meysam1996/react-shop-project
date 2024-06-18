import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./ShoppingCartDetails.css"
import { FaMinus, FaPlus } from 'react-icons/fa';
import { CiCircleRemove } from 'react-icons/ci';
import { ToastContainer, toast, Flip } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


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

	const removeProductFromCart = (product) => {
		const objectData = {
			type: "REMOVE_PRODUCT_CART",
			payload: product
		}
		dispatch(objectData);

		toast.success(`Delete product ${product.id} from cart!`, {
			position: "top-right",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Flip,
			});

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
												<button onClick={() => increaseProductCount(product)} className='btn btn-outline-primary btn-sm me-1'><FaPlus /></button>
												<button onClick={() => decreaseProductCount(product)} className='btn btn-outline-warning btn-sm me-1'><FaMinus /></button>
												<button onClick={() => removeProductFromCart(product)} className='btn btn-outline-danger btn-sm p-0 border-0 me-1'><CiCircleRemove className='fs-3' /></button>
											</td>
									</tr> 
								))
							}
						</tbody>
					</table>
				</div>
			</div>
			<ToastContainer />
		</div>
  )
}

export default ShoppingCartDetails