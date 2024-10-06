import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout className="bg-green-100 min-h-screen flex flex-col justify-between font-sans">
      <div className='home-styles mt-8'>
      {/* Hero Section */}
      <section className="container mx-auto text-center py-20 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-6">
          ویج مینیجر میں خوش آمدید
        </h1>
        <p className="text-lg md:text-xl text-green-800">
        اپنا کاروبار منظم کریں، لیجرز دیکھیں، فروخت کو ٹریک کریں، اور مزید خصوصیات کو استعمال کریں۔
        </p>
        <Link to="/contact">
        <button className="mt-10 bg-green-700 text-white py-3 px-6 rounded-md hover:bg-green-800 transition-all">
          مزید معلومات حاصل کریں
        </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-green-200 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-white p-6 shadow-lg rounded-md">
            <h3 className="text-xl md:text-2xl font-bold text-green-700 text-center">لیجر منیجمنٹ</h3>
            <p className="mt-4 text-sm md:text-base text-center">ٹرانسپورٹ، مقدار، اور خریداروں کی تفصیلات کا مکمل ریکارڈ محفوظ کریں۔</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-md">
            <h3 className="text-xl md:text-2xl font-bold text-green-700 text-center">فروخت کی تفصیلات</h3>
            <p className="mt-4 text-sm md:text-base text-center">تمام فروخت کو ٹریک کریں اور ادائیگیوں کا حساب کریں۔</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-md">
            <h3 className="text-xl md:text-2xl font-bold text-green-700 text-center">انوسیس اور رپورٹیں</h3>
            <p className="mt-4 text-sm md:text-base text-center">انوسیس تیار کریں، پرنٹ کریں، اور کلائنٹس کو بھیجیں۔</p>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default Home;
