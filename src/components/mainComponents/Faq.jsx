import React from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const Faq = () => {
  return (
    <Box minH="100dvh" pt="80px" px="100px" zIndex="10">
      <Box display="flex" justifyContent="space-between" zIndex="10">
        <Box maxW="50%" zIndex="10">
          <Text
            textTransform="uppercase"
            fontFamily="Bebas Neue"
            fontWeight="400"
            color="#3B3B3B"
            fontSize="4.5rem"
            lineHeight="60px"
            zIndex="10"
          >
            Frequently Asked Questions
          </Text>
        </Box>
        <Box display="flex" alignItems="end" maxW="50%">
          <Text
            color="#3B3B3B"
            fontFamily="Montserrat"
            fontWeight="600"
            lineHeight="normal"
            textAlign="bottom"
            fontSize="1.2rem"
          >
            If for some reason your question is not here, feel free to{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="mailto:associations@volaverse.com"
            >
              contact us
            </a>
          </Text>
        </Box>
      </Box>
      <Box mt="50px">
        <Accordion allowMultiple>
          <AccordionItem
            borderTop="4px solid rgba(172, 172, 172, 0.70)"
            borderBottom="2px solid rgba(172, 172, 172, 0.70)"
            py="5px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="#3B3B3B"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      lineHeight="normal"
                      fontSize="1.7rem"
                    >
                      Q1. What is Volaverse?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="1.1rem"
                  lineHeight="normal"
                  color="#3B3B3B"
                >
                  Volaverse is a community driven metaverse on the blockchain.
                  Users can own digital estates and other assets, socialise,
                  learn and teach about Blockchain and Web3.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem
            borderTop="2px solid rgba(172, 172, 172, 0.70)"
            borderBottom="2px solid rgba(172, 172, 172, 0.70)"
            py="5px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="#3B3B3B"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      lineHeight="normal"
                      fontSize="1.7rem"
                    >
                      Q2. Who is the Team behind this?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="1.1rem"
                  lineHeight="normal"
                  color="#3B3B3B"
                >
                  Team consists of IITians and entrepreneurs who have already
                  built ed-tech startups catering to millions of students. You
                  can read about them in 'Team' section
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem
            borderTop="2px solid rgba(172, 172, 172, 0.70)"
            borderBottom="2px solid rgba(172, 172, 172, 0.70)"
            py="5px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="#3B3B3B"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      lineHeight="normal"
                      fontSize="1.7rem"
                    >
                      Q3. What courses do you offer?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="1.1rem"
                  lineHeight="normal"
                  color="#3B3B3B"
                >
                  To begin with the focus is to teach about Blockchain and Web3.
                  Later on more skills will be also added.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem
            borderTop="2px solid rgba(172, 172, 172, 0.70)"
            borderBottom="2px solid rgba(172, 172, 172, 0.70)"
            py="5px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="#3B3B3B"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      lineHeight="normal"
                      fontSize="1.7rem"
                    >
                      Q4. What is Volastore?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="1.1rem"
                  lineHeight="normal"
                  color="#3B3B3B"
                >
                  It is a unique feature of Volaverse where users can buy/sell
                  digital estates and other assets.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem
            borderTop="2px solid rgba(172, 172, 172, 0.70)"
            borderBottom="2px solid rgba(172, 172, 172, 0.70)"
            py="5px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="#3B3B3B"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      lineHeight="normal"
                      fontSize="1.7rem"
                    >
                      Q5. Do you have any coin yet?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="1.1rem"
                  lineHeight="normal"
                  color="#3B3B3B"
                >
                  Not yet. Coin launch will be through ICO in future but for the
                  moment we are not launching our own coin and building our
                  application on Lisk Blockchain.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem
            borderTop="2px solid rgba(172, 172, 172, 0.70)"
            style={{ borderBottom: "4px solid rgba(172, 172, 172, 0.70)" }}
            py="5px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="#3B3B3B"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      lineHeight="normal"
                      fontSize="1.7rem"
                    >
                      Q6. How do I pay on Volaverse?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="1.1rem"
                  lineHeight="normal"
                  color="#3B3B3B"
                >
                  By connecting your wallet with Volaverse ecosystem, one can
                  pay through Lisk supported crypto currencies
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
