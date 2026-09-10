import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("application shell", () => {
  it("reveals the home page after the initial loader", async () => {
    render(<App />);

    await waitFor(
      () => {
        expect(
          screen.getByRole("heading", {
            name: /structuring capital, entities and wealth across borders/i,
          })
        ).toBeVisible();
      },
      { timeout: 5000 }
    );
  });
});
