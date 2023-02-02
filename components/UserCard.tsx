import Link from "next/link";
import { useState } from "react";
import styles from "styles/UserCard.module.scss";
const UserCard = () => {
  const [activeSection, setActiveSection] = useState(2);
  const links = [
    {
      href: "/",
      title: "Daily",
    },
    { href: "/", title: "Weekly" },
    { href: "/", title: "Monthly" },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <img src="avatar.png" className={styles.avatar}></img>
          <div className={styles.userTitle}>Report For</div>
          <div className={styles.userSubTitle}>Best Sales</div>
        </div>
        <div className={styles.links}>
          {links.map((link, index) => (
            <Link
              key={link.title}
              href={link.href}
              className={activeSection == index + 1 ? styles.activeLink : styles.idleLink}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserCard;
