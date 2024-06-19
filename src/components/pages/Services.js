import React from "react";
import "../../App.css";
import Carousel from "../Carousel";

const Images1 = [
    "de_lo_zano/2024-06-02_19-51-03_UTC_1.jpg",
    "de_lo_zano/2024-06-02_19-51-03_UTC_2.jpg",
    "de_lo_zano/2024-06-02_19-51-03_UTC_3.jpg",
    "de_lo_zano/2024-06-02_19-51-03_UTC_4.jpg",
]

const texto1 = [
    "IMPACTANTE...",
    "este collar de grandes Amazonitas, cuarzo rosa, cuarzo, ópalo rosado y rodonita...imposible más paz.",
    "Terminaciones de plata sólida.",
    "50cm.",
    ".",
    "59.000",
]

const Images2 = [
    "de_lo_zano/2024-06-04_14-33-02_UTC_1.jpg",
    "de_lo_zano/2024-06-04_14-33-02_UTC_2.jpg",
    "de_lo_zano/2024-06-04_14-33-02_UTC_3.jpg",
    "de_lo_zano/2024-06-04_14-33-02_UTC_4.jpg",
    "de_lo_zano/2024-06-04_14-33-02_UTC_5.jpg",
    "de_lo_zano/2024-06-04_14-33-02_UTC_6.jpg",
    "de_lo_zano/2024-06-04_14-33-02_UTC_7.jpg",
]

const texto2 = [
    "NUEVO!!!",
    " este choker con opción de extensor es de una belleza increíble...las cuentas de CORAL FOSILIZADO son para quedarse pegada mirándolas.",
    "Terminaciones de plata sólida.",
    "46cm sin extensor....49.900",
    "61cm con extensor ...59.000",
]

const Images3 = [
    "de_lo_zano/2024-06-10_19-25-20_UTC_1.jpg",
    "de_lo_zano/2024-06-10_19-25-20_UTC_2.jpg",
    "de_lo_zano/2024-06-10_19-25-20_UTC_3.jpg",
    "de_lo_zano/2024-06-10_19-25-20_UTC_4.jpg",
    "de_lo_zano/2024-06-10_19-25-20_UTC_5.jpg",
    "de_lo_zano/2024-06-10_19-25-20_UTC_6.jpg",
]

const texto3 = [
    "VOLVIÓ!!!!",
    "DULCE...",
    "Tripe collar!!! En Nude...pura elegancia.",
    "Sakura y JADE en rosado.",
    "Desarmable!!! Tienes 3 collares en 1.",
    "Corto o largo? Tú decides.",
    "Terminaciones de plata.",
    ".",
    "69.000",
]



export default function Services() {
    return (
        <div>
            <section className="services">
                <h1 className="services">Últimas publicaciones</h1>
            </section>
            <div className="App">
                <main className="carousel-container">
                    <Carousel images={Images1} texto={texto1}/>
                    <Carousel images={Images2} texto={texto2}/>
                    <Carousel images={Images3} texto={texto3}/>
                </main>
            </div>
        </div>   

    );
}