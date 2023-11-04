import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBags, deleteBag } from '../services/actions/bagsActions';
import { Link } from 'react-router-dom';

const Bags = () => {
    const dispatch = useDispatch();
    useSelector((state) => console.log(state.bagsReducer));

    const {isLoading, bags, error} = useSelector((state) => state.bagsReducer);
    
    useEffect(() => {
       
        dispatch(getAllBags());

        console.log(bags);
    }, []);

    return (
        <div>
            <div>
            <h1>Bags</h1>
            <Link to="/add-bag" >
                <button>Add Bag</button>
            </Link>
            </div>
            {isLoading && <h3>LOADING..</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {bags && bags.map((bag) => {
                    const {bagId, bagNumber, contentType, weight, price, itemCount, shipmentId, parcelIds} = bag
                    return <article key={bagId}>
                        <h3>
                            {bagNumber} - {itemCount}
                        </h3>
                        <p>{weight} - {price}</p>
                        {shipmentId && <p>{shipmentId}</p>}

                        <div>
                            <Link to="/edit-bag" state={{bagId, bagNumber, contentType, weight, price, itemCount, shipmentId, parcelIds}} >
                                <button>Update</button>
                            </Link>
                            <button onClick={() => dispatch(deleteBag(bagId))}>Delete</button>
                        </div>
                    </article>
                })}
            </section>
        </div>
    )
}

export default Bags
