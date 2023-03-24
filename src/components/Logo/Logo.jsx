import React from 'react';
import { LogoBox, LogoLink, LogoName } from './Logo.styled';

export default function Logo() {
  return (
    <LogoBox>
      <LogoLink href="/vr-zone/">
        <svg
          width="30"
          height="30"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.9759 9.65631C28.5646 9.49855 29.0852 9.15153 29.4574 8.66875C29.8294 8.18596 30.0323 7.59419 30.035 6.98468V6.97743C30.035 6.24487 29.744 5.54232 29.2259 5.02433C28.7079 4.50634 28.0053 4.21533 27.2728 4.21533H27.2658C26.6563 4.218 26.0646 4.42102 25.582 4.7931C25.0993 5.16518 24.7522 5.68569 24.5946 6.27439C24.1434 7.90892 23.1683 9.35028 21.8192 10.3775C20.47 11.4046 18.8212 11.9609 17.1255 11.9609C15.4299 11.9609 13.781 11.4046 12.4318 10.3775C11.0827 9.35028 10.1077 7.90892 9.65647 6.27439C9.49863 5.68573 9.15159 5.16531 8.66884 4.79332C8.18609 4.42131 7.59442 4.21838 6.98498 4.21579H6.97774C6.24519 4.21579 5.54263 4.5068 5.02463 5.02479C4.50664 5.54278 4.21564 6.24534 4.21564 6.97789V6.98514C4.21833 7.59458 4.42136 8.18623 4.79344 8.66894C5.16552 9.15162 5.68601 9.49857 6.27469 9.65631C7.90922 10.1075 9.3506 11.0825 10.3778 12.4317C11.4049 13.7808 11.9612 15.4297 11.9612 17.1254C11.9612 18.821 11.4049 20.4698 10.3778 21.8191C9.3506 23.1683 7.90922 24.1432 6.27469 24.5944C5.68604 24.7522 5.1656 25.0991 4.79355 25.5818C4.4215 26.0645 4.21849 26.6561 4.21579 27.2654V27.2727C4.21579 28.0053 4.5068 28.7078 5.02479 29.2259C5.5428 29.7438 6.24533 30.0348 6.97789 30.0348H6.98513C7.59459 30.0322 8.18623 29.829 8.66893 29.457C9.15162 29.0849 9.49856 28.5644 9.65631 27.9757C10.1076 26.3412 11.0825 24.8999 12.4317 23.8727C13.7808 22.8454 15.4297 22.2893 17.1254 22.2893C18.821 22.2893 20.4698 22.8454 21.8191 23.8727C23.1681 24.8999 24.1432 26.3412 24.5944 27.9757C24.7521 28.5644 25.0991 29.085 25.5818 29.4572C26.0645 29.8292 26.6563 30.0323 27.2658 30.0349H27.273C28.0055 30.0349 28.7081 29.7438 29.226 29.2259C29.744 28.7079 30.0351 28.0053 30.0351 27.2728V27.2654C30.0325 26.6559 29.8294 26.0643 29.4574 25.5816C29.0852 25.099 28.5647 24.7521 27.976 24.5943C26.3416 24.143 24.9002 23.1681 23.873 21.8189C22.8458 20.4697 22.2896 18.8209 22.2896 17.1252C22.2896 15.4295 22.8458 13.7807 23.873 12.4315C24.9002 11.0824 26.3416 10.1074 27.976 9.65616L27.9759 9.65631Z"
            fill="#AF51C5"
          />
          <path
            d="M27.9759 9.65631C28.5646 9.49855 29.0852 9.15153 29.4574 8.66875C29.8294 8.18596 30.0323 7.59419 30.035 6.98468V6.97743C30.035 6.24487 29.744 5.54232 29.2259 5.02433C28.7079 4.50634 28.0053 4.21533 27.2728 4.21533H27.2658C26.6563 4.218 26.0646 4.42102 25.582 4.7931C25.0993 5.16518 24.7522 5.68569 24.5946 6.27439C24.1434 7.90892 23.1683 9.35028 21.8192 10.3775C20.47 11.4046 18.8212 11.9609 17.1255 11.9609C15.4299 11.9609 13.781 11.4046 12.4318 10.3775C11.0827 9.35028 10.1077 7.90892 9.65647 6.27439C9.49863 5.68573 9.15159 5.16531 8.66884 4.79332C8.18609 4.42131 7.59442 4.21838 6.98498 4.21579H6.97774C6.24519 4.21579 5.54263 4.5068 5.02463 5.02479C4.50664 5.54278 4.21564 6.24534 4.21564 6.97789V6.98514C4.21833 7.59458 4.42136 8.18623 4.79344 8.66894C5.16552 9.15162 5.68601 9.49857 6.27469 9.65631C7.90922 10.1075 9.3506 11.0825 10.3778 12.4317C11.4049 13.7808 11.9612 15.4297 11.9612 17.1254C11.9612 18.821 11.4049 20.4698 10.3778 21.8191C9.3506 23.1683 7.90922 24.1432 6.27469 24.5944C5.68604 24.7522 5.1656 25.0991 4.79355 25.5818C4.4215 26.0645 4.21849 26.6561 4.21579 27.2654V27.2727C4.21579 28.0053 4.5068 28.7078 5.02479 29.2259C5.5428 29.7438 6.24533 30.0348 6.97789 30.0348H6.98513C7.59459 30.0322 8.18623 29.829 8.66893 29.457C9.15162 29.0849 9.49856 28.5644 9.65631 27.9757C10.1076 26.3412 11.0825 24.8999 12.4317 23.8727C13.7808 22.8454 15.4297 22.2893 17.1254 22.2893C18.821 22.2893 20.4698 22.8454 21.8191 23.8727C23.1681 24.8999 24.1432 26.3412 24.5944 27.9757C24.7521 28.5644 25.0991 29.085 25.5818 29.4572C26.0645 29.8292 26.6563 30.0323 27.2658 30.0349H27.273C28.0055 30.0349 28.7081 29.7438 29.226 29.2259C29.744 28.7079 30.0351 28.0053 30.0351 27.2728V27.2654C30.0325 26.6559 29.8294 26.0643 29.4574 25.5816C29.0852 25.099 28.5647 24.7521 27.976 24.5943C26.3416 24.143 24.9002 23.1681 23.873 21.8189C22.8458 20.4697 22.2896 18.8209 22.2896 17.1252C22.2896 15.4295 22.8458 13.7807 23.873 12.4315C24.9002 11.0824 26.3416 10.1074 27.976 9.65616L27.9759 9.65631Z"
            fill="url(#paint0_linear_1_525)"
          />
          <path
            d="M3.61418 1.63604C3.70303 1.7244 3.81721 1.78289 3.94083 1.80335C4.06446 1.82382 4.19138 1.80525 4.30398 1.75023C5.33122 1.25414 6.48706 1.08891 7.61215 1.27732C8.73725 1.46573 9.7762 1.9985 10.5858 2.80218C10.6974 2.91463 10.8482 2.97948 11.0066 2.98311C11.165 2.98673 11.3186 2.92884 11.4352 2.8216C11.4932 2.76629 11.5395 2.69996 11.5714 2.6265C11.6034 2.55303 11.6203 2.47393 11.6213 2.39382C11.6222 2.31372 11.6071 2.23424 11.5769 2.16005C11.5466 2.08587 11.5019 2.01847 11.4452 1.96182C10.458 0.977008 9.18875 0.323851 7.81352 0.0929646C6.43831 -0.137922 5.02533 0.0649103 3.7706 0.67332C3.68518 0.71568 3.61107 0.777798 3.55445 0.854523C3.49783 0.931248 3.46032 1.02037 3.44502 1.11449C3.42973 1.20861 3.4371 1.30502 3.46651 1.39572C3.49593 1.48643 3.54656 1.56881 3.61418 1.63604Z"
            fill="#AF51C5"
          />
          <path
            d="M3.61418 1.63604C3.70303 1.7244 3.81721 1.78289 3.94083 1.80335C4.06446 1.82382 4.19138 1.80525 4.30398 1.75023C5.33122 1.25414 6.48706 1.08891 7.61215 1.27732C8.73725 1.46573 9.7762 1.9985 10.5858 2.80218C10.6974 2.91463 10.8482 2.97948 11.0066 2.98311C11.165 2.98673 11.3186 2.92884 11.4352 2.8216C11.4932 2.76629 11.5395 2.69996 11.5714 2.6265C11.6034 2.55303 11.6203 2.47393 11.6213 2.39382C11.6222 2.31372 11.6071 2.23424 11.5769 2.16005C11.5466 2.08587 11.5019 2.01847 11.4452 1.96182C10.458 0.977008 9.18875 0.323851 7.81352 0.0929646C6.43831 -0.137922 5.02533 0.0649103 3.7706 0.67332C3.68518 0.71568 3.61107 0.777798 3.55445 0.854523C3.49783 0.931248 3.46032 1.02037 3.44502 1.11449C3.42973 1.20861 3.4371 1.30502 3.46651 1.39572C3.49593 1.48643 3.54656 1.56881 3.61418 1.63604Z"
            fill="url(#paint1_linear_1_525)"
          />
          <path
            d="M0.675463 3.76588C0.0677957 5.01657 -0.136769 6.42501 0.0899917 7.79689C0.316752 9.16878 0.963663 10.4365 1.94147 11.4251C2.04429 11.5332 2.18276 11.6003 2.33128 11.6142C2.47978 11.628 2.62828 11.5876 2.74931 11.5005C2.81788 11.4487 2.87454 11.3827 2.91547 11.3072C2.95641 11.2316 2.98066 11.1481 2.98658 11.0624C2.99251 10.9767 2.97998 10.8907 2.94986 10.8102C2.91971 10.7297 2.87266 10.6566 2.81188 10.5959C2.00409 9.78608 1.46811 8.74514 1.27822 7.61723C1.08834 6.4893 1.25394 5.33025 1.75207 4.30064C1.80751 4.18793 1.82638 4.06073 1.80607 3.93678C1.78578 3.81281 1.72729 3.69829 1.6388 3.60915C1.57152 3.54147 1.48908 3.49081 1.3983 3.46138C1.30753 3.43196 1.21104 3.42459 1.11685 3.43991C1.02267 3.45525 0.933489 3.4928 0.856724 3.5495C0.77996 3.60618 0.717819 3.68037 0.675463 3.76588Z"
            fill="#AF51C5"
          />
          <path
            d="M0.675463 3.76588C0.0677957 5.01657 -0.136769 6.42501 0.0899917 7.79689C0.316752 9.16878 0.963663 10.4365 1.94147 11.4251C2.04429 11.5332 2.18276 11.6003 2.33128 11.6142C2.47978 11.628 2.62828 11.5876 2.74931 11.5005C2.81788 11.4487 2.87454 11.3827 2.91547 11.3072C2.95641 11.2316 2.98066 11.1481 2.98658 11.0624C2.99251 10.9767 2.97998 10.8907 2.94986 10.8102C2.91971 10.7297 2.87266 10.6566 2.81188 10.5959C2.00409 9.78608 1.46811 8.74514 1.27822 7.61723C1.08834 6.4893 1.25394 5.33025 1.75207 4.30064C1.80751 4.18793 1.82638 4.06073 1.80607 3.93678C1.78578 3.81281 1.72729 3.69829 1.6388 3.60915C1.57152 3.54147 1.48908 3.49081 1.3983 3.46138C1.30753 3.43196 1.21104 3.42459 1.11685 3.43991C1.02267 3.45525 0.933489 3.4928 0.856724 3.5495C0.77996 3.60618 0.717819 3.68037 0.675463 3.76588Z"
            fill="url(#paint2_linear_1_525)"
          />
          <path
            d="M29.9473 32.5006C28.9197 32.9968 27.7636 33.162 26.6381 32.9732C25.5128 32.7846 24.4737 32.2514 23.6641 31.4473C23.5527 31.3354 23.4025 31.2708 23.2446 31.2673C23.0867 31.2636 22.9337 31.3212 22.8173 31.428C22.759 31.4832 22.7125 31.5496 22.6803 31.6231C22.6482 31.6966 22.6311 31.7758 22.6301 31.8561C22.629 31.9364 22.6441 32.0161 22.6743 32.0904C22.7045 32.1648 22.7493 32.2323 22.8061 32.289C23.7933 33.2738 25.0625 33.9269 26.4378 34.1579C27.8129 34.3887 29.2259 34.1859 30.4807 33.5775C30.5661 33.5351 30.6402 33.473 30.6969 33.3963C30.7535 33.3195 30.7909 33.2305 30.8062 33.1363C30.8214 33.0421 30.814 32.9457 30.7846 32.855C30.7552 32.7643 30.7045 32.682 30.6368 32.6148C30.548 32.5265 30.4338 32.4681 30.3102 32.4476C30.1868 32.4271 30.0598 32.4456 29.9473 32.5006Z"
            fill="#AF51C5"
          />
          <path
            d="M29.9473 32.5006C28.9197 32.9968 27.7636 33.162 26.6381 32.9732C25.5128 32.7846 24.4737 32.2514 23.6641 31.4473C23.5527 31.3354 23.4025 31.2708 23.2446 31.2673C23.0867 31.2636 22.9337 31.3212 22.8173 31.428C22.759 31.4832 22.7125 31.5496 22.6803 31.6231C22.6482 31.6966 22.6311 31.7758 22.6301 31.8561C22.629 31.9364 22.6441 32.0161 22.6743 32.0904C22.7045 32.1648 22.7493 32.2323 22.8061 32.289C23.7933 33.2738 25.0625 33.9269 26.4378 34.1579C27.8129 34.3887 29.2259 34.1859 30.4807 33.5775C30.5661 33.5351 30.6402 33.473 30.6969 33.3963C30.7535 33.3195 30.7909 33.2305 30.8062 33.1363C30.8214 33.0421 30.814 32.9457 30.7846 32.855C30.7552 32.7643 30.7045 32.682 30.6368 32.6148C30.548 32.5265 30.4338 32.4681 30.3102 32.4476C30.1868 32.4271 30.0598 32.4456 29.9473 32.5006Z"
            fill="url(#paint3_linear_1_525)"
          />
          <path
            d="M31.428 22.8167C31.3212 22.933 31.2636 23.0861 31.2673 23.244C31.2708 23.4018 31.3354 23.5522 31.4473 23.6635C32.252 24.4737 32.7854 25.5137 32.9736 26.64C33.1619 27.7663 32.9957 28.9232 32.4983 29.9512C32.4431 30.0638 32.4245 30.1908 32.4448 30.3145C32.4653 30.4383 32.5237 30.5526 32.6122 30.6416C32.6794 30.7092 32.7617 30.7598 32.8523 30.7894C32.9429 30.8188 33.0392 30.8262 33.1334 30.8109C33.2274 30.7957 33.3166 30.7584 33.3932 30.7018C33.4699 30.6453 33.5322 30.5713 33.5746 30.4859C34.1849 29.2308 34.389 27.8169 34.1588 26.4405C33.9286 25.064 33.2753 23.7936 32.2898 22.8054C32.2331 22.7485 32.1654 22.7037 32.091 22.6733C32.0165 22.643 31.9369 22.6279 31.8566 22.629C31.7761 22.63 31.6969 22.6471 31.6232 22.6795C31.5496 22.7117 31.4833 22.7583 31.428 22.8167Z"
            fill="#AF51C5"
          />
          <path
            d="M31.428 22.8167C31.3212 22.933 31.2636 23.0861 31.2673 23.244C31.2708 23.4018 31.3354 23.5522 31.4473 23.6635C32.252 24.4737 32.7854 25.5137 32.9736 26.64C33.1619 27.7663 32.9957 28.9232 32.4983 29.9512C32.4431 30.0638 32.4245 30.1908 32.4448 30.3145C32.4653 30.4383 32.5237 30.5526 32.6122 30.6416C32.6794 30.7092 32.7617 30.7598 32.8523 30.7894C32.9429 30.8188 33.0392 30.8262 33.1334 30.8109C33.2274 30.7957 33.3166 30.7584 33.3932 30.7018C33.4699 30.6453 33.5322 30.5713 33.5746 30.4859C34.1849 29.2308 34.389 27.8169 34.1588 26.4405C33.9286 25.064 33.2753 23.7936 32.2898 22.8054C32.2331 22.7485 32.1654 22.7037 32.091 22.6733C32.0165 22.643 31.9369 22.6279 31.8566 22.629C31.7761 22.63 31.6969 22.6471 31.6232 22.6795C31.5496 22.7117 31.4833 22.7583 31.428 22.8167Z"
            fill="url(#paint4_linear_1_525)"
          />
          <path
            d="M32.4994 4.30131C32.9964 5.32902 33.162 6.48566 32.9736 7.61155C32.7851 8.73744 32.2517 9.77708 31.4473 10.587C31.3354 10.6983 31.2708 10.8486 31.2673 11.0064C31.2636 11.1642 31.3212 11.3173 31.428 11.4336C31.4832 11.4919 31.5496 11.5385 31.6231 11.5706C31.6966 11.6028 31.7758 11.6199 31.8561 11.621C31.9364 11.6221 32.0159 11.607 32.0904 11.5768C32.1646 11.5466 32.2323 11.5018 32.289 11.445C33.2742 10.4573 33.9276 9.18739 34.1582 7.81149C34.3889 6.4356 34.1855 5.02202 33.5761 3.76702C33.5337 3.68163 33.4715 3.60759 33.3947 3.55103C33.318 3.49446 33.2289 3.45701 33.1348 3.44178C33.0407 3.42656 32.9443 3.43397 32.8537 3.46344C32.7629 3.4929 32.6806 3.54356 32.6134 3.61121C32.5251 3.70012 32.4665 3.81436 32.446 3.93803C32.4257 4.06172 32.4443 4.18869 32.4994 4.30131Z"
            fill="#AF51C5"
          />
          <path
            d="M32.4994 4.30131C32.9964 5.32902 33.162 6.48566 32.9736 7.61155C32.7851 8.73744 32.2517 9.77708 31.4473 10.587C31.3354 10.6983 31.2708 10.8486 31.2673 11.0064C31.2636 11.1642 31.3212 11.3173 31.428 11.4336C31.4832 11.4919 31.5496 11.5385 31.6231 11.5706C31.6966 11.6028 31.7758 11.6199 31.8561 11.621C31.9364 11.6221 32.0159 11.607 32.0904 11.5768C32.1646 11.5466 32.2323 11.5018 32.289 11.445C33.2742 10.4573 33.9276 9.18739 34.1582 7.81149C34.3889 6.4356 34.1855 5.02202 33.5761 3.76702C33.5337 3.68163 33.4715 3.60759 33.3947 3.55103C33.318 3.49446 33.2289 3.45701 33.1348 3.44178C33.0407 3.42656 32.9443 3.43397 32.8537 3.46344C32.7629 3.4929 32.6806 3.54356 32.6134 3.61121C32.5251 3.70012 32.4665 3.81436 32.446 3.93803C32.4257 4.06172 32.4443 4.18869 32.4994 4.30131Z"
            fill="url(#paint5_linear_1_525)"
          />
          <path
            d="M23.6638 2.80349C24.4737 1.99893 25.5133 1.46561 26.6392 1.27713C27.7651 1.08864 28.9217 1.2543 29.9495 1.75123C30.0621 1.80639 30.1891 1.82505 30.3127 1.80463C30.4365 1.78423 30.5507 1.72575 30.6396 1.63735C30.7072 1.57017 30.7579 1.48783 30.7874 1.39715C30.8168 1.30648 30.8242 1.21008 30.809 1.11597C30.7938 1.02185 30.7564 0.932722 30.6998 0.855971C30.6433 0.779218 30.5692 0.717055 30.4838 0.674635C29.2287 0.0652726 27.8152 -0.138208 26.4393 0.0924455C25.0634 0.3231 23.7934 0.976438 22.8057 1.96175C22.749 2.01851 22.7042 2.08604 22.674 2.16038C22.6438 2.23474 22.6287 2.31438 22.6298 2.39463C22.6308 2.47489 22.6479 2.55411 22.68 2.62764C22.7122 2.70118 22.7587 2.76752 22.817 2.82276C22.9333 2.92949 23.0864 2.98708 23.2443 2.98349C23.4022 2.9799 23.5524 2.91541 23.6638 2.80349Z"
            fill="#AF51C5"
          />
          <path
            d="M23.6638 2.80349C24.4737 1.99893 25.5133 1.46561 26.6392 1.27713C27.7651 1.08864 28.9217 1.2543 29.9495 1.75123C30.0621 1.80639 30.1891 1.82505 30.3127 1.80463C30.4365 1.78423 30.5507 1.72575 30.6396 1.63735C30.7072 1.57017 30.7579 1.48783 30.7874 1.39715C30.8168 1.30648 30.8242 1.21008 30.809 1.11597C30.7938 1.02185 30.7564 0.932722 30.6998 0.855971C30.6433 0.779218 30.5692 0.717055 30.4838 0.674635C29.2287 0.0652726 27.8152 -0.138208 26.4393 0.0924455C25.0634 0.3231 23.7934 0.976438 22.8057 1.96175C22.749 2.01851 22.7042 2.08604 22.674 2.16038C22.6438 2.23474 22.6287 2.31438 22.6298 2.39463C22.6308 2.47489 22.6479 2.55411 22.68 2.62764C22.7122 2.70118 22.7587 2.76752 22.817 2.82276C22.9333 2.92949 23.0864 2.98708 23.2443 2.98349C23.4022 2.9799 23.5524 2.91541 23.6638 2.80349Z"
            fill="url(#paint6_linear_1_525)"
          />
          <path
            d="M10.5873 31.4472C9.7774 32.2516 8.73776 32.785 7.61187 32.9735C6.48596 33.1619 5.32934 32.9963 4.30162 32.4993C4.18901 32.4442 4.06202 32.4256 3.93835 32.4459C3.81466 32.4664 3.70042 32.525 3.61151 32.6133C3.54388 32.6805 3.49322 32.7628 3.46375 32.8536C3.43429 32.9442 3.42686 33.0406 3.44209 33.1347C3.45733 33.2288 3.49478 33.3179 3.55133 33.3946C3.60789 33.4714 3.68194 33.5336 3.76732 33.576C5.02232 34.1854 6.43591 34.3888 7.81181 34.1581C9.18771 33.9275 10.4577 33.2741 11.4454 32.2889C11.5021 32.2322 11.5469 32.1645 11.5771 32.0903C11.6073 32.016 11.6224 31.9363 11.6213 31.856C11.6202 31.7757 11.6031 31.6965 11.5709 31.623C11.5388 31.5495 11.4922 31.4831 11.4339 31.4279C11.3177 31.3211 11.1646 31.2635 11.0067 31.267C10.8489 31.2707 10.6986 31.3351 10.5873 31.4472Z"
            fill="#AF51C5"
          />
          <path
            d="M10.5873 31.4472C9.7774 32.2516 8.73776 32.785 7.61187 32.9735C6.48596 33.1619 5.32934 32.9963 4.30162 32.4993C4.18901 32.4442 4.06202 32.4256 3.93835 32.4459C3.81466 32.4664 3.70042 32.525 3.61151 32.6133C3.54388 32.6805 3.49322 32.7628 3.46375 32.8536C3.43429 32.9442 3.42686 33.0406 3.44209 33.1347C3.45733 33.2288 3.49478 33.3179 3.55133 33.3946C3.60789 33.4714 3.68194 33.5336 3.76732 33.576C5.02232 34.1854 6.43591 34.3888 7.81181 34.1581C9.18771 33.9275 10.4577 33.2741 11.4454 32.2889C11.5021 32.2322 11.5469 32.1645 11.5771 32.0903C11.6073 32.016 11.6224 31.9363 11.6213 31.856C11.6202 31.7757 11.6031 31.6965 11.5709 31.623C11.5388 31.5495 11.4922 31.4831 11.4339 31.4279C11.3177 31.3211 11.1646 31.2635 11.0067 31.267C10.8489 31.2707 10.6986 31.3351 10.5873 31.4472Z"
            fill="url(#paint7_linear_1_525)"
          />
          <path
            d="M1.75146 29.9492C1.25446 28.9214 1.08875 27.7648 1.2772 26.6389C1.46566 25.513 1.99899 24.4734 2.80356 23.6635C2.91546 23.5521 2.97997 23.4018 2.98356 23.244C2.98715 23.0861 2.92955 22.933 2.82283 22.8167C2.76758 22.7584 2.70123 22.7119 2.62771 22.6797C2.55417 22.6476 2.47494 22.6305 2.3947 22.6294C2.31445 22.6284 2.23479 22.6435 2.16045 22.6737C2.08611 22.7039 2.01856 22.7487 1.96182 22.8054C0.976504 23.7931 0.323159 25.0631 0.0925065 26.439C-0.138147 27.8149 0.0653337 29.2284 0.674696 30.4835C0.717115 30.5689 0.77928 30.643 0.856031 30.6995C0.932783 30.7561 1.02191 30.7935 1.11603 30.8086C1.21015 30.8239 1.30654 30.8165 1.39721 30.7871C1.48789 30.7576 1.57023 30.7069 1.63742 30.6393C1.7258 30.5504 1.78427 30.4362 1.80472 30.3124C1.82515 30.1888 1.80654 30.0618 1.75146 29.9492Z"
            fill="#AF51C5"
          />
          <path
            d="M1.75146 29.9492C1.25446 28.9214 1.08875 27.7648 1.2772 26.6389C1.46566 25.513 1.99899 24.4734 2.80356 23.6635C2.91546 23.5521 2.97997 23.4018 2.98356 23.244C2.98715 23.0861 2.92955 22.933 2.82283 22.8167C2.76758 22.7584 2.70123 22.7119 2.62771 22.6797C2.55417 22.6476 2.47494 22.6305 2.3947 22.6294C2.31445 22.6284 2.23479 22.6435 2.16045 22.6737C2.08611 22.7039 2.01856 22.7487 1.96182 22.8054C0.976504 23.7931 0.323159 25.0631 0.0925065 26.439C-0.138147 27.8149 0.0653337 29.2284 0.674696 30.4835C0.717115 30.5689 0.77928 30.643 0.856031 30.6995C0.932783 30.7561 1.02191 30.7935 1.11603 30.8086C1.21015 30.8239 1.30654 30.8165 1.39721 30.7871C1.48789 30.7576 1.57023 30.7069 1.63742 30.6393C1.7258 30.5504 1.78427 30.4362 1.80472 30.3124C1.82515 30.1888 1.80654 30.0618 1.75146 29.9492Z"
            fill="url(#paint8_linear_1_525)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_525"
              x1="12.635"
              y1="-7.01058"
              x2="24.7269"
              y2="44.4251"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F79CB" />
              <stop offset="1" stopColor="#AF51C5" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_525"
              x1="6.10596"
              y1="-1.29672"
              x2="6.63938"
              y2="4.92851"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F79CB" />
              <stop offset="1" stopColor="#AF51C5" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_525"
              x1="0.974391"
              y1="-0.126442"
              x2="8.80649"
              y2="12.036"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F79CB" />
              <stop offset="1" stopColor="#AF51C5" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1_525"
              x1="25.2987"
              y1="29.9699"
              x2="25.8323"
              y2="36.1961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F79CB" />
              <stop offset="1" stopColor="#AF51C5" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_1_525"
              x1="32.2401"
              y1="19.0681"
              x2="40.0835"
              y2="31.2237"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F79CB" />
              <stop offset="1" stopColor="#AF51C5" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_1_525"
              x1="32.24"
              y1="-0.125467"
              x2="40.0799"
              y2="12.028"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F79CB" />
              <stop offset="1" stopColor="#AF51C5" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_1_525"
              x1="25.2994"
              y1="-1.29724"
              x2="25.8328"
              y2="4.92932"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F79CB" />
              <stop offset="1" stopColor="#AF51C5" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_1_525"
              x1="6.10404"
              y1="29.9696"
              x2="6.63753"
              y2="36.1963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F79CB" />
              <stop offset="1" stopColor="#AF51C5" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_1_525"
              x1="0.972991"
              y1="19.0698"
              x2="8.81281"
              y2="31.2234"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F79CB" />
              <stop offset="1" stopColor="#AF51C5" />
            </linearGradient>
          </defs>
        </svg>
        <LogoName>Zone.</LogoName>
      </LogoLink>
    </LogoBox>
  );
}