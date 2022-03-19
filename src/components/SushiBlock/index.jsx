import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../Button";

function PhoneBlock({
  id,
  name,
  imageUrl,
  oldPrice,
  currentPrice,
  camera,
  sizes,
  onClickAddphone,
  addedCount,
  onClickAddSushi,
}) {
  const availableTypes = ["64", "128"];
  const availableSizes = ["5", "16", "64", "128"];

  const [activeType, setActiveType] = React.useState(camera[1]);
  const [activeSize, setActiveSize] = React.useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddSushi = () => {
    const obj = {
      id,
      name,
      imageUrl,
      oldPrice,
      currentPrice,
    };
    onClickAddSushi(obj);
  };

  return (
    <div className="phone-block">
      <div className="phone-block__label-container">
        <label
          className={classNames("phone-block", {
            active: oldPrice > currentPrice,
            none: oldPrice <= currentPrice,
          })}
          htmlFor="Sale"
        >
          {oldPrice > currentPrice
            ? `-${Math.ceil(((currentPrice - oldPrice) * 100) / currentPrice)}%`
            : " "}
        </label>
      </div>
      <img className="phone-block__image" src={imageUrl} alt="phone" />
      <h4 className="phone-block__title">{name}</h4>

      <div className="price__block">
        <div className="phone-block__price phone-block__old-price">
          {oldPrice > currentPrice ? `${oldPrice} ₴` : ""}
        </div>
        <div className="phone-block__price phone-block__new-price">
          {currentPrice} ₴
        </div>
      </div>
      <Button onClick={onAddSushi} className="button--outline">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}

PhoneBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  oldPrice: PropTypes.number,
  currentPrice: PropTypes.number,
  camera: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  onClickAddSushi: PropTypes.func,
};

PhoneBlock.defaultProps = {
  name: "---",
  oldPrice: 0,
  currentPrice: 0,
  camera: [],
  sizes: [],
};

export default PhoneBlock;
