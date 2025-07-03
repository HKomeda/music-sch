import React from 'react';
import { Music, Heart, Star, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: '一人ひとりを大切に',
      description: '生徒さんの個性や目標に合わせた、オーダーメイドのレッスンを提供します。'
    },
    {
      icon: Star,
      title: '音楽の楽しさを伝える',
      description: '技術の習得だけでなく、音楽を通じた喜びや感動を共有します。'
    },
    {
      icon: Users,
      title: '温かい教室環境',
      description: 'アットホームな雰囲気の中で、リラックスして学べる環境を作ります。'
    },
    {
      icon: Award,
      title: '確実な上達をサポート',
      description: '豊富な指導経験を活かし、着実なスキルアップをお手伝いします。'
    }
  ];

  const features = [
    {
      title: '個別指導',
      description: 'マンツーマンレッスンで、一人ひとりのペースに合わせた指導を行います。'
    },
    {
      title: '柔軟なスケジュール',
      description: '平日・土日問わず、生徒さんのご都合に合わせてレッスン時間を調整できます。'
    },
    {
      title: '発表会・イベント',
      description: '年に数回の発表会で、日頃の練習成果を披露する機会を設けています。'
    },
    {
      title: '幅広い年齢層',
      description: '3歳のお子様から大人の方まで、どなたでも歓迎いたします。'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              教室<span className="text-orange-600">について</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              音楽の喜びを共に分かち合い、一人ひとりの成長を大切にするピアノ教室です
            </p>
          </div>
        </div>
      </section>

      {/* Teacher Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                講師<span className="text-orange-600">紹介</span>
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  こんにちは。当ピアノ教室の講師です。音楽の素晴らしさを多くの方に伝えたいという想いから、この教室を開設いたしました。
                </p>
                <p>
                  長年にわたるピアノ指導の経験を通じて、一人ひとりの生徒さんが持つ個性や可能性を大切にすることの重要性を学びました。技術の習得はもちろんですが、何より音楽を楽しむ心を育てることを大切にしています。
                </p>
                <p>
                  3歳のお子様から大人の方まで、それぞれの目標や夢に向かって一緒に歩んでいけることを心から嬉しく思います。音楽を通じて、皆様の人生がより豊かになることを願っています。
                </p>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">指導方針</h3>
                  <p className="text-sm">
                    「決して子供へのおしつけでない指導」を心がけ、それぞれの子供の長所・短所を見極め、
                    それに合った指導を行うことで、長く続けられるレッスンを提供しています。
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/teacher-profile.jpg"
                  alt="講師プロフィール"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <Music className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              当教室の<span className="text-orange-600">理念</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              音楽教育を通じて大切にしていること
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              教室の<span className="text-orange-600">特色</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              生徒さんに喜んでいただけるよう、様々な工夫をしています
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 card-hover"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
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

      {/* Location Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              レッスン<span className="text-orange-600">会場</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              グランピアノを使用した本格的なレッスン環境
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  グランピアノレンタルスペース
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    本格的なグランピアノを使用したレッスンを行っています。
                    響きの良い空間で、ピアノ本来の美しい音色を体感していただけます。
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">アクセス</h4>
                    <p className="text-sm mb-2">
                      詳しいアクセス方法については、下記リンクをご確認ください。
                    </p>
                    <a
                      href="https://granpiano.jp/access"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      アクセス詳細はこちら
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                  <Music className="w-32 h-32 text-orange-600 animate-pulse-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

