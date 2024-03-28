function NavIcon({ className, children, ...props }) {
  return (
    <div className={`w-full ` + className} {...props}>
      {children}
    </div>
  );
}

export default NavIcon;

NavIcon.Dashboard = function Dashboard({ className, ...props }) {
  return (
    <NavIcon className={className} {...props}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" style={{ borderRadius: '0' }}>
        <g transform="translate(0.000000,800.000000) scale(0.100000,-0.100000)">
          <path d="M3535 7316 c-249 -48 -445 -232 -511 -481 -18 -68 -19 -168 -19 -2835 0 -2667 1 -2767 19 -2835 55 -206 207 -377 400 -450 110 -41 191 -47 626 -43 346 4 414 7 465 22 238 69 409 252 468 500 9 39 12 691 12 2811 0 2617 -1 2763 -18 2825 -65 239 -231 409 -462 476 -52 15 -117 18 -485 20 -321 2 -442 0 -495 -10z m773 -652 l22 -6 0 -2658 0 -2657 -31 -7 c-41 -8 -557 -8 -598 0 l-31 7 0 2658 c0 2523 1 2658 18 2662 26 7 594 8 620 1z" />
          <path d="M5905 5323 c-152 -23 -262 -79 -375 -192 -98 -99 -146 -184 -176 -316 -18 -76 -19 -159 -19 -1815 0 -1656 1 -1739 19 -1815 30 -132 78 -217 176 -316 93 -93 176 -143 290 -176 59 -16 109 -18 510 -18 495 0 501 1 636 66 190 93 318 269 354 489 7 45 10 598 8 1810 -3 1952 3 1782 -75 1940 -52 103 -169 221 -273 273 -141 71 -137 70 -615 73 -236 1 -443 0 -460 -3z m752 -666 c11 -11 11 -3303 0 -3314 -10 -10 -553 -17 -614 -8 l-43 6 0 1659 0 1659 23 4 c40 8 625 2 634 -6z" />
          <path d="M1244 3990 c-241 -32 -445 -191 -529 -414 -45 -119 -46 -158 -43 -1291 3 -982 5 -1075 21 -1130 74 -255 272 -431 538 -475 43 -8 204 -10 480 -7 357 3 422 6 474 21 203 59 374 223 440 420 43 128 46 241 42 1314 -4 1104 -1 1054 -76 1207 -96 195 -280 323 -506 355 -82 11 -752 11 -841 0z m756 -1654 l0 -995 -42 -6 c-62 -9 -605 -2 -615 8 -9 10 -17 1880 -8 1945 l6 42 330 0 329 0 0 -994z" />
        </g>
      </svg>
    </NavIcon>
  );
};

NavIcon.Roles = function Roles({ className, ...props }) {
  return (
    <NavIcon className={className} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" transform="scale(1.32)" style={{ fillRule: 'evenodd' }}>
        <path d="M 179.5,86.5 C 207.509,84.9124 227.675,96.5791 240,121.5C 249.981,151.89 241.815,176.057 215.5,194C 186.098,207.255 160.931,201.755 140,177.5C 123.234,148.599 126.734,122.432 150.5,99C 159.278,92.5807 168.944,88.414 179.5,86.5 Z M 180.5,115.5 C 204.146,114.646 215.646,125.979 215,149.5C 210.032,166.123 198.865,173.623 181.5,172C 164.338,166.833 156.838,155.333 159,137.5C 162.324,126.344 169.49,119.01 180.5,115.5 Z" />
        <path d="M 286.5,144.5 C 314.973,142.31 331.306,155.31 335.5,183.5C 334.287,203.875 323.953,217.041 304.5,223C 279.606,226.64 263.44,216.473 256,192.5C 253.064,167.974 263.231,151.974 286.5,144.5 Z M 292.5,172.5 C 303.994,172.831 308.161,178.497 305,189.5C 301.108,195.389 295.942,196.889 289.5,194C 280.976,185.462 281.976,178.295 292.5,172.5 Z" />
        <path d="M 176.5,223.5 C 207.897,221.594 236.23,229.761 261.5,248C 291.335,274.041 295.501,303.541 274,336.5C 250.627,362.092 221.461,374.425 186.5,373.5C 159.981,373.714 135.981,366.214 114.5,351C 82.9779,325.036 78.1446,294.87 100,260.5C 120.625,238.104 146.125,225.771 176.5,223.5 Z M 173.5,253.5 C 199.234,250.406 222.567,256.239 243.5,271C 259.062,284.291 261.895,299.791 252,317.5C 233.794,336.246 211.461,345.246 185,344.5C 166.173,344.66 149.007,339.494 133.5,329C 110.683,310.73 109.683,291.397 130.5,271C 143.317,261.252 157.65,255.419 173.5,253.5 Z" />
        <path d="M 303.5,241.5 C 329.964,239.65 350.464,249.65 365,271.5C 378.266,298.291 373.766,321.791 351.5,342C 336.061,354.528 318.728,358.528 299.5,354C 292.902,347.826 291.736,340.659 296,332.5C 297.41,331.213 298.91,330.046 300.5,329C 306.419,327.804 312.419,327.138 318.5,327C 332.922,322.745 341.589,313.245 344.5,298.5C 338.174,277.316 323.841,267.482 301.5,269C 292.771,263.1 290.938,255.6 296,246.5C 298.426,244.548 300.926,242.881 303.5,241.5 Z" />
      </svg>
    </NavIcon>
  );
};

NavIcon.AllCustomers = function AllCustomers({ className, ...props }) {
  return (
    <NavIcon className={className} {...props}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" style={{ borderRadius: '0' }}>
        <g transform="translate(0, 800) scale(0.1, -0.1)">
          <path d="M1891 7319 c-250 -27 -452 -126 -618 -303 -125 -134 -203 -280 -238 -447 -34 -161 -36 -310 -33 -2699 l3 -2365 22 -77 c55 -192 149 -354 279 -478 130 -124 274 -205 444 -252 l85 -23 2465 0 2465 0 43 23 c67 36 129 98 159 161 24 48 28 68 28 141 0 73 -4 93 -28 141 -48 98 -150 174 -248 186 l-49 6 0 331 0 331 70 17 c109 26 188 92 238 198 16 32 17 192 20 2030 3 2012 1 2170 -33 2329 -59 282 -265 537 -537 666 -94 44 -196 70 -333 84 -133 13 -4075 13 -4204 0z m4062 -659 c163 -11 206 -23 270 -80 55 -48 85 -106 97 -185 6 -45 10 -727 10 -1897 l0 -1828 -2177 0 c-1502 0 -2205 -3 -2266 -11 -49 -6 -118 -19 -153 -29 l-64 -17 0 1856 c0 1190 4 1881 10 1926 12 79 42 137 97 185 62 55 111 71 246 79 180 12 3754 12 3930 1z m47 -4995 l0 -335 -2038 2 -2037 3 -67 33 c-81 40 -139 102 -169 181 -29 78 -24 194 13 266 26 51 93 121 139 146 72 38 36 38 2132 38 l2027 1 0 -335z" />
          <path d="M2903 5986 c-85 -27 -160 -92 -204 -178 -33 -64 -38 -185 -10 -259 30 -79 88 -141 169 -181 l67 -33 1075 0 1075 0 67 33 c81 40 139 102 169 181 28 74 23 195 -10 259 -34 66 -96 128 -160 159 l-56 28 -1070 2 c-860 1 -1078 -1 -1112 -11z" />
          <path d="M2932 4660 c-105 -22 -204 -106 -243 -209 -28 -74 -23 -195 10 -259 34 -66 96 -128 160 -159 l56 -28 1085 0 1085 0 56 28 c64 31 126 93 160 159 33 64 38 185 10 259 -30 79 -88 141 -169 181 l-67 33 -1050 2 c-577 0 -1069 -3 -1093 -7z" />
        </g>
      </svg>
    </NavIcon>
  );
};

NavIcon.AssignedCustomers = function AssignedCustomers({ className, ...props }) {
  return (
    <NavIcon className={className} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 965 965" style={{ fillRule: 'evenodd', borderRadius: '0' }}>
        <path d="M 432.5,34.5 C 446.226,34.0734 459.893,34.5734 473.5,36C 491.867,43.2217 501.533,56.7217 502.5,76.5C 500.789,98.7685 489.122,112.602 467.5,118C 364.418,118.812 277.584,156.312 207,230.5C 137.234,310.492 108.901,403.492 122,509.5C 141.207,621.185 199.707,705.018 297.5,761C 387.54,807.349 480.54,814.349 576.5,782C 680.833,741.002 751,667.502 787,561.5C 797.406,525.588 802.739,488.922 803,451.5C 806.651,435.692 816.151,425.192 831.5,420C 855.913,414.457 873.413,422.957 884,445.5C 886.384,456.717 887.051,468.05 886,479.5C 876.913,614.869 818.746,723.369 711.5,805C 601.171,881.662 480.504,903.996 349.5,872C 225.356,836.179 134.19,760.679 76,645.5C 28.4404,542.219 21.4404,436.219 55,327.5C 100.515,197.984 187.348,108.484 315.5,59C 353.56,45.6227 392.56,37.456 432.5,34.5 Z" />
        <path d="M 722.5,34.5 C 787.054,30.8549 835.887,56.5215 869,111.5C 896.409,169.805 891.076,224.805 853,276.5C 757.167,372.333 661.333,468.167 565.5,564C 545.235,582.308 522.235,596.308 496.5,606C 448.271,622.28 399.937,638.28 351.5,654C 312.965,660.152 285.465,645.652 269,610.5C 264.462,597.768 263.462,584.768 266,571.5C 283.141,516.744 301.474,462.41 321,408.5C 330.419,389.324 342.085,371.657 356,355.5C 450.5,261 545,166.5 639.5,72C 663.488,51.3388 691.155,38.8388 722.5,34.5 Z M 730.5,118.5 C 761.038,116.844 783.205,129.511 797,156.5C 807.762,187.55 800.596,213.717 775.5,235C 763.773,232.31 752.773,227.643 742.5,221C 714.567,202.724 695.233,177.724 684.5,146C 693.003,136.511 703.003,128.844 714.5,123C 719.874,121.16 725.207,119.66 730.5,118.5 Z M 619.5,210.5 C 641.693,248.525 672.026,278.359 710.5,300C 641.806,369.028 572.806,437.694 503.5,506C 498.833,509.333 494.167,512.667 489.5,516C 484.341,518.412 479.341,521.079 474.5,524C 449.289,532.963 423.955,541.297 398.5,549C 388.922,539.926 379.922,530.426 371.5,520.5C 379.035,497.061 386.868,473.728 395,450.5C 400.226,437.705 407.226,426.039 416,415.5C 483.592,347.074 551.426,278.74 619.5,210.5 Z" />
      </svg>
    </NavIcon>
  );
};

NavIcon.Locked = function Locked({ className, ...props }) {
  return (
    <NavIcon className={className} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 950 950"
        style={{ fillRule: 'evenodd', scale: '1.1', borderRadius: '0' }}
      >
        <path d="M 454.5,75.5 C 547.487,77.0944 617.32,117.761 664,197.5C 677.931,224.556 686.598,253.222 690,283.5C 691.106,305.818 691.773,328.151 692,350.5C 740.872,363.782 775.205,393.782 795,440.5C 803.338,468.204 807.004,496.537 806,525.5C 806.846,582.508 806.513,639.508 805,696.5C 802.176,755.011 775.342,798.511 724.5,827C 699.75,838.151 673.75,843.818 646.5,844C 522.167,844.667 397.833,844.667 273.5,844C 218.431,844.714 174.598,823.214 142,779.5C 123.697,750.973 114.697,719.64 115,685.5C 114.333,625.167 114.333,564.833 115,504.5C 114.674,439.951 142.507,392.118 198.5,361C 208.347,356.496 218.514,352.996 229,350.5C 223.823,297.203 232.823,246.537 256,198.5C 299.979,122.076 366.146,81.0757 454.5,75.5 Z M 449.5,153.5 C 513.697,152.309 562.197,178.976 595,233.5C 605.261,253.283 611.261,274.283 613,296.5C 613.5,312.497 613.667,328.497 613.5,344.5C 511.5,344.5 409.5,344.5 307.5,344.5C 307.333,326.83 307.5,309.164 308,291.5C 317.064,226.781 352.231,183.281 413.5,161C 425.39,157.302 437.39,154.802 449.5,153.5 Z M 277.5,422.5 C 399.5,422.333 521.5,422.5 643.5,423C 676.701,420.696 701.868,433.529 719,461.5C 723.696,471.64 726.362,482.306 727,493.5C 728.996,561.166 728.996,628.833 727,696.5C 724.287,730.527 706.787,752.693 674.5,763C 666.542,764.328 658.542,765.328 650.5,766C 523.833,767.998 397.167,767.998 270.5,766C 240.238,766.627 217.405,754.127 202,728.5C 197.31,719.407 194.643,709.741 194,699.5C 191.06,633.188 190.727,566.855 193,500.5C 193.094,463.78 210.261,439.28 244.5,427C 255.578,425.013 266.578,423.513 277.5,422.5 Z" />
        <path d="M 455.5,517.5 C 480.146,517.318 494.646,529.318 499,553.5C 499.943,583.197 499.609,612.864 498,642.5C 488.75,667.375 471.25,676.209 445.5,669C 431.536,663.041 423.703,652.541 422,637.5C 421.047,606.799 421.38,576.132 423,545.5C 428.84,530.147 439.673,520.813 455.5,517.5 Z" />
      </svg>
    </NavIcon>
  );
};

