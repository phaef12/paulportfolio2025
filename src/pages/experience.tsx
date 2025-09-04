// pages/experience.tsx
import ExperienceCard from "@components/ExperienceCard";
import PageTitle from "@components/PageTitle";

export default function Experience() {
const experiences = [
  {
    role: "Support Escalation Engineer - Azure Database for PostgreSQL/MySQL",
    company: "Microsoft",
    dates: "February 2022 – Present",
    bullets: [
      "Provide escalation support for Azure Database for PostgreSQL/MySQL/MariaDB (PaaS)",
      "Mentor engineers, improve internal guides, and author/edit public documentation",
      "Collaborate with product teams to validate hotfixes and test preview features",
      "Team Lead, review escalations and align team performance with organizational goals",
    ],
  },
  {
    role: "Support Escalation Engineer - SQL Server",
    company: "Microsoft",
    dates: "June 2020 – February 2022",
    bullets: [
      "Lead critical SQL Server escalations and reduce downtime and time to resolution",
      "Partner with engineering to reproduce defects and deliver hotfixes",
      "Train peers on advanced SQL Server diagnostics using WinDbg",
      "Debug SQL Server (C++) and SQL Server Management Studios (C#), file bug fixes"
    ],
  },
  {
    role: "Support Engineer - SQL Server",
    company: "Microsoft",
    dates: "March 2017 – June 2020",
    bullets: [
      "Support enterprise SQL Server environments on-prem, virtualized, and on Azure VMs (IaaS)",
      "Implement HA/DR solutions: AlwaysOn, clustering, replication, mirroring, log shipping",
      "Optimize queries, indexes, and memory management, to improve performance",
      "Troubleshoot concurrency, memory, and SQL OS issues; support specialized features like Service Broker and In-Memory OLTP, and FullText search",
    ],
  },
    {
    role: "Database Administrator",
    company: "Innovation Group",
    dates: "January 2020 - March 2020",
    bullets: [
      "Led SQL Server AlwaysOn Availability Group implementation project",
      "Managed QA/UAT/Dev/Prod patch testing and deployments using JIRA, ensuring smooth releases with minimal disruption",
      "Monitored and tuned SQL Server instances, proactively resolving blocking and deadlock issues to maintain 99.9% uptime",
    ],
  },
    {
    role: "Support Engineer - SQL Server",
    company: "Convergys (Microsoft)",
    dates: "September 2015 - January 2017",
    bullets: [
      "Supported commercial customers as a Microsoft vendor; resolved complex SQL Server escalations under ITIL-based incident management and strict SLA timelines",
    ],
  },
  {
    role: "Technical Service Representative | Project Lead",
    company: "Alliant Systems",
    dates: "January 2013 – September 2015",
    bullets: [
      "Led nationwide client implementations, upgrades, and training",
      "Developed custom T-SQL reports improving financial reporting",
      "Implemented backup/restore and maintenance tasks for SQL Servers",
      "Provide customer support related to using and fixing the software",
      "Partnered with developers on feature design based on client feedback"
    ]
  },
  ];

  return (
    <div className="bg-transparent text-white">
  
{/* Add padding so content clears the fixed header */}
      <main className="p-6 flex flex-col items-center gap-6">
      <PageTitle>SELECT * FROM paul.experience;</PageTitle>
  <div className="w-full max-w-4xl flex flex-col gap-6">
    {experiences.map((exp, idx) => (
      <ExperienceCard
        key={idx}
        role={exp.role}
        company={exp.company}
        dates={exp.dates}
        bullets={exp.bullets}
      />
    ))}
  </div>
</main>
    </div>
  );
}
