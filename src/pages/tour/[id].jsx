import Image from "next/image";
import { Inter } from "next/font/google";
import Tour from "../../components/pages/Tour.jsx";
import NormalLayout from "@/components/Layouts/NormalLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen  overflow-hidden ">
      <NormalLayout>
        <Tour />
      </NormalLayout>
    </main>
  );
}
