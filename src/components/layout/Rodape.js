import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Rodape.module.css'

export default function Rodape() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copyright}><span>Costs</span> &copy; 2022 </p>
    </footer>
  )
}