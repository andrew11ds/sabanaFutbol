import styles from './ui.module.css';
import {UiProps} from  '@front-workspace/types';
import Link from 'next/link';

/* eslint-disable-next-line */

export function Ui() {
  const logo="/Images/logoFutbol.png"; 
  return (
    <div>
    <header>
    <div className="row e justify-content-center align-items-center ">
      <div className="col-auto p-3 block-center">
        <div className="text-center image-size">
          <Link href="/index">
            <div className={styles.img__content} >
            <img src={logo} className="img-responsive" width="128" height="128"/>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <h1> Sabana Futbol</h1> 
    </header>
    <nav>
      <ul>
        <div className="d-grid gap-2 mb-4">
          <Link href="/countries">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Show countries
            </button>
          </Link>
        </div>
      </ul>
    </nav>
    
  </div>
  );
}

export default Ui;
