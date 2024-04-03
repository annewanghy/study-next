import Link from "next/link"
const Detail = (props: { id: string }) => {
  return <div>Detail id: {props.id} go back <Link href="/list">list</Link></div>;
};

export async function getStaticProps(context: any) {
  const { params } = context;
  const id = params.id;

  return {
    props: {
      id: id,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
}

export default Detail;
