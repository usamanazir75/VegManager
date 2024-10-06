import React from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className='privacypolicy-styles mt-16'>
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg text-right">
          <h1 className="text-3xl font-bold text-green-600 mb-6 text-center mt-4">پالیسی برائے رازداری</h1>
          <p className="text-lg mb-4">
            یہ رازداری کی پالیسی آپ کی معلومات کی جمع آوری، استعمال، اور افشاء کے طریقوں کی وضاحت کرتی ہے جب آپ ہماری ویب سائٹ کا دورہ کرتے ہیں یا اس پر خدمات کا استعمال کرتے ہیں۔
          </p>

          <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-2">ہم آپ کی معلومات کیسے جمع کرتے ہیں؟</h2>
          <p className="mb-4">
            ہم آپ کی معلومات مختلف طریقوں سے جمع کر سکتے ہیں، بشمول جب آپ ہماری ویب سائٹ پر رجسٹر ہوتے ہیں، فارم بھرنے، یا دیگر سرگرمیوں میں حصہ لیتے ہیں۔
          </p>

          <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-2">ہم آپ کی معلومات کا استعمال کیسے کرتے ہیں؟</h2>
          <p className="mb-4">
            ہم آپ کی معلومات کا استعمال مندرجہ ذیل مقاصد کے لیے کرتے ہیں:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>ہماری خدمات فراہم کرنا اور آپ کی درخواستوں کا جواب دینا</li>
            <li>صارف کی تجربے کو بہتر بنانا</li>
            <li>معلومات اور اپڈیٹس فراہم کرنا</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-2">آپ کی معلومات کی حفاظت</h2>
          <p className="mb-4">
            ہم آپ کی معلومات کی حفاظت کے لیے مختلف حفاظتی اقدامات کرتے ہیں۔ ہم آپ کی ذاتی معلومات کو محفوظ رکھنے کے لیے معیاری طریقے اپناتے ہیں۔
          </p>

          <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-2">ہماری پالیسی میں تبدیلیاں</h2>
          <p className="mb-4">
            ہم اپنی رازداری کی پالیسی کو وقتاً فوقتاً اپڈیٹ کر سکتے ہیں۔ کسی بھی تبدیلی کی صورت میں، ہم آپ کو مطلع کریں گے۔
          </p>

          <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-2">ہم سے رابطہ کریں</h2>
          <p className="mb-4">
            اگر آپ کو اس پالیسی کے بارے میں کوئی سوالات ہیں تو براہ کرم ہم سے رابطہ کریں: <a href="/contact" className="text-green-600 hover:underline">رابطہ کریں</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
