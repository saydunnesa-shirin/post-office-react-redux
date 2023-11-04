import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import NavBar from '../layout/NavBar';
import Parcels from '../components/Parcels';
import AddParcel from '../components/AddParcel';
import EditParcel from '../components/EditParcel';
import Bags from '../components/Bags';
import AddBag from '../components/AddBag';
import EditBag from '../components/EditBag';


const Index = () => {
  return (
    <div>
      <NavBar></NavBar>
        <main>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/parcels' element={<Parcels></Parcels>}></Route>
                <Route path='/add-parcel' element={<AddParcel></AddParcel>}></Route>
                <Route path='/edit-parcel' element={<EditParcel></EditParcel>}></Route>

                <Route path='/bags' element={<Bags></Bags>}></Route>
                <Route path='/add-bag' element={<AddBag></AddBag>}></Route>
                <Route path='/edit-bag' element={<EditBag></EditBag>}></Route>

                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </main>
    </div>
  )
};

export default Index;
