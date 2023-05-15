import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BeerDetails = () => {
    const { id } = useParams();

    //Store the beer somewhere
    const [thisBeer, setThisBeer] = useState();

    useEffect(() => {
        const fetchThisBeer = async () => {
        try {
            const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            if (response.status === 200) {
                const parsed = await response.json()
                setThisBeer(parsed)
            }
            } catch (error) {
            console.log(error)
        }
    };
    //call the fetch at the right time

    fetchThisBeer()
    }, [id])

    return thisBeer ? (
        <div>
            <h1>Detail View</h1>
            <img src={thisBeer.image_url} alt={thisBeer.name} />
            <h2>{thisBeer.name} </h2>
            <p>{thisBeer.tagline} </p>
            <p>First Brewed: {thisBeer.first_brewed} </p>
            <p>Atenuation Level: {thisBeer.attenuation_level} </p>
            <p>Description: { thisBeer.description } </p>
            <p>Contributed by: {thisBeer.contributed_by }</p> 

        </div>
    ) : (
        <h1>Loading...</h1>
    )
};

export default BeerDetails;