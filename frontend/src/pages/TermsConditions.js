import React from 'react';
import Layout from '../components/Layout';

const TermsAndConditions = () => {
  return (
    <Layout>
        <div className='terms-styles'>
      <div className='terms-conditions-styles mt-16'>
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg text-right">
          <h1 className="text-3xl font-bold text-green-600 mb-4 text-center mt-4">شرائط و ضوابط</h1>
          <p className="text-lg mb-4">
            یہ شرائط و ضوابط ہماری خدمات کے استعمال کے لیے آپ کے اور ہماری کمپنی کے درمیان قانونی معاہدہ ہیں۔ ہماری خدمات کے استعمال کے ساتھ، آپ ان شرائط کو قبول کرتے ہیں۔
          </p>

          <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-2">خدمات کا استعمال</h2>
          <p className="mb-4">
            آپ ہماری خدمات صرف قانونی مقاصد کے لیے استعمال کر سکتے ہیں۔ آپ کسی بھی غیر قانونی سرگرمی میں ملوث نہیں ہو سکتے۔
          </p>

          <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-2">معلومات کی درستگی</h2>
          <p className="mb-4">
            آپ کی فراہم کردہ معلومات درست اور مکمل ہونی چاہیے۔ اگر آپ کی معلومات میں کوئی تبدیلی ہوتی ہے، تو براہ کرم ہمیں مطلع کریں۔
          </p>

          <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-2">رازداری</h2>
          <p className="mb-4">
            آپ کی معلومات کی حفاظت کے لیے ہماری رازداری کی پالیسی کو دیکھیں۔ ہم آپ کی معلومات کو محفوظ رکھنے کے لیے سخت اقدامات کرتے ہیں۔
          </p>

          <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-2">تبدیلیاں</h2>
          <p className="mb-4">
            ہم وقتاً فوقتاً اپنی شرائط و ضوابط کو اپڈیٹ کر سکتے ہیں۔ ان تبدیلیوں کی اطلاع آپ کو فراہم کی جائے گی۔
          </p>

          <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-2">رابطہ</h2>
          <p className="mb-4">
            اگر آپ کے پاس ان شرائط کے بارے میں کوئی سوالات ہیں، تو براہ کرم ہم سے رابطہ کریں: <a href="/contact" className="text-green-600 hover:underline">رابطہ کریں</a>
          </p>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
