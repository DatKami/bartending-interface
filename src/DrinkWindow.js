import React from 'react';

class DrinkWindow extends React.Component {
    render() {
        const {name, ingredients, style, cost, flavorText, flavorTypes} = this.props.drink;
        const {adelhyde, bronsonExtract, powderedDelta, flanergide, karmotrine, optionalKarmotrine, rocks, aged, blended} = ingredients;
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

        if (rocks) {
            if (aged) {
                if (blended) {

                } else {

                }
            } else {
                if (blended) {

                } else {
                    addonString = 'All on the rocks and mixed'
                }
            }
        } else {
            if (aged) {
                if (blended) {

                } else {
                    
                }
            } else {
                if (blended) {

                } else {
                    addonString = 'All mixed'
                }
            }
        }

        return (
            <div className="drink" onClick={this.props.onClick}>
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
            </div>
        );
    }
}

export default DrinkWindow;