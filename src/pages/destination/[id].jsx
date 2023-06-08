import NormalLayout from "@/components/Layouts/NormalLayout";
import Destination from "@/components/pages/Destination.jsx";

export default function Page() {
  return (
    <main className=" min-h-screen  overflow-hidden ">
      <NormalLayout>
        <Destination />
      </NormalLayout>
    </main>
  );
}
