import styles from "styles/ProductCard.module.scss";
import { textShrink } from "utils/textShrink";
import { toPriceForm } from "utils/toPriceForm";

export interface ProductDetails {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  id: number;
  rating: { count: number; rate: number };
}

const ProductCard: React.FC<{ productDetails: ProductDetails }> = ({ productDetails }) => {
  const months = ["#ff8b64", "#55c2e6", "#ff5e7d", "#7335d2", "#4bcf82", "#f1c75b"];

  const random = Math.floor(Math.random() * months.length);

  return (
    <div className={styles.container} style={{ backgroundColor: months[random] }}>
      <div className={styles.card}>
        <div className={styles.options}>
          <div className={styles.title}>{textShrink(productDetails?.category, 20)}</div>
          <div className={styles.dots}>
            {[1, 2, 3].map((dot) => (
              <div className={styles.dot}></div>
            ))}
          </div>
        </div>
        <div className={styles.descriptionContainerMobile}>
          <div className={styles.price}>{toPriceForm(productDetails?.price)}</div>
          <div className={styles.descriptionMobile}>{textShrink(productDetails?.title, 40)}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles.description}>{textShrink(productDetails?.title, 40)}</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className={styles.inStore}>inStore</div>
            <div className={styles.inStoreNumber}>{productDetails?.rating?.count}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
