import Link from "next/link";
import { Footer } from "./styles";

export function FooterComponent() {
  return (
    <Footer>
      <p>
        Desenvolvido por{" "}
        <Link href="https://github.com/augustomoscardo" passHref>
          <a target="_blank">Augusto Moscardo</a>
        </Link>
      </p>
    </Footer>
  );
}
