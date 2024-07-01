import React from 'react'; // para crear los componentos con React 
import HomeImages from "../../utils/images/imagesHome"; // para importal los imagines 

import "./slideCardHome.css"// para importar css




const symptoms = [
    {
        image: HomeImages.pulmones,
        title: 'Aches and Pains',
        description: 'Fever is a key symptom, experts say. Don\'t fixate on a number, but know it\'s really not a fever until your temperature reaches at least 100.'
    },
    {
        image: HomeImages.niñoTos,
        title: 'Runny Nose',
        description: 'People of all ages who experience fever and/or cough associated with difficulty breathing/shortness of breath.'
    },
    {
        image: HomeImages.sistemaHumano,
        title: 'Sore Throat',
        description: 'Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer.'
    }
];


function SlideCardHome() {
    return (
        <div className="slide-card-home" style={{ background: 'aliceblue' }}>
            <div className="container">
              
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center">
                            <h5>Symptom</h5>
                            <h2>Basic Symptom Against Corona virus</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {symptoms.map((symptom, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="slide-card-home-content text-center">
                                <span><img src={symptom.image} alt={symptom.title} className="img-fluid" /></span>
                                <h4 className="mb-3">{symptom.title}</h4>
                                <p>{symptom.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default SlideCardHome;