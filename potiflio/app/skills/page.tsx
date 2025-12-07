import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import SkillBar from "@/components/SkillBar";

const skills = {
  frontend: [
    { name: "HTML", percentage: 100 },
    { name: "Tailwind CSS", percentage: 98 },
    { name: "JavaScript", percentage: 95 },
    { name: "React", percentage: 92 },
    { name: "Next.js", percentage: 88 },
    { name: "TypeScript", percentage: 90 },
  ],
  backend: [
    { name: "MongoDB", percentage: 85 },
    { name: "PostgreSQL", percentage: 88 },
    { name: "Firebase", percentage: 82 },
  ],
};

export default function Skills() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <section className="section">
          <div className="container mx-auto">
            <SectionTitle
              title="My"
              highlight="Skills"
              subtitle="Here are the technologies and tools I work with to build amazing web applications."
            />
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card p-8 border border-border animate-fade-in">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-xl">{"<>"}</span>
                  </div>
                  <h3 className="text-xl font-semibold">Frontend Development</h3>
                </div>
                {skills.frontend.map((skill, idx) => (
                  <SkillBar key={skill.name} {...skill} delay={idx * 80} />
                ))}
              </div>
              <div className="space-y-8">
                <div className="card p-8 border border-border animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xl">DB</span>
                    </div>
                    <h3 className="text-xl font-semibold">Database & Backend</h3>
                  </div>
                  {skills.backend.map((skill, idx) => (
                    <SkillBar key={skill.name} {...skill} delay={idx * 80} />
                  ))}
                </div>
                <div className="card p-8 border border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xl">🎨</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Design Tools</h3>
                      <p className="text-muted mt-2">Figma (90%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "30+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "10+", label: "Technologies" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className="text-center p-6 card border border-border animate-fade-in"
                  style={{ animationDelay: `${0.25 + idx * 0.05}s` }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</p>
                  <p className="text-muted text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}