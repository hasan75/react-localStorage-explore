import React, { useEffect, useState } from 'react';
import Cosmetic from '../Costemic/Cosmetic';
// import {add, multiply} from '../../utilities/storage';

const Cosmetics = () => {
    // const first = 55;
    // const second = 45;
    // const sum = add(first, second);
    // const numti = multiply(first, second)
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('./cosmetics.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
    return (
        <div>
            <h3>Shop My Cosmetics!</h3>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic._id}
                    cosmetic={cosmetic}
                    ></Cosmetic>)

            }
            
        </div>
    );
};

export default Cosmetics;