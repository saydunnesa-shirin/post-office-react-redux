import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllParcels, deleteParcel } from '../services/actions/parcelsActions';
import { Link } from 'react-router-dom';

const Parcels = () => {
    const dispatch = useDispatch();
    useSelector((state) => console.log(state.parcelsReducer));
    const {isLoading, parcels, error} = useSelector((state) => state.parcelsReducer);
    
    useEffect(() => {
        dispatch(getAllParcels());
    }, []);

    return (
        <div>
            <div>
            <h1>Parcels</h1>
            <Link to="/add-parcel" >
                <button>Add Parcel</button>
            </Link>
            </div>
            {isLoading && <h3>LOADING..</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {parcels && parcels.map((parcel) => {
                    const {parcelId, parcelNumber, recipientName, destinationCountry, weight, price, bagId} = parcel
                    return <article key={parcelId}>
                        <h3>
                            {parcelNumber} - {recipientName} - {destinationCountry}
                        </h3>
                        <p>{weight} - {price}</p>
                        {bagId && <p>{bagId}</p>}

                        <div>
                            <Link to="/edit-parcel" state={{parcelId, parcelNumber, recipientName, destinationCountry, weight, price, bagId}} >
                                <button>Update</button>
                            </Link>
                            <button onClick={() => dispatch(deleteParcel(parcelId))}>Delete</button>
                        </div>
                    </article>
                })}
            </section>
        </div>
    )
}

export default Parcels
