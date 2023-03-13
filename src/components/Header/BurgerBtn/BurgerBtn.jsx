import { BurgerBtnStyled } from './BurgerBtn.styled';

export default function BurgerBtn({ onClick, isOpen }) {
  return (
    <BurgerBtnStyled type="button" onClick={onClick}>
      {!isOpen ? (
        <svg
          width="30"
          height="30"
          viewBox="0 0 40 40"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_105_932)">
            <path
              d="M5 28.3333C5 29.2538 5.74619 30 6.66667 30H33.3333C34.2538 30 35 29.2538 35 28.3333C35 27.4129 34.2538 26.6667 33.3333 26.6667H6.66667C5.74619 26.6667 5 27.4129 5 28.3333ZM5 20C5 20.9205 5.74619 21.6667 6.66667 21.6667H33.3333C34.2538 21.6667 35 20.9205 35 20C35 19.0795 34.2538 18.3333 33.3333 18.3333H6.66667C5.74619 18.3333 5 19.0795 5 20ZM6.66667 10C5.74619 10 5 10.7462 5 11.6667C5 12.5871 5.74619 13.3333 6.66667 13.3333H33.3333C34.2538 13.3333 35 12.5871 35 11.6667C35 10.7462 34.2538 10 33.3333 10H6.66667Z"
              fill="#ffffff"
            />
          </g>
          <defs>
            <clipPath id="clip0_105_932">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="30"
          height="30"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 10L10 30"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 10L30 30"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </BurgerBtnStyled>
  );
}
