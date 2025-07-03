import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Music, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    age: '',
    experience: '',
    message: '',
    contactMethod: 'email'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォーム送信処理（実際の実装では、バックエンドAPIに送信）
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // 3秒後にフォームをリセット
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        age: '',
        experience: '',
        message: '',
        contactMethod: 'email'
      });
    }, 3000);
  };

  const courses = [
    { value: 'children', label: '幼児コース（3歳〜）' },
    { value: 'parent-child', label: '親子ピアノ（3歳児クラス）' },
    { value: 'adult', label: '大人ピアノ' },
    { value: 'trial', label: '無料体験レッスン' },
    { value: 'other', label: 'その他・相談' }
  ];

  const experienceLevels = [
    { value: 'beginner', label: '初心者（全く経験なし）' },
    { value: 'little', label: '少し経験あり' },
    { value: 'intermediate', label: '中級者' },
    { value: 'advanced', label: '上級者' },
    { value: 'unknown', label: 'わからない' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">お問い合わせ</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              無料体験レッスンのお申し込みや、ご質問・ご相談など、
              お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">お問い合わせフォーム</h2>
                <p className="text-gray-600">必要事項をご記入ください</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  送信完了
                </h3>
                <p className="text-gray-600 mb-6">
                  お問い合わせありがとうございます。<br />
                  2営業日以内にご連絡いたします。
                </p>
                <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* お名前 */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="090-1234-5678"
                  />
                </div>

                {/* ご希望のコース */}
                <div>
                  <label htmlFor="course" className="block text-sm font-semibold text-gray-900 mb-2">
                    ご希望のコース <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">選択してください</option>
                    {courses.map((course) => (
                      <option key={course.value} value={course.value}>
                        {course.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 年齢 */}
                <div>
                  <label htmlFor="age" className="block text-sm font-semibold text-gray-900 mb-2">
                    年齢
                  </label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="例：5歳、30代など"
                  />
                </div>

                {/* ピアノ経験 */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-900 mb-2">
                    ピアノ経験
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">選択してください</option>
                    {experienceLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 連絡方法 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    ご希望の連絡方法
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === 'email'}
                        onChange={handleChange}
                        className="mr-2 text-orange-600 focus:ring-orange-500"
                      />
                      メール
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === 'phone'}
                        onChange={handleChange}
                        className="mr-2 text-orange-600 focus:ring-orange-500"
                      />
                      電話
                    </label>
                  </div>
                </div>

                {/* メッセージ */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    メッセージ・ご質問
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="ご質問やご要望などがございましたら、お気軽にお書きください。"
                  />
                </div>

                {/* 送信ボタン */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  送信する
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* 教室情報 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">教室情報</h3>
                  <p className="text-gray-600">レッスン会場・アクセス</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">レッスン会場</p>
                    <p className="text-gray-600">グランピアノレンタルスペース</p>
                    <a 
                      href="https://granpiano.jp/access" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 font-semibold text-sm inline-flex items-center mt-1"
                    >
                      詳しいアクセスはこちら
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">レッスン時間</p>
                    <p className="text-gray-600">平日・土日対応可能</p>
                    <p className="text-gray-600 text-sm">詳細はお問い合わせください</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">お問い合わせ</p>
                    <p className="text-gray-600">メール・お電話にて承ります</p>
                    <p className="text-gray-600 text-sm">2営業日以内にご返信いたします</p>
                  </div>
                </div>
              </div>
            </div>

            {/* コース料金 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">コース・料金</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">幼児コース（3歳〜）</h4>
                  <p className="text-gray-600">月謝 8,400円〜（40分・年間38回レッスン）</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">親子ピアノ（3歳児クラス）</h4>
                  <p className="text-gray-600">月謝 5,000円（月2回）</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">大人ピアノ</h4>
                  <p className="text-gray-600">月謝 9,500円（40分・月謝制）</p>
                </div>
              </div>
            </div>

            {/* よくある質問 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">よくある質問</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Q. 楽譜が読めなくても大丈夫ですか？</h4>
                  <p className="text-gray-600 text-sm">A. はい、楽譜の読み方から丁寧に指導いたします。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Q. 無料体験レッスンはありますか？</h4>
                  <p className="text-gray-600 text-sm">A. はい、無料体験レッスンを実施しています。お気軽にお申し込みください。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Q. レッスンの振替は可能ですか？</h4>
                  <p className="text-gray-600 text-sm">A. 事前にご連絡いただければ、可能な限り振替レッスンを行います。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 orange-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            まずは無料体験レッスンから
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            どのコースが最適かわからない方も、まずは無料体験レッスンでお試しください。
            教室の雰囲気や指導方法を実際に体験していただけます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Send className="mr-2 w-5 h-5" />
              今すぐお申し込み
            </a>
            <a
              href="/courses"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              コース詳細を見る
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

