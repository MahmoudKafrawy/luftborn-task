import ProductCard from "components/ProductCard";
import UserCard from "components/UserCard";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "styles/Home.module.scss";

const Home: NextPage = () => {
  const [products, setProducts] = useState<any[]>();
  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => {
        response.json().then((data) => {
          setProducts(data);
        });
      })
      .catch((err) => {
        alert("Please check internet connection");
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <UserCard />
        <div className={styles.homeGrid}>
          {products?.map((product) => (
            <div key={product} className={styles.homeGridLayout}>
              <ProductCard productDetails={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
