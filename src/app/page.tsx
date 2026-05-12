import dynamic from "next/dynamic";

const PortfolioApp = dynamic(() => import("@/components/PortfolioApp").then((m) => m.PortfolioApp), { ssr: false });

export default function HomePage() {
  return <PortfolioApp />;
}
