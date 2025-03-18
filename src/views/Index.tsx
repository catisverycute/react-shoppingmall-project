import { JSX } from "react";
import ItemList from "../components/common/ItemList";
import Slider from "../components/common/Slider";

const Index = (): JSX.Element => {
  const category = ["패션", "액세서리", "디지털"];

  return (
    <>
      <Slider />
      {category.map((idx) => (
        <section
          key={idx}
          className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
        >
          <ItemList productTitle={idx} />
        </section>
      ))}
    </>
  );
};

export default Index;
