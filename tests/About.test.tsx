import { test, vi, expect } from "vitest";
import { render } from "vitest-browser-react";
import AboutUs from "@/components/Static/About/index.jsx";
import { I18nProvider } from "@/config/i18next";
import enTranslations from "../public/locales/en/translations.json";
import deTranslations from "../public/locales/de/translations.json";

type PageLayoutProps = {
  children: React.ReactNode;
};

vi.mock("@/components/Layout", () => ({
  PageLayout: ({ children }: PageLayoutProps) => <div>{children}</div>,
}));

test("renders about us component", async () => {
  await render(
    <I18nProvider initialLang="en">
      <AboutUs />
    </I18nProvider>,
  );
});

test("English translation works correctly", async () => {
  const screen = await render(
    <I18nProvider initialLang="en">
      <AboutUs />
    </I18nProvider>,
  );

  const heading = screen.getByRole("heading").first();

  await expect.element(heading).toHaveTextContent(enTranslations.aboutus.aboutusHeading);
  console.log(heading);
});

test("German translation works correctly", async () => {
  const screen = await render(
    <I18nProvider initialLang="de">
      <AboutUs />
    </I18nProvider>,
  );

  const heading = screen.getByRole("heading").first();

  await expect.element(heading).toHaveTextContent(deTranslations.aboutus.aboutusHeading);
  console.log(heading);
});
