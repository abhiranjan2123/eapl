import React, { useState, useRef, useEffect } from 'react';
import '././css/ProductPage.css';
import Zoom from "../product_page/Zoom"

import DetailsThumb from './Product_DetailsThumb';
import img1 from "../../../src/images/img2.jpeg";
import img2 from "../../../src/images/img3.jpeg";
import img3 from "../../../src/images/img4.jpeg";
import Details from "../../components/File"


function ProductDetailsPage() {
  const [products] = useState([
    {
      _id: '1',
      title: 'Sequential Timers- S Series',
      src: [img1, img2, img3],
      description: '',
      content:
      "Bag Filter systems, Dust pollution systems, Air handling systems, MCC panels, Pneumatic Conveyors, Process Industries and many more.",
      count: 1,
    },
  
  ]);
  const [index, setIndex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace('active', '');
    }
    images[index].className = 'active';
  };

  useEffect(() => {
    const images = myRef.current.children;
    images[index].className = 'active';
  }, [index]);

  return (
    <div className="app">
    
      {products.map((item) => (
        <div className="details" key={item._id}>
          <div className="big-img">
            {/* <img src={item.src[index]} alt="" /> */}
            <Zoom image={item.src[index]}/>
           
          </div>
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
            </div>

            <p>{item.description}</p>
            <p>{item.content}</p>

            <DetailsThumb images={item.src} tab={handleTab} myRef={myRef} />

            <Details name="features"/>
            <Details name="Ordering Details"/>
            <Details name="Specifications"/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetailsPage;
