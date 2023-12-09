import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="5px 25px 5px 25px"
        borderBottom="1px solid #3B3B3B"
        zIndex="100"
        className={`header ${isScrolled ? "header-bg" : ""}`}
      >
        <a href="/#about">ABOUT US</a>
        <a href="/#roadmap">ROADMAP</a>
        <a href="/#team">TEAM</a>
        <a href="/">
          <Image src="/images/logo.png" h="48px" w="51px" />
        </a>
        <a href="/#faq">FAQ</a>
        <a href="/#community">COMMUNITY</a>
        <a onClick={onOpen} className="toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="20"
            viewBox="0 0 41 29"
            fill="none"
          >
            <path
              d="M4.88579 9.38181C5.4988 9.38181 6.10581 9.26107 6.67216 9.02648C7.23851 8.79189 7.75311 8.44804 8.18658 8.01458C8.62004 7.58111 8.96389 7.06652 9.19847 6.50017C9.43306 5.93382 9.55381 5.32681 9.55381 4.71379C9.55381 4.10078 9.43306 3.49377 9.19847 2.92742C8.96389 2.36107 8.62004 1.84647 8.18658 1.41301C7.75311 0.979541 7.23851 0.635698 6.67216 0.401108C6.10581 0.166518 5.4988 0.0457764 4.88579 0.0457764C3.64776 0.0457764 2.46043 0.537584 1.585 1.41301C0.709581 2.28843 0.217773 3.47576 0.217773 4.71379C0.217773 5.95183 0.709581 7.13916 1.585 8.01458C2.46043 8.89 3.64776 9.38181 4.88579 9.38181ZM4.88579 28.7809C6.12383 28.7809 7.31115 28.2891 8.18658 27.4137C9.062 26.5382 9.55381 25.3509 9.55381 24.1129C9.55381 22.8748 9.062 21.6875 8.18658 20.8121C7.31115 19.9367 6.12383 19.4449 4.88579 19.4449C3.64776 19.4449 2.46043 19.9367 1.585 20.8121C0.709581 21.6875 0.217773 22.8748 0.217773 24.1129C0.217773 25.3509 0.709581 26.5382 1.585 27.4137C2.46043 28.2891 3.64776 28.7809 4.88579 28.7809Z"
              fill={isScrolled ? "#fff" : "#3B3B3B"}
            />
            <path
              d="M19.8672 9.55509C20.4802 9.55509 21.0873 9.43435 21.6536 9.19976C22.22 8.96517 22.7346 8.62132 23.168 8.18786C23.6015 7.75439 23.9453 7.23979 24.1799 6.67345C24.4145 6.1071 24.5353 5.50008 24.5353 4.88707C24.5353 4.27406 24.4145 3.66705 24.1799 3.1007C23.9453 2.53435 23.6015 2.01975 23.168 1.58629C22.7346 1.15282 22.22 0.808977 21.6536 0.574387C21.0873 0.339797 20.4802 0.219055 19.8672 0.219055C18.6292 0.219055 17.4419 0.710863 16.5664 1.58629C15.691 2.46171 15.1992 3.64904 15.1992 4.88707C15.1992 6.12511 15.691 7.31244 16.5664 8.18786C17.4419 9.06328 18.6292 9.55509 19.8672 9.55509ZM19.8672 28.9542C21.1053 28.9542 22.2926 28.4624 23.168 27.5869C24.0434 26.7115 24.5353 25.5242 24.5353 24.2861C24.5353 23.0481 24.0434 21.8608 23.168 20.9854C22.2926 20.1099 21.1053 19.6181 19.8672 19.6181C18.6292 19.6181 17.4419 20.1099 16.5664 20.9854C15.691 21.8608 15.1992 23.0481 15.1992 24.2861C15.1992 25.5242 15.691 26.7115 16.5664 27.5869C17.4419 28.4624 18.6292 28.9542 19.8672 28.9542Z"
              fill={isScrolled ? "#fff" : "#3B3B3B"}
            />
            <path
              d="M35.6368 9.55509C36.2498 9.55509 36.8568 9.43435 37.4231 9.19976C37.9895 8.96517 38.5041 8.62132 38.9376 8.18786C39.371 7.75439 39.7149 7.23979 39.9495 6.67345C40.184 6.1071 40.3048 5.50008 40.3048 4.88707C40.3048 4.27406 40.184 3.66705 39.9495 3.1007C39.7149 2.53435 39.371 2.01975 38.9376 1.58629C38.5041 1.15282 37.9895 0.808977 37.4231 0.574387C36.8568 0.339797 36.2498 0.219055 35.6368 0.219055C34.3987 0.219055 33.2114 0.710863 32.336 1.58629C31.4606 2.46171 30.9688 3.64904 30.9688 4.88707C30.9688 6.12511 31.4606 7.31244 32.336 8.18786C33.2114 9.06328 34.3987 9.55509 35.6368 9.55509ZM35.6368 28.9542C36.8748 28.9542 38.0621 28.4624 38.9376 27.5869C39.813 26.7115 40.3048 25.5242 40.3048 24.2861C40.3048 23.0481 39.813 21.8608 38.9376 20.9854C38.0621 20.1099 36.8748 19.6181 35.6368 19.6181C34.3987 19.6181 33.2114 20.1099 32.336 20.9854C31.4606 21.8608 30.9688 23.0481 30.9688 24.2861C30.9688 25.5242 31.4606 26.7115 32.336 27.5869C33.2114 28.4624 34.3987 28.9542 35.6368 28.9542Z"
              fill={isScrolled ? "#fff" : "#3B3B3B"}
            />
          </svg>
        </a>
      </Box>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay className="toggle-bg" />
        <ModalContent bg="transparent">
          <ModalCloseButton
            className="toggle-close-btn"
            size="lg"
            color="white"
          />
          <ModalBody
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            className="toggle-links"
            gap="20px"
          >
            <a href="/#association" onClick={onClose}>
              ASSOCIATIONS
            </a>
            <a href="/#docs" onClick={onClose}>
              DOCS
            </a>
            <a href="/#blogs" onClick={onClose}>
              BLOGS
            </a>
            <a href="/#join" onClick={onClose}>
              JOIN US
            </a>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
