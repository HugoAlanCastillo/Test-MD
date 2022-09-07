import React from "react";
import './card.css'
import { useCard } from "./consumoCards";


import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons  from 'react-icons/io5';

export const Card = () => {
 
   
  const card_Data = useCard();
  //console.log(card_Data)
  return (
    <>
      <div className="contenedor-c">
          {card_Data.map((item, index) => {
            let favorite = `{item.is_favorite}`
              return (
                  <section className="section-cards">
                   
                  <article  key={index.id} className="main-card">
                  <div className="img-cards">
            <img
              className="foto"
              src={item.image}
              type="img/jpg"
              alt=""
            />
          </div>
                <div className="container-card">

                    <div className="container-card-favorite">
                    <h3 key="0" className="title-card" > {item.title}
                </h3>
                    <p>
                        { favorite && true ? <AiIcons.AiFillHeart/> : null }
                        </p>
                </div>
                    <ul className="description-card">
                    <li> <FaIcons.FaBuilding/> <span> Compañia: </span> {item.company_name}</li>
                    <li> <BiIcons.BiWorld/> <span> Pais: </span> {item.country}</li>
                    <li> <IoIcons.IoLanguage/> <span> Idioma: </span> {item.language}</li>
                    </ul>
                </div>
                
              </article>
        </section>
            );
          })}
      </div>
    </>
  );
};
