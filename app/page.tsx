async function getRegion() {
  try {
    const res = await fetch(
      `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/api/region`,
      { cache: "no-store" },
    );

    return await res.json();
  } catch {
    return { vercelRegion: "unknown" };
  }
}

export default async function Home() {
  const data = await getRegion();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <h1>Vercel Region Test</h1>
        <p>
          Function Region: <strong>{data.vercelRegion}</strong>
        </p>
      </div>
    </main>
  );
}
