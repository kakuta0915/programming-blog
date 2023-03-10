import Logo from '../logo/logo'
import Nav from '../nav/nav'
import styles from './header.module.css'
import Container from '../container/container'

export default function Header() {
  return (
    <Container large>
      <header className={styles.header}>
        <Logo />
        <Nav />
      </header>
    </Container>
  )
}
