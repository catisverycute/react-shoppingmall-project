import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import jean from "../../public/img/jeans.jpg";
import work from "../../public/img/work.jpg";
import market from "../../public/img/market.jpg";
import { Link } from "react-router-dom";

export default function Slider() {
  const imageList = [
    {
      name: "fashion",
      title: "물빠진 청바지!",
      text: "이제 막 도착한 패션 청바지를 구경해 보세요.",
      img: jean,
    },
    {
      name: "digital",
      title: "신속한 일처리!",
      text: "다양한 디지털 상품을 둘러보세요.",
      img: work,
    },
    {
      name: "grocery",
      title: "신선한 식품!",
      text: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
      img: market,
    },
  ];

  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      interval={3000}
      stopOnHover={true}
      showArrows={true}
    >
      {imageList.map((item) => (
        <div key={item.name} className="carousel-slide">
          <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10  text-left w-full lg:container px-4 md:px-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-white">
              {item.title}
            </h2>
            <p className="text-white">{item.title}</p>
            <Link to={`/${item.name}`} className="btn btn-sm lg:btn-md mt-3">
              바로가기
            </Link>
          </div>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </Carousel>
  );
}
