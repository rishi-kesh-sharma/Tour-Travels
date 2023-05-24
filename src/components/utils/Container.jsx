import tw from "tailwind-styled-components";

const Container = tw.div`
h-auto
w-[93%]
sm:w-[90%]
xl:w-[75%]
2xl:w-[65%]
3xl:w-[50%]
mx-auto
${({ className }) => className}
`;

export default Container;
