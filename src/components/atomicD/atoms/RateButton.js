import React, { PureComponent } from "react";
import styled from "styled-components";
// import { main } from "../../themes/themes";
import Star from "./Star";

const StyledStar = styled( Star )`

`;

class RateButton extends PureComponent {
  onChangeRating = event => {
    event.stopPropagation();
    const indexOfClickedStar = ~~event.currentTarget.dataset.index;
    const newRating = this.props.rating === indexOfClickedStar ? 0 : indexOfClickedStar;
    if( this.props.onChangeRating ) {
      this.props.onChangeRating( newRating );
    }
  }
  render() {
    const { rating } = this.props;
    const isStarsFilled = new Array( 5 ).fill( true, 0, rating ).fill( false, rating );
    return (
      <div>
        { isStarsFilled.map(
          ( isFilled, index ) => (
            <StyledStar
              onClick={ this.onChangeRating }
              isFilled={ isFilled }
              key={ index }
              data-index={ index + 1 }
            />
          )
        ) }
      </div>
    );
  }
}

export default RateButton;
