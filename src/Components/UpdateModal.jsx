import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { ImageUpload } from "../Utils";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateContactModal = ({ setIsOpen, isOpen, item, refetch }) => {
  console.log(item);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const image = data?.image[0];
    const photo = await ImageUpload(image);
    const contactData = {
      name: data?.name,
      email: data?.email,
      phone_num: data?.phone,
      address: data?.address,
      photo,
    };
    console.log(contactData);
    const res = await axios.patch(
      `http://localhost:3000/updateContact/${item?._id}`,
      contactData
    );
    console.log(res.data);
    if (res.data) {
      toast.success("Update Successfully!");
      refetch();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-xl font-semibold pb-5 text-center leading-6 text-gray-900"
                >
                  Update Contact
                </DialogTitle>
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
                      defaultValue={item?.name}
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
                        defaultValue={item?.email}
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
                        defaultValue={item?.phone_num}
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
                      defaultValue={item?.address}
                      className="w-full rounded-lg border-2 focus:border-[#A91D3A] outline-none border-gray-200 p-3 text-sm"
                      placeholder="Address"
                      type="text"
                      id="name"
                    />
                  </div>

                  <input
                    {...register("image", { required: true })}
                    name="image"
                    // defaultValue={item?.photo}
                    type="file"
                    className="file-input file-input-ghost w-full  bg-gray-100 rounded-full"
                  />

                  <button
                    type="submit"
                    className=" w-full rounded-lg bg-[#A91D3A] px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="inline-block w-full rounded-lg bg-base-300 px-5 py-3 font-medium text-gray-800 ml-4 sm:w-auto"
                  >
                    Calcel
                  </button>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateContactModal.propTypes = {
  setIsOpen: PropTypes.func,
  item: PropTypes.func,
  refetch: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default UpdateContactModal;
