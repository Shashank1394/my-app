export async function GET() {
  return Response.json({
    vercelRegion: process.env.VERCEL_REGION,
    timestamp: new Date().toISOString(),
  });
}
