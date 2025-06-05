import Image from "next/image";

interface ProjectCardProps {
  imagePath: string;
  title: string;
  projectUrl: string;
  description: string;
}

const ProjectCard = ({
  imagePath,
  title,
  projectUrl,
  description,
}: ProjectCardProps) => {
  return (
    <div className="bg-[#0e1117] p-4 py-8 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
      <figure className="w-full overflow-hidden rounded-md">
        <Image
          src={imagePath}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </figure>

      <h2 className="text-xl font-bold text-amber-100 mt-4 mb-2">{title}</h2>

      <p className="text-sm text-white mb-4">{description}</p>

      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-white text-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
