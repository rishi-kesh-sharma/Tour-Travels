import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "@/components/pages/home/Car.jsx";
import NormalLayout from "@/components/Layouts/NormalLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen overflow-hidden">
      <NormalLayout>
        <Home />
      </NormalLayout>
    </main>
  );
}
