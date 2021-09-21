import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import './styles.css';
import '../../global.css';

interface CallToMoreProps {
  title: string;
  link: string;
}

export const CallToMore = (props: CallToMoreProps): JSX.Element => {
	const { title, link } = props;
	return (
		<div className="call-to-more">
			<div>
				<p>{title}</p>
			</div>
			<div style={{marginTop: 6}}>
				<BiChevronRight size="2rem"/>
			</div>
		</div>
	);
};
