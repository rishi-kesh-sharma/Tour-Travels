import Image from "next/image";
import { Inter } from "next/font/google";
import NormalLayout from "@/components/Layouts/NormalLayout";
import Blog from "@/components/pages/Blog";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen  overflow-hidden ">
      <NormalLayout>
        <Blog />
      </NormalLayout>
    </main>
  );
}
