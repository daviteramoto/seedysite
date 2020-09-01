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
        <li><a href='#servicos'>SERVIÇOS</a></li>
        <li><a href='#contato'>CONTATO</a></li>
      </ul>
    </div>
  </div>
</nav>

<div id='myPage' className='logo text-center'>
  <img src='seedy pa.png' alt='Seedy' width='500' height='250' />
</div>

{/* SESSÃO SOBRE */}
<div id='sobre' className='container-fluid'>
  <div className='row'>
    <div className='col-sm-8'>
      <h2>Sobre</h2><br />
      <h4>Ainda sem conteúdo kkj</h4><br />
      <p>Lembre-se de que você mesmo é o melhor secretário de sua tarefa, o mais eficiente propagandista de seus ideais, a mais clara demonstração de seus princípios, o mais alto padrão do ensino superior que seu espírito abraça e a mensagem viva das elevadas noções que você transmite aos outros.</p>
    </div>
    <div className='col-sm-4'>
      <img src='maisa magali.png' alt='maisa' width='400' height='400' />
    </div>
  </div>
</div>

{/* SESSÃO SERVIÇOS */}
<div id='servicos' className='container-fluid text-center'>
  <h2>SERVIÇOS</h2>
  <h4>ainda sem conteúdo kkj</h4>
  <br />
</div>

{/* SESSÃO CONTATO */}
<div id='contato' className='container-fluid bg-grey'>
  <h2 className='text-center'>CONTATO</h2><br /><br />
  <div className='row'>
    <div className='col-sm-5'>
      <p><span className='glyphicon glyphicon-map-marker'></span> São Bernardo do Campo, SP</p><br />
      <p><span className='glyphicon glyphicon-phone'></span> +55 11 4002-8922</p><br />
      <p><span className='glyphicon glyphicon-envelope'></span> seilaOemail@company.com</p>
    </div>
    <div className='col-sm-7 '>
      <div className='row'>
        <div className='col-sm-6 form-group'>
          <input className='form-control' id='name' name='name' placeholder='Nome' type='text' required />
        </div>
        <div className='col-sm-6 form-group'>
          <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
        </div>
      </div>
      <textarea className='form-control' id='comments' name='comments' placeholder='Mensagem' rows='5'></textarea><br />
      <div className='row'>
        <div className='col-sm-12 form-group'>
          <button className='btn btn-default pull-right' type='submit'>Enviar</button>
        </div>
      </div>
    </div>
  </div>
</div>

<footer className='container-fluid text-center'>
  <a href='#myPage' title='Home'>
    <span className='glyphicon glyphicon-chevron-up'></span>
  </a>
  <p>Desenvovido pelo profissional em Web Design <a href='https://www.instagram.com/dr_drauzio' title='dr_drauzio'>@dr_drauzio</a></p>
</footer>
</div>
    )
}

export default Site