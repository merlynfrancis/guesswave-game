import React from "react";
import styles from "../styles/components/MainLayout.module.scss";
// import { Metadata } from 'next';

// let title = "Guess Wave";
// let description = "Small Game";

// export const metadata: Metadata = {
//   title: 'Acme Dashboard',
//   description: 'The official Next.js Course Dashboard, built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layoutContainer}>
      <title>Guess Wave</title>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
