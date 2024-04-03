import Head from "next/head";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Head>
        <title>Topic List Page</title>
      </Head>
      <div>
        <div>List Page</div>
        <ul>
          <li>
            <Link href="/1">blog 1</Link>
          </li>
          <li>
            <Link href="/2">blog 2</Link>
          </li>
          <li>
            <Link href="/3">blog 3</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Index;
