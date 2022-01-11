import Link from 'next/link';
import Image from "next/image";
import {Box,Flex,Text,Avatar} from "@chakra-ui/react";
import {FaBed,FaBath} from 'react-icons/fa';
import {BsGridFill} from "react-icons/bs";
import {GoVerified} from "react-icons/go";
import millify from "millify";
import DefaultImage from '../../assets/house.jpeg';

const Property = ({property :{coverPhoto,price,rentFrequency,rooms,title,baths,area,agency,isVerified,externalId}}) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
      <Flex flexWrap={'wrap'} w={'420px'} p={5} pt={0} justifyContent={'flex-start'} cursor={'pointer'}>
        <Box>
          <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt='house' objectFit={'cover'} objectPosition={'center'}/>
        </Box>
        <Box w={'full'}>
          <Flex pt={2} alignItems={"center"} justifyContent={'space-between'}>
            <Flex alignItems={'center'}>
              <Box pr={3} color={'gray.400'}>
                {isVerified && <GoVerified/>}
              </Box>
              <Text fontSize={'lg'} fontWeight={'bold'}>
                AED {millify(price)}{rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;