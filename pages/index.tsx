import ProductCard, { ProductDetails } from "components/ProductCard";
import UserCard from "components/UserCard";
import styles from "styles/Home.module.scss";
const Fade = require("react-reveal/Fade");

const Home: React.FC<{ products: ProductDetails[] }> = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <UserCard />
        <div className={styles.homeGrid}>
          {products?.map((product: ProductDetails) => (
            <div key={product.id} className={styles.homeGridLayout}>
              <Fade bottom>
                <ProductCard productDetails={product} />
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products?limit=10`);
  const products = await res.json();
  return { props: { products } };
}
