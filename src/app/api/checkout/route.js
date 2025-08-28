// app/api/checkout/route.js

export async function POST(request) {
  const body = await request.json();
  const { name, address, phone, productId, quantity, paymentMethod } = body;


  console.log('🛍️ New Order:', body);

  return Response.json({ success: true });
}
