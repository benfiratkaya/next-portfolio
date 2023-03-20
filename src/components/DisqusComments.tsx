import {DiscussionEmbed} from "disqus-react"

type DisqusCommentsProps = {
    id: string;
    title: string;
}

const DisqusComments = ({ id, title }: DisqusCommentsProps) => {
  const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORT_NAME;
  const disqusConfig = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${id}`,
    identifier: id,
    title: title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;