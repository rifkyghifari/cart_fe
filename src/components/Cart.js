import React from "react";
import Apifetch from "../utils/Apifetch";
import EachUtils from "../utils/EachUtils";
import { useState, useEffect } from "react";
import {GrSubtractCircle, GrAddCircle} from "react-icons/gr"

const Cart = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await Apifetch("GET", "/cart");
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const groupedItemsStore = data.result.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = [];
    }
    acc[item.name].push(item);
    return acc;
  }, {});

  return (
    <div className="p-4">
      <EachUtils
        of={Object.keys(groupedItemsStore)}
        render={(storeName, index) => {
          const storeItems = groupedItemsStore[storeName];
          return (
            <div className="flex justify-center">
              <div key={index} className="w-[700px] mb-4">
                <h1 className="text-2xl font-semibold mb-4">{storeName}</h1>
                {storeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center mb-6 p-4 border rounded-lg shadow-sm"
                  >
                    <img
                      className="w-[100px] h-[100px] rounded-2xl mr-4 object-cover"
                      src={item.image}
                      alt="product image"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <h4 className="text-lg font-medium">
                          {item.product_name}
                        </h4>
                        <p className="font-semibold">Rp{item.price}</p>
                      </div>
                      <div className="flex justify-between mb-2">
                        <p className="text-sm text-gray-600">
                          {item.category_name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Discount: ${item.discount}
                        </p>
                      </div>
                      <div className="flex justify-between text-sm">
                        <p>Note: {item.note}</p>
                        <div className="flex gap-4 border p-1 rounded-xl">
                          <button className=""><GrSubtractCircle size={20}/></button>
                          <h2 className="">{item.quantity}</h2>
                          <button className=""><GrAddCircle size={20}/></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Cart;
