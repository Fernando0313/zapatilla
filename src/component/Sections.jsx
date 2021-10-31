import { useState, useEffect, useRef } from 'react'
import "../css/section.css";

import GroupProducts from './GroupProducts';

export default function Sections() {

  
  
  return (
    <div>
        <div style={{height:"100vh",width:"100%"}}>
         <section className="section-start"></section>
        </div>
    

      <section className="section-two">
          <GroupProducts />
      </section>
    </div>
  );
}
