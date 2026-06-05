export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <h1>Hello from Hong Kong</h1>
      <p>Region: {process.env.VERCEL_REGION}</p>
    </main>
  );
}
