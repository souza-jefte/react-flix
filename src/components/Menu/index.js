import React from 'react'
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import ButtonLink from './components/ButtonLink';

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className='Logo' src={Logo} alt="Logo jefteflix" />
      </a>
      <ButtonLink as="a" className="ButtonLink" href="/">
        Novo video
      </ButtonLink>
    </nav>
  )
}
export default Menu;

