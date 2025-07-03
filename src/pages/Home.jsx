import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Heart, Star, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: '一人ひとりに寄り添う指導',
      description: '生徒さんの個性とペースを大切にした、きめ細やかなレッスンを提供します。'
    },
    {
      icon: Star,
      title: '楽しく学べる環境',
      description: '音楽の楽しさを感じながら、自然と技術が身につくレッスンを心がけています。'
    },
    {
      icon: Users,
      title: '幅広い年齢層に対応',
      description: '3歳のお子様から大人の方まで、それぞれに適したコースをご用意しています。'
    },
    {
      icon: Award,
      title: '豊富な指導経験',
      description: '長年の指導経験を活かし、確実な上達をサポートします。'
    }
  ];

  const courses = [
    {
      title: '幼児コース',
      age: '3歳〜',
      price: '8,400円〜',
      duration: '40分',
      frequency: '年間38回',
      description: 'お子様の成長に合わせた楽しいレッスン'
    },
    {
      title: '親子ピアノ',
      age: '3歳児クラス',
      price: '5,000円',
      duration: '月2回',
      frequency: '',
      description: '親子で一緒に音楽を楽しみましょう'
    },
    {
      title: '大人ピアノ',
      age: '大人',
      price: '9,500円',
      duration: '40分',
      frequency: '月謝制',
      description: '初心者から経験者まで対応'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-float">
                <Music className="w-12 h-12 text-white music-note" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              音楽の喜びを
              <br />
              <span className="text-yellow-200">共に奏でましょう</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              一人ひとりの個性を大切にし、音楽の楽しさを伝えるピアノ教室です。
              幼児から大人まで、心に響く音楽体験をお届けします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                無料体験レッスン申込み
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                コース・料金を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              当教室の<span className="text-orange-600">特徴</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              生徒さん一人ひとりに寄り添い、音楽の楽しさを伝えることを大切にしています
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-orange-600">コース</span>・料金
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              年齢やレベルに応じた多彩なコースをご用意しています
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 card-hover"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-orange-600 font-semibold">{course.age}</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">月謝</span>
                    <span className="text-2xl font-bold text-orange-600">
                      {course.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">レッスン時間</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  {course.frequency && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">回数</span>
                      <span className="font-semibold">{course.frequency}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  お問い合わせ
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300"
            >
              詳しいコース情報を見る
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              レッスン<span className="text-orange-600">風景</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              楽しく学ぶ生徒さんたちの様子をご覧ください
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg card-hover"
              >
                <img
                  src={`/images/piano-lesson-${index}.jpg`}
                  alt={`レッスン風景 ${index}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300"
            >
              ギャラリーを見る
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 orange-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            音楽の扉を開いてみませんか？
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            無料体験レッスンで、当教室の雰囲気を実際に感じてください。
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Clock className="mr-2 w-5 h-5" />
              無料体験レッスン申込み
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              教室について詳しく
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

