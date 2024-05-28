import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <Container>
      <div className="mt-52 text-[17px] flex justify-center xl:justify-end md:mb-8 lg:justify-end">
        <div className="underline hover:no-underline hover:cursor-pointer">
          {/* check out my featured works↗️ */}
        </div>
        <div>
        © Digital Bleeding Studios. 2024.
        </div>
      </div>
    </Container>
  );
}

export default Footer;
