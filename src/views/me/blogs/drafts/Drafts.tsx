/* eslint-disable react/no-unescaped-entities */

import { BlogsContainer } from '../components';
import { DraftBlog as DraftBlogType } from '../types';

type PropsType = {
  blogs: DraftBlogType[];
};

export default function Drafts({ blogs }: PropsType) {
  return (
    <BlogsContainer blogs={blogs} />
  );
}
