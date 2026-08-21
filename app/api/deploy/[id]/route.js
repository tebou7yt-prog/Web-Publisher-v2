export async function GET(req, { params }) {
  const token = process.env.VERCEL_TOKEN;
  const { id } = await params;
  const res = await fetch(`https://api.vercel.com/v13/deployments/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
