import Image from "next/image";

interface EducationCardProps {
  degree: string;
  branch: string;
  duration: string;
  college: string;
  CGPA: string;
  imagePath: string;
}

const EducationCard = ({
  degree,
  branch,
  duration,
  college,
  CGPA,
  imagePath,
}: EducationCardProps) => {
  return (
    <div className="bg-[#0E1117] shadow-lg rounded-3xl overflow-hidden w-full max-w-md mx-auto">
      <figure className="w-full">
        <Image
          src={imagePath}
          alt={college}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </figure>

      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-amber-100 mb-2">{degree}</h2>

        <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
          <span className="text-sm text-white bg-gray-600 px-3 py-2 rounded-full">
            {branch}
          </span>
          <span className="text-sm text-white bg-gray-600 px-3 py-2 rounded-full">
            {duration}
          </span>
        </div>

        <p className="text-white mb-1">{college}</p>
        <p className="text-white">{CGPA}</p>
      </div>
    </div>
  );
};

export default EducationCard;
