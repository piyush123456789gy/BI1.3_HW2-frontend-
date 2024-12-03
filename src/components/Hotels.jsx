import { useState } from "react";
import useFetch from "../useFetch";

export default function Hotels() {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch("https://bi-1-3-hw-2-backend-gamma.vercel.app/hotels");
  // console.log(data);

  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(`https://bi-1-3-hw-2-backend-gamma.vercel.app/hotels/${hotelId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete the hotel.";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Hotel deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Hotels</h1>
      <ul>
        {data?.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}{" "}
            <button onClick={() => handleDelete(hotel._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {successMessage}
    </div>
  );
}
