interface ExperienceCardProps {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

export default function ExperienceCard({ role, company, dates, bullets }: ExperienceCardProps) {
  return (
    <div className="bg-blue-200 rounded-lg shadow-md p-6 
                    hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out relative">
      <h2 className="text-xl font-bold text-blue-900">{role}</h2>
      <h3 className="text-xl text-blue-900 mb-2">{company}</h3>
      <p className="text-gray-700 mb-2">{dates}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
