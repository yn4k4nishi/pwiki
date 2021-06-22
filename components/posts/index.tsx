import Post from './post'

function Posts({ posts }) {
  if (posts) {
    return (
      <div className="flex flex-wrap items-start">
        {posts.map((e) => (
          <div key={e.id} className="py-2 px-6 w-5/12">
            <Post id={e.id} title={e.title} content={e.content} />
          </div>
        ))}
      </div>
    )
  } else {
    return <p>null</p>
  }
}

export default Posts
