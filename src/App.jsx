import { useState } from 'react';
import { Suspense } from 'react';
import { Component } from 'react';

import React from "react";
import {Carousel} from "react-bootstrap";

import Donnees from './calories';
import { useEffect } from 'react';

import ShoppingList from './Shopping';
import MyCart from './Cart';



function Welcome() {
  return (
    <div>
      <h1>Mes voyages préférés</h1>
    </div>
  );
}



function MyTable() {
  return (
    <table style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '80%'
    }}> 

    <h4>Destinations</h4>
    <br/>
    
    <tr>
      <td><a class="btn btn-danger btn-sm" href="https://fr.wikipedia.org/wiki/Rome" role="button">Rome</a></td>
    </tr>
    <tr>
      <td><a class="btn btn-primary btn-sm" href="https://fr.wikipedia.org/wiki/Londres" role="button">Londres</a></td>
    </tr>
    <tr>
      <td><a class="btn btn-success btn-sm" href="https://fr.wikipedia.org/wiki/Madrid" role="button">Madrid</a></td>
    </tr>
    <tr>
      <td><a class="btn btn-danger btn-sm" href="https://fr.wikipedia.org/wiki/Milan" role="button">Milan</a></td>
    </tr>
    <tr>
      <td><a class="btn btn-primary btn-sm" href="https://fr.wikipedia.org/wiki/Édimbourg" role="button">Édimbourg</a></td>
    </tr>
    <tr>
      <td><a class="btn btn-success btn-sm" href="https://fr.wikipedia.org/wiki/Barcelone" role="button">Barcelone</a></td>
    </tr>
    <tr>
      <td><a class="btn btn-danger btn-sm" href="https://fr.wikipedia.org/wiki/New_York" role="button">New York</a></td>
    </tr>
    <tr>
      <td><a class="btn btn-primary btn-sm" href="https://fr.wikipedia.org/wiki/Tokyo" role="button">Tokyo</a></td>
    </tr>
    <tr>
      <td><a class="btn btn-success btn-sm" href="https://fr.wikipedia.org/wiki/Le_Cap" role="button">Le Cap</a></td>
    </tr>

    </table>
  );
}



function MyForm() {
  const [mytxt, setMytxt] = useState("");

  function handleChange(e) {
    setMytxt(e.target.value);
  }

  return (
    <form>
      <label >Parlez-moi d'un de vos voyages récents :</label>
      <br/>
      <br/>
        <textarea
          value={mytxt}
          onChange={handleChange}
          rows="10"
          cols="50"
        />
      <br/>
      <br/>
      <p>Texte : <br/> <br/> {mytxt}</p>
    </form>
  )
}



/* Ici on utilise le bootstrap de React imoprté par npm 
car le bootstrap classique ne marche pas très bien */
function MonCarousel() {
  return (
    <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"   
                src={"https://www.turismoroma.it/sites/default/files/Roma%20in%20breve.jpg"}
                alt="First slide"
                width="80%"
                height="30%"
                />
                <Carousel.Caption>
                <h3>Rome</h3>
                <p>La ville éternelle où des ruines passées surgit la vie future.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={"https://www.partir-en-voyage.com/wp-content/uploads/2024/02/londres-guide-voyage.jpg"}
                alt="Second slide"
                width="80%"
                height="30%"
                />
                <Carousel.Caption>
                <h3>Londres</h3>
                <p>La ville où le Big Ben marque les heures et où la pluie n'est pas si forte.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={"https://blog.action-sejours.com/wp-content/uploads/2020/10/puerta-del-sol-madrid.jpg"}
                alt="Third slide"
                width="80%"
                height="30%"
                />
                <Carousel.Caption>
                <h3>Madrid</h3>
                <p>La capitale espagnole où tapas, football et sangria coulent à flots.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  );
}



function MyRadio() {
  const [selectedTrip, setSelectedTrip] = useState('Rome');

  const handleChange = (event) => {
    setSelectedTrip(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`Votre voyage préféré est : ${selectedTrip}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Selectionnez votre destination préférée :</label>
      <br />
      <br />
      <label>
        <input 
          type="radio" 
          name="trip" 
          value="Rome" 
          checked={selectedTrip === 'Rome'} 
          onChange={handleChange} 
        /> Rome
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="trip" 
          value="Madrid" 
          checked={selectedTrip === 'Madrid'} 
          onChange={handleChange} 
        /> Madrid
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="trip" 
          value="Londres" 
          checked={selectedTrip === 'Londres'} 
          onChange={handleChange} 
        /> Londres
      </label>
      <br />
      <br />
      <button class="btn btn-danger btn-sm" type="submit">Submit</button>
    </form>
  );
}


function MyVideo() {
  return (
    <div>
      <h3>Voici une vidéo sur les voyages :</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cH1E97JIyUo?si=z9R5E-q3LIXzlupz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_ruYxJgMOqw?si=e5UDE9VdP5vQAcBu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AsuDyA2GZFc?si=9CI81xzgoTyTLM55" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
}



const MesDonnees = () => {
/*
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./calories.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur lors du chargement des données :', error));
  }, []);
*/
  return (
    <h3>Les voyages coûtent en énergie :</h3>,
      Donnees.map((jour) => (
        <li key={jour.id}>
          Jour {jour.id} - Calories repas: {jour.Mangees}, calories dépensée dans la vie quotidienne: {jour.Viequotidienne} et dans le sport: {jour.Sport}
        </li>
      ))
  );
}



function Chinois() {
  return (
    <div>
      <p xmlns="http://www.w3.org/1999/xhtml" lang="zh-Hans" xml:lang="zh-Hans" id="infos">
        新华社山东德州6月24日电 中共中央总书记、国家主席、中央军委主席习近平24日在山东省德州市考察时强调，农业农村现代化关系中国式现代化全局和成色，要以扎实举措做好各项工作，着力提升农业综合生产能力和质量效益，确保粮食等重要农产品稳定供给，因地制宜推进宜居宜业和美乡村建设，引导广大农民群众用勤劳和智慧创造更加美好生活。<br/>
        6月24日，习近平在山东省委书记林武和省长周乃翔陪同下，来到德州市考察调研。<br/>
        　正值夏播时节，田间地里一派农忙景象。24日上午，习近平来到德州市陵城区边临镇东于架村，听取当地“三夏”生产工作汇报，了解小麦收成、玉米种植、农资供应等情况。他来到农田灌渠边察看水肥一体化设施，随后走进农田同种粮大户、农机手、农技人员亲切交流。得知今年小麦亩产又有提高，玉米播种不误农时、进度很快，习近平很高兴。他强调，保障粮食等重要农产品稳定供给是农业生产的重中之重。要落实粮食生产各项支持政策，做好农资保供稳价，积极推广先进适用品种、技术、装备，稳步提高单产和效益，力争全年粮食丰收。要完善农业基础设施，确保高标准农田建设质量，推进农业节水增效，强化气象预报和灾害监测预警，提升农业防灾减灾救灾能力。<br/>

      </p>
      <br/>
      <p xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" id="infos">
        Xinhua News Agency, Dezhou, Shandong Province, June 24 - Xi Jinping, General Secretary of the CPC Central Committee, President of the People's Republic of China and Chairman of the Central Military Commission, stressed during his visit to Dezhou City, Shandong Province on the 24th that the modernisation of agriculture and rural areas is related to the overall situation of Chinese-style modernisation. We should do a good job with solid measures, strive to improve the comprehensive agricultural production capacity and quality efficiency, ensure the stable supply of grain and other important agricultural products, promote the construction of liveable and workable and beautiful villages according to local conditions, and guide the majority of farmers to create a better life with diligence and wisdom.<br/>
        On June 24, Xi Jinping, accompanied by Lin Wu, Secretary of the Shandong Provincial Party Committee, and Zhou Naixiang, went to Dezhou City for inspection and research.<br/>
        It was the summer sowing season, and there was a scene of farming in the fields. On the morning of the 24th, Xi Jinping came to Dongyujia Village, Bianlin Town, Lingcheng District, Dezhou City to listen to the local "Three Summers" production report and learn about wheat harvest, corn planting, agricultural capital supply, etc. He came to the edge of the farmland irrigation canal to inspect the water and fertiliser integration facilities, and then walked into the farmland to have a cordial exchange with the same grain household, agricultural machine operators and agricultural technicians. Xi Jinping is very happy to learn that the yield per mu of wheat has increased again this year, that corn sowing does not miss the agricultural time and the progress is very fast. He stressed that ensuring the stable supply of grain and other important agricultural products is the top priority of agricultural production. We should implement various support policies for grain production, do a good job in ensuring the supply and stabilising prices of agricultural capital, actively promote advanced and applicable varieties, technologies and equipment, steadily improve unit yield and efficiency, and strive for a good grain harvest throughout the year. We should improve agricultural infrastructure, ensure the quality of high-standard farmland construction, promote agricultural water saving and efficiency, strengthen meteorological forecasting and disaster monitoring and early warning, and improve the capacity of agricultural disaster prevention, mitigation and relief. <br/>

      </p>
    </div>
  );
}



export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      </Suspense>
      <Welcome />
      <br/>
      <MyTable />
      <br/>
      <MyForm />
      <br/>
      <MyRadio />
      <br/>
      <MonCarousel />
      <br/>
      <MyVideo />
      <br/>
      <MesDonnees />
      <br/>
      <Chinois />
      <br/>
      <ShoppingList/>
      <br/>
      <MyCart/>
      <br/>
    </div>
  );
}
