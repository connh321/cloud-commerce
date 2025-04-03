import styles from './SkeletonCard.module.scss';

const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.imageWrapper}>
        <div className={`${styles.image} ${styles.skeletonImage}`} />
      </div>
      <div className={styles.details}>
        <div className={`${styles.productName} ${styles.skeletonText}`} />
        <div className={styles.namePrice}>
          <div className={`${styles.price} ${styles.skeletonText}`} />
          <div className={`${styles.addToCart} ${styles.skeletonButton}`} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
