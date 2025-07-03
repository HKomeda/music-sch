import React from 'react';
import { Link } from 'react-router-dom';
import { Music, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ピアノ教室</h3>
                <p className="text-sm text-orange-400">音楽の喜びを共に</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              一人ひとりの個性を大切にし、音楽の楽しさを伝えるピアノ教室です。
              幼児から大人まで、それぞれのペースに合わせた丁寧な指導を心がけています。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">クイックリンク</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  教室について
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-orange-400 transition-colors">
                  コース・料金
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-orange-400 transition-colors">
                  ギャラリー
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-orange-400 transition-colors">
                  生徒さんの声
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">お問い合わせ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    グランピアノレンタルスペース
                  </p>
                  <a 
                    href="https://granpiano.jp/access" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 text-sm"
                  >
                    アクセス詳細はこちら
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <p className="text-gray-300 text-sm">お電話でのお問い合わせ</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <p className="text-gray-300 text-sm">メールでのお問い合わせ</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">レッスン時間</p>
                  <p className="text-gray-400 text-xs">平日・土日対応可能</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ピアノ教室. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

