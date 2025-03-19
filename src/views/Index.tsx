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
          className="pt-6 lg:pt-12 pb-6 lg:pb-12 px-4 xl:px-2 xl:container mx-auto"
        >
          <ItemList productTitle={idx} />
        </section>
      ))}
    </>
  );
};

export default Index;
