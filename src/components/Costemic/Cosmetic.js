import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    //console.log(props.cosmetic);
    const {name, balance, company, _id} = props.cosmetic;

    const handlePurchase = id => {
        //setTo Local Purchase
        console.log(id);
        addToDb(id);
    }

    
    return (
        <div className="cosmetic">
            <h4>Name: {name}</h4>
            <h5>ID: {_id} Price: {balance}</h5>
            <h5>Company: {company}</h5>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
            
        </div>
    );
};

export default Cosmetic;