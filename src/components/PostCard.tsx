import Link from "next/link";
import {useDate} from "@/hooks/useDate";
import SanityImage from "@/components/SanityImage";
import {BlogCategory} from "@/sanity/types";

type PostCardProps = {
  title: string;
  slug: string;
  thumbnail: any;
  description: string;
  date: string;
  categories: BlogCategory[];
}

const PostCard = ({
  title,
  slug,
  thumbnail,
  description,
  date,
  categories,
}: PostCardProps) => {
  const [formattedDate] = useDate(date);

  return (
    <div>
      <Link href={`/blog/${slug}`}>
        <div className="hoverable-img">
          <SanityImage image={thumbnail} alt={title} className="w-full" />
        </div>
      </Link>
      <div className="flex space-x-1 text-sm text-gray-500 mt-4 mb-1">
        {categories.length > 0 && (
            <Link href={`/blog/categories/${categories[0].slug}`}>
              {categories[0].title}
            </Link>
        )}
        <span aria-hidden="true">&middot;</span>
        <time dateTime={date}>
          {formattedDate}
        </time>
      </div>
      <Link href={`/blog/${slug}`} className="block">
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

export default PostCard;
