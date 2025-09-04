// src/pages/skills.tsx
import PageTitle from "@components/PageTitle";

export default function Skills() {
  const skillCategories = [
    {
      title: "Databases",
      skills: [
        "Microsoft SQL Server",
        {
          label: "Azure Database for:",
          subSkills: ["PostgreSQL", "MySQL", "MariaDB"],
        },
      ],
    },
    {
      title: "Cloud & Infra",
      skills: [
        "Azure/VMs",
        "Performance/Monitoring",
        "VNet and Private Endpoints",
        "GUI/CLI/ARM Deployments",
      ],
    },
    {
      title: "Languages",
      skills: ["T-SQL & KQL", "C++ & C#", "PowerShell", "Java"],
    },
    {
      title: "Tools",
      skills: ["Microsoft Kusto", "GitHub", "WinDbg", "JIRA"],
    },
    {
      title: "AI",
      skills: [
        "ChatGPT",
        "Microsoft CoPilot",
        {
          label: "Stable Diffusion",
          subSkills: ["AUTOMATIC1111", "Model training"],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col text-white">

      <main className="flex-grow p-6 flex flex-col items-center gap-8">
        <PageTitle>SELECT DISTINCT skills FROM paul.resume;</PageTitle>

        <div className="w-full max-w-6xl flex flex-col gap-6">
          {/* Top row: 3 boxes */}
          <div className="flex justify-center gap-6 flex-wrap">
            {skillCategories.slice(0, 3).map((category, idx) => (
              <div
                key={idx}
                className="bg-blue-200 rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300 w-64"
              >
                <h2 className="text-blue-900 font-bold text-xl mb-4">
                  {category.title}
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {category.skills.map((skill, skillIdx) =>
                    typeof skill === "string" ? (
                      <li key={skillIdx}>{skill}</li>
                    ) : (
                      <li key={skillIdx}>
                        {skill.label}
                        <ul className="list-inside list-[circle] ml-4 mt-1 space-y-1">
                          {skill.subSkills.map((sub, subIdx) => (
                            <li key={subIdx}>{sub}</li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom row: 2 boxes */}
          <div className="flex justify-center gap-6 flex-wrap">
            {skillCategories.slice(3).map((category, idx) => (
              <div
                key={idx}
                className="bg-blue-200 rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300 w-64"
              >
                <h2 className="text-blue-900 font-bold text-xl mb-4">
                  {category.title}
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {category.skills.map((skill, skillIdx) =>
                    typeof skill === "string" ? (
                      <li key={skillIdx}>{skill}</li>
                    ) : (
                      <li key={skillIdx}>
                        {skill.label}
                        <ul className="list-inside list-[circle] ml-4 mt-1 space-y-1">
                          {skill.subSkills.map((sub, subIdx) => (
                            <li key={subIdx}>{sub}</li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
