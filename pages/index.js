import { dummyData } from "../helpers/dummy-data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

  /* console.log(dummyData) */

  return (
    <div>
      <header className="header border-radius-x-bottom">
        <div className="header-contents">
          <img className="logo" src="./img/logo.jpg" alt="logo" />
          <div className="d-flex flex-col align-items-center">
            <h1 className="site-title no-margin no-padding">LGilbert</h1>
            <p className="site-subtitle">Calzados para tu comodidad</p>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="items">
          {dummyData.map((item) => (
            <div className="item blink" key={item.cod}>
              <img src={`./img/demo-prods/${item.imagen}`} alt="imagen" loading="lazy" />
              <p className="data-text">Código: {item.cod}</p>
              <p className="data-text">Color: {item.color}</p>
              <p className="data-text">Precio: ${item.precio}</p>
              <a className="wa-button grow" href="#" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" /><p className="wa-button-text">Pídelo por WhatsApp</p>
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer border-top">
        <div className="footer-contents">
          <h4>L-Gilbert</h4>
          <p>&copy; {new Date().getFullYear()}</p>
          <p>Creado por: <a href="https://tinexlab.vercel.app" target="_blank">TinexLab</a></p>
        </div>
      </footer>
    </div>
  )
}
