import { beach, rajat } from "../assets"
import { TypeAnimation } from "react-type-animation"
import { useState } from "react"
import { socialMedia } from "../constants"
import { styles } from "../styles"

const Hero = () => {
  return (
    <>
      <span id="home" className="absolute" />
      <section className={styles.sectionMargin}>
        <div className="relative top-[137px] text-white flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="mx-5 mt-15 flex flex-col items-center lg:items-start">
            <h4 className={styles.heroSubText}>Welcome To My World</h4>
            <h1 className={styles.heroHeadText}>
              Hi, I'm <span className="text-rose-600">Rajat</span>
            </h1>
            <div className={styles.heroProfileText}>
              <TypeAnimation
                sequence={[
                  1000,
                  "Frontend Developer",
                  1000,
                  "Competitive Coder",
                  1000,
                  "UX/UI Developer",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                deletionSpeed={60}
                // omitDeletionAnimation
                repeat={Infinity}
              />
            </div>
            <div className={styles.sectionText}>
              Let's connect! I'm a passionate developer eager to collaborate,
              innovate, and build amazing experiences. Reach out and say hello!
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-between">
              <button className="cursor-pointer hover:scale-[103%] mt-7 inline-flex h-12 text-[18px] shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Download CV
              </button>
              <a href="#" className="">
                <svg
                  className=""
                  width="150"
                  height="150"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g className="animate-Spin origin-center">
                    <path
                      d="M157.631 90C157.631 127.352 127.352 157.632 89.9995 157.632C52.6476 157.632 22.3678 127.352 22.3678 90C22.3678 52.6481 52.6476 22.3683 89.9995 22.3683C127.352 22.3683 157.631 52.6481 157.631 90Z"
                      fill="#080808"
                      stroke="#FFB646"
                      strokeWidth="2.08333"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M43.7883 74.5846C43.5199 75.4042 43.1104 76.0554 42.5597 76.5383C42.0037 77.0107 41.3536 77.3039 40.6095 77.4181C39.8574 77.5296 39.0598 77.4474 38.2165 77.1713C37.3654 76.8927 36.6735 76.4873 36.141 75.9552C35.6005 75.4205 35.2458 74.7983 35.0767 74.0886C34.9103 73.3709 34.9612 72.6023 35.2295 71.7827C35.5469 70.8133 36.0426 70.0987 36.7167 69.6388C37.3908 69.1789 38.1805 69.0055 39.0858 69.1186L38.6292 70.5135C38.1123 70.4665 37.6527 70.5778 37.2503 70.8474C36.8479 71.1171 36.5474 71.5553 36.3487 72.1622C36.0778 72.9897 36.1474 73.7367 36.5574 74.4032C36.9596 75.0671 37.6532 75.5603 38.6384 75.8828C39.6156 76.2027 40.4627 76.2139 41.1796 75.9163C41.8965 75.6188 42.3905 75.0562 42.6614 74.2287C42.86 73.6219 42.8847 73.0934 42.7354 72.6431C42.5862 72.1929 42.2971 71.8365 41.8682 71.5739L42.3249 70.179C43.0903 70.6128 43.6049 71.2132 43.8687 71.9801C44.1324 72.7471 44.1056 73.6152 43.7883 74.5846Z"
                      fill="white"
                    ></path>
                    <path
                      d="M50.1726 61.9256C49.6756 62.6305 49.0849 63.1374 48.4004 63.4462C47.7159 63.7551 46.9941 63.8651 46.2348 63.7763C45.4688 63.6826 44.7232 63.3802 43.998 62.8689C43.2728 62.3576 42.7408 61.7594 42.4021 61.0741C42.0566 60.3841 41.9143 59.6648 41.9752 58.9163C42.0362 58.1679 42.3151 57.4412 42.812 56.7363C43.309 56.0315 43.8997 55.5246 44.5842 55.2158C45.2687 54.9069 45.9915 54.8027 46.7528 54.9031C47.512 54.9919 48.2542 55.292 48.9794 55.8032C49.7046 56.3145 50.24 56.9152 50.5855 57.6052C50.929 58.2837 51.0703 58.9972 51.0094 59.7456C50.9484 60.4941 50.6695 61.2208 50.1726 61.9256ZM49.2067 61.2447C49.5508 60.7567 49.741 60.2567 49.7774 59.7446C49.8185 59.2257 49.7074 58.7212 49.4441 58.2312C49.1808 57.7411 48.7679 57.2978 48.2053 56.9012C47.6428 56.5046 47.0865 56.2646 46.5365 56.1812C45.9865 56.0979 45.474 56.1627 44.9991 56.3758C44.529 56.5821 44.1219 56.9293 43.7779 57.4173C43.4338 57.9053 43.2412 58.4087 43.2001 58.9276C43.1589 59.4465 43.27 59.951 43.5333 60.441C43.8014 60.9242 44.2167 61.3642 44.7793 61.7608C45.3418 62.1574 45.8957 62.4008 46.4409 62.4909C46.9909 62.5743 47.5034 62.5094 47.9783 62.2963C48.4532 62.0832 48.8627 61.7327 49.2067 61.2447Z"
                      fill="white"
                    ></path>
                    <path
                      d="M57.1532 53.6456L51.7944 46.7785L52.8343 45.967L60.3121 48.4499L56.2777 43.28L57.3175 42.4685L62.6763 49.3356L61.6365 50.1471L54.1587 47.6642L58.1931 52.8341L57.1532 53.6456Z"
                      fill="white"
                    ></path>
                    <path
                      d="M70.5729 45.1508L67.6243 38.1023L65.248 39.0964L64.835 38.1092L70.793 35.6168L71.206 36.604L68.8412 37.5933L71.7898 44.6418L70.5729 45.1508Z"
                      fill="white"
                    ></path>
                    <path
                      d="M78.8716 42.2432L80.7576 33.1533L82.1851 32.9397L86.6248 41.083L85.2465 41.2892L84.1931 39.2953L80.6734 39.822L80.2499 42.0369L78.8716 42.2432ZM80.8879 38.733L83.6692 38.3168L81.6911 34.599L80.8879 38.733Z"
                      fill="white"
                    ></path>
                    <path
                      d="M96.3093 41.6882C95.4534 41.5795 94.7363 41.3002 94.1579 40.8504C93.5887 40.3935 93.1778 39.8103 92.925 39.1008C92.6734 38.3831 92.6034 37.584 92.7153 36.7034C92.8282 35.8146 93.0957 35.0584 93.5178 34.4346C93.9409 33.8026 94.4851 33.3366 95.1504 33.0364C95.824 32.7373 96.5887 32.6421 97.4445 32.7508C98.4568 32.8794 99.2525 33.2313 99.8317 33.8066C100.411 34.382 100.73 35.125 100.79 36.0357L99.3337 35.8507C99.2823 35.3341 99.0861 34.9036 98.7452 34.5592C98.4042 34.2149 97.9169 34.0025 97.2832 33.922C96.4191 33.8122 95.6984 34.0217 95.1212 34.5505C94.5449 35.071 94.1915 35.8456 94.0608 36.8743C93.9312 37.8948 94.0803 38.7291 94.5081 39.3772C94.9359 40.0252 95.5818 40.4041 96.4459 40.5139C97.0796 40.5944 97.6035 40.5188 98.0176 40.287C98.4317 40.0553 98.7272 39.704 98.9041 39.2331L100.361 39.4181C100.079 40.252 99.5866 40.871 98.8831 41.275C98.1795 41.679 97.3216 41.8168 96.3093 41.6882Z"
                      fill="white"
                    ></path>
                    <path
                      d="M108.074 44.5801L110.985 37.5128L108.603 36.5314L109.01 35.5415L114.984 38.0021L114.576 38.992L112.205 38.0153L109.294 45.0827L108.074 44.5801Z"
                      fill="white"
                    ></path>
                    <path
                      d="M123.795 54.407L130.354 48.6754L131.378 49.8467L128.952 55.883L135.251 54.2787L136.274 55.45L129.715 61.1815L128.847 60.1883L133.692 55.9552L128.032 57.3643L127.361 56.596L129.498 51.1752L124.663 55.4002L123.795 54.407Z"
                      fill="white"
                    ></path>
                    <path
                      d="M133.257 67.1066L141.164 63.4523L143.487 68.4788L142.516 68.9278L140.746 65.0986L138.283 66.2366L139.897 69.727L138.948 70.1655L137.335 66.6752L134.782 67.855L136.552 71.6842L135.58 72.1332L133.257 67.1066Z"
                      fill="white"
                    ></path>
                    <path
                      d="M137.181 86.6396L138.426 86.6423L138.411 93.4738L137.167 93.4711L137.181 86.6396Z"
                      fill="white"
                    ></path>
                    <path
                      d="M133.683 111.594C134.061 110.818 134.556 110.229 135.168 109.826C135.783 109.434 136.468 109.232 137.221 109.221C137.981 109.213 138.761 109.404 139.558 109.792C140.364 110.185 140.994 110.681 141.449 111.282C141.912 111.885 142.178 112.55 142.248 113.277C142.315 114.011 142.16 114.766 141.782 115.541C141.335 116.458 140.746 117.099 140.015 117.462C139.284 117.826 138.477 117.89 137.596 117.654L138.239 116.334C138.745 116.451 139.215 116.404 139.651 116.192C140.087 115.979 140.445 115.586 140.724 115.012C141.106 114.229 141.139 113.479 140.824 112.763C140.516 112.05 139.896 111.466 138.964 111.012C138.04 110.561 137.202 110.434 136.45 110.631C135.699 110.828 135.133 111.318 134.751 112.101C134.471 112.675 134.375 113.195 134.461 113.662C134.547 114.128 134.785 114.521 135.174 114.84L134.531 116.16C133.832 115.625 133.404 114.96 133.247 114.164C133.091 113.368 133.236 112.511 133.683 111.594Z"
                      fill="white"
                    ></path>
                    <path
                      d="M125.614 123.254C126.204 122.624 126.859 122.203 127.58 121.991C128.3 121.78 129.031 121.77 129.771 121.962C130.517 122.161 131.214 122.563 131.862 123.169C132.51 123.776 132.955 124.442 133.197 125.167C133.444 125.898 133.486 126.631 133.323 127.364C133.159 128.097 132.783 128.779 132.194 129.409C131.604 130.039 130.949 130.46 130.228 130.672C129.508 130.884 128.777 130.887 128.037 130.683C127.297 130.491 126.602 130.091 125.954 129.485C125.306 128.878 124.858 128.21 124.611 127.478C124.364 126.759 124.322 126.032 124.485 125.299C124.649 124.566 125.025 123.884 125.614 123.254ZM126.478 124.062C126.07 124.498 125.812 124.967 125.706 125.47C125.594 125.978 125.634 126.493 125.828 127.015C126.021 127.537 126.369 128.033 126.872 128.503C127.375 128.974 127.893 129.288 128.427 129.446C128.96 129.605 129.477 129.611 129.977 129.465C130.471 129.325 130.922 129.037 131.33 128.601C131.738 128.165 131.998 127.693 132.111 127.184C132.223 126.676 132.182 126.161 131.989 125.639C131.789 125.123 131.439 124.63 130.936 124.16C130.433 123.689 129.918 123.372 129.39 123.208C128.856 123.049 128.339 123.043 127.84 123.189C127.34 123.335 126.886 123.626 126.478 124.062Z"
                      fill="white"
                    ></path>
                    <path
                      d="M117.563 130.504L121.936 138.038L120.795 138.7L113.725 135.221L117.017 140.893L115.876 141.555L111.503 134.021L112.644 133.358L119.714 136.838L116.422 131.166L117.563 130.504Z"
                      fill="white"
                    ></path>
                    <path
                      d="M103.11 137.094L105.066 144.482L107.557 143.822L107.831 144.857L101.586 146.511L101.312 145.476L103.79 144.819L101.834 137.431L103.11 137.094Z"
                      fill="white"
                    ></path>
                    <path
                      d="M94.5093 138.832L91.3962 147.578L89.9528 147.594L86.6703 138.92L88.0639 138.904L88.8342 141.024L92.3929 140.984L93.1157 138.848L94.5093 138.832ZM92.0312 142.033L89.2191 142.065L90.6695 146.018L92.0312 142.033Z"
                      fill="white"
                    ></path>
                    <path
                      d="M77.1843 137.002C78.0177 137.224 78.6908 137.597 79.2035 138.121C79.7061 138.65 80.0349 139.283 80.1901 140.02C80.3432 140.764 80.3052 141.566 80.0762 142.423C79.8451 143.289 79.4785 144.002 78.9766 144.563C78.4725 145.133 77.8707 145.521 77.1713 145.73C76.4638 145.936 75.6933 145.927 74.8599 145.705C73.8742 145.441 73.133 144.986 72.6364 144.338C72.1397 143.69 71.9228 142.911 71.9857 142.001L73.4041 142.38C73.3858 142.898 73.5224 143.351 73.814 143.738C74.1055 144.125 74.5598 144.401 75.1769 144.566C76.0183 144.791 76.7605 144.68 77.4035 144.233C78.0443 143.795 78.4984 143.075 78.766 142.073C79.0314 141.079 78.9956 140.233 78.6588 139.533C78.3219 138.834 77.7327 138.372 76.8913 138.147C76.2742 137.982 75.745 137.987 75.3036 138.161C74.8622 138.335 74.5223 138.643 74.2838 139.086L72.8654 138.707C73.2563 137.919 73.8274 137.372 74.5787 137.066C75.3301 136.76 76.1986 136.739 77.1843 137.002Z"
                      fill="white"
                    ></path>
                    <path
                      d="M65.8866 132.522L62.0282 139.116L64.2512 140.417L63.7107 141.34L58.1373 138.079L58.6777 137.155L60.8899 138.45L64.7483 131.856L65.8866 132.522Z"
                      fill="white"
                    ></path>
                    <path
                      d="M51.6575 120.629L44.3842 125.419L43.5287 124.121L46.7486 118.469L40.2915 119.206L39.436 117.907L46.7093 113.116L47.4348 114.218L42.0629 117.756L47.8604 117.126L48.4216 117.978L45.5706 123.059L50.9321 119.527L51.6575 120.629Z"
                      fill="white"
                    ></path>
                    <path
                      d="M44.0233 106.773L35.696 109.316L34.0791 104.022L35.1022 103.71L36.3339 107.743L38.9273 106.95L37.8045 103.275L38.8038 102.969L39.9266 106.645L42.6151 105.824L41.3833 101.791L42.4064 101.479L44.0233 106.773Z"
                      fill="white"
                    ></path>
                    <path
                      d="M38.2513 95.1897L37.1449 95.2462L36.8866 90.1867L37.993 90.1302L38.2513 95.1897Z"
                      fill="white"
                    ></path>
                  </g>
                  <g>
                    <path
                      d="M89.9999 123.016C108.234 123.016 123.016 108.234 123.016 89.9999C123.016 71.7654 108.234 56.9834 89.9999 56.9834C71.7654 56.9834 56.9834 71.7654 56.9834 89.9999C56.9834 108.234 71.7654 123.016 89.9999 123.016Z"
                      fill="#FFB646"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M89.0556 105.833H88.7517C88.7517 102.454 87.0878 100.016 84.9217 98.2993C82.7319 96.5641 80.0806 95.6169 78.3337 95.2864L78.721 93.2394C80.7295 93.6194 83.7111 94.6819 86.2156 96.6665C87.1483 97.4056 88.0215 98.2792 88.7523 99.2971V74.1667H90.8356V99.7399C91.622 98.5303 92.6098 97.5106 93.6751 96.6665C96.1795 94.6819 99.1612 93.6194 101.17 93.2394L101.557 95.2864C99.8101 95.6169 97.1587 96.5641 94.969 98.2993C92.8028 100.016 91.1389 102.454 91.1389 105.833H90.835H89.0556Z"
                      fill="#080808"
                      fillOpacity="0.9"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className={`mt-15 ${styles.sectionSubText}`}>
              Connect With Me
            </div>
            <ul className="list-none bg-primary mt-2 gap-5 flex flex-wrap justify-between">
              {socialMedia.map((ele) => {
                const [isSocialMediaHovered, setIsSocialMediaHovered] =
                  useState(false)
                return (
                  <div
                    key={ele.id}
                    className=""
                    onMouseEnter={() => setIsSocialMediaHovered(true)}
                    onMouseLeave={() => setIsSocialMediaHovered(false)}
                  >
                    <li className="cursor-pointer transition-all h-12 xs:h-15 md:h-18 lg:h-15 w-12 xs:w-15 md:w-18 lg:w-15 bg-[#0c102b] flex items-center justify-center shadow-[inset_1px_4px_2px_-3px_rgba(0,0,0,0.7),inset_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)] p-6 rounded-lg hover:text-rose-600 hover:-translate-y-1">
                      <a href="#" target="_blank" className="block">
                        {ele.icon}
                      </a>
                    </li>
                    {isSocialMediaHovered && (
                      <div className="absolute text-rose-600 mt-2 text-center text-[12px] xs:text-[14px] md:text-[16px] font-semibold">
                        {ele.title}
                      </div>
                    )}
                  </div>
                )
              })}
            </ul>
          </div>
          <div
            className="flex justify-center mx-5 mt-15 max-w-130 max-h-150 rounded-xl bg-cover"
            style={{
              backgroundImage: `url(${beach})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={rajat} alt="rajat" className="object-contain" />
          </div>
        </div>

        <hr className="mt-50 mx-5 border-b-[2px] border-white" />
      </section>
    </>
  )
}

export default Hero

//   <section className={`relative w-full h-[10000px] mx-auto -mb-[130px] z-10`}>
//     <div className="absolute inset-0 top-[220px] w-[232px] h-[450px] flex items-center justify-start pl-[40px]">
//       {/* <AnimatePresence> */}
//       <motion.ul
//         variants={staggerContainer()}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.25 }}
//         className="w-40 flex flex-col gap-10"
//       >
//         {socialMedia?.map(({ id, title, icon }, index) => {
//           const [isSocialIconHovered, setIsSocialIconHovered] =
//             useState(false) // State for hover
//           return (
//             <motion.li
//               variants={slideIn("left", "tween", index * 0.5, 1)}
//               key={id}
//               className="flex items-center justify-start gap-3"
//             >
//               <motion.div
//                 whileHover={{ rotate: 360, scale: 1.3 }}
//                 transition={{ duration: 0.3, ease: "linear" }}
//                 onMouseEnter={() => setIsSocialIconHovered(true)}
//                 onMouseLeave={() => setIsSocialIconHovered(false)}
//               >
// <a href={"#"} target="_blank" className="object-cover">
//   <img
//     src={icon}
//     alt={`${title}`}
//     className={`h-9 w-9 object-contain ${
//       id === "twitter" ? "bg-white clipPath" : ""
//     }`}
//   />
// </a>
//               </motion.div>
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   x: 150,
//                 }}
//                 animate={{
//                   opacity: isSocialIconHovered ? 1 : 0,
//                   x: isSocialIconHovered ? 0 : 150,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   ease: "easeInOut",
//                 }}
//                 className="flex items-center justify-start bg-transparent text-indigo-600"
//               >
//                 <div
//                   data-popper-arrow
//                   className="absolute rotate-[-90deg] border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-indigo-600"
//                 ></div>
//                 <div className="ml-[10px] text-sm rounded-lg border-2 border-indigo-600 shadow-xs">
//                   <div className="px-3 py-2">
//                     <h3 className="font-[500]">{title}</h3>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.li>
//           )
//         })}
//       </motion.ul>
//       {/* </AnimatePresence> */}
//     </div>

//     <div
//       className={`absolute border py-[40px] inset-0 top-[123px] max-w-7xl mx-auto ${styles.paddingX} flex items-start justify-between gap-5`}
//     >
//       <div className="flex flex-col justify-center items-center mt-5">
//         <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//         <div className="w-1 sm:h-[500px] h-40 violet-gradient" />
//       </div>

//       <div className="z-10">
//         <h1 className={`${styles.heroHeadText} text-white`}>
//           Hi, I'm <span className="text-[#915EFF]">Rajat</span>
//         </h1>
//         <p
//           className={`${styles.heroSubText} mt-2 tracking-[8px] text-white-100`}
//         >
//           {/* I develop 3D visuals, user <br className="sm:block hidden" />
//           interfaces and web applications */}
//           Frontend Developer
//         </p>
//         <div className="mt-7 w-[600px] overflow-hidden text-[25px] whitespace-wrap">
//           <p>
// Explore my work, and let's connect to create something amazing
// together!
//           </p>
//         </div>
//         <div className="mt-5 w-[500px] flex gap-5">
//           <div className="w-[400px] h-[350px] object-cover">
//             <img src={welcome} alt="welcome" />
//           </div>
//           <div className="flex flex-col gap-3 items-center justify-evenly">
//             <motion.div
//               variants={buttonVariant()}
//               initial="hidden"
//               whileHover="show"
//             >
//               <button className="mt-5 rounded-md px-3.5 py-2 text-[18px] overflow-hidden relative group cursor-pointer border-2 font-medium bg-indigo-600 border-indigo-600 hover:bg-transparent">
//                 <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
//                 <span className="relative text-center text-white transition duration-300 group-hover:text-indigo-600 ease">
//                   Resume
//                 </span>
//               </button>
//             </motion.div>
//             <motion.a
//               href="/#contact"
//               animate={{
//                 x: [200, 0],
//                 opacity: [0, 1],
//               }}
//               transition={{
//                 duration: 2,
//               }}
//             >
//               <motion.div
//                 // animate={{ rotate: [0, 360] }}
//                 // transition={{
//                 //   duration: 5,
//                 //   repeat: Infinity,
//                 //   ease: "linear",
//                 // }}
//                 // whileHover={{
//                 //   rotate: [0, 360],
//                 //   transition: {
//                 //     duration: 2,
//                 //     repeat: Infinity,
//                 //     ease: "linear",
//                 //   },
//                 // }}
//                 // animate={{ rotate: 360 }} // Use state for rotation
//                 // transition={{
//                 //   duration: isHovered ? 1 : 5,
//                 //   repeat: Infinity,
//                 //   ease: "linear",
//                 // }}
//                 // onMouseEnter={() => {
//                 //   setIsHovered(true)
//                 //   console.log("Enter")
//                 // }}
//                 // onMouseLeave={() => {
//                 //   setIsHovered(false)
//                 //   console.log("Leave")
//                 // }}
//                 animate={{ rotate: rotation }} // Use rotation state
//                 transition={{ type: "tween", ease: "linear" }} // Smooth transition
//                 onMouseEnter={() => setIsHovered(true)} // Change hover state
//                 onMouseLeave={() => setIsHovered(false)} // Reset hover state
//               >
//                 <svg viewBox="0 0 200 200" width="150" height="150">
//                   <circle cx="100" cy="100" r="90" fill="pink" />
//                   <path
//                     id="innerCirclePath"
//                     fill="none"
//                     d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
//                   />
//                   <text>
//                     <textPath href="#innerCirclePath">Hire Now •</textPath>
//                   </text>
//                   <text>
//                     <textPath href="#innerCirclePath" startOffset="44%">
//                       Contact Me •
//                     </textPath>
//                   </text>
//                 </svg>
//                 <div className="absolute top-[50px] left-[48px]">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     width="50"
//                     height="50"
//                     fill="none"
//                     stroke="black"
//                     strokeWidth="2"
//                   >
//                     <line x1="6" y1="18" x2="18" y2="6" />
//                     <polyline points="9 6 18 6 18 15" />
//                   </svg>
//                 </div>
//               </motion.div>
//             </motion.a>
//           </div>
//         </div>
//       </div>
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           repeatType: "loop",
//         }}
//         className="mt-5 select-none flex flex-col items-start gap-[20px] justify-between"
//       >
//         <motion.div
//           className="w-[500px] flex items-end gap-2 justify-between"
//           animate={{ opacity: [0, 1] }}
//           transition={{ duration: 1 }}
//         >
//           <div className="w-full h-[100px] bg-transparent text-white border border-indigo-600 p-6 text-[18px] rounded-l-[20px] rounded-tr-[20px]">
// <TypeAnimation
//   sequence={[
//     1000,
//     "Looking for a talented Frontend Development expert ? ",
//     1000,
//     "I'm ready to take the projects to the next level. ",
//     1000,
//     "Portfolio highlights my innovative approach and commitment to excellence.",
//     1000,
//     "Experienced Frontend Development specialist available for hire. ",
//     1000,
//     "Feel free to contact me to discuss potential opportunities. ",
//     1000,
//   ]}
//   wrapper="span"
//   speed={40}
//   deletionSpeed={60}
//   // omitDeletionAnimation
//   repeat={Infinity}
// />
//           </div>
//           <img
//             className="w-[50px] h-[50px] rounded-full object-cover bg-[#dd4c62]"
//             src={man}
//             alt="man"
//           />
//         </motion.div>
//         {/* <div className="w-[850px] h-[550px] flex items-center justify-center">
//           <ComputersCanvas />
//           <AdventureBagCanvas />
//           <SpiderManCanvas />
//         </div> */}
//       </motion.div>

//       <div className="w-[1120px] h-[750px] absolute inset-0 top-[50px] left-[380px]">
//         {/* <SpiderManCanvas /> */}
//       </div>

//       <div className="absolute xs:bottom-32 bottom-28 w-full flex justify-center items-center">
//         {/* <div className="relative w-full flex justify-center items-center"> */}
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//           <motion.p
//             whileInView={{
//               y: [0, -2, 0, 2, 0],
//             }}
//             transition={{
//               duration: 1,
//               type: "spring",
//               repeat: Infinity,
//               repeatType: "loop",
//             }}
//             className="mt-2 -ml-8 font-medium text-[18px]"
//           >
//             Scroll Down
//           </motion.p>
//         </a>
//       </div>
//     </div>
//   </section>

/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="550"
          height="550"
          viewBox="0 0 550 550"
          fill="none"
          className="shadow-[inset_1px_4px_2px_-3px_rgba(0,0,0,0.7),inset_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)] py-10 rounded-lg"
        >
          <rect width="550" height="550" rx="50" fill="#E11D48" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#E11D48"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute top-10 left-3  "
        >
          <path
            d="M50 0 C60 30, 100 40, 70 50 C100 60, 60 70, 50 100 C40 70, 0 60, 30 50 C0 40, 40 30, 50 0 Z"
            fill="#0c102b"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#E11D48 "
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute bottom-10 right-3"
        >
          <path
            d="M50 0 C60 30, 100 40, 70 50 C100 60, 60 70, 50 100 C40 70, 0 60, 30 50 C0 40, 40 30, 50 0 Z"
            fill="#0c102b"
          />
        </svg> */
