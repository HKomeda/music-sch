import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Heart, Music, Baby, User, UserCheck } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 'children',
      icon: Baby,
      title: '幼児コース',
      age: '3歳〜',
      price: '8,400円〜',
      duration: '40分',
      frequency: '年間38回レッスン',
      color: 'from-pink-400 to-pink-600',
      features: [
        '楽しく音楽に親しむことから始めます',
        '手指の発達に合わせた無理のない指導',
        'リズム感や音感を自然に身につけます',
        '集中力と表現力を育てます',
        '個々のペースに合わせた丁寧な指導'
      ],
      description: 'お子様の成長段階に合わせて、音楽の楽しさを感じながら基礎を身につけるコースです。遊び感覚で学べる工夫をたくさん取り入れています。'
    },
    {
      id: 'parent-child',
      icon: Heart,
      title: '親子ピアノ',
      age: '3歳児クラス',
      price: '5,000円',
      duration: '月2回',
      frequency: '',
      color: 'from-orange-400 to-orange-600',
      features: [
        '親子で一緒に音楽を楽しめます',
        'お子様の音楽的成長を間近で見守れます',
        '家庭での練習もサポートしやすくなります',
        'コミュニケーションツールとしての音楽',
        'リラックスした雰囲気でのレッスン'
      ],
      description: '親子で一緒に音楽を楽しむ特別なコースです。お子様の音楽的な成長を親御さんと一緒に見守り、家族の絆を深めることができます。'
    },
    {
      id: 'adult',
      icon: User,
      title: '大人ピアノ',
      age: '大人',
      price: '9,500円',
      duration: '40分',
      frequency: '月謝制',
      color: 'from-blue-400 to-blue-600',
      features: [
        '初心者から経験者まで対応',
        'お好きな曲でレッスン可能',
        '基礎から丁寧に指導します',
        '大人のペースに合わせたレッスン',
        'クラシックからポピュラーまで幅広く対応'
      ],
      description: '大人の方のためのピアノコースです。初心者の方も安心して始められるよう、基礎から丁寧に指導いたします。お好きな曲でのレッスンも可能です。'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: '個別指導',
      description: 'マンツーマンレッスンで一人ひとりに最適な指導を行います'
    },
    {
      icon: Clock,
      title: '柔軟なスケジュール',
      description: '平日・土日問わず、ご都合に合わせてレッスン時間を調整できます'
    },
    {
      icon: Users,
      title: '発表会・イベント',
      description: '年に数回の発表会で日頃の練習成果を披露する機会があります'
    },
    {
      icon: Music,
      title: '本格的な環境',
      description: 'グランピアノを使用した本格的なレッスン環境を提供します'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">コース</span>・料金
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              年齢やレベルに応じた多彩なコースをご用意しています。
              一人ひとりの目標に合わせた最適なレッスンプランをご提案いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-full flex items-center justify-center mr-4`}>
                        <course.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{course.title}</h2>
                        <p className="text-orange-600 font-semibold">{course.age}</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 mb-6">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-gray-600 text-sm">月謝</span>
                          <p className="text-2xl font-bold text-orange-600">{course.price}</p>
                        </div>
                        <div>
                          <span className="text-gray-600 text-sm">レッスン時間</span>
                          <p className="text-xl font-semibold">{course.duration}</p>
                        </div>
                      </div>
                      {course.frequency && (
                        <div>
                          <span className="text-gray-600 text-sm">回数</span>
                          <p className="text-lg font-semibold">{course.frequency}</p>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 mb-6">{course.description}</p>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">コースの特徴</h3>
                      <ul className="space-y-2">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={`/images/piano-lesson-${index + 1}.jpg`}
                      alt={`${course.title}のレッスン風景`}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                      <p className="text-sm opacity-90">楽しく学ぶレッスン風景</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              レッスンの<span className="text-orange-600">メリット</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              当教室でのレッスンで得られる様々なメリット
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              よくある<span className="text-orange-600">質問</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: '楽譜が読めなくても大丈夫ですか？',
                answer: 'はい、大丈夫です。楽譜の読み方から丁寧に指導いたします。初心者の方でも安心して始められます。'
              },
              {
                question: 'レッスンの振替は可能ですか？',
                answer: '事前にご連絡いただければ、可能な限り振替レッスンを行います。お気軽にご相談ください。'
              },
              {
                question: '発表会への参加は必須ですか？',
                answer: '発表会への参加は任意です。参加を希望される方には、しっかりとサポートいたします。'
              },
              {
                question: '楽器を持っていないのですが...',
                answer: 'ご自宅での練習用楽器についてもご相談に応じます。電子ピアノでも十分練習可能です。'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q. {faq.question}
                </h3>
                <p className="text-gray-600">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 orange-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            まずは無料体験レッスンから
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            どのコースが最適かわからない方も、まずは無料体験レッスンでお試しください。
            お一人お一人に最適なコースをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <UserCheck className="mr-2 w-5 h-5" />
              無料体験レッスン申込み
            </Link>
            <Link
              to="/testimonials"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              生徒さんの声を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

