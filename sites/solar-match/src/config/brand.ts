import { CEGTEC_LEGAL, type Brand } from "@solar/ui/brand";

export const brand: Brand = {
  name: "Solar Match",
  subtitle: "Marktplatz",
  domain: "solar-match.de",
  legalEntity: CEGTEC_LEGAL,
  sisterSites: [
    {
      label: "Solar Match Widget",
      href: "https://www.solaranalysetool.com",
      note: "Eigene Leads von Ihrer Website",
    },
    {
      label: "Dachpacht Direkt",
      href: "https://dachpacht-direkt.de",
      note: "Eigene Dachfläche anbieten",
    },
  ],
};
