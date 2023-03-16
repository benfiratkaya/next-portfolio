import WorkCard from "@/components/WorkCard";
import {LinkIcon} from "@heroicons/react/20/solid";
import {groq} from "next-sanity";
import {sanityClient} from "@/lib/sanity.client";
import {formatDate} from "@/helpers/formatDate";
import {PortableText} from "@portabletext/react";

const works = [
    {
        title: 'Boost your conversion rate',
        slug: 'boost-your',
        category: { name: 'Article', slug: 'article' },
        createdAt: '2020-03-16',
        thumbnail:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
        title: 'How to use search engine optimization to drive sales',
        slug: 'how-to-use',
        category: { name: 'Video', slug: 'video' },
        createdAt: '2020-03-10',
        thumbnail:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
        title: 'Improve your customer experience',
        slug: 'improve-your',
        category: { name: 'Case Study', slug: 'case-study' },
        createdAt: '2020-02-12',
        thumbnail:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
]

type Props = {
    params: {
        slug: string
    }
}

const WorkPage = async ({ params: { slug }}: Props) => {
    const query = groq`
        *[_type == "work" && slug.current == $slug][0] {
            ...,
            categories[]->
        }
    `;
    const work = await sanityClient.fetch(query, { slug });
    return (
        <>
            <div className="mx-auto max-w-4xl py-8 md:pt-16 md:pb-10 px-4 sm:px-0">
                <div className="text-center">
                    <span className="text-sm md:text-base text-gray-500 font-medium mb-12">Published on {formatDate(work._createdAt)}</span>
                    <h1 className="text-3xl md:text-4xl text-slate-900 font-extrabold mx-auto leading-tight">{work.title}</h1>
                    <p className="md:text-lg text-gray-500 mt-4">{work.description}</p>
                </div>
            </div>

            <div className="md:mx-auto md:max-w-6xl pb-8 md:pb-12">
                <img src={work.thumbnail} alt=""/>
            </div>

            <div className="mx-auto max-w-4xl pb-10 md:pb-16 px-4 sm:px-0">
                <div className="prose prose-slate prose-a:font-bold max-w-none">
                    <PortableText value={work.body} />
                    <div className="not-prose">
                        <a href="/" className="inline-flex items-center font-semibold text-black hover-underline-animation">
                            <span>Projeye Git</span>
                            <LinkIcon className="flex w-5 h-5 ml-1 text-blue-500" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:mx-auto md:max-w-6xl pb-8 md:pb-12">
                <img src="https://www.clockwork.com.tr/media/3wtpkibp/jeep-1.jpg" alt=""/>
            </div>

            <div className="mx-auto max-w-7xl pt-12 pb-10 md:pt-20 md:pb-16 px-4 sm:px-6">
                <div className="pageTitle">
                    Recent Works
                </div>

                <div className="mt-6 md:mt-8 grid gap-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
                    {works.map((post) => (
                        <WorkCard
                            key={post.slug}
                            title={post.title}
                            slug={post.slug}
                            thumbnail={post.thumbnail}
                            date={post.createdAt}
                            categories={[]}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default WorkPage;
