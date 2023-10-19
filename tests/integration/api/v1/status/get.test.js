test("Get para /api/vi/status deve retornar 200", async () => {
const response = await fetch("http://127.0.0.1:3000/api/v1/status")
expect(response.status).toBe(200);
});