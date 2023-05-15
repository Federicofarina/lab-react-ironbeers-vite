import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

        function Beers()  {
            const [allBeers, setAllBeers] = useState([]);
            
            const fetchBeers = async () => {
                try {
                    const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
                    if (response.status === 200) {
                        const parsed = await response.json();
                        setAllBeers(parsed);
                    }
                } catch (error) {
                    console.log(error);
                }
        };
        useEffect(() => {
            fetchBeers();
        }, []);

        return (
            <div>
            <h1>All Beers</h1>
            {allBeers.map((oneBeer) => (
            <div key={oneBeer.id} className='beerCard'>
            <Link to={`/beers/${oneBeer._id}`} > 
            <img src={oneBeer.image_url} alt={oneBeer.name} />
            <h3> {oneBeer.name} </h3>
            <p>{oneBeer.tagline}</p>
            <p>Contributed by: {oneBeer.contributed_by}</p> 
            </Link>
            </div>
            ))};
        </div>
        )};

export default Beers;




