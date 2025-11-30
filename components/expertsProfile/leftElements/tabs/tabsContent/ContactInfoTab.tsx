import React from "react";
import { FaTelegramPlane, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactInfoTab: React.FC = () => {
  return (
    <div className="bg-white shadow p-6 space-y-4">
      <div className="text-gray-700 space-y-2">
        <p><span className="font-semibold">آدرس سالن:</span> مقدس اردبیلی - برج صالح - کوچه مجید - ساختمان آژین - طبقه هفتم - سالن آشتیانی</p>
        <p><span className="font-semibold">شماره تماس:</span> 09123704853</p>
        <p><span className="font-semibold">آدرس الکترونیک:</span> info@ashtianimakeupartist.com</p>
        <p><span className="font-semibold">وب سایت:</span> ashtianimakeupartist.com</p>
      </div>

      <div className="flex flex-col gap-3 pt-4">
        <a href="#" className="flex w-20 justify-center items-center text-xs bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition">
          <FaTelegramPlane /> مشاهده
        </a>
        <a href="#" className="flex w-20 justify-center items-center text-xs gap-2 bg-blue-700 text-white px-3 py-2 rounded hover:bg-blue-800 transition">
          <FaFacebookF /> مشاهده
        </a>
        <a href="#" className="flex w-20 justify-center items-center text-xs gap-2 bg-sky-400 text-white px-3 py-2 rounded hover:bg-sky-500 transition">
          <FaTwitter /> مشاهده
        </a>
        <a href="#" className="flex w-20 justify-center items-center text-xs gap-2 bg-pink-500 text-white px-3 py-2 rounded hover:bg-pink-600 transition">
          <FaInstagram /> مشاهده
        </a>
      </div>
    </div>
  );
};

export default ContactInfoTab;
