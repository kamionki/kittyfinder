import React from "react";


const Card = ({name, email, id}) => {
    return (
        <div className="bg-light-purple dib br4 ma2 pa3 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}.png?set=set4&size=150x150`} alt="robots"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;