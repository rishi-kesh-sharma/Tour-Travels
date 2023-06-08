import { Inter } from "next/font/google";
import Home from "@/components/pages/home/3.jsx";
import FooterLessLayout from "@/components/Layouts/FooterLessLayout";

export default function Page() {
  return (
    <main className=" min-h-screen ">
      <FooterLessLayout>
        <Home />
      </FooterLessLayout>
    </main>
  );
}
