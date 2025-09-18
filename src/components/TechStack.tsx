import BrandPill from "@/components/BrandPill";
import {TECH_CATALOG} from "@/data/techCatalog";

const TECH_GRID = [
    ["java","spring","rest"],
    ["react","next","docker"],
    ["jenkins","postgres","sqlserver"],
    ["gha","ts","node"],
    ["tailwind","openapi"],
] as const;

export default function TechStack(){
    return (
        <section id="tech" className="card">
            <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {TECH_GRID.flat().map((id) => {
                    const t = TECH_CATALOG[id];
                    return (<BrandPill key={id} label={t.label} Icon={t.Icon} color={t.color} tintLabel={false}/>);
                })}
            </div>
        </section>
    );
}