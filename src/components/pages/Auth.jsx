import MemberPage from "@/components/Auth/MemberPage";
import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";

function Auth() {
  return (
    <Section>
      <Container>
        <MemberPage
          brand={"Tours and Travels"}
          logoUrl="https://htmldesigntemplates.com/html/travelin/images/trending/trending5.jpg"
        />
      </Container>
    </Section>
  );
}

export default Auth;

// className="flex justify-center items-center w-screen h-screen"
