import React from "react";
import HomeSection from "./HomeSection";
import SectionTitle from "@/components/home/SectionTitle";
import PostList from "@/components/posts/PostList";
import { css } from "@emotion/react";
import { gray } from "@/constants/colors";

const RecentPosts = () => {
  return (
    <HomeSection SectionStyle={S}>
      <SectionTitle>최근 게시물</SectionTitle>
      <PostList postList={postList}></PostList>
    </HomeSection>
  );
};
const postList = [
  {
    id: "123",
    title: "var 쓰지마..., 그게 뭔데",
    link: "/",
    category: "javascript",
    modifiedDate: "2023년 09월 03일",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus.",
    thumbNailImage: "/images/home/profile.jpg",
  },
  {
    id: "123",
    title: "var 쓰지마..., 그게 뭔데",
    link: "/",
    category: "javascript",
    modifiedDate: "2023년 09월 03일",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus.",
    thumbNailImage: "/images/home/profile.jpg",
  },
  {
    id: "123",
    title: "var 쓰지마..., 그게 뭔데",
    link: "/",
    category: "javascript",
    modifiedDate: "2023년 09월 03일",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus.",
    thumbNailImage: "/images/home/profile.jpg",
  },
  {
    id: "123",
    title: "var 쓰지마..., 그게 뭔데",
    link: "/",
    category: "javascript",
    modifiedDate: "2023년 09월 03일",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus.",
    thumbNailImage: "/images/home/profile.jpg",
  },
];
const S = css`
  border-top: 1px solid ${gray.border};
  .post-list {
    margin: 24px -24px 0;
  }
`;
export default RecentPosts;
