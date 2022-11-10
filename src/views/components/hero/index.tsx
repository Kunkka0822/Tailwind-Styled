import React from 'react';
import Header from '../../components/header';
import tw from 'tailwind-styled-components';
import DesignIllustration from '../../../assets/images/design-illustration.png';
import {
	Container,
	HeaderNormal as Heading,
	Paragraph,
	ParagraphSmall,
	GradientButton
} from '../basics';

const SubContainer = tw.div`flex mx-auto pt-[80px] lg:pt-[170px] lg:pb-[200px]`;
const MainPart = tw.div`md:max-w-[58%] lg:max-w-[50%] xl:max-w-[50%] text-left`;
const Illustration = tw.div`hidden md:block absolute right-0 2xl:right-[10%] top-[50%] -translate-y-[50%] max-w-[340px] lg:max-w-[470px] xl:max-w-[670px]`;

const Actions = tw.div`text-left py-4`;
const Button = tw(GradientButton)`p-3.5 px-10`;

const Hero = () => {
	return (
		<>
			<Header />
			<div className='relative'>
				<Container>
					<SubContainer>
						<MainPart>
							<ParagraphSmall className='text-[#f24c1a] font-[600] my-2 text-base'>
								TECHNOLOGY & IT SOLUTIONS
							</ParagraphSmall>
							<Heading>
								Digital <span className='text-[#0073ff]'>Technology,</span> <br />
								<span className='text-[#f24c1a]'>It Solutions</span> & Services Around the World
							</Heading>
							<Paragraph>
								We are leading technology solutions proving company all over the world doing over 40 years.
							</Paragraph>
							<Actions>
								<Button>GET STARTED</Button>
							</Actions>
						</MainPart>
					</SubContainer>
				</Container>
				<Illustration>
					<img className="animate-idle max-w-full h-auto" src={DesignIllustration} alt="Design Illustration" />
				</Illustration>
			</div>
		</>
	);
};

export default Hero;