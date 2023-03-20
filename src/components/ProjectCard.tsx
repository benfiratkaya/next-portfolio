import Link from "next/link";
import {useDate} from "@/hooks/useDate";
import SanityImage from "@/components/SanityImage";
import {ProjectCategory} from "@/sanity/types";

type PostCardProps = {
  title: string;
  slug: string;
  description: string;
  thumbnail: any;
  date: string;
  categories: ProjectCategory[];
}

const ProjectCard = ({
    title,
    slug,
    description,
    thumbnail,
    date,
    categories,
}: PostCardProps) => {

    const [formattedDate] = useDate(date);

  return (
    <div>
      <Link href={`/projects/${slug}`}>
        <div className="hoverable-img">
            <SanityImage image={thumbnail} alt={title} className="w-full" />
        </div>
      </Link>
      <div className="flex space-x-1 text-sm text-gray-500 mt-4 mb-1">
        {
          categories.map((category) => (
              <span key={category.slug}>{category.title}</span>
          ))
        }
        <span aria-hidden="true">&middot;</span>
        <time dateTime={date}>
            {formattedDate}
        </time>
      </div>
      <Link href={`/projects/${slug}`} className="block">
        <p className="text-xl font-semibold text-gray-900 hover:text-blue-600">
          {title}
        </p>
        <p className="mt-1 text-base text-gray-500">
            {description}
        </p>
      </Link>
    </div>
  );
};

export default ProjectCard;
