import PostCard from "@/components/PostCard";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

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

const BlogPage = () => {
    return (
        <>
            <div className="pb-8 border-b-2 border-gray-100">
                <h1 className="font-extrabold text-slate-800 text-4xl">Blogumu Keşfet</h1>
                <p className="text-gray-500 mt-2">Tecrübelerim ve paylaşmak istediğim yazıları burada bulabilirsin.</p>

                <div className="flex justify-between items-center mt-12 flex-col md:flex-row">
                    <div className="flex gap-2 w-full overflow-x-auto">
                        <a href="#" className="categoryLink">Tümü</a>
                        <a href="#" className="categoryLink">React.js</a>
                        <a href="#" className="categoryLink active">JavaScript</a>
                        <a href="#" className="categoryLink">Yazılım</a>
                    </div>
                    <div className="mt-4 md:mt-0 w-full md:w-auto">
                        <form action="/blog" method="get">
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="search"
                                    name="search"
                                    id="search"
                                    className="blogSearch"
                                    placeholder="Search..."
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mt-6 md:mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
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
        </>
    );
};

export default BlogPage;
