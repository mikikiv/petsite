import React from 'react';


export default function PetCard({ pet, imagePath, successMessage, children }) {
    return <div
    style={{ backgroundColor: "red" }}>
        <span><h1>{pet}</h1><img src="{{ imagePath }}"/></span>
        <div>{children}</div>
        <div>
            <button>{successMessage}</button>
        </div>
    </div>;
}
