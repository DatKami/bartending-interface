import React from 'react';
import arrow from './assets/arrow.png';
import {titleCase} from './util';

class DrinkWindow extends React.Component {
    render() {
        const {name, index, ingredients, style, cost, flavorText, flavorTypes} = this.props.drink;
        const {adelhyde, bronsonExtract, powderedDelta, flanergide, karmotrine, optionalKarmotrine, rocks, aged, blended} = ingredients;
        const {totalDrinks} = this.props;
        let ingredientList = [
                {amount: adelhyde, name: 'Adelhyde', className: 'adelhyde'},
                {amount: bronsonExtract, name: 'Bronson Extract', className: 'bronsonExtract'},
                {amount: powderedDelta, name: 'Powdered Delta', className: 'powderedDelta'},
                {amount: flanergide, name: 'Flanergide', className: 'flanergide'},
                {amount: karmotrine, name: 'Karmotrine', className: 'karmotrine'}
            ].filter(ingredient => ingredient.amount !== 0 && ingredient.amount),

            numberedIngredients = ingredientList.map((ingredient, index, arr) => {
                const {amount, className, name} = ingredient; 
                const isLast = index === arr.length - 1;
                const isSecondLast = index === arr.length - 2;
                return (<span>
                    {isLast && 'and '}
                    <span className="nowrap">
                        <span className={className}>{amount + ' ' + name}</span>
                        {isLast ? '.' : isSecondLast ? '' : ','}
                    </span>
                    {' '} 
                </span>)
            }),
            flavorsString = flavorTypes.map((flavor, index, arr) => {
                const isLast = index === arr.length - 1;
                return (<span>
                    {flavor + (isLast ? '.' : ', ')}
                </span>)
            }),
            addonString;

        let outcomes = [];
        aged && outcomes.push('aged');
        rocks && outcomes.push('on the rocks');
        outcomes.push((outcomes.length ? 'and ' : '') + (blended ? 'blended' : 'mixed'));
        
        addonString = name === 'Sunshine Cloud' ? '' : 'all ';
        addonString += outcomes.join(outcomes.length > 2 ? ', ' : ' ');
        addonString = titleCase(addonString);

        // outcomes.forEach((outcome, index, outcomes) => {
        //     addonString += outcome;
        //     if (outcomes.length === 3 && index < 2) {
        //         addonString += ', '
        //     }
        // });

        // if (rocks) {
        //     if (aged) {
        //         if (blended) {
        //             addonString = 'All aged, on the rocks, and blended' // doesn't exist!
        //         } else {
        //             addonString = 'All aged, on the rocks, and mixed'
        //         }
        //     } else {
        //         if (blended) {
        //             addonString = name === 'Sunshine Cloud' ? 'On the rocks and blended' : 'All on the rocks and blended'
        //         } else {
        //             addonString = 'All on the rocks and mixed'
        //         }
        //     }
        // } else {
        //     if (aged) {
        //         if (blended) {
        //             addonString = 'All aged and blended' // doesn't exist!
        //         } else {
        //             addonString = 'All aged and mixed'
        //         }
        //     } else {
        //         if (blended) {
        //             addonString = 'All blended'
        //         } else {
        //             addonString = 'All mixed'
        //         }
        //     }
        // }



        return (
            <div className="drink">
                <div className="drink-title">
                    <b>{name}</b> - ${cost}
                </div>
                <div className="drink-description" style={style}>
                    A {name} is{' '}
                        {numberedIngredients}
                        {addonString}{addonString && '.'}
                        <br/><br/>
                        {'"' + flavorText + '"'}
                        <br/><br/>
                        {flavorsString}
                </div>
                <div className="navigation">
                    <img 
                        className={"left " + (index !== 1 ? 'active' : '')} 
                        src={arrow} 
                        alt="Navigate to previous drink"
                        onClick={this.props.navPrevDrink}
                    />
                    <span className="midsection">{index}/{totalDrinks}</span>
                    <img
                        className={"right " + (index !== totalDrinks ? 'active' : '')} 
                        src={arrow} 
                        alt="Navigate to next drink"
                        onClick={this.props.navNextDrink}
                    />
                </div>
            </div>
        );
    }
}

export default DrinkWindow;