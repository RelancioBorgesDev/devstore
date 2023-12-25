import data from "./data.json"
export async function GET() {
  const products = data.products

  return Response.json(products)
}
