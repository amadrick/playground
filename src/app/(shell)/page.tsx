import { getAllPrototypes } from "@/lib/prototypes";
import { HomeContent } from "@/components/home-content";

export default function HomePage() {
  const prototypes = getAllPrototypes();
  const canCreate = process.env.NODE_ENV === "development";

  return <HomeContent prototypes={prototypes} canCreate={canCreate} />;
}
