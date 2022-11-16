import React from 'react';
import tw from 'tailwind-styled-components';
import { Container } from '../basics';
import feature1 from '../../../assets/images/feature1.png';
import feature2 from '../../../assets/images/feature2.png';
import feature3 from '../../../assets/images/feature3.png';
import feature4 from '../../../assets/images/feature4.png';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const TwoColumn = tw.div`flex flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col md:flex-row gap-[20px]`;
const RightColumn = tw.div`lg:max-w-[50%] pl-[15px] pt-[60px] lg:pl-[55px] pr-[15px] my-auto`;
const FeatureGroup = tw.div`flex-1 flex flex-col gap-[15px]`;

const Feature = tw.div`
	flex flex-col gap-[15px] 
	bg-gradient-to-r from-[#03228f] to-[#0e73e4] rounded-md
	pt-[50px] pb-[41px] px-[40px] lg:px-[18px] xl:px-[40px]
`;
const FeatureImage = tw.img`max-w-[100%] h-auto`;
const FeatureText = tw.a`font-[600] leading-8 text-[22px] text-white`;

const Feature1 = tw(Feature)`from-[#f69f6b] to-[#fbbb6a]`;
const Feature2 = tw(Feature)`from-[#a040f3] to-[#a86ae3]`;
const Feature3 = tw(Feature)`from-[#559cea] to-[#6ba3cb]`;
const Feature4 = tw(Feature)`from-[#f954a1] to-[#f2a1c6]`;

const SubText = tw.div`text-[18px] font-[600] uppercase text-[#F24C1A] mb-[5px]`;
const Title = tw.div`text-[36px] font-[700] text-[#102B3E] mb-[5px] pb-[20px]`;
const Desc = tw.div`lg:pr-[125px] text-[16px] text-[#454545]`;

const ProgressBarMainTitle = tw.div`flex justify-between`;
const ProgressBarMain = tw.div`w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-[10px] mb-[24px]`;
export type ProgressBarMainParams = {
	color?: string;
	percent?: number;
}
const ProgressBarMainPercent = tw.div<ProgressBarMainParams>`
	bg-[#FF571C] h-1.5 rounded-full w-[92%]
	${(props: ProgressBarMainParams) => ((props?.color ? `bg-[${props?.color}]` : '') + ' ' + (props?.percent ? `w-[${props.percent}%]` : ''))}
`;

export interface ProgressBarParams extends ProgressBarMainParams {
	title?: string;
}
const ProgressBar = ({title, color = "#FF571C", percent = 92}: ProgressBarParams) => {
	return (
		<>
			<ProgressBarMainTitle>
				<div>{title}</div>
				<div className='pr-[40px]'>{percent}%</div>
			</ProgressBarMainTitle>
			<ProgressBarMain>
				<ProgressBarMainPercent color={color} percent={percent}/>
			</ProgressBarMain>
		</>
	);
}

const About = () => {
	const {t} = useTranslation();
	return (
		<div className='relative pt-[170px] pb-[185px] lg:pb-[230px]'>
			<Container>
				<TwoColumn>
					<LeftColumn>
						<FeatureGroup className='mt-[20px]'>
							<Feature1>
								<div>
									<FeatureImage src={feature1} alt="Feature" />
								</div>

								<FeatureText>{t('feature1')}</FeatureText>
							</Feature1>
							<Feature2>
								<div>
									<FeatureImage src={feature2} alt="Feature" />
								</div>

								<FeatureText>{t('feature2')}</FeatureText>
							</Feature2>
						</FeatureGroup>

						<FeatureGroup>
							<Feature3>
								<div>
									<FeatureImage src={feature3} alt="Feature" />
								</div>

								<FeatureText>{t('feature3')}</FeatureText>
							</Feature3>
							<Feature4>
								<div>
									<FeatureImage src={feature4} alt="Feature" />
								</div>

								<FeatureText>{t('feature4')}</FeatureText>
							</Feature4>
						</FeatureGroup>
					</LeftColumn>

					<RightColumn>
						<div className='mb-[50px]'>
							<SubText>{t('feature_sub_text')}</SubText>
							<Title>{t('feature_title')}</Title>
							<Desc>{t('feature_desc')}</Desc>
						</div>

						<div className='lg:pr-[120px]'>
							<ProgressBar title={t('analystics') as string} />
							<ProgressBar title={t('development') as string} color='#7E06E4' percent={80} />
							<ProgressBar title={t('solutions') as string} color='#0073FF' percent={95} />
						</div>
					</RightColumn>
				</TwoColumn>
			</Container>
		</div>
	);
}

export default About;