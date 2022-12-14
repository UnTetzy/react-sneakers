import { useContext, useState } from 'react'
import AppContext from '../context'
import ContentLoader from 'react-content-loader'
import styles from './Card.module.scss'

function Card({
  id,
  sex,
  title,
  price,
  img,
  favorited = false,
  addFavourite,
  addToCart,
  isLoaded = false,
}) {
  const [isFavourite, setIsFavourite] = useState(favorited)
  const { isItemAdded } = useContext(AppContext)

  const obj = { id, parentId: id, sex, title, price, img }

  const clickFavouriteHandler = () => {
    addFavourite(obj)
    setIsFavourite(!isFavourite)
  }

  const addItemHandler = () => {
    addToCart(obj)
  }

  return (
    <div className={styles.card}>
      {isLoaded ? (
        <ContentLoader
          speed={2}
          width={210}
          height={260}
          viewBox="0 0 210 260"
          backgroundColor="#f2f2f2"
          foregroundColor="#ecebeb"
        >
          <rect x="30" y="36" rx="10" ry="10" width="150" height="90" />
          <rect x="30" y="140" rx="3" ry="3" width="150" height="15" />
          <rect x="30" y="161" rx="3" ry="3" width="90" height="15" />
          <rect x="30" y="202" rx="8" ry="8" width="80" height="24" />
          <rect x="148" y="194" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {addFavourite && (
            <img
              className={styles.card__heart}
              src={isFavourite ? 'images/heart-active.svg' : 'images/heart.svg'}
              alt="like"
              onClick={clickFavouriteHandler}
            />
          )}
          <div className="mb-15">
            <img className="mb-15" src={img} alt="sneakers" />
            <p>
              {sex} {title}
            </p>
          </div>
          <div
            className={`${styles.card__info} d-flex justify-between align-center`}
          >
            <div className={`${styles.card__infoCost} d-flex flex-column`}>
              <span className={`${styles.card__infoCost_text} text-uppercase`}>
                Цена:
              </span>
              <span className={styles.card__infoCost_summ}>{price} руб.</span>
            </div>
            {addToCart && (
              <button className={styles.card__button} onClick={addItemHandler}>
                <img
                  src={
                    isItemAdded(id)
                      ? '/images/btn-checked.svg'
                      : '/images/btn.svg'
                  }
                  alt="plus"
                />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Card
