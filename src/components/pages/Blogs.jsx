import React from "react";
import Section from "../utils/Section";
import BlogsList from "../sections/Blogs/BlogsList.jsx";
import Container from "../utils/Container";
import Sidebar from "../sections/Blogs/Sidebar";
import Banner from "../utils/Banner";

const Blogs = () => {
  return (
    <Section className=" overflow-hidden w-full">
      <Banner title={"Blogs List"} breadCrumbs={["Home", "Blogs"]} />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3rem] mt-[3rem] overflow-hidden">
        <Sidebar />
        <BlogsList />
      </Container>
    </Section>
  );
};

export default Blogs;