NavIcon.CompanyInfo = function CompanyInfo({ className, ...props }) {
  return (
    <NavIcon className={className} {...props}>
      <svg viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0' }}>
        <path d="M11,2 C12.6568542,2 14,3.34314575 14,5 L14.0000889,6.17067428 C14.3128427,6.06014282 14.6493978,6 15,6 L19,6 C20.6568542,6 22,7.34314575 22,9 L22,19 C22,20.6568542 20.6568542,22 19,22 L5,22 C3.34314575,22 2,20.6568542 2,19 L2,5 C2,3.34314575 3.34314575,2 5,2 L11,2 Z M11,4 L5,4 C4.44771525,4 4,4.44771525 4,5 L4,19 C4,19.5522847 4.44771525,20 5,20 L12,20 L12,5 C12,4.44771525 11.5522847,4 11,4 Z M19,8 L15,8 C14.4477153,8 14,8.44771525 14,9 L14,20 L19,20 C19.5522847,20 20,19.5522847 20,19 L20,9 C20,8.44771525 19.5522847,8 19,8 Z M9,14 C9.55228475,14 10,14.4477153 10,15 C10,15.5522847 9.55228475,16 9,16 L7,16 C6.44771525,16 6,15.5522847 6,15 C6,14.4477153 6.44771525,14 7,14 L9,14 Z M18,14 C18.5522847,14 19,14.4477153 19,15 C19,15.5522847 18.5522847,16 18,16 L16,16 C15.4477153,16 15,15.5522847 15,15 C15,14.4477153 15.4477153,14 16,14 L18,14 Z M9,10 C9.55228475,10 10,10.4477153 10,11 C10,11.5522847 9.55228475,12 9,12 L7,12 C6.44771525,12 6,11.5522847 6,11 C6,10.4477153 6.44771525,10 7,10 L9,10 Z M18,10 C18.5522847,10 19,10.4477153 19,11 C19,11.5522847 18.5522847,12 18,12 L16,12 C15.4477153,12 15,11.5522847 15,11 C15,10.4477153 15.4477153,10 16,10 L18,10 Z M9,6 C9.55228475,6 10,6.44771525 10,7 C10,7.55228475 9.55228475,8 9,8 L7,8 C6.44771525,8 6,7.55228475 6,7 C6,6.44771525 6.44771525,6 7,6 L9,6 Z"></path>
      </svg>
    </NavIcon>
  );
};

NavIcon.Profile = function Profile({ className, ...props }) {
  return (
    <NavIcon className={className} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g transform="translate(0, 512) scale(0.1, -0.1)">
          <path d="M2315 5109 c-800 -83 -1501 -518 -1927 -1196 -487 -774 -516 -1777 -75 -2578 200 -364 487 -676 841 -913 238 -159 600 -311 876 -366 214 -43 295 -51 530 -51 236 0 333 10 532 51 880 184 1615 842 1898 1702 92 278 125 491 125 802 0 301 -32 513 -116 775 -124 390 -330 728 -622 1024 -399 404 -893 653 -1462 737 -123 18 -478 26 -600 13z m446 -480 c404 -41 794 -200 1104 -450 542 -437 834 -1133 765 -1820 -44 -433 -235 -872 -510 -1172 l-53 -58 -46 88 c-67 129 -123 206 -229 315 -180 186 -400 307 -662 364 -76 17 -134 19 -570 19 -436 0 -494 -2 -570 -19 -106 -23 -234 -68 -325 -114 -238 -119 -468 -354 -579 -590 -16 -34 -32 -62 -35 -62 -3 1 -40 41 -81 90 -358 426 -535 994 -480 1541 73 719 510 1350 1154 1664 349 171 744 243 1117 204z m261 -3203 c309 -60 550 -282 631 -583 14 -53 18 -50 -168 -143 -233 -116 -468 -184 -724 -210 -417 -42 -863 53 -1229 263 -72 41 -74 42 -68 75 17 110 113 279 212 377 130 127 245 185 459 229 11 2 198 4 417 5 304 1 413 -2 470 -13z" />
          <path d="M2397 3984 c-167 -30 -333 -118 -458 -243 -344 -344 -344 -897 1 -1241 345 -345 895 -345 1240 0 345 345 345 895 0 1240 -206 207 -494 296 -783 244z m327 -502 c91 -42 149 -100 194 -190 35 -72 37 -81 37 -172 0 -91 -2 -100 -37 -172 -45 -91 -103 -147 -196 -191 -61 -29 -76 -32 -162 -32 -86 0 -101 3 -162 32 -93 44 -151 100 -196 191 -35 72 -37 81 -37 171 0 87 3 102 32 163 40 85 97 147 172 186 78 42 122 52 213 48 61 -3 92 -11 142 -34z" />
        </g>
      </svg>
    </NavIcon>
  );
};
