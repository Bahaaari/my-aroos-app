import React from "react";

export default function TabContent({ activeTab }: { activeTab: string }) {
  switch (activeTab) {
    case "address":
      return (
        <div className="p-6 text-right">
          <div className="w-full h-80 mb-4 border rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/place/Alborz+Province,+Eram+Blvd,+Iran/@35.7886033,50.8805113,17z/data=!3m1!4b1!4m6!3m5!1s0x3f8dbc54c2462741:0x7196db79f69b29df!8m2!3d35.788599!4d50.8830862!16s%2Fg%2F11bx235tzl?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allow="fullscreen"
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            <strong>نشانی:</strong> کرج - مهرشهر - نرسیده به میدان یاسر - خیابان ۵۴ - پلاک ۱۲۴ - تالار باغ مظفریان
          </p>
          <p className="text-sm text-gray-700 mb-2"><strong>مسئول:</strong> محمد ابراهیمی</p>
          <p className="text-sm text-gray-700 mb-2"><strong>رزرو تلفنی:</strong> ۰۲۱-۸۸۸۸۴۲۳۸</p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>سایت:</strong>{" "}
            <a href="https://www.mozafarian.com" className="text-blue-600 hover:underline">
              www.mozafarian.com
            </a>
          </p>
          <p className="text-sm text-gray-700">
            <strong>ایمیل:</strong>{" "}
            <a href="mailto:info@mozafarian.com" className="text-blue-600 hover:underline">
              info@mozafarian.com
            </a>
          </p>
        </div>
      );

    case "intro":
      return <div className="p-6 text-right text-gray-700">اینجا محتوای تب معرفی قرار می‌گیرد.</div>;

    case "services":
      return <div className="p-6 text-right text-gray-700">لیست خدمات در این بخش نمایش داده می‌شود.</div>;

    case "gallery":
      return <div className="p-6 text-right text-gray-700">اینجا گالری تصاویر قرار می‌گیرد.</div>;

    case "booking":
      return <div className="p-6 text-right text-gray-700">برنامه رزرو و زمان‌بندی‌ها.</div>;

    case "reviews":
      return <div className="p-6 text-right text-gray-700">نظرات کاربران در این قسمت نمایش داده می‌شود.</div>;

    case "compare":
      return <div className="p-6 text-right text-gray-700">امکان مقایسه با سایر تالارها در این بخش وجود دارد.</div>;

    default:
      return null;
  }
}
