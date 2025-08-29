import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Aplicaciones() {
  return (
    <div id="a">
      <a
        href="https://play.google.com/store/apps/details?id=com.mcentric.mcclient.MyMadrid&hl=es"
        target="_blank"
      >
        <img src="src/assets/google-play-2.svg" alt="Google Play" />
      </a>

      <a
        href="https://apps.apple.com/"
        target="_blank"
      >
        <img src="src/assets/app-store-2.svg" alt="App Store" />
      </a>

      <a
        href="https://appgallery.huawei.com/"
        target="_blank"
      >
        <img src="src/assets/huawei-store-2.svg" alt="Huawei AppGallery" />
      </a>
    </div>
  );
}
export default function Gallery() {
  return (
    <section>
      <p>Descarga ahora</p>
      <h2>Real Madrid App</h2>
      <Aplicaciones />
      </section>
  );
}
