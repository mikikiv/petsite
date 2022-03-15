import React from 'react';


export default function PetCard({ pet, imagePath, successMessage, children }) {
    return <div
        style={{
            backgroundColor: "red",
            height: 'auto',
            width: '100%'
        }}>
        <div>
            <img
            style={{
                height: '200px',
                float: 'right',
                padding: '2%'
            }} src={imagePath} />
        </div>
            <h1>{pet}</h1>
        <div>{children}</div>
        <div>
            <button>{successMessage}</button>
        </div>
    </div>;
}
