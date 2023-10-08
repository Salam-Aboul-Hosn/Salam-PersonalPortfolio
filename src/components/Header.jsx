import Headercss from '../styles/components/Header.module.css';
import HeaderAnimation from './HeaderAnimation';

function Header() {
  return (
    <header className={Headercss.headers}>
      <p className={Headercss.name}>Hey, my name is</p>
      <h1 className={Headercss.title}>
        <div className={Headercss.bounceContainer}>
          <span className={Headercss.bounceLetter}>S</span>
          <span className={Headercss.bounceLetter}>a</span>
          <span className={Headercss.bounceLetter}>l</span>
          <span className={Headercss.bounceLetter}>a</span>
          <span className={Headercss.space}>
            <span className={Headercss.bounceLetter}>m</span>
          </span>
          <span className={Headercss.bounceLetter}>A</span>
          <span className={Headercss.bounceLetter}>b</span>
          <span className={Headercss.bounceLetter}>o</span>
          <span className={Headercss.bounceLetter}>u</span>
          <span className={Headercss.space}>
            <span className={Headercss.bounceLetter}>l</span>
          </span>
          <span className={Headercss.bounceLetter}>H</span>
          <span className={Headercss.bounceLetter}>o</span>
          <span className={Headercss.bounceLetter}>s</span>
          <span className={Headercss.bounceLetter}>n</span>
        </div>
      </h1>
      <h1 className={Headercss.title}>A {<HeaderAnimation />}</h1>
    </header>
  );
}
export default Header;
