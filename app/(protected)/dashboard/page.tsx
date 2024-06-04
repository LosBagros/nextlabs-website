import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

function getPosts() {
  const files = fs.readdirSync("content");

  const posts = files.map((filename) => {
    const markdownFile = fs.readFileSync(
      path.join("content", filename),
      "utf-8"
    );

    const { data: frontMatter, content } = matter(markdownFile);

    return {
      frontMatter,
      slug: filename.replace(".mdx", ""),
      content,
    };
  });

  return posts;
}

export default function Page() {
  const posts = getPosts();
  const placeholderImage =
    "https://placehold.co/400/EEE/31343C?font=source-sans-pro&text=NextLabs";

  return (
    <div className="flex flex-col bg-white rounded-2xl p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Rooms:</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/room/${post.slug}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <Image
                  src={post.frontMatter.image || placeholderImage}
                  alt={post.frontMatter.title}
                  width={400}
                  height={400}
                  className="rounded-lg w-full md:w-1/5"
                />
                <div>
                  <h2 className="text-xl font-bold text-blue-600 hover:underline">
                    {post.frontMatter.title}
                  </h2>
                  <p className="text-gray-600">
                    {post.frontMatter.description}
                  </p>
                  <p className="text-gray-500 font-bold">
                    {format(new Date(post.frontMatter.date), "MMMM dd, yyyy")}
                  </p>
                  <p className="text-gray-700 font-bold">
                    By {post.frontMatter.author}
                  </p>
                </div>
              </div>
            </Link>
            <hr className="bg-black w-full my-5" />
          </div>
        ))}
      </div>
    </div>
  );
}
