import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Feature from '../components/feature';
import Service from '../components/services';

const Dashboard = () => {
	return (
		<div className='pt-8'>
			<Hero />
			<About />
			<Feature />
			<Service />
		</div>
	)
}

export default Dashboard;