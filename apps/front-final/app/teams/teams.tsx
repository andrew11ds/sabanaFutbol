import styles from './teams.module.css';
import { useTeams, getTeams } from '../useTeams';
import { TeamsProps } from '@front-workspace/types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';
/* eslint-disable-next-line */

export function Teams(props: TeamsProps) {
  const { country_id } = props;
  const [teams] = useTeams(country_id);
  const filteredTeams = teams?.filter((element) => {
    return element.short_code;
  });
  const logo = '/Images/logoFutbol.png';
  const noLogo = '/Images/noLogo.png';
  /* getTeams(country_id)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });*/
  return (
    <>
      <header>
        <div className="d-grid gap-2 mb-4">
          <Link href="/countries">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go back to countries
            </button>
          </Link>
        </div>
        <div className="row e justify-content-center align-items-center ">
          <div className="col-auto p-3 block-center">
            <div className="text-center image-size">
              <Link href="/index">
                <div className={styles.img__content}>
                <img
                  src={logo}
                  className="img-responsive"
                  width="128"
                  height="128"
                />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <h1>Welcome to Teams!</h1>

        <h2> Total data: {filteredTeams ? filteredTeams.length : 0} teams</h2>
      </header>

      <nav>
        <ul className={styles.container__list}>
          {filteredTeams && filteredTeams.length > 0 ? (
            filteredTeams.map(
              ({ team_id, name, short_code, logo }) =>
                 (
                  <li key={team_id}>
                    <div className="container mb-4 ">
                      <div className="card">
                        <div className="row e justify-content-center align-items-center ">
                          <div className="col-auto p-3 block-center">
                            <div className="text-center logo-size ">
                              <img src={logo} alt={noLogo} className="logo-size"  />
                            </div>
                          </div>
                        </div>

                        <div className="card-body">
                          <h4 className="card-title text-center">{name}</h4>
                          <p className="card-text">Short code: {short_code}</p>
                          <div
                            className="d-grid gap-2 mb-4 "
                            key={country_id}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>
                )
            )
          ) : (
            <p>no data</p>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Teams;
