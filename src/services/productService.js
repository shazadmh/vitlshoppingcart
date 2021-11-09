//Gettting the data from a service api
export async function getProducts() {
  const response = await fetch(
    'https://vitl-static-api.s3-eu-west-1.amazonaws.com/fe-test.json',
  )
  if (response.ok) return response.json()
  throw response
}
