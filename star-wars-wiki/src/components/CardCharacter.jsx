import React, {useEffect, useState} from 'react';

const CardCharacter =()=>{
    const [user, setUser]=useState(null);
    useEffect(()=>{
        fetch("https://swapi.dev/api/people/1/")
        .then(res=> res.json())

        .then((data)=> {
            console.log(data);

            const userData={
               name:data.results.name
                //email: data.results[0].email,
                //picture: data.results[0].picture.thumbnail
            }

            setUser(userData);
        });

    },[]);
    return(
        <div>
        {user? <div className='CardCharacter'>
            <h1>{user.name}</h1>
            
        </div> :null}
        </div>
    );
}

export default CardCharacter;