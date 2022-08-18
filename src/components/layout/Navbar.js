import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../imgs/costs_logo.png'

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Container>
        <Link to="/"> <img src={logo} alt="Costs"/> </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/Projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Contact"> Contato </Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}