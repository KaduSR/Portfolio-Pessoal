import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    ignores: ["Kadu-Dev-Gold-Standard-Design-System/**", "projects/**"],
  },
];

export default config;
