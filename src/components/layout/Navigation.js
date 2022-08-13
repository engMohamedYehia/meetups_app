import {Link} from 'react-router-dom'
import classes from './Navigation.module.css'


function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meeting Up</div>
        <nav>
          <ul>
            <li>
                <Link to='/'>All Meetings</Link>
            </li>
            <li>
                <Link to='/new'>New Meetings</Link>
            </li>
            <li>
                <Link to='/fav'>Favourities</Link>
            </li>
          </ul>
        </nav>
      
    </header>
  );
}

export default Navigation;
