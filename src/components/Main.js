import React from "react";
import family from "../image/family.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Main = () => {
  return (
    <main className="bg-gray-300">
      <section className="relative w-full p-0 lg:p-8 mb-4">
        <img
          src={family}
          alt="Family Image"
          className="w-full h-72 object-cover md:h-96"
        />
        <div className=" absolute bottom-2 right-8 flex items-center space-x-2 z-10">
          <FaAngleLeft className="text-white text-2xl font-semibold cursor-pointer" />
          <FaAngleRight className="text-white text-2xl font-semibold cursor-pointer" />
        </div>
      </section>
      <section className=" bg-primary text-white text-center py-8">
        <h1 className="mb-4 text-3xl font-semibold">
          Think Health. Think Massage
        </h1>
        <p className="w-full text-sm mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut
          reiciendis tempora repellat magnam aliquam, modi soluta unde commodi
          perspiciatis..
        </p>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <a
            href="/"
            className="flex justify-center items-center text-white font-semibold text-uppercase w-48 h-12 border border-white"
          >
            learn more about us
          </a>
          <a
            href="/"
            className="flex justify-center items-center text-white font-semibold text-uppercase w-48 h-12 border border-white"
          >
            contact us today
          </a>
        </div>
      </section>
      <section className="p-8">
        <div className="border-b-2 pb-4">
          <p className="mb-4 text-sm font-semibold  text-primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut
            reiciendis tempora repellat magnam aliquam, modi soluta unde commodi
            perspiciatis. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Magni aut reiciendis tempora repellat magnam aliquam, modi
            soluta unde commodi perspiciatis.
          </p>
          <p className="mb-4 text-sm font-semibold text-gray-700 hover:text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            ratione consequatur, veniam earum beatae inventore numquam quibusdam
            laboriosam, labore, libero accusantium deserunt officiis quae sint.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut
            reiciendis tempora repellat magnam aliquam, modi soluta unde commodi
            perspiciatis.
          </p>
          <p className="mb-4 text-sm font-semibold text-gray-700 hover:text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            corporis nemo, illo ipsam maiores exercitationem saepe quasi
            asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Magni aut reiciendis tempora repellat magnam aliquam, modi
            soluta unde commodi perspiciatis.
          </p>
        </div>
      </section>
      <section className="py-8 text-center">
        <h2 className="text-primary mb-6 font-semibold text-uppercase">
          Family wellness massage therapy
        </h2>
        <p className="font-semibold text-sm text-gray-700">
          9876 Main Street, Suite 123, Mainland, ML12345
        </p>
        <p className="text-sm font-semibold text-gray-700">
          Phone: 987,654,3210
        </p>
      </section>
    </main>
  );
};

export default Main;
