import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editBag } from '../services/actions/bagsActions';
import { useLocation } from 'react-router-dom';

const EditBag = () => {

const dispatch = useDispatch();
const location = useLocation();

const [bagId, setBagId] = useState(location.state.bagId);
const [bagNumber, setBagNumber] = useState(location.state.bagNumber);
const [contentType, setContentType] = useState(location.state.contentType);
const [itemCount, setItemCount] = useState(location.state.itemCount);
const [weight, setWeight] = useState(location.state.weight);
const [price, setPrice] = useState(location.state.price);
const [shipmentId, setShipmentId] = useState(location.state.shipmentId);
const [parcelIds, setParcelIds] = useState(location.state.parcelIds);


const {error, successMessage} = useSelector((state) => state);

const handleSubmit = (e) => {
  e.preventDefault();

  const bag = {bagId, bagNumber, contentType, weight, price, itemCount, shipmentId, parcelIds};

  dispatch(editBag(bag));
}

  return (
    <div>
      <h2>Edit Bag</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <div className='form-field'>
          <label >Bag Number:</label>
          <input type='text' name='bagNumber' value={bagNumber} onChange={(e) => {setBagNumber(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label>Content Type:</label>
          <input type='number' name='contentType' value={contentType} onChange={(e) => {setContentType(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label>Weight:</label>
          <input type='number' name='weight' value={weight} onChange={(e) => {setWeight(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label>Price:</label>
          <input type='number' name='price' value={price} onChange={(e) => {setPrice(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label>Item Count:</label>
          <input type='number' name='itemCount' value={itemCount} onChange={(e) => {setItemCount(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label>Shipment Id:</label>
          <input type='number' name='shipmentId' value={shipmentId} onChange={(e) => {setShipmentId(e.target.value)}} ></input>
        </div>
        <button type='submit'>Update</button>
        </div>
      </form>
      <div>
        {error && <h3>{error.message}</h3>}
        {successMessage && <h3>{successMessage}</h3>} 
      </div>
    </div>
  )
}

export default EditBag