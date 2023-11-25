import React from "react";
import { Box, Text, Image, Input, Button } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box className="footer" borderTopRadius="1.5rem">
      <Box display="flex" justifyContent="space-evenly" py="100px">
        <Box>
          {/* footer logo and branding */}
          <Box display="flex" gap="18px" alignItems="center">
            <Image h="45px" w="48px" mt="-8px" src="/images/logo.png" />
            <Text
              color="#3B3B3B"
              fontSize="3.5rem"
              letterSpacing="2px"
              fontFamily="Bebas Neue"
              fontWeight="400"
              className="footer-txt"
            >
              VOLAVERSE
            </Text>
          </Box>

          <Text
            color="#3B3B3B"
            fontFamily="Montserrat"
            fontWeight="500"
            lineHeight="normal"
            w="450px"
            fontSize=".9rem"
          >
            We at Volaverse are working towards creating a community driven
            metaverse on blockchain for Web 3.0 enthusiasts around the globe.
          </Text>
          <Text
            fontFamily="Montserrat"
            fontWeight="600"
            color="#3B3B3B"
            lineHeight="normal"
            mt="30px"
            mb="15px"
          >
            Subscribe to our email newsletter
          </Text>

          {/* email input */}
          <Box display="flex" gap="10px">
            <Input type="text" placeholder="Your email" />
            <Button
              className="footer-btn"
              fontFamily="Bebas Neue"
              letterSpacing="2px"
              fontSize="1.2rem"
              fontWeight="400"
              lineHeight="normal"
              px="25px"
              color="white"
            >
              SUBSCRIBE
            </Button>
          </Box>
        </Box>

        <Box pt="15px">
          {/* footer links */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap="100px"
          >
            <Box className="footer-links">
              <a href="">About us</a>
              <a href="">Team</a>
              <a href="">Terms of Services</a>
              <a href="">Privacy</a>
            </Box>
            <Box className="footer-links">
              <a href="">Blogs</a>
              <a href="">FAQs</a>
              <a href="">Career</a>
              <a href="">lorem</a>
            </Box>
          </Box>

          {/* social links */}
          <Box>
            <Text
              color="#3B3B3B"
              fontFamily="Montserrat"
              fontWeight="600"
              lineHeight="normal"
              mt="25px"
              mb="20px"
              fontSize=".9rem"
            >
              Follow us
            </Text>
            <Box
              className="social-links"
              display="flex"
              alignItems="center"
              gap="20px"
            >
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="32"
                  viewBox="0 0 68 52"
                  fill="none"
                >
                  <path
                    d="M66.1019 9.49847C65.4733 6.02883 62.4782 3.50209 59.0024 2.71326C53.801 1.61012 44.1747 0.821289 33.7597 0.821289C23.3507 0.821289 13.5704 1.61012 8.36288 2.71326C4.89324 3.50209 1.89197 5.8686 1.26337 9.49847C0.628603 13.4426 0 18.9645 0 26.064C0 33.1635 0.628603 38.6853 1.41744 42.6295C2.0522 46.0992 5.04731 48.6259 8.51695 49.4147C14.0388 50.5179 23.5048 51.3067 33.9199 51.3067C44.335 51.3067 53.801 50.5179 59.3228 49.4147C62.7925 48.6259 65.7876 46.2594 66.4223 42.6295C67.0509 38.6853 67.8398 33.0033 68 26.064C67.6795 18.9645 66.8907 13.4426 66.1019 9.49847ZM25.2427 37.1077V15.0203L44.489 26.064L25.2427 37.1077Z"
                    fill="#3B3B3B"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 57 58"
                  fill="none"
                >
                  <path
                    d="M50.196 0.956055H7.36559C3.67147 0.956055 0.67334 3.95418 0.67334 7.6483V50.4787C0.67334 54.1728 3.67147 57.1709 7.36559 57.1709H50.196C53.8901 57.1709 56.8882 54.1728 56.8882 50.4787V7.6483C56.8882 3.95418 53.8901 0.956055 50.196 0.956055ZM18.0732 22.3712V47.8018H10.0425V22.3712H18.0732ZM10.0425 14.9696C10.0425 13.0958 11.6486 11.6636 14.0578 11.6636C16.467 11.6636 17.9795 13.0958 18.0732 14.9696C18.0732 16.8434 16.5741 18.3559 14.0578 18.3559C11.6486 18.3559 10.0425 16.8434 10.0425 14.9696ZM47.5191 47.8018H39.4884C39.4884 47.8018 39.4884 35.4077 39.4884 34.4173C39.4884 31.7404 38.1499 29.0635 34.8038 29.01H34.6967C31.4577 29.01 30.1192 31.7672 30.1192 34.4173C30.1192 35.6353 30.1192 47.8018 30.1192 47.8018H22.0885V22.3712H30.1192V25.7977C30.1192 25.7977 32.7024 22.3712 37.8956 22.3712C43.2093 22.3712 47.5191 26.0252 47.5191 33.4268V47.8018Z"
                    fill="#3B3B3B"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 63 63"
                  fill="none"
                >
                  <path
                    d="M31.6246 0C48.7811 0 62.6882 13.907 62.6882 31.0636C62.6882 48.2201 48.7811 62.1271 31.6246 62.1271C14.4681 62.1271 0.561035 48.2201 0.561035 31.0636C0.561035 13.907 14.4681 0 31.6246 0ZM42.3402 43.7253C42.9115 41.9723 45.5883 24.501 45.9192 21.0584C46.0192 20.0157 45.6896 19.3229 45.0441 19.0136C44.2634 18.6381 43.1073 18.8259 41.7662 19.3094C39.9267 19.9725 16.4102 29.9574 15.0515 30.5355C13.763 31.0825 12.5448 31.6794 12.5448 32.5438C12.5448 33.1516 12.9054 33.4933 13.8995 33.8485C14.934 34.2172 17.5393 35.0073 19.0776 35.4314C20.5592 35.8406 22.2461 35.4854 23.1915 34.8979C24.1937 34.2753 35.7588 26.5364 36.5894 25.8584C37.4186 25.1804 38.0804 26.0488 37.4024 26.7282C36.7244 27.4062 28.7857 35.1113 27.7389 36.1782C26.468 37.4735 27.3702 38.8159 28.2225 39.3535C29.1962 39.9666 36.199 44.664 37.2539 45.4176C38.3087 46.1713 39.3783 46.513 40.3575 46.513C41.3367 46.513 41.8526 45.2231 42.3402 43.7253Z"
                    fill="#3B3B3B"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M17.919 0.350586C8.23527 0.350586 0.361328 8.22452 0.361328 17.9083V42.2189C0.361328 51.9026 8.23527 59.7765 17.919 59.7765H42.2296C51.9133 59.7765 59.7873 51.9026 59.7873 42.2189V17.9083C59.7873 8.22452 51.9133 0.350586 42.2296 0.350586H17.919ZM46.2814 11.1553C47.767 11.1553 48.9826 12.3708 48.9826 13.8565C48.9826 15.3421 47.767 16.5577 46.2814 16.5577C44.7957 16.5577 43.5802 15.3421 43.5802 13.8565C43.5802 12.3708 44.7957 11.1553 46.2814 11.1553ZM30.0743 15.2071C38.2724 15.2071 44.9308 21.8655 44.9308 30.0636C44.9308 38.2616 38.2724 44.92 30.0743 44.92C21.8762 44.92 15.2178 38.2616 15.2178 30.0636C15.2178 21.8655 21.8762 15.2071 30.0743 15.2071ZM30.0743 17.9083C23.3754 17.9083 17.919 23.3646 17.919 30.0636C17.919 36.7625 23.3754 42.2189 30.0743 42.2189C36.7732 42.2189 42.2296 36.7625 42.2296 30.0636C42.2296 23.3646 36.7732 17.9083 30.0743 17.9083Z"
                    fill="#3B3B3B"
                  />
                </svg>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* copyright text */}
      <Box p="15px">
        <Text
          fontFamily="Montserrat"
          fontWeight="300"
          lineHeight="normal"
          color="#3B3B3B"
          textAlign="center"
        >
          © 2023 Volaverse. All Rights Reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
