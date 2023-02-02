import styles from "styles/ProductCard.module.scss";
import { textShrink } from "utils/textShrink";
import { toPriceForm } from "utils/toPriceForm";
interface data {
  productDetails: {
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
    id: number;
    rating: { count: number; rate: number };
  };
}

const ProductCard: React.FC<data> = ({ productDetails }) => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <div className={styles.title}>{textShrink(productDetails?.title, 18)}</div>
        <div className={styles.price}>{toPriceForm(productDetails?.price)}</div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div className={styles.description}>{textShrink(productDetails?.description, 35)}</div>
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
