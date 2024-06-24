import { useForm } from "react-hook-form";
import { ImageUpload } from "../Utils";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

function AddContact() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const image = data?.image[0];
    const photo = await ImageUpload(image);
    const contactData = {
      name: data?.name,
      email: data?.email,
      phone_num: data?.phone,
      address: data?.address,
      photo,
      status: "normal",
    };
    const res = await axios.post("http://localhost:3000/contacts", contactData);
    console.log(res.data);
    if (res.data) {
      toast.success("Contact Added Successfully!");
      navigate("/all-contacts");
    }
  };
  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <Slide direction="left" damping={0.1} cascade>
                <h2 className="text-3xl font-semibold pb-3">
                  Add Your Contact
                </h2>
                <p className="max-w-xl text-lg">
                  Effortlessly manage and organize all your personal and
                  business contacts in one secure place. Stay connected and keep
                  your network at your fingertips with our intuitive contact
                  management solution
                </p>
              </Slide>
            </div>

            <div className="lg:col-span-3 ">
              <Slide direction="right" damping={0.1}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  action="#"
                  className="space-y-4 rounded-lg bg-white p-8 shadow-lg lg:p-12"
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
                    className="file-input file-input-ghost w-full max-w-xs bg-gray-100 rounded-full"
                  />

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-[#A91D3A] hover:bg-[#88273a] px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Add Contact
                    </button>
                  </div>
                </form>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddContact;
