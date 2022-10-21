import './style.css';

import imgLogo from '../../assets/img/place-company.png';

export function SectionValues(){
    return (
        <section id="values">
  <h2>
    Quem é a Imobilairia Unimater?
  </h2>
  <div className="values-container">
    <img src={imgLogo} alt="Foto da firma" />

    <div className="values-content">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis maiores cum voluptatem corporis excepturi, quas doloremque. Excepturi exercitationem culpa aperiam laborum, tenetur, iste fugit itaque, aliquid sint non distinctio perspiciatis
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo repudiandae labore vel cupiditate similique minus, deleniti pariatur iusto error saepe, necessitatibus magnam! Placeat nesciunt mollitia voluptates vel maiores laboriosam asperiores.</p>
      <div className="value-detail">
        <div className="value">
          <span>
            Facilidade
          </span>
          <span>Confiabilidade</span>
        </div>
      </div>
    </div>
  </div>
        </section>
    )

}