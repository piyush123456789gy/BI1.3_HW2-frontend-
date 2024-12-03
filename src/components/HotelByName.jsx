import useFetch from "../useFetch";

export default function HotelByName({ name }) {
  const { data, loading, error } = useFetch(
    `https://bi-1-3-hw-2-backend-gamma.vercel.app/hotels/${name}`
  );

  return data ? (
    <div>
      <h1>{name}</h1>
      {data.map((hotel) => (
        <>
          <p>
            <strong>Location: </strong>
            {hotel.location}
          </p>
          <p>
            <strong>Rating: </strong>
            {hotel.rating}
          </p>
          <p>
            <strong>Price Range: </strong>
            {hotel.priceRange}
          </p>
        </>
      ))}
    </div>
  ) : (
    <p>No Hotels found of this name.</p>
  );
}
