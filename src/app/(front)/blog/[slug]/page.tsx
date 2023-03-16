import PostCard from "@/components/PostCard";
import DisqusComments from "@/components/DisqusComments";

const post = {
    id: "1",
    title: 'Improve your customer experience',
    slug: 'improve-your',
    category: { name: 'Case Study', slug: 'case-study' },
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    createdAt: '2020-02-12',
    thumbnail:
        'https://tailwindcss.com/_next/static/media/card.65ec124d.jpg',
};
const posts = [
    {
        title: 'Boost your conversion rate',
        slug: 'boost-your',
        category: { name: 'Article', slug: 'article' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        createdAt: '2020-03-16',
        thumbnail:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
        title: 'How to use search engine optimization to drive sales',
        slug: 'how-to-use',
        category: { name: 'Video', slug: 'video' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
        createdAt: '2020-03-10',
        thumbnail:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
        title: 'Improve your customer experience',
        slug: 'improve-your',
        category: { name: 'Case Study', slug: 'case-study' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        createdAt: '2020-02-12',
        thumbnail:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
]


const BlogPostPage = () => {
    return (
        <>
            <div className="mx-auto max-w-4xl py-8 md:pt-16 md:pb-10 px-4 sm:px-0">
                <span className="text-sm md:text-base text-gray-500 font-medium mb-12">Published on 23 Nov 2022 14:53</span>
                <h1 className="text-3xl md:text-4xl text-slate-900 font-extrabold mx-auto leading-tight">{post.title}</h1>
                <p className="md:text-lg text-gray-500 mt-4">{post.description}</p>
            </div>

            <div className="md:mx-auto md:max-w-4xl pb-8 md:pb-12">
                <img src={post.thumbnail} alt=""/>
            </div>

            <div className="mx-auto max-w-4xl pb-10 md:pb-16 px-4 sm:px-0">
                <div className="prose lg:prose-lg prose-slate prose-a:font-bold max-w-none">
                    But Nonhlanhla imagined a different life for herself, largely because her Uncle Petros helped her see her own potential. From the time Nonhlanhla was very young, Petros pushed her to read anything he managed to find for her, and he became a fierce champion of her schooling. When her mother or grandmother told her to do a chore like fetching water, Petros would step in and say, “No, she’s studying.” He also stuck up for her when the boys in her class—and even some male teachers—tried to undermine the smart girl who was outshining the boys.
                </div>
            </div>

            <div className="mx-auto max-w-7xl pt-12 pb-10 md:pt-20 md:pb-16 px-4 sm:px-6">
                <div className="pageTitle">
                    Related Articles
                </div>

                <div className="mt-6 md:mt-8 grid gap-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
                    {posts.map((post) => (
                        <PostCard
                            key={post.slug}
                            title={post.title}
                            slug={post.slug}
                            thumbnail={post.thumbnail}
                            description={post.description}
                            date={post.createdAt}
                            category={post.category}
                        />
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-7xl pb-12 md:pb-20 pt-16 px-4 sm:px-6 border-t-2 border-gray-100">
                <DisqusComments id={post.id} title={post.title} />
            </div>
        </>
    );
};

export default BlogPostPage;
