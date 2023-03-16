import PostCard from "@/components/PostCard";

const category = {
    name: "Category Name",
    slug: "category-name",
    posts: [
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
}

const BlogCategoryPage = () => {
    return (
        <>
            <div className="pageTitle">
                {category.name}
            </div>

            <div className="mt-6 md:mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
                {category.posts.map((post) => (
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

export default BlogCategoryPage;
