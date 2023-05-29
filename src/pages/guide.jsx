import Image from "next/image";
import { Inter } from "next/font/google";
import NormalLayout from "@/components/Layouts/NormalLayout";
import Guide from "@/components/pages/Guide";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen ">
      <NormalLayout>
        <Guide />
      </NormalLayout>
    </main>
  );
}
