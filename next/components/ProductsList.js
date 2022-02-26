import Link from "next/link";
import Image from "next/image";

const ProductsList = ({ products }) => {
  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
      {products.map((_product) => (
        <div
          key={_product.attributes.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/products/${_product.slug}`}>
            <a>
              <div className="w-full bg-white">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <Image
                    src={
                      "/uploads/Screenshot_2022_02_04_at_11_32_06_cca82f68a6.png"
                    }
                    layout="fill"
                  />
                </div>
              </div>
              <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  {_product.attributes.name}
                </h4>
                <div className="mt-1 text-sm text-gray-700">
                  {_product.attributes.description}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
