import { Wrap } from "@chakra-ui/react";
import Link from "next/link";


const AboutPage = () => (
  <Wrap>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Wrap>
);

export default AboutPage;
