interface SectionTitleProps {
  title: string;
  highlight: string;
  subtitle?: string;
}

const SectionTitle = ({ title, highlight, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;

