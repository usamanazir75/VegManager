import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';  // Import the Link component

const MoreInfo = () => {
  return (
    <Layout>
        <div className='moreinfo-styles'>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-6">
          مزید معلومات
        </h1>
        
        <div className="max-w-4xl text-center space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            ہمارے ویبسائٹ پر خوش آمدید! یہاں آپ کو بہترین مصنوعات، بے مثال خدمات، اور تازہ ترین معلومات فراہم کی جاتی ہیں۔ ہم ہمیشہ کوشش کرتے ہیں کہ آپ کو بہترین تجربہ فراہم کیا جائے تاکہ آپ کی ضروریات مکمل طور پر پوری ہوں۔
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            ہماری مصنوعات اعلیٰ معیار کی ہیں اور ہر ایک کی ضروریات کو پورا کرتی ہیں۔ آپ کو ہماری مصنوعات اور خدمات کے بارے میں مزید جاننے کے لیے، آپ کسی بھی وقت ہم سے رابطہ کر سکتے ہیں۔
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            اگر آپ کو مزید معلومات یا کوئی سوالات ہیں، تو براہ کرم ہماری ٹیم سے رابطہ کریں تاکہ ہم آپ کی مدد کر سکیں۔
          </p>

          <div className="mt-8">
            <Link to="/contact">  {/* Use Link to wrap the button */}
              <button className="bg-green-800 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-600 transition-all duration-300">
                ہم سے رابطہ کریں
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default MoreInfo;
