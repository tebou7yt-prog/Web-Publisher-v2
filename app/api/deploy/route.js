export async function POST(req) {
  const token = process.env.VERCEL_TOKEN;
  if (!token) {
    return Response.json(
      { error: { message: 'Token tidak ditemukan.' } },
      { status: 500 }
    );
  }
  const body = await req.json();
  const res = await fetch('https://api.vercel.com/v13/deployments', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
