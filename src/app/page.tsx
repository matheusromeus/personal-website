import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Section } from "./_components/section";

export default function Index() {

  return (
    <main>
      <Container>
        <Intro />
        <Section />
      </Container>
    </main>
  );
}
