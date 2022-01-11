import Banner from "../components/Banner/Banner";
import {Box, Flex} from "@chakra-ui/react";
import {baseUrl, fetchApi} from "../utils/fetchApi";
import Property from "../components/Property/Property";

const Home = ({propsForSale, propsForRent}) => {
  console.log(propsForRent,propsForSale)
  return (
    <Box>
      <Banner
        purpose='Аренда дома'
        title1='Аренда домов для'
        title2='всех'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        desc1='Апартаменты,Виллы,Дома'
        desc2='и другое'
        linkName='/search?purpose=for-rent'
        buttonText='Подробнее'
      />
      <Flex flexWrap={'wrap'}>
        {propsForRent.map((property) =>
          <Property property={property} key={property.id}/>
        )}
      </Flex>
      <Banner
        purpose='Покупка дома'
        title1='Покупка дома для'
        title2='всех'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        desc1='Апартаменты,Виллы,Дома'
        desc2='и другое'
        buttonText='Подробнее'
        linkName='/search?purpose=for-sale'
      />
      <Flex flexWrap={'wrap'}>
        {propsForSale.map((property) =>
          <Property property={property} key={property.id}/>
        )}
      </Flex>
    </Box>
  );
};

export async function getStaticProps() {
  const propsForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propsForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propsForSale: propsForSale?.hits,
      propsForRent: propsForRent?.hits
    }
  }
}

export default Home;
