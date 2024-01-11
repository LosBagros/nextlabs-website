export default function Page({ params }: { params: { slug: string } }) {
  return <h1 className="text-white text-3xl">Test: {params.slug}</h1>;
}
