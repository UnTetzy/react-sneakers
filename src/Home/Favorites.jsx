import { Link } from 'react-router-dom'
import Card from '../components/Card'
import style from './Content.module.scss'
import styles from './Favorites.module.scss'

function Favorites({ products, addFavourite }) {
  return (
    <div className={`${styles.favorites} p-40`}>
      <div className={styles.favoritesTop}>
        <Link to="/" exact="true">
          <img src="images/back-btn.svg" width={35} alt="Back" title="Back" />
        </Link>
        <h2>Закладки</h2>
      </div>
      <div className={style.sneakers}>
        {products.map((product, i) => (
          <Card
            {...product}
            favorited={true}
            addFavourite={addFavourite}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
