import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";

import { MDXRemote } from "next-mdx-remote/rsc";

function getPost({ slug }: { slug: string }) {
  try {
    const markdownFile = fs.readFileSync(
      path.join("content", slug + ".mdx"),
      "utf-8"
    );
    const { data: frontMatter, content } = matter(markdownFile);
    return {
      frontMatter,
      slug,
      content,
    };
  } catch (e) {
    return {
      frontMatter: {},
      slug,
      content: "",
    };
  }
}

export default function Room({ params }: { params: { slug: string } }) {
  const props = getPost(params);
  if (!props.frontMatter.published) {
    return (
      <div className="w-full">
        <article className="prose mx-auto max-w-none bg-white p-6 rounded-2xl">
          <p>Not found</p>
        </article>
      </div>
    );
  }

  return (
    <div className="w-full bg-white p-6 rounded-2xl">
      <div className="my-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          {props.frontMatter.title}
        </h1>
        <ul className="text-gray-600 space-y-0">
          <li>
            <b>Description: </b> {props.frontMatter.description}
          </li>
          <li>
            <b>Author: </b> {props.frontMatter.author}
          </li>
          <li>
            <b>Updated: </b>
            {format(new Date(props.frontMatter.date), "MMMM dd, yyyy")}
          </li>
        </ul>
      </div>
      <article className="prose mx-auto max-w-none">
        <MDXRemote source={props.content}></MDXRemote>
      </article>
    </div>
  );
}
