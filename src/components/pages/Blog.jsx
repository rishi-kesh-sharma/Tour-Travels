import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Sidebar from "../sections/Blogs/Sidebar";
import Banner from "../utils/Banner";
import BlogDetail from "../sections/blog/BlogDetails";
import { blogsData } from "@/data";
import Image from "next/image";
import AwesomePartners from "../sections/home/AwesomePartners";

const Blog = () => {
  const blog = blogsData[0];
  return (
    <Section className=" overflow-hidden w-full">
      <Banner title={"Blogs List"} breadCrumbs={["Home", "Blog"]} />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[3rem] mt-[3rem] overflow-hidden">
        <Section className="gap-[1rem] col-span-full grid grid-cols-1 md:grid-cols-2  ">
          <Image
            src={blog.image}
            className="col-span-1 object-cover rounded-sm h-full"
          />
          <div className="col-span-1 ">
            <h3 className="font-semibold text-xl md:text-2xl ">{blog.title}</h3>
            <p className="text-sm text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              voluptatem porro eligendi ullam sunt distinctio ad qui repellat
              cumque quas rerum, odio veniam eum eos? Provident delectus aliquam
              distinctio debitis a. Excepturi officia, ipsum tempore, libero
              laudantium doloribus aperiam inventore officiis sint, maxime quam
              id aliquid quibusdam distinctio odio! Molestias soluta voluptate,
              temporibus perferendis cupiditate deserunt, tenetur veniam totam
              natus quia hic eum animi eaque ducimus quas corporis illum
              doloremque? Ad est rem, non nostrum illum aliquam repellendus
              quasi rerum nam vitae reiciendis facere incidunt cum enim odit
              culpa ab recusandae minima tempora ducimus asperiores inventore
              deserunt magnam. Totam, excepturi.
            </p>
            <p className="text-xs text-gray-500">{"08 Mar 2021"}</p>
          </div>
        </Section>
        <BlogDetail />
        <Sidebar />
      </Container>
      <AwesomePartners />
    </Section>
  );
};

export default Blog;
