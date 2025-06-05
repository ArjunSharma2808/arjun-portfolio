interface SkillsCardProps {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
}

export default function SkillsCard({ title, Icon, link }: SkillsCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-2 rounded-lg border border-[#0e1117] dark:border-white bg-transparent dark:bg-[#0e1117] dark:shadow-lg hover:scale-105 transition-transform duration-300 w-20 h-20 sm:w-28 sm:h-28"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
        <Icon className="w-full h-full" />
      </div>
      <p className="dark:text-white text-black text-xs sm:text-sm mt-2 text-center">
        {title}
      </p>
    </a>
  );
}
