import { useState } from "react";

export default function AddHotelForm() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const preparedData = {
      ...formData,
      category: [formData.category],
      amenities: formData.amenities.split(",").map((item) => item.trim()),
      photos: formData.photos.split(".").map((item) => item.trim()),
      rating: parseInt(formData.rating, 10) || 0
    };
    console.log("Prepared data being sent:", preparedData);
    try {
      const response = await fetch("https://bi-1-3-hw-2-backend-git-main-piyush-goyals-projects-72282e7a.vercel.app/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preparedData),
      });
      if (!response.ok) {
        throw "Failed to add the hotel.";
      }

      const data = await response.json();
      console.log("Added Hotel", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add New Hotel</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Category:
          <br />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Budget">Budget</option>
            <option value="Mid-Range">Mid-Range</option>
            <option value="Luxury">Luxury</option>
            <option value="Boutique">Boutique</option>
            <option value="Resort">Resort</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Location:
          <br />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Rating:
          <br />
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
          />
        </label>
        <br />
        <br />
        <label>
          Website:
          <br />
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Phone Number:
          <br />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Check-In Time:
          <br />
          <input
            type="text"
            name="checkInTime"
            value={formData.checkInTime}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Check-Out Time:
          <br />
          <input
            type="text"
            name="checkOutTime"
            value={formData.checkOutTime}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Amenities:
          <br />
          <input
            type="text"
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Price Range:
          <br />
          <select
            name="priceRange"
            value={formData.priceRange}
            onChange={handleChange}
            required
          >
            <option value="">Select a price range</option>
            <option value="$$ (11-30)">$$ (11-30)</option>
            <option value="$$$ (31-60)">$$$ (31-60)</option>
            <option value="$$$$ (61+)">$$$$ (61+)</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Reservations Needed:
          <input
            type="checkbox"
            name="reservationsNeeded"
            checked={formData.reservationsNeeded}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Parking Available:
          <input
            type="checkbox"
            name="isParkingAvailable"
            checked={formData.isParkingAvailable}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          WiFi Available:
          <input
            type="checkbox"
            name="isWifiAvailable"
            checked={formData.isWifiAvailable}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Pool Available:
          <input
            type="checkbox"
            name="isPoolAvailable"
            checked={formData.isPoolAvailable}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Spa Available:
          <input
            type="checkbox"
            name="isSpaAvailable"
            checked={formData.isSpaAvailable}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Restaurant Available:
          <input
            type="checkbox"
            name="isRestaurantAvailable"
            checked={formData.isRestaurantAvailable}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Photos:
          <br />
          <input
            type="text"
            name="photos"
            value={formData.photos}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
