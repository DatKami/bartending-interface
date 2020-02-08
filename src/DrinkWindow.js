import React from 'react';

class DrinkWindow extends React.Component {
    render() {
        const {name, ingredients, cost} = this.props.drink;
        const {adelhyde, bronsonExtract, powderedDelta, flanergide, karmotrine, optionalKarmotrine, rocks, aged, blended} = ingredients;
        let ingredientList = [
            {amount: adelhyde, name: 'Adelhyde'},
            {amount: bronsonExtract, name: 'Bronson Extract'},
            {amount: powderedDelta, name: 'Powdered Delta'},
            {amount: flanergide, name: 'Flanergide'},
            {amount: karmotrine, name: 'Karmotrine'}
        ];
        return (
            <div className="drink" onClick={this.props.onClick}>
                <div className="drink-title">
                    <b>{name}</b> - ${cost}
                </div>
                <div className="drink-description">
                    A {name} is{' '}
                        {adelhyde !== 0 && adelhyde && ((<span><span className="adelhyde">{adelhyde + ' Adelhyde'}</span>, </span>))}
                        {bronsonExtract !== 0 && bronsonExtract && (<span><span className="bronsonExtract">{bronsonExtract + ' Bronson Extract'}</span>, </span>)}
                </div>
            </div>
        );
    }
}

export default DrinkWindow;