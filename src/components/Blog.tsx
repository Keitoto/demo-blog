import '@/styles/blog.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import { useAppSelector } from '@/app/store';
import { BlogListType } from '@/features/user/type';
import { selectSearchInput } from '@/features/user/userSlice';

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState<BlogListType | null>(null);
  const searchValue = useAppSelector(selectSearchInput);
  const blogUrl = `https://gnews.io/api/v4/search?q=${searchValue}&apikey=d1bd545a5c43334c87c80df0eb768dcd`;

  useEffect(() => {
    setLoading(true);

    const fetchBlogData = async () => {
      const res: { data: BlogListType } = await axios.get(blogUrl);
      setBlogList(res.data);
      setLoading(false);
    };
    fetchBlogData();

    
  }, [blogUrl]);

  return (
    <div className="blog__page">
      <h1 className="blog__page__header">Blogs</h1>
      {loading ? <h1 className="loading">Loading...</h1> : ''}
      {!loading && (
        <div className="blogs">
          {blogList?.articles?.map((blog) => (
            <a
              className="blog"
              target="_blank"
              href={blog.url}
              rel="noreferrer"
              key={blog.url}
            >
              <img src={blog.image} alt={blog.title} />
              <div>
                <h3 className="sourceName">
                  <span>{blog.source.name}</span>
                  <p>{blog.publishedAt}</p>
                </h3>
                <h1>{blog.title}</h1>
                <p>{blog.description}</p>
              </div>
            </a>
          ))}

          {blogList?.totalArticles === 0 && (
            <h1 className="no__blogs">
              No blogs available 😞. Search something else to read blogs on the
              greatest platform.
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
