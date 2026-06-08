import React from 'react';
import PropTypes from 'prop-types';

/**
 * A centered greeting surface with a title and subtitle.
 *
 * @param {{title: string, subtitle: string}} props component props
 * @return {JSX.Element} Rendered greeting card.
 */
function GreetingCard(props) {
    const {title, subtitle} = props;

    return (
        <section className="GreetingCard" aria-label="Greeting">
            <div className="GreetingCard__accent" aria-hidden="true" />
            <h1 className="GreetingCard__title">{title}</h1>
            <p className="GreetingCard__subtitle">{subtitle}</p>
        </section>
    );
}

GreetingCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default GreetingCard;
