import Image from "next/image";
import { Inter } from "next/font/google";
import Tours from "../components/pages/Tours";
import NormalLayout from "@/components/Layouts/NormalLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen  overflow-hidden ">
      <NormalLayout>
        <Tours />
      </NormalLayout>
    </main>
  );
}
