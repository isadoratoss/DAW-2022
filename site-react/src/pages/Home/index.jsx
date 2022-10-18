import './style.css';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">

<section id="banner">

  <div className="banner-content">
    <h1>Lugar exato para você realizar os seus sonhos</h1>
    <h3>Nós oferecemos um serviço completo de venda,locação e compra</h3>
  </div>
  <div className="banner-filter">
    <div className="filter-fields"></div>
    <form>
      <select>
        <option value="venda">Venda</option>
        <option value="locacao">Locação</option>
      </select>
      <select>
        <option>Tipo Imóvel</option>
        <option value="apartamento">Apartamento</option>
        <option value="casa">Casa</option>
        <option value="sobrado">Sobrado</option>
        <option value="terreno">Terreno</option>
      </select>
      <select>
        <option>Cidade</option>
        <option value="coronel">Coronel Vivida</option>
        <option value="beltrao">Francisco Beltão</option>
        <option value="pato">Pato Branco</option>
        <option value="saudade">Saudade do Iguaçu</option>
      </select>
      <select>
        <option>Bairro</option>
        <option value="brasilia">Brasília</option>
        <option value="centro">Centro</option>
        <option value="la salle">La Salle</option>
        <option value="pinheiros">Pinheiros</option>
      </select>
    </form>
    <div className="filter-result">
      <p className="result-value">26</p>
      <p className="result-label">Imoveis</p>
      <button>Filtrar</button>
    </div>
  </div>
</section>
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
<section id="reasons">
  <h2>
    Por que nos Escolher?
  </h2>
  <div className="reasons-content">
    <div className="reason">
      <p className="reason-value">+1000</p>
      <p className="reason-label">Imoveis</p>
    </div>

    <div className="reason">
      <p className="reason-value">+500</p>
      <p className="reason-label">Clientes Felizes</p>
    </div>

    <div className="reason">
      <p className="reason-value">+50</p>
      <p className="reason-label">Premiações</p>
    </div>

    <div className="reason">
      <p className="reason-value">+100</p>
      <p className="reason-label">Especialistas</p>
    </div>

  </div>
</section>
<section id="specialists">
  <h2>
    Converse com um Especialista
  </h2>
  <div className="Specialists-content">
    <div className="Especialist">
      <h5>Tutu Williams</h5>
      <p>London</p>
      <p className="Especialist detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsam maxime, error, non id incidunt unde obcaecati sapiente alias deleniti culpa architecto facere molestiae cumque quam exercitationem, tempore dolor ipsa?
      </p>
    </div>

    <div className="Especialist">
      <h5>Mark Zion</h5>
      <p>New York City</p>
      <p className="Especialist detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsam maxime, error, non id incidunt unde obcaecati sapiente alias deleniti culpa architecto facere molestiae cumque quam exercitationem, tempore dolor ipsa?
      </p>
    </div>

    <div className="Especialist">
      <h5>Essien Crest</h5>
      <p>Berlin</p>
      <p className="Especialist detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsam maxime, error, non id incidunt unde obcaecati sapiente alias deleniti culpa architecto facere molestiae cumque quam exercitationem, tempore dolor ipsa?
      </p>
    </div>
  </div>
</section>
<section id="values">
  <h2>
    Quem é a Imobilairia Unimater?
  </h2>
  <div className="values-container">
    <img src="./assets/img/place-company.png" alt="Foto da firma" />

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
</div>
            
        </div>
    )
}