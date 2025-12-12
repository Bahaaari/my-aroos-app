'use client';

import { useState } from 'react';

type PaymentMethod = 'online' | 'cod';
type BankGateway = 'saman' | 'melli';

export default function PaymentMethodSelector() {
  const [method, setMethod] = useState<PaymentMethod>('online');
  const [gateway, setGateway] = useState<BankGateway>('saman');

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* کارت پرداخت اینترنتی */}
      <div
        className={`flex border rounded-xs overflow-hidden transition
          ${method === 'online' ? 'border-gray-200 ring-1 ring-green-100 bg-green-50' : 'border-gray-200 hover:border-gray-300'}
        `}
      >
        {/* بخش مربعی گوشه راست */}
        <div className="flex items-center justify-center w-16 border-gray-200 border-l">
          <input
            type="radio"
            name="paymentMethod"
            value="online"
            checked={method === 'online'}
            onChange={() => setMethod('online')}
            className="appearance-none h-5 w-5 rounded-full border-6 border-gray-200 cursor-pointer
             checked:border-green-600 checked:bg-transparent"
          />
        </div>

        {/* بخش متن */}
        <div className="flex-1 p-4">
          <h3 className="text-base font-semibold ">پرداخت اینترنتی</h3>
          <div className="flex justify-start mt-3 gap-16">
            <label
              className={`flex items-center gap-2 
              ${method === 'online' ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <input
                type="radio"
                name="gateway"
                value="saman"
                checked={method === 'online' && gateway === 'saman'}
                onChange={() => setGateway('saman')}
                disabled={method !== 'online'}
                className={`appearance-none h-4 w-4 rounded-full border-5 border-gray-200
             checked:border-green-600 checked:bg-transparent ${method === 'online' ? 'cursor-pointer' : 'cursor-default'}`}
              />
              <span className={`${method === 'online' ? 'cursor-pointer' : 'cursor-default'} text-sm`}>درگاه بانک سامان</span>
            </label>
            <label
              className={`flex items-center gap-2 
              ${method === 'online' ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <input
                type="radio"
                name="gateway"
                value="melli"
                checked={method === 'online' && gateway === 'melli'}
                onChange={() => setGateway('melli')}
                disabled={method !== 'online'}
                className={`appearance-none h-4 w-4 rounded-full border-4 border-gray-200
             checked:border-green-600 checked:bg-transparent ${method === 'online' ? 'cursor-pointer' : 'cursor-default'}`}
              />
              <span className={`${method === 'online' ? 'cursor-pointer' : 'cursor-default'} text-sm`}>درگاه بانک ملی</span>
            </label>
          </div>
        </div>
      </div>

      {/* کارت پرداخت در محل */}
      <div
        className={`flex border rounded-xs overflow-hidden transition
          ${method === 'cod' ? 'border-gray-200 ring-1 ring-green-100 bg-green-50' : 'border-gray-200 hover:border-gray-300'}
        `}
      >
        {/* بخش مربعی گوشه راست */}
        <div className="flex items-center justify-center w-16 border-gray-200 border-l">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={method === 'cod'}
            onChange={() => setMethod('cod')}
            className="appearance-none h-5 w-5 rounded-full border-6 border-gray-200 cursor-pointer
             checked:border-green-600 checked:bg-transparent"
          />
        </div>

        {/* بخش متن */}
        <div className="flex-1 p-4">
          <h3 className="text-base font-semibold text-gray-900">پرداخت در محل</h3>
          <p className="mt-2 text-sm text-gray-600">
            هزینه سفارش را می‌توانید در محل به صورت نقدی یا با کارت‌خوان پرداخت کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
