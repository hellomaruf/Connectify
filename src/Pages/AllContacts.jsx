import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";

function AllContacts() {
  const { data: contacts } = useQuery({
    queryKey: "contacts",
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/contacts");
      return data;
    },
  });
 

  return (
    <div className="max-w-7xl mx-auto my-8 grid gap-8 grid-cols-2  ">
      {contacts?.map((item, index) => (
        <div
          key={index}
          className=" p-6  flex items-center justify-between  sm:space-x-6  shadow-md rounded-xl "
        >
          <div className=" flex items-center gap-5">
            <div className="flex-shrink-0 ">
              <img
                src={item?.photo}
                alt=""
                className=" w-40 rounded-xl dark:bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">{item?.name}</h2>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <MdOutlineMailOutline />
                  <span className="dark:text-gray-600">{item?.email}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <MdOutlineLocalPhone />
                  <span className="dark:text-gray-600">
                    +880{item?.phone_num}
                  </span>
                </span>
                <span className="flex items-center space-x-2">
                  <HiOutlineLocationMarker />
                  <span className="dark:text-gray-600">{item?.address}</span>
                </span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <a
              className="inline-block rounded-full border text-xl border-[#A91D3A] p-2 text-[#A91D3A] hover:bg-[#A91D3A] hover:text-white  active:bg-[#A91D3A]"
              href="#"
            >
              <FaRegHeart />
            </a>
            <a
              className="inline-block bg-[#A91D3A] text-white  border border-current p-2 rounded-full text-xl font-medium  transition hover:scale-110 hover:shadow-xl "
              href="#"
            >
              <FiEdit />
            </a>
            <a
              className="inline-block bg-[#A91D3A] text-white border border-current p-2 rounded-full  font-medium text-xl transition hover:scale-110 hover:shadow-xl "
              href="#"
            >
              <AiOutlineDelete />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllContacts;
