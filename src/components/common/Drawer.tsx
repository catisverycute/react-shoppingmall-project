import { useEffect, useState } from "react";
import useProducts from "../../store/useProducts";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  inputValue?: string;
}

export default function Drawer({ inputValue }: SearchProps) {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputValue) {
      const filterProduct = products.filter((p) =>
        p.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      );
      setFilteredProducts(filterProduct);
    } else {
      setFilteredProducts([]);
    }
  }, [inputValue, products]);

  if (!inputValue || filteredProducts.length === 0) {
    return null;
  }

  const clickBtn = (id: number) => {
    navigate(`/product/${id}`);
    setFilteredProducts([]);
  };

  return (
    <ul className="absolute top-full left-0 w-full sm:absolute sm:top-12  flex-nowrap  dropdown-content sm:w-64 max-h-96 shadow text-base-content overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-600 z-50">
      <li>
        {filteredProducts.map((p) => (
          <button
            type="button"
            className="text-left js-searchedItem px-4 py-2 hover:bg-gray-500 w-full flex items-start"
            onClick={() => clickBtn(p.id)}
          >
            <span className="text-gray-600 dark:text-white line-clamp-2 ">
              {p.title}
            </span>
          </button>
        ))}
      </li>
    </ul>
  );
}
