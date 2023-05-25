import Image from "next/image";
import { Inter } from "next/font/google";
import Destinations from "@/components/pages/Destinations.jsx";
import NormalLayout from "@/components/Layouts/NormalLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen ">
      <NormalLayout>
        <Destinations />
      </NormalLayout>
    </main>
  );
}
