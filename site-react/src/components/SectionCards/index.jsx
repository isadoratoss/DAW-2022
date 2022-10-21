import './style.css';

export function SectionCards(){
    return(
        <section id="cards">
  <h2>Imoveis Disponíveis</h2>
  <div className="cards-content">
    <div className="card">
      <img src="./assets/img/thumb1.png" alt="Casa 1" />
        <div className="card-content">
          <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque temporibus officiis perspiciatis
            maxime,
            corrupti nulla architecto fuga similique perferendis quidem quaerat cum aliquid sapiente, distinctio
            excepturi
            praesentium sunt quo. Doloribus.</h4>
          <p>R$ 900.000,00</p>
        </div>
    </div>
  </div>
  <div className="card">
    <img src="./assets/img/thumb2.png" alt="Casa 2" />
      <div className="card-content">
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque temporibus officiis perspiciatis
          maxime,
          corrupti nulla architecto fuga similique perferendis quidem quaerat cum aliquid sapiente, distinctio
          excepturi
          praesentium sunt quo. Doloribus.</h4>
        <p>R$ 900.000,00</p>
      </div>
  </div>
  <div className="card">
    <img src="./assets/img/thumb3.png" alt="Casa 3" />
      <div className="card-content">
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque temporibus officiis perspiciatis
          maxime,
          corrupti nulla architecto fuga similique perferendis quidem quaerat cum aliquid sapiente, distinctio
          excepturi
          praesentium sunt quo. Doloribus.</h4>
        <p>R$ 900.000,00</p>
      </div>
  </div>
  <div className="card">
    <img src="./assets/img/thumb4.png" alt="Casa 4" />
      <div className="card-content">
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque temporibus officiis perspiciatis
          maxime,
          corrupti nulla architecto fuga similique perferendis quidem quaerat cum aliquid sapiente, distinctio
          excepturi
          praesentium sunt quo. Doloribus.</h4>
        <p>R$ 900.000,00</p>
      </div>
  </div>
        </section>
    )
}