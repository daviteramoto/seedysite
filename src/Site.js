import React from 'react'

const Site = props => {
    return (
        <div>
        <nav className='navbar navbar-default navbar-fixed-top'>
  <div className='container'>
    <div className='navbar-header'>
      <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>                        
      </button>
      <a className='navbar-brand' href='#myPage'>SEEDY</a>
    </div>
    <div className='collapse navbar-collapse' id='myNavbar'>
      <ul className='nav navbar-nav navbar-right'>
        <li><a href='#sobre'>SOBRE</a></li>
        <li><a href='#download'>DOWNLOAD</a></li>
        <li><a href='#equipe'>EQUIPE</a></li>
      </ul>
    </div>
  </div>
</nav>

<div id='myPage' className='logo text-center'>
  <img src='seedy pa.png' alt='Seedy' width='500' height='250' />
  <div className="wavek">
  <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path className="wave1" fill="#ddffb4" fillOpacity="0.5" d="M0,64L24,101.3C48,139,96,213,144,224C192,235,240,181,288,149.3C336,117,384,107,432,128C480,149,528,203,576,218.7C624,235,672,213,720,181.3C768,149,816,107,864,117.3C912,128,960,192,1008,229.3C1056,267,1104,277,1152,272C1200,267,1248,245,1296,218.7C1344,192,1392,160,1416,144L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
    <path className="wave2" fill="#ddffb4" fillOpacity="0.6" d="M0,320L24,309.3C48,299,96,277,144,240C192,203,240,149,288,128C336,107,384,117,432,133.3C480,149,528,171,576,192C624,213,672,235,720,224C768,213,816,171,864,160C912,149,960,171,1008,160C1056,149,1104,107,1152,80C1200,53,1248,43,1296,42.7C1344,43,1392,53,1416,58.7L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
    <path className="wave3" fill="#ddffb4" fillOpacity="1" d="M0,256L24,234.7C48,213,96,171,144,138.7C192,107,240,85,288,90.7C336,96,384,128,432,165.3C480,203,528,245,576,250.7C624,256,672,224,720,224C768,224,816,256,864,234.7C912,213,960,139,1008,122.7C1056,107,1104,149,1152,154.7C1200,160,1248,128,1296,112C1344,96,1392,96,1416,96L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
  </svg>
  </div>
</div>

{/* SEÇÃO SOBRE */}
<div id='sobre' className='container-fluid text-center bgreen'>
  <div className='row'>
    <div className='col-sm'>
    <br /><br /><br /><br /><br /><br />
      <h2>Sobre</h2><br />
      <p>Nós da equipe Seedy nos preocupamos em tornar sua experiência culinária algo mais simples e agradável. Nossa missão é encontrar na nossa rede o seu novo restaurante favorito, respeitando seu estilo de vida e permitindo que você tenha uma experiencia segura e tranquila nos restaurantes que não conhece. 
Também oferecemos uma grande variedade de redes para que o cliente possa experimentar novos gostos e sabores em diversos estabelecimentos. Apreciamos sempre a boa experiencia do cliente com os nossos serviços, por isso, garantimos um aplicativo de qualidade tanto para os usuários quanto para os restaurantes parceiros.</p>
    </div>
  </div><br/><br/><br/><br/>
  <div className='row text-center'>
      <div className='col-sm-4'>
        <div>
          <img src='screen1.png' alt='screen' width='270' height=''></img><br /><br />
          <p><strong>Introdução</strong></p>
          <p>Simples navegação, utilização intuitiva.</p>
        </div>
      </div>
      <div className='col-sm-4'>
        <div>
          <img src='screen2.png' alt='screen' width='270' height=''></img><br /><br />
          <p><strong>Principal</strong></p>
          <p>Fácil acesso, sem complicação.</p>
        </div>
      </div>
      <div className='col-sm-4'>
        <div>
          <img src='screen3.png' alt='screen' width='270' height=''></img><br /><br />
          <p><strong>Feedback de clientes</strong></p>
          <p>Avaliações práticas.</p>
        </div>
      </div>
  </div>
</div>

{/* SEÇÃO DOWNLOAD */}
<div id='download' className='container-fluid bgreen'>
      <div className='row text-center'>
        <div className='col'>
          <h2>DOWNLOAD</h2><br /><br /><br /><br />
          <a href="https://drive.google.com/uc?export=download&id=1-HWfcBZbxkUwYcWPUZfC4-P3xTgkUGp0"><button type='button' className='effects eft' id='btnDownload'>Baixe aqui</button></a>
        </div>
      </div>
</div>

{/* SEÇÃO EQUIPE */}
<div id='equipe' className='container-fluid text-center bgreen'>
  <h2>EQUIPE</h2><br /><br /><br />
  <div className='row text-center'>
    <div className='col-sm-3'>
      <a href='#decr1'>
        <img src='davi.jpg' className='img-circle person' alt='tiago' width='210' height='210'></img>
      </a><br/><br/>
      <div id='decr1'>
        <p><strong>Davi Teramoto</strong></p>
        <p>Web Designer</p>
      </div>
    </div>
    <div className='col-sm-3'>
      <a href='#decr2'>
        <img src='maisa magali.png' className='img-circle person' alt='maisa' width='210' height='210'></img>
      </a><br/><br/>
      <div id='decr2'>
        <p><strong>Maísa Miranda</strong></p>
        <p>Administradora</p>
      </div>
    </div>
    <div className='col-sm-3'>
      <a href='#decr3'>
        <img src='belchior.jpg' className='img-circle person' alt='belchior' width='210' height='210'></img>
      </a><br/><br/>
      <div id='decr3'>
        <p><strong>Felipe Oliveira</strong></p>
        <p>Programador</p>
      </div>
    </div>
    <div className='col-sm-3'>
        <a href='#decr4'>
          <img src='tiago.jpg' className='img-circle person' alt='davi' width='210' height='210'></img>
        </a><br/><br/>
        <div id='decr4'>
          <p><strong>Tiago Martins</strong></p>
          <p>Designer</p>
        </div>
    </div>
  </div>
  <br />
</div>



<footer className='container-fluid text-center bgreen'>
  <a href='#myPage' title='Home'>
    <span className='glyphicon glyphicon-chevron-up'></span>
  </a>
  <p>Todos os direitos reservados Seedy Company Ltda. Ink. Enterprise flinston</p>
  <p>2020</p>
</footer>
</div>
    )
}

export default Site