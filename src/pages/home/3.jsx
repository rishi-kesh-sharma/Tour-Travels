import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "@/components/pages/home/3.jsx";
import NormalLayout from "@/components/Layouts/NormalLayout";
import FooterLessLayout from "@/components/Layouts/FooterLessLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen ">
      <FooterLessLayout>
        <Home />
      </FooterLessLayout>
    </main>
  );
}
