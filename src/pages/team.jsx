import Image from "next/image";
import { Inter } from "next/font/google";
import NormalLayout from "@/components/Layouts/NormalLayout";
import Team from "@/components/pages/Team";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen ">
      <NormalLayout>
        <Team />
      </NormalLayout>
    </main>
  );
}
