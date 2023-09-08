import PostList from "@/components/posts/PostList";
import React from "react";
import { getAllPosts } from "../../../lib/posts-util";
import SectionTitle from "@/components/home/SectionTitle";

const AllPosts = ({ allPostList }: { allPostList: any }) => {
  return (
    <>
      <SectionTitle className="p-4">전체 게시물</SectionTitle>
      <PostList postList={allPostList} />
    </>
  );
};

export function getStaticProps() {
  const allPostList = getAllPosts();
  return {
    props: {
      allPostList,
    },
  };
}
export default AllPosts;
