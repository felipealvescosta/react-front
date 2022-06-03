import styles  from './Header.module.css';
import igniteLogo from '../images/ignite-logo.svg';

export function Header(){
  return (
    <div className={styles.header}>
      <img src={igniteLogo} className={styles.logo} alt="Ignite Logo" />
      <strong className={styles.title}>Ignite Feed</strong>
    </div>
  )
}