import Link from "next/link";
import {formatDate} from "@/helpers/formatDate";

type PostCardProps = {
  title: string;
  slug: string;
  thumbnail: string;
  date: string;
  categories: {
    title: string;
  }[];
}

const WorkCard = ({
    title,
    slug,
    thumbnail,
    date,
    categories,
}: PostCardProps) => {

  return (
    <div>
      <Link href={`/works/${slug}`}>
        <div className="hoverable-img">
          <img src={thumbnail} className="w-full" alt={title} />
        </div>
      </Link>
      <div className="flex space-x-1 text-sm text-gray-500 mt-4 mb-1">
        {
          categories.map((category) => (
              <span key={category.title}>{category.title}</span>
          ))
        }
        <span aria-hidden="true">&middot;</span>
        <time dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
      <Link href={`/works/${slug}`} className="block">
        <p className="text-xl font-semibold text-gray-900 hover:text-blue-600">
          {title}
        </p>
      </Link>
    </div>
  );
};

export default WorkCard;
