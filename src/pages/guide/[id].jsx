import NormalLayout from "@/components/Layouts/NormalLayout";
import GuideDetail from "@/components/pages/GuideDetail";

export default function Page() {
  return (
    <main className=" min-h-screen ">
      <NormalLayout>
        <GuideDetail />
      </NormalLayout>
    </main>
  );
}
