import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
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

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
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
            <label
              htmlFor="my_modal_6"
              className="inline-block bg-[#A91D3A] text-white  border border-current p-2 rounded-full text-xl font-medium  transition hover:scale-110 hover:shadow-xl "
              href="#"
            >
              <FiEdit />
            </label>
            <a
              className="inline-block bg-[#A91D3A] text-white border border-current p-2 rounded-full  font-medium text-xl transition hover:scale-110 hover:shadow-xl "
              href="#"
            >
              <AiOutlineDelete />
            </a>
          </div>
        </div>
      ))}

      {/* Update Modal */}

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
          
              <div className="modal-box">
                  <h3 className="text-2xl font-semibold pb-3">Update Contact</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="#"
            className="space-y-4"
          >
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                className="w-full rounded-lg border-2 focus:border-[#A91D3A] outline-none border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  name="email"
                  className="w-full rounded-lg border-2 focus:border-[#A91D3A] outline-none border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  {...register("phone", { required: true })}
                  name="phone"
                  className="w-full rounded-lg border-2 focus:border-[#A91D3A] outline-none border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="name">
                Address
              </label>
              <input
                {...register("address", { required: true })}
                name="address"
                className="w-full rounded-lg border-2 focus:border-[#A91D3A] outline-none border-gray-200 p-3 text-sm"
                placeholder="Address"
                type="text"
                id="name"
              />
            </div>

            <input
              {...register("image", { required: true })}
              name="image"
              type="file"
              className="file-input file-input-ghost w-full  bg-gray-100 rounded-full"
            />

            <label
              htmlFor="my_modal_6"
              type="submit"
              className="inline-block w-full rounded-lg bg-[#A91D3A] px-5 py-3 font-medium text-white sm:w-auto"
            >
              Update
            </label>
          </form>
         
        </div>
      </div>
    </div>
  );
}

export default AllContacts;
