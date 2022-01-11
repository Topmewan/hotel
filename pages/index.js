import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <div>
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
      <Banner
        purpose='Покупка дома'
        title1='Выбери и купи'
        title2='Дом мечты'
        desc1='Апартаменты,Виллы,Дома'
        desc2='и другое'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
    </div>
  );
};

export default Home;