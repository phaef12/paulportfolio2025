type SkillCardProps = {
  skill: string;
  level?: string;
};

export default function SkillCard({ skill, level }: SkillCardProps) {
  return (
    <div className="border rounded-lg px-4 py-2 mb-2 inline-block mr-2 bg-gray-100">
      {skill} {level && <span className="text-gray-100">({level})</span>}
    </div>
  );
}