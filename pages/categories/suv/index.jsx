import useCategoryQuery from "@/hooks/useCategoryQuery";
import Link from "next/link";

function Suv() {
  const { data, loading } = useCategoryQuery("cars", "category", "SUV");
  console.log(data);
  return (
    <div>
      <h2>SUV</h2>

      <Link href={"/categories"}>back to categories</Link>
    </div>
  );
}

export default Suv;
