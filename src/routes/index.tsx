import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pockit — Your money, your story." },
      { name: "description", content: "Pockit is a personal finance tracker for expenses, income, savings, budgets, and goals — all in one place." },
      { property: "og:title", content: "Pockit — Your money, your story." },
      { property: "og:description", content: "Track expenses, income, piggy bank savings, budgets, and goals with Pockit." },
    ],
  }),
  component: Index,
});

function Index() {
  
  return (
    <div style={{ minHeight: "100vh", background: "#111827", color: "#F9FAFB", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "3rem" }}>🐷</div>
        <h1 style={{ marginTop: "0.5rem" }}>Loading Pockit…</h1>
        <p style={{ color: "#9CA3AF", marginTop: "0.5rem" }}>
          If you aren't redirected, <a href="/pockit.html" style={{ color: "#22C55E" }}>click here</a>.
        </p>
      </div>
    </div>
  );
}
