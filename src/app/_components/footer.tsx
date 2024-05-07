import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <Container>
      <div className="mt-52 text-[17px] flex justify-between">
        <div className="underline hover:no-underline hover:cursor-pointer">
          featured works.
        </div>
        <div>
        © Digital Bleeding Studios. 2024.
        </div>
      </div>
    </Container>
  );
}

export default Footer;
