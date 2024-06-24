import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useFavourite() {
  const { data: favouriteContact, refetch } = useQuery({
    queryKey: ["contact"],
    queryFn: async () => {
      const res = await axios.get(
        "https://connectify-server-rho.vercel.app/favouriteContacts/favourite"
      );
      console.log(res.data);
      return res.data;
    },
  });
  return { favouriteContact, refetch };
}

export default useFavourite;
