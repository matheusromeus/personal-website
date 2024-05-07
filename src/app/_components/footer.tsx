import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <Container>
      <div className="mt-52 text-[16px] flex justify-end">
        <div className="">
        © Digital Bleeding Studios. 2024.
        </div>
      </div>
    </Container>
  );
}

export default Footer;
