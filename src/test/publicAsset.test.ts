import { describe, expect, it } from "vitest";
import { publicAsset } from "@/lib/publicAsset";

describe("public asset deployment paths", () => {
  it("keeps media and downloads beneath the Pages project", () => {
    for (const path of ["/images/logo.png", "/videos/intro.mp4", "/downloads/deck.pdf"]) {
      expect(publicAsset(path, "/matchpoint/")).toBe(`/matchpoint${path}`);
    }
  });
  it("also supports a domain-root deployment", () => {
    expect(publicAsset("/images/logo.png", "/")).toBe("/images/logo.png");
  });
});
