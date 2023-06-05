import Footer from "../sections/commons/Footer";
import Header from "../sections/commons/Header";
import TopHeader from "../sections/commons/TopHeader";

export default function PartialLessLayout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
