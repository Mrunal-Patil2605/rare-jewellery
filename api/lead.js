export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' });
  const { email, source } = request.body || {};
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return response.status(400).json({ error: 'A valid email is required' });
  // Persist this event to your CRM/database once a provider is connected in Vercel.
  console.log(JSON.stringify({ type: 'rare_jewellery_lead', email, source, createdAt: new Date().toISOString() }));
  return response.status(200).json({ ok: true });
}
