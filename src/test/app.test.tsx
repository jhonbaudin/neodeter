import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App", () => {
  it("renderiza la home con navegacion principal", () => {
    render(<App />);

    const navigation = screen.getByRole("navigation");

    expect(within(navigation).getByRole("link", { name: /inicio/i })).toBeInTheDocument();
    expect(within(navigation).getByRole("link", { name: /productos/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /soluciones químicas para limpieza y desinfección industrial/i,
      }),
    ).toBeInTheDocument();
  });
});
