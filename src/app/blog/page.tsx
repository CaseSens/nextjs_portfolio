"use client";

import BullseyeGrad from "../components/BullseyeGrad";
import { FaMagnifyingGlass } from "react-icons/fa6";
import InputWithIcon from "../components/InputWithIcon";
import { useEffect, useState } from "react";

type Blog = {
  title: string;
  date: string;
};

const blogs: Blog[] = [{ title: "My First Blog", date: "2024-03-05" }];

function BlogPage() {
  const [searchText, setSearchText] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogs);

  const handleSearchText = (val: string) => {
    setSearchText(val);
  };

  useEffect(() => {
    if (searchText.replaceAll(" ", "")) {
      setFilteredBlogs(
        blogs.filter((b) => {
          return b.title.toLowerCase().includes(searchText.toLowerCase());
        })
      );
    } else {
      setFilteredBlogs(blogs);
    }
  }, [searchText]);

  return (
    <div className="relative w-full h-full font-poppins">
      <BullseyeGrad className="absolute z-0 w-full h-full" />
      <div className="relative z-10 w-full h-full flex items-center justify-center py-12">
        <div className="max-w-3xl w-full min-h-full h-max mx-auto p-6 flex flex-col gap-8">
          <h1 className="text-4xl font-bold mt-8">
            My blog for articles, tutorials, and more.
          </h1>
          <InputWithIcon
            Icon={FaMagnifyingGlass}
            onInputChange={handleSearchText}
          />
          {filteredBlogs.map((blog, index) => (
            <article key={index} className="flex">
              <time className="block border-l-2 border-gray-400 pl-3 text-sm leading-none text-zinc-400 dark:text-zinc-500 mt-1.5 h-fit w-[30%] md:block">
                {blog.date}
              </time>
              <div className="flex flex-col">
                <h1 className="font-semibold">{blog.title}</h1>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
