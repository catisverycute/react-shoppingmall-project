import { MENUS } from "../../constants/constants";

interface BreadCrumbProps {
  category?: string;
  crumb?: string;
}

export default function BreadCrumb({ category, crumb }: BreadCrumbProps) {
  const categoryFilter = category
    ? MENUS[category.toUpperCase() as keyof typeof MENUS] || category
    : "";
  const crumbFilter = crumb
    ? MENUS[crumb.toUpperCase() as keyof typeof MENUS] || crumb
    : "";

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>{categoryFilter}</li>
        <li>{crumbFilter}</li>
      </ul>
    </div>
  );
}
