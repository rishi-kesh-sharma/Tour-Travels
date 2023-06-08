import { Inter } from "next/font/google";
import About from "@/components/pages/about";
import NormalLayout from "@/components/Layouts/NormalLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen ">
      <NormalLayout>
        <About />
      </NormalLayout>
    </main>
  );
}
