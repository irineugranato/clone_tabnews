

test("Get para /api/v1/status deve retornar 200", async () => {
  //const response = await fetch("http://127.0.0.1:3000/api/v1/status");
  const response = await fetch("https://power2b.io/api/v1/status");
  
  expect(response.status).toBe(200);

 const responseBody = await response.json();
 expect(responseBody.updated_at).toBeDefined();
 const parserupdatedAt = new Date(responseBody.updated_at).toISOString();
 
 console.log(parserupdatedAt);
 expect (responseBody.updated_at).toEqual(parserupdatedAt);

});