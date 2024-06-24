import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import UpdateContactModal from "../Components/UpdateModal";
import Swal from "sweetalert2";
import "../Utils/custom.css";
import toast from "react-hot-toast";
import useFavourite from "../Hooks/useFavourite";

function AllContacts() {
  const { refetch: favRefetch } = useFavourite();
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(null);
  const { data: contacts, refetch } = useQuery({
    queryKey: "contacts",
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/contacts");
      return data;
    },
  });

  // Add contact to Favourite list---------->
  const handleFavourite = async (item) => {
    const res = await axios.patch(
      `http://localhost:3000/favouriteContact/${item?._id}`
    );
    console.log(res.data);
    if (res.data) {
      toast.success(`${item?.name}'s Contact is your Favourite!`);
      favRefetch();
    }
  };

  // Delete contact from all contact page---------->
  const handleDelete = async (item) => {
    Swal.fire({
      title: "Are you ready to delete?",
      text: "If you want to delete then click yes delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#a91d3a",
      cancelButtonColor: "#5B5B67",
      customClass: {
        cancelButton: "my-custom-button",
      },
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `http://localhost:3000/deleteContact/${item?._id}`
        );
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "Contact info deleted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
        favRefetch();
      }
    });
  };

  return (
    <div className="mx-4">
        <div className="max-w-7xl mx-auto my-8 grid gap-8 grid-cols-1 md:grid-cols-2  ">
      {contacts?.map((item, index) => (
        <div
          key={index}
          className=" p-6  flex flex-col lg:flex-row lg:items-center justify-between  sm:space-x-6  shadow-md rounded-xl "
        >
          <div className=" flex items-center gap-5">
            <div className="flex-shrink-0 ">
              <img
                src={item?.photo}
                alt=""
                className=" w-28 lg:w-40 rounded-xl dark:bg-gray-500"
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
          <div className=" flex items-end flex-row lg:flex-col  gap-2">
            <a
              onClick={() => handleFavourite(item)}
              className={
                item?.status === "favourite"
                  ? "inline-block rounded-full border text-base md:text-xl bg-[#A91D3A] p-2 text-white hover:bg-[#A91D3A] hover:text-white  active:bg-[#A91D3A]"
                  : "inline-block rounded-full border text-base md:text-xl border-[#A91D3A] p-2 text-[#A91D3A] hover:bg-[#A91D3A] hover:text-white  active:bg-[#A91D3A]"
              }
              href="#"
            >
              <FaRegHeart />
            </a>
            <label
              onClick={() => {
                setIsOpen(true), setItem(item);
              }}
              //   htmlFor="my_modal_6"
              className="inline-block bg-[#A91D3A] text-white  border border-current p-2 rounded-full text-base md:text-xl font-medium  transition hover:scale-110 hover:shadow-xl "
              href="#"
            >
              <FiEdit />
            </label>
            <a
              onClick={() => handleDelete(item)}
              className="inline-block bg-[#A91D3A] text-white border border-current p-2 rounded-full  font-medium text-base md:text-xl transition hover:scale-110 hover:shadow-xl "
              href="#"
            >
              <AiOutlineDelete />
            </a>
          </div>
        </div>
      ))}
      {isOpen && (
        <UpdateContactModal
          item={item}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          refetch={refetch}
        />
      )}
    </div>
  </div>
  );
}

export default AllContacts;
