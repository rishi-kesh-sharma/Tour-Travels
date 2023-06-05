import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { faqs } from "@/data";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import Heading from "../../utils/Heading";

const FAQ = () => {
  return (
    <Section className="mt-[3rem] md:mt-[1rem]">
      <Heading
        title={"Frequently Asked Question"}
        topTitle={"FAQ"}
        subtitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
        }
      />

      <Container className="grid grid-cols-1 md:grid-cols-2 md:gap-[2rem] mt-[2rem]">
        <div>
          <Accordion
            className=" border border-gray-200 md:shadow-md rounded-lg  gap-[2rem] "
            transition={{
              duration: "300ms",
              timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
            }}>
            {faqs.slice(0, 6)?.map((item, index) => (
              <AccordionItem key={index}>
                {({ open }) => (
                  <div className="flex-1">
                    <AccordionHeader
                      className={`w-full flex justify-between items-start text-gray-600 border-b py-4 md:p-4 ${
                        open && "bg-primary text-gray-100"
                      } px-[1rem]`}>
                      <span
                        className={`font-[400] text-sm  ${
                          open && "text-gray-100"
                        } transition-all  text-start`}>
                        {item.question}
                      </span>
                      <svg
                        class={`w-6 h-6 ${
                          !open ? "" : "rotate-90 text-gray-100"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="p-4  bg-gray-100 text-sm text-gray-500">
                        {item.answer}
                      </div>
                    </AccordionBody>
                  </div>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="hidden md:block">
          <Accordion
            className=" border border-gray-200 shadow-md rounded-lg  gap-[2rem] "
            transition={{
              duration: "300ms",
              timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
            }}>
            {faqs.slice(0, 6)?.map((item, index) => (
              <AccordionItem key={index} className="">
                {({ open }) => (
                  <div className="flex-1 ">
                    <AccordionHeader
                      className={`w-full flex justify-between items-start text-gray-600 border-b py-4 md:p-4 ${
                        open && "bg-primary text-gray-100"
                      } px-[1rem]`}>
                      <span
                        className={`font-[400] text-sm  ${
                          open && "text-gray-100"
                        } transition-all  text-start`}>
                        {item.question}
                      </span>
                      <svg
                        class={`w-6 h-6 ${
                          !open ? "" : "rotate-90 text-gray-100"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="p-4  bg-gray-100 text-sm text-gray-500">
                        {item.answer}
                      </div>
                    </AccordionBody>
                  </div>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
