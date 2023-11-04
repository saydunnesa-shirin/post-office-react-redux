import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBag } from '../services/actions/bagsActions';

const AddBag = () => {

const dispatch = useDispatch();

const [bagNumber, setBagNumber] = useState('');
const [contentType, setContentType] = useState(0);
const [weight, setWeight] = useState(0);
const [price, setPrice] = useState(0);
const [itemCount, setItemCount] = useState(0);
const [shipmentId, setShipmentId] = useState(null);
const [parcelIds, setParcelIds] = useState(null);


const {error, successMessage} = useSelector((state) => state);

const handleSubmit = (e) => {
  e.preventDefault();

  const bag = {bagNumber, contentType, weight, price, itemCount, shipmentId, parcelIds};

  dispatch(addBag(bag));
}

  return (
    <div>
      <h2>Add Bag</h2>
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
          <label>Price:</label>
          <input type='number' name='itemCount' value={itemCount} onChange={(e) => {setItemCount(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label>Shipment Id:</label>
          <input type='number' name='shipmentId' value={shipmentId} onChange={(e) => {setShipmentId(e.target.value)}} ></input>
        </div>
        <button type='submit'>Add</button>
        </div>
      </form>
      <div>
        {error && <h3>{error.message}</h3>}
        {successMessage && <h3>{successMessage}</h3>} 
      </div>
    </div>
  )
}

export default AddBag