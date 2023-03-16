import WorkCard from "@/components/WorkCard";
import { groq } from "next-sanity";
import {sanityClient} from "@/lib/sanity.client"
import {Work} from "@/types/Sanity";
import {imageUrl} from "@/helpers/imageUrl";

const query = groq`
    *[_type == "work"]{
        ...,
        categories[]->
    } | order(_updatedAt desc)
`;

const WorksPage = async () => {
    const works = await sanityClient.fetch(query);
    return (
        <>
            <div className="pb-8 border-b-2 border-gray-100">
                <h1 className="font-extrabold text-slate-800 text-4xl">Works</h1>
                <p className="text-gray-500 mt-2">Tecrübelerim ve paylaşmak istediğim yazıları burada bulabilirsin.</p>
            </div>

            <div className="mt-6 md:mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
                {works.map((work: Work) => (
                    <WorkCard
                        key={work.slug.current}
                        title={work.title}
                        slug={work.slug.current}
                        thumbnail={imageUrl(work.mainImage).url()}
                        date={work._createdAt}
                        categories={work.categories}
                    />
                ))}
            </div>
        </>
    );
};

export default WorksPage;
