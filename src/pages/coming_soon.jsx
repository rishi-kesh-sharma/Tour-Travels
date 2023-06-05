import Image from "next/image";
import { Inter } from "next/font/google";
import NormalLayout from "@/components/Layouts/NormalLayout";
import ComingSoon from "@/components/pages/ComingSoon";
import FooterLessLayout from "@/components/Layouts/FooterLessLayout";
import PartialLessLayout from "@/components/Layouts/PartialLessLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen ">
      <PartialLessLayout>
        <ComingSoon />
      </PartialLessLayout>
    </main>
  );
}
