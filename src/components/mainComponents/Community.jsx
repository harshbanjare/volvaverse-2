import React, { useEffect } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import "../../styles/community.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Community = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box px="100px" pt="70px" className="all-cnt comm-main" zIndex="10">
      <Box zIndex="10">
        <Text
          color="#3B3B3B"
          fontFamily="Bebas Neue"
          fontWeight="400"
          lineHeight="normal"
          fontSize="4.5rem"
          className="all-title"
          mb="20px"
          data-aos="zoom-out-right"
        >
          COMMUNITY
        </Text>
        <Box position="relative" zIndex="10">
          <Text
            color="transparent"
            fontFamily="Bebas Neue"
            fontWeight="400"
            lineHeight="100%"
            fontSize="22.8rem"
            className="trs-txt"
            textAlign="center"
          >
            VOLAVERSE
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px="85px"
            position="absolute"
            width="100dvw"
            className="cm-sc"
            zIndex="10"
          >
            {/* line */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="158"
              height="4"
              viewBox="0 0 158 4"
              fill="none"
            >
              <path
                d="M2 2H156"
                stroke="#3B3B3B"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>

            {/* link circle */}
            <a href="https://www.youtube.com/@volaverse123" target="_blank">
              <Box
                borderRadius="50%"
                border="2px solid #3B3B3B"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="25px"
                className="cm-circle"
                zIndex="10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 104 104"
                  fill="none"
                >
                  <path
                    d="M92.6813 30.5335C91.8667 26.0373 87.9854 22.763 83.4812 21.7408C76.741 20.3113 64.2667 19.2891 50.7701 19.2891C37.2816 19.2891 24.6076 20.3113 17.8594 21.7408C13.3632 22.763 9.47395 25.8297 8.65937 30.5335C7.8368 35.6446 7.02222 42.8002 7.02222 52.0002C7.02222 61.2002 7.8368 68.3557 8.85902 73.4668C9.68159 77.963 13.5628 81.2373 18.059 82.2595C25.2146 83.6891 37.4812 84.7113 50.9778 84.7113C64.4743 84.7113 76.741 83.6891 83.8965 82.2595C88.3927 81.2373 92.274 78.1707 93.0965 73.4668C93.9111 68.3557 94.9333 60.9925 95.141 52.0002C94.7257 42.8002 93.7035 35.6446 92.6813 30.5335ZM39.7333 66.3113V37.6891L64.674 52.0002L39.7333 66.3113Z"
                    fill="#3B3B3B"
                  />
                </svg>
              </Box>
            </a>

            {/* line */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="158"
              height="4"
              viewBox="0 0 158 4"
              fill="none"
            >
              <path
                d="M2 2H156"
                stroke="#3B3B3B"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>

            {/* link circle */}
            <a
              href="https://www.linkedin.com/company/volaverse/"
              target="_blank"
            >
              <Box
                borderRadius="50%"
                border="2px solid #3B3B3B"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="25px"
                className="cm-circle"
                zIndex="10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 102 102"
                  fill="none"
                >
                  <path
                    d="M82.4645 8H17.6303C12.0384 8 7.5 12.5384 7.5 18.1303V82.9645C7.5 88.5564 12.0384 93.0948 17.6303 93.0948H82.4645C88.0564 93.0948 92.5948 88.5564 92.5948 82.9645V18.1303C92.5948 12.5384 88.0564 8 82.4645 8ZM33.8389 40.4171V78.9124H21.6825V40.4171H33.8389ZM21.6825 29.2129C21.6825 26.3764 24.1138 24.2085 27.7607 24.2085C31.4076 24.2085 33.6971 26.3764 33.8389 29.2129C33.8389 32.0494 31.5697 34.3389 27.7607 34.3389C24.1138 34.3389 21.6825 32.0494 21.6825 29.2129ZM78.4124 78.9124H66.256C66.256 78.9124 66.256 60.151 66.256 58.6517C66.256 54.5995 64.2299 50.5474 59.1647 50.4664H59.0026C54.0995 50.4664 52.0735 54.6401 52.0735 58.6517C52.0735 60.4954 52.0735 78.9124 52.0735 78.9124H39.9171V40.4171H52.0735V45.6038C52.0735 45.6038 55.9838 40.4171 63.8449 40.4171C71.8884 40.4171 78.4124 45.9482 78.4124 57.1524V78.9124Z"
                    fill="#3B3B3B"
                  />
                </svg>
              </Box>
            </a>

            {/* line */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="158"
              height="4"
              viewBox="0 0 158 4"
              fill="none"
            >
              <path
                d="M2 2H156"
                stroke="#3B3B3B"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>

            {/* link circle */}
            <a href="https://t.me/Volaverse" target="_blank">
              <Box
                borderRadius="50%"
                border="2px solid #3B3B3B"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="25px"
                className="cm-circle"
                zIndex="10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 104 104"
                  fill="none"
                >
                  <path
                    d="M52 4.97754C77.9706 4.97754 99.0222 26.0292 99.0222 51.9998C99.0222 77.9703 77.9706 99.022 52 99.022C26.0294 99.022 4.97778 77.9703 4.97778 51.9998C4.97778 26.0292 26.0294 4.97754 52 4.97754ZM68.2206 71.1664C69.0854 68.5127 73.1375 42.0658 73.6384 36.8545C73.7897 35.2762 73.2908 34.2274 72.3136 33.7592C71.1319 33.1909 69.3819 33.475 67.3517 34.207C64.5672 35.2108 28.9693 50.3254 26.9126 51.2004C24.9622 52.0284 23.1181 52.932 23.1181 54.2405C23.1181 55.1605 23.664 55.6777 25.1687 56.2154C26.7348 56.7735 30.6785 57.9695 33.0071 58.6115C35.2499 59.231 37.8034 58.6933 39.2345 57.8039C40.7515 56.8615 58.258 45.1468 59.5154 44.1205C60.7707 43.0942 61.7724 44.4087 60.7461 45.4371C59.7198 46.4634 47.7026 58.127 46.1181 59.7421C44.1943 61.7027 45.56 63.7349 46.85 64.5486C48.3241 65.4767 58.9245 72.5873 60.5212 73.7281C62.118 74.8689 63.7372 75.3862 65.2194 75.3862C66.7016 75.3862 67.4826 73.4337 68.2206 71.1664Z"
                    fill="#3B3B3B"
                  />
                </svg>
              </Box>
            </a>

            {/* line */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="158"
              height="4"
              viewBox="0 0 158 4"
              fill="none"
            >
              <path
                d="M2 2H156"
                stroke="#3B3B3B"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>

            {/* link circle */}
            <a
              href="https://www.instagram.com/volaverse?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
            >
              <Box
                borderRadius="50%"
                border="2px solid #3B3B3B"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="25px"
                className="cm-circle"
                zIndex="10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 104 104"
                  fill="none"
                >
                  <path
                    d="M33.5997 7.02246C18.9411 7.02246 7.02197 18.9416 7.02197 33.6002V70.4002C7.02197 85.0589 18.9411 96.978 33.5997 96.978H70.3997C85.0584 96.978 96.9775 85.0589 96.9775 70.4002V33.6002C96.9775 18.9416 85.0584 7.02246 70.3997 7.02246H33.5997ZM76.5331 23.378C78.782 23.378 80.622 25.218 80.622 27.4669C80.622 29.7158 78.782 31.5558 76.5331 31.5558C74.2842 31.5558 72.4442 29.7158 72.4442 27.4669C72.4442 25.218 74.2842 23.378 76.5331 23.378ZM51.9997 29.5113C64.4095 29.5113 74.4886 39.5905 74.4886 52.0002C74.4886 64.41 64.4095 74.4891 51.9997 74.4891C39.59 74.4891 29.5109 64.41 29.5109 52.0002C29.5109 39.5905 39.59 29.5113 51.9997 29.5113ZM51.9997 33.6002C41.8593 33.6002 33.5997 41.8598 33.5997 52.0002C33.5997 62.1407 41.8593 70.4002 51.9997 70.4002C62.1402 70.4002 70.3997 62.1407 70.3997 52.0002C70.3997 41.8598 62.1402 33.6002 51.9997 33.6002Z"
                    fill="#3B3B3B"
                  />
                </svg>
              </Box>
            </a>

            {/* line */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="158"
              height="4"
              viewBox="0 0 158 4"
              fill="none"
            >
              <path
                d="M2 2H156"
                stroke="#3B3B3B"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>

            {/* link circle */}
            <a href="https://twitter.com/Volaverse" target="_blank">
              <Box
                borderRadius="50%"
                border="2px solid #3B3B3B"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="25px"
                className="cm-circle"
                zIndex="10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 116 116"
                  fill="none"
                >
                  <path
                    d="M58.0001 11.5996C32.3757 11.5996 11.6001 32.3752 11.6001 57.9996C11.6001 83.624 32.3757 104.4 58.0001 104.4C83.6245 104.4 104.4 83.624 104.4 57.9996C104.4 32.3752 83.6245 11.5996 58.0001 11.5996ZM82.9942 48.4683C83.0174 48.9825 83.029 49.4929 83.029 50.0033C83.029 65.7329 71.0617 83.8599 49.1725 83.8599C42.4484 83.8599 36.196 81.8917 30.9334 78.5123C31.8653 78.6244 32.8126 78.6747 33.7754 78.6747C39.355 78.6747 44.4822 76.7761 48.55 73.5784C43.3416 73.4817 38.9452 70.0404 37.4333 65.3153C38.1602 65.4545 38.9065 65.528 39.6721 65.528C40.7586 65.528 41.8142 65.3811 42.808 65.1104C37.3637 64.02 33.2612 59.2099 33.2612 53.4447C33.2612 53.3944 33.2612 53.3441 33.2612 53.2939C34.8658 54.1871 36.6986 54.7207 38.6513 54.7825C35.4613 52.652 33.3578 49.0057 33.3578 44.88C33.3578 42.6953 33.9417 40.6499 34.9664 38.8983C40.836 46.098 49.6056 50.8385 59.4926 51.3335C59.2916 50.4635 59.1872 49.5548 59.1872 48.6229C59.1872 42.0535 64.5154 36.7213 71.0849 36.7213C74.5069 36.7213 77.6002 38.1675 79.7694 40.4797C82.48 39.9423 85.0281 38.9563 87.3288 37.5913C86.4394 40.3715 84.5525 42.6992 82.0933 44.1763C84.4984 43.8901 86.7913 43.2521 88.9296 42.3048C87.3404 44.6944 85.3258 46.7863 82.9942 48.4683Z"
                    fill="#3B3B3B"
                  />
                </svg>
              </Box>
            </a>

            {/* line */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="158"
              height="4"
              viewBox="0 0 158 4"
              fill="none"
            >
              <path
                d="M2 2H156"
                stroke="#3B3B3B"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>

            {/* link circle */}
            <a href="https://discord.com/invite/EemqbmSJcY" target="_blank">
              <Box
                borderRadius="50%"
                border="2px solid #3B3B3B"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="25px"
                className="cm-circle"
                zIndex="10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 114 114"
                  fill="none"
                >
                  <g clip-path="url(#clip0_631_5497)">
                    <ellipse
                      cx="63.5"
                      cy="62.5"
                      rx="40.5"
                      ry="17.5"
                      fill="#D9E2F1"
                    />
                    <path
                      d="M98 23.5131C97.9707 23.4561 97.9223 23.4115 97.8633 23.3872C91.0455 20.2408 83.8508 17.9972 76.4592 16.7125C76.392 16.7 76.3226 16.709 76.2609 16.7384C76.1992 16.7678 76.1482 16.816 76.1153 16.8762C75.1356 18.6648 74.2462 20.5019 73.4506 22.3806C65.4829 21.164 57.3782 21.164 49.4104 22.3806C48.6095 20.4971 47.7059 18.6595 46.7037 16.8762C46.6694 16.8173 46.6182 16.7702 46.5568 16.741C46.4954 16.7118 46.4267 16.7019 46.3597 16.7125C38.9673 17.9945 31.7721 20.2383 24.9551 23.3874C24.8968 23.4122 24.8475 23.4547 24.8142 23.509C11.1817 43.9862 7.44728 63.9599 9.27927 83.6863C9.28443 83.7347 9.29919 83.7815 9.3227 83.824C9.3462 83.8665 9.37796 83.9038 9.41608 83.9337C17.3542 89.8455 26.233 94.3581 35.6737 97.2788C35.7402 97.2989 35.8112 97.298 35.8771 97.2762C35.9431 97.2545 36.0008 97.213 36.0426 97.1572C38.0703 94.3822 39.8669 91.4436 41.4143 88.3715C41.4356 88.3293 41.4477 88.2831 41.4499 88.2359C41.4521 88.1887 41.4444 88.1415 41.4272 88.0976C41.41 88.0536 41.3837 88.0138 41.35 87.9807C41.3164 87.9477 41.2762 87.9222 41.2321 87.906C38.3989 86.8156 35.656 85.5012 33.0292 83.975C32.9815 83.9468 32.9414 83.9072 32.9125 83.8597C32.8836 83.8123 32.8668 83.7583 32.8635 83.7028C32.8603 83.6472 32.8707 83.5917 32.8938 83.5411C32.9169 83.4905 32.9521 83.4464 32.9961 83.4127C33.5473 82.9974 34.0988 82.5653 34.6252 82.1289C34.6719 82.0902 34.7285 82.0654 34.7885 82.0572C34.8486 82.0491 34.9097 82.058 34.9649 82.0829C52.1742 89.9827 70.8055 89.9827 87.811 82.0829C87.8664 82.0564 87.9281 82.0463 87.989 82.0537C88.05 82.0611 88.1075 82.0858 88.155 82.1248C88.6815 82.5612 89.2329 82.9974 89.7882 83.4127C89.8325 83.4461 89.868 83.4899 89.8914 83.5403C89.9149 83.5907 89.9257 83.6461 89.9229 83.7017C89.92 83.7572 89.9036 83.8113 89.875 83.8589C89.8465 83.9066 89.8067 83.9465 89.7592 83.975C87.1384 85.514 84.393 86.8276 81.5524 87.9018C81.5083 87.9187 81.4682 87.9448 81.4348 87.9783C81.4014 88.0118 81.3754 88.0521 81.3586 88.0964C81.3417 88.1408 81.3343 88.1882 81.3369 88.2356C81.3395 88.283 81.352 88.3293 81.3736 88.3715C82.9469 91.4266 84.7409 94.3614 86.7412 97.1524C86.7818 97.2096 86.8392 97.2526 86.9054 97.2752C86.9717 97.2978 87.0433 97.2989 87.1101 97.2783C96.5677 94.3675 105.462 89.8545 113.41 83.9337C113.449 83.9053 113.481 83.8689 113.505 83.8269C113.528 83.785 113.543 83.7385 113.547 83.6905C115.74 60.8847 109.875 41.0746 98 23.5131ZM43.9844 71.675C38.8031 71.675 34.534 66.8925 34.534 61.0191C34.534 55.1456 38.7203 50.3628 43.9844 50.3628C49.2895 50.3628 53.5174 55.1872 53.4346 61.0187C53.4346 66.8925 49.248 71.675 43.9844 71.675ZM78.9253 71.675C73.7443 71.675 69.4751 66.8925 69.4751 61.0191C69.4751 55.1456 73.6615 50.3628 78.9253 50.3628C84.2309 50.3628 88.4585 55.1872 88.3757 61.0187C88.3757 66.8925 84.2309 71.675 78.9253 71.675Z"
                      fill="#3D3D3D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_631_5497">
                      <rect width="114" height="114" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
            </a>

            {/* line */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="158"
              height="4"
              viewBox="0 0 158 4"
              fill="none"
            >
              <path
                d="M2 2H156"
                stroke="#3B3B3B"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Community;
