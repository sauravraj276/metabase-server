export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    return res.status(200).json({
      name: "metabase-server",
      endpoint: "/api/mcp",
      transport: "http",
      message: "MCP endpoint is deployed on Vercel.",
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  return res.status(501).json({
    error: "MCP HTTP handling is not implemented in this serverless adapter yet.",
  });
}
