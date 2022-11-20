import tw from 'tailwind-styled-components';

export const Header = tw.h1`
  font-[700] text-left !leading-snug text-gray-900
  text-3xl lg:text-4xl xl:text-5xl
`;

export const HeaderNormal = Header;
export const HeaderSmall = tw(Header)`
  text-xl sm:text-2xl md:text-3xl lg:text-4xl
`;


export const Paragraph = tw.p`
  my-5 lg:my-8 text-left font-[500] text-[#454545]
  text-base md:text-lg lg:text-xl
`;

export const ParagraphSmall = tw(Paragraph)`
  text-sm lg:text-base
`;


export const Container = tw.div`
  w-full mx-auto
  max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1240px]
  px-5 md:px-0 text-center
`;

export const GradientButton = tw.button`
  bg-gradient-to-r from-[#03228f] to-[#0e73e4] 
  text-white text-base font-semibold rounded-sm 
  opacityAnim
`;