import Link from "next/link";
import {formatDate} from "@/helpers/formatDate";

type PostCardProps = {
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  date: string;
  category: {
    name: string;
    slug: string;
  }
}

const PostCard = ({
  title,
  slug,
  thumbnail,
  description,
  date,
  category,
}: PostCardProps) => {
  return (
    <div>
      <Link href={`/blog/${slug}`}>
        <div className="hoverable-img">
          <img src={thumbnail} className="w-full" alt={title} />
        </div>
      </Link>
      <div className="flex space-x-1 text-sm text-gray-500 mt-4 mb-1">
        <Link href={`/blog/categories/${category.slug}`}>
          {category.name}
        </Link>
        <span aria-hidden="true">&middot;</span>
        <time dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
      <Link href={`/blog/${slug}`} className="block">
        <p className="text-xl font-semibold text-gray-900 hover:text-blue-600">
          {title}
        </p>
        <p className="mt-3 text-base text-gray-500">
          {description}
        </p>
      </Link>
    </div>
  );
};

export default PostCard;
