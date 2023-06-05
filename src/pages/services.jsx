import Image from "next/image";
import { Inter } from "next/font/google";
import Services from "@/components/pages/Services";
import NormalLayout from "@/components/Layouts/NormalLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen ">
      <NormalLayout>
        <Services />
      </NormalLayout>
    </main>
  );
}
