export type Brand = {
  /** Display name shown in nav/footer (e.g. "Solar Match", "Dachpacht Direkt") */
  name: string;
  /** Optional subtitle next to the wordmark (e.g. "Widget", "Marktplatz") */
  subtitle?: string;
  /** Primary domain (no protocol) for canonical, OG, JSON-LD */
  domain: string;
  /** Brand color overrides if the site uses a non-default palette. Omit to use the shared petrol+gold tokens. */
  palette?: Partial<{
    primary: string;
    accent: string;
  }>;
  /** Legal entity that owns the site — drives Impressum + JSON-LD Organization */
  legalEntity: {
    name: string;
    street: string;
    locality: string;
    postalCode: string;
    country: "DE";
    email: string;
    phone: string;
    register: string;
    vatId: string;
    director: string;
  };
  /** Inter-domain cross-links shown in footer */
  sisterSites?: Array<{ label: string; href: string; note?: string }>;
};

export const CEGTEC_LEGAL: Brand["legalEntity"] = {
  name: "CegTec GmbH",
  street: "Immenhof 15",
  locality: "Hamburg",
  postalCode: "22087",
  country: "DE",
  email: "moin@dachpacht-direkt.de",
  phone: "+49 40 74304626",
  register: "HRB 184866, Amtsgericht Hamburg",
  vatId: "DE366099274",
  director: "Luca Ceglie",
};
