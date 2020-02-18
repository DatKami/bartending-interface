import React from 'react';
import arrow from './assets/arrow.png';
import {titleCase} from './util';
import {AppContext} from './AppContext';

function DrinkWindow(props) {
    const context = React.useContext(AppContext),
          {name, index, ingredients, style, cost, flavorText, flavorTypes} = props.drink,
          {adelhyde, bronsonExtract, powderedDelta, flanergide, karmotrine, rocks, aged, blended} = ingredients,
          {totalDrinks} = props;
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
            return (<span key={index} className={amount === 'optional' ? 'nowrap' : ''}>
                {amount === 'optional' ? 'with ' : isLast && 'and '}
                <span className="nowrap">
                    <span className={className}>{amount + ' ' + name}</span>
                    {isLast ? '.' : isSecondLast ? '' : ','}
                </span>
                {' '} 
            </span>)
        }),
        flavorsString = flavorTypes.map((flavor, index, arr) => {
            const isLast = index === arr.length - 1;
            return (<span key={index}>
                {flavor + (isLast ? '.' : ', ')}
            </span>)
        }),
        addonString;

    let outcomes = [];
    aged && outcomes.push('aged');
    rocks && outcomes.push('on the rocks');
    outcomes.push((outcomes.length ? 'and ' : '') + (blended ? 'blended' : 'mixed'));
    
    addonString = name === 'Sunshine Cloud' ? '' : 'all ';
    addonString += outcomes[0];
    if (outcomes.length === 3) {
        addonString +=  ', ' + outcomes[1] +  ' ' + outcomes[2];
    }
    if (outcomes.length === 2) {
        addonString +=  ' ' + outcomes[1];
    }

    addonString = titleCase(addonString);

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
                    onClick={context.navigation.navPrevDrink}
                />
                <span className="midsection">{index}/{totalDrinks}</span>
                <img
                    className={"right " + (index !== totalDrinks ? 'active' : '')} 
                    src={arrow} 
                    alt="Navigate to next drink"
                    onClick={context.navigation.navNextDrink}
                />
            </div>
        </div>
    );
}

export default DrinkWindow;