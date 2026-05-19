export interface ShellNavItem {
  name: string;
  url: string;
}

export interface ShellNavSection {
  label: string;
  items: ShellNavItem[];
}

export const SHELL_NAV_SECTIONS: ShellNavSection[] = [
  {
    label: "Browse",
    items: [{ name: "Prototypes", url: "/" }],
  },
  {
    label: "Guides",
    items: [
      {
        name: "Getting started",
        url: "/design-system/guides/getting-started",
      },
      {
        name: "Add a prototype",
        url: "/design-system/guides/add-a-prototype",
      },
      { name: "Styling", url: "/design-system/guides/styling" },
      { name: "Figma MCP", url: "/design-system/guides/figma-mcp" },
      { name: "Deploy", url: "/design-system/guides/deploy" },
    ],
  },
  {
    label: "Foundations",
    items: [
      { name: "Typography", url: "/design-system/typography" },
      { name: "Colors", url: "/design-system/colors" },
    ],
  },
  {
    label: "Components",
    items: [
      { name: "Badge", url: "/design-system/components/badge" },
      { name: "Button", url: "/design-system/components/button" },
      { name: "Card", url: "/design-system/components/card" },
      { name: "Dialog", url: "/design-system/components/dialog" },
      { name: "Dropdown Menu", url: "/design-system/components/dropdown-menu" },
      { name: "Input", url: "/design-system/components/input" },
      { name: "Popover", url: "/design-system/components/popover" },
      { name: "Select", url: "/design-system/components/select" },
      { name: "Separator", url: "/design-system/components/separator" },
      { name: "Switch", url: "/design-system/components/switch" },
      { name: "Tabs", url: "/design-system/components/tabs" },
      { name: "Tooltip", url: "/design-system/components/tooltip" },
    ],
  },
];

export const DESIGN_SYSTEM_COMPONENT_LABEL_BY_SLUG: Record<string, string> =
  SHELL_NAV_SECTIONS.find((s) => s.label === "Components")!.items.reduce<
    Record<string, string>
  >((acc, item) => {
    const slug = item.url.replace("/design-system/components/", "");
    acc[slug] = item.name;
    return acc;
  }, {});

export const DESIGN_SYSTEM_COMPONENT_SLUGS = Object.keys(
  DESIGN_SYSTEM_COMPONENT_LABEL_BY_SLUG,
);
