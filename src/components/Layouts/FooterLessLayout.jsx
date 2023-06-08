import Header from "../sections/commons/Header";
import TopHeader from "../sections/commons/TopHeader";

export default function FooterLessLayout({ children }) {
  return (
    <>
      <TopHeader />
      <Header />
      <main>{children}</main>
    </>
  );
}
