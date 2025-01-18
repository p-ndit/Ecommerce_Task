import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
import { icons } from "antd/es/image/PreviewGroup";
const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240115/afuc/65a4f2678cdf1e0df5b467c8/-473Wx593H-466977059-black-MODEL.jpg",
      title: "KEDAR FAB",
      subTitle: "Black Dresses & Gowns for Women",
      price: 20,
    },
    {
      image:
        "https://www.jiomart.com/images/product/original/rv0qy4cinz/fabflee-women-red-printed-chiffon-a-line-dress-red-product-images-rv0qy4cinz-4-202209202131.jpg?im=Resize=(500,630)",
      title: "Fabflee",
      subTitle: " Red Printed Chiffon A-line Dress",
      price: 30,
    },
    {
      image:
        "https://i.pinimg.com/originals/a9/6d/e5/a96de580fd6a618de13dc8aa37fc03e3.jpg",
      title: "Sarsts",
      subTitle: "Mens casual outfits",
      price: 25,
    },
    {
      image:
        "https://www.jiomart.com/images/product/original/rvfry8nslz/ahhaaaa-traditional-party-wear-bollywood-style-indo-western-sherwani-for-boys-product-images-rvfry8nslz-0-202308111600.jpg?im=Resize=(500,630)",
      title: "Ahhaaaa",
      subTitle: "Western Sherwani for Boys",
      price: 15,
    },
    {
      image:"https://images.meesho.com/images/products/123376053/mdlda_512.jpg",
      title: "Lagorii",
      subTitle: "Perfect Girls dress",
      price: 11,
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
