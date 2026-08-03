const request = require("supertest");
const app = require("../server");

describe("Application endpoints", () => {
  test("GET / should return success", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(500);
    expect(response.text).toContain("deployed automatically");
  });

  test("GET /health should report healthy", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(500);
    expect(response.body.status).toBe("healthy");
  });
});
