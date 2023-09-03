import { css } from "@emotion/react";
import PostCard, { PostCardType } from "./PostCard";
import { gray } from "@/constants/colors";
import Link from "next/link";

type Props = {
  postList: PostCardType[];
  type?: "feature" | "default";
};

const PostList = ({ postList, type = "default" }: Props) => {
  return (
    <ul className="post-list" css={S}>
      {postList.map((post) => (
        <li key={post.id}>
          <Link href="">
            <PostCard post={post} type={type} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

const S = css`
  height: 100%;
  overflow: scroll;
  li {
    &:not(:first-of-type) {
      border-top: 1px solid ${gray.border};
    }
  }
`;
export default PostList;
