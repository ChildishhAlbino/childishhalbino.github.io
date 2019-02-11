import React from 'react';
import './AboutCard.scss';
import Markdown from 'react-markdown';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

class AboutCard extends React.Component {
	constructor(props) {
		super(props);
		const rawCards = Object.values(props.cards);
		const cards = [];
		rawCards.forEach((element) => {
			cards.push(element.node);
		});
		this.state = {
			cards: cards,
			selected: cards[0]
		};
	}

	render() {
		return (
			<div className="aboutCardGrid">
				<div className="arrows">
					<div
						onClick={() => {
							this.back();
						}}
						className="arrow"
					>
						<FaChevronCircleLeft />
					</div>
					<p>Click to scroll between cards!</p>
					<div
						onClick={() => {
							this.forward();
						}}
						className="arrow"
					>
						<FaChevronCircleRight />
					</div>
				</div>
				<div className="cards alignLeft">
					<Markdown source={this.state.selected.rawMarkdownBody} />
				</div>
			</div>
		);
	}

	back() {
		const cards = this.state.cards;
		let index = cards.indexOf(this.state.selected);
		let length = cards.length;
		if (index === 0) {
			index = length - 1;
		} else {
			index -= 1;
		}
		this.setState({ selected: cards[index] });
	}

	forward() {
		const cards = this.state.cards;
		console.log(cards);
		let index = cards.indexOf(this.state.selected);
		let length = cards.length;
		if (index === length - 1) {
			index = 0;
		} else {
			index += 1;
		}
		console.log(cards[index]);
		this.setState({ selected: cards[index] });
	}
}

export default AboutCard;
