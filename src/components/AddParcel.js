import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addParcel } from '../services/actions/parcelsActions';
import { useNavigate } from 'react-router-dom';

const AddParcel = () => {

const nevigate = useNavigate();
const dispatch = useDispatch();

const [parcelNumber, setParcelNumber] = useState('');
const [recipientName, setRecipientName] = useState('');
const [destinationCountry, setDestinationCountry] = useState('');
const [weight, setWeight] = useState('');
const [price, setPrice] = useState('');
const [bagId, setBagId] = useState(null | Number);

const {error, successMessage} = useSelector((state) => state);

const handleSubmit = (e) => {
  e.preventDefault();

  const parcel = {parcelNumber, recipientName, destinationCountry, weight, price, bagId};

  dispatch(addParcel(parcel));
//   nevigate('/parcels');
}

  return (
    <div>
      <h2>Add Parcel</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <div className='form-field'>
          <label >Parcel Number:</label>
          <input type='text' name='parcelNumber' value={parcelNumber} onChange={(e) => {setParcelNumber(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label>Recipient Name:</label>
          <input type='text' name='recipientName' value={recipientName} onChange={(e) => {setRecipientName(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label>Destination Country:</label>
          <input type='text' name='destinationCountry' value={destinationCountry} onChange={(e) => {setDestinationCountry(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label>Weight:</label>
          <input type='text' name='weight' value={weight} onChange={(e) => {setWeight(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label>Price:</label>
          <input type='text' name='price' value={price} onChange={(e) => {setPrice(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label>BagId:</label>
          <input type='number' name='bagId' value={bagId} onChange={(e) => {setBagId(e.target.value)}} ></input>
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

export default AddParcel