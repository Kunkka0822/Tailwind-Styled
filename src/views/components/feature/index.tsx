import React from 'react';
import tw from 'tailwind-styled-components';
import { Container } from '../basics';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const ItemContainer = tw.div`flex flex-col lg:flex-row w-full bg-feaure-back bg-center bg-cover bg-no-repeat p-[60px] text-center`;
const ItemGroup = tw.div`flex flex-col md:flex-row flex-1`;

export type FeatureItemParams = {
	title: string;
	subTitle: string;
}

const ItemTitle = tw.div`text-white text-[40px] md:text-[52px] font-[700]`;
const ItemSubTitle = tw.div`text-white text-[20px] font-[500]`;

const Item = ({title, subTitle}: FeatureItemParams) => {
	return (
		<div className='flex-1 pb-[20px]'>
			<ItemTitle>{title}</ItemTitle>
			<ItemSubTitle>{subTitle}</ItemSubTitle>
		</div>
	)
}

const Feature = () => {
	const { t } = useTranslation();
	return (
		<div className='relative pb-[100px]'>
			<Container>
				<ItemContainer>
					<ItemGroup>
						<Item title='20k' subTitle={t('feat1')}/>
						<Item title='25k' subTitle={t('feat2')}/>
					</ItemGroup>
					<ItemGroup>
						<Item title='95+' subTitle={t('feat3')}/>
						<Item title='50+' subTitle={t('feat4')}/>
					</ItemGroup>
				</ItemContainer>
			</Container>
		</div>
	);
}

export default Feature;