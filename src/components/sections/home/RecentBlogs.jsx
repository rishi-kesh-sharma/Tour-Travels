import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import RecentBlogsCards from "./RecentBlogsCards";

const RecentBlogs = () => {
  return (
    <Section className="mt-[2rem] md:mt-[3rem]">
      <Container>
        <Heading
          title={"Recent Articles & Posts"}
          topTitle={"Our Blogs Offers"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <RecentBlogsCards />
      </Container>
    </Section>
  );
};

export default RecentBlogs;
