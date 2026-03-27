/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, Trophy, Shield, Sword, Star, BookOpen, X } from 'lucide-react';
import { DiscordSDK } from "@discord/embedded-app-sdk";
import { theme } from './theme';
import { MCHHero, Fortune, MCH_HEROES } from './data/mchData';
import { OmikujiService } from './services/omikujiService';

const discordSdk = new DiscordSDK(process.env.DISCORD_CLIENT_ID || "");

const ParticleBackground = () => {
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: ['0%', '-100%'], opacity: [0, 0.8, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
        />
      ))}
    </div>
  );
};

const getRarityStars = (rarity: string) => {
  switch (rarity) {
    case 'Legendary': return 5;
    case 'Epic': return 4;
    case 'Rare': return 3;
    case 'Uncommon': return 2;
    case 'Common': return 1;
    default: return 1;
  }
};

/**
 * MCH Omikuji Application Component
 * Version 1.0.4
 */
export default function App() {
  const [gameState, setGameState] = useState<'title' | 'drawing' | 'flash' | 'result' | 'collection'>('title');
  const [result, setResult] = useState<{ hero: MCHHero; fortune: Fortune } | null>(null);
  const [selectedHero, setSelectedHero] = useState<MCHHero | null>(null);
  const [version] = useState('v1.0.4');

  useEffect(() => {
    async function setupDiscordSdk() {
      try {
        await discordSdk.ready();
        console.log("Discord SDK is ready");
        
        // 認証フロー（ユーザーのアイコンや名前を取得する場合）
        if (process.env.DISCORD_CLIENT_ID) {
          const { code } = await discordSdk.commands.authorize({
            client_id: process.env.DISCORD_CLIENT_ID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: ["identify", "guilds"],
          });
          console.log("Discord authorization code received");
        }
      } catch (error) {
        console.error("Failed to initialize Discord SDK:", error);
      }
    }
    
    setupDiscordSdk();
  }, []);

  const handleDraw = () => {
    setGameState('drawing');
    setTimeout(() => {
      setGameState('flash');
      const drawResult = OmikujiService.draw();
      setResult(drawResult);
      setTimeout(() => {
        setGameState('result');
      }, 800);
    }, 3000);
  };

  const handleReset = () => {
    setGameState('title');
    setResult(null);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{ backgroundColor: theme.colors.background }}
    >
      <ParticleBackground />

      <AnimatePresence mode="wait">
        {gameState === 'title' && (
          <motion.div
            key="title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md w-full z-10"
          >
            <div className="mb-12 relative">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="inline-block relative"
              >
                <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full" />
                <Trophy size={100} color={theme.colors.primary} className="mx-auto mb-6 relative z-10 drop-shadow-[0_0_15px_rgba(243,198,35,0.5)]" />
              </motion.div>
              <h1 
                className="text-5xl font-black tracking-tighter mb-3 text-gradient-gold drop-shadow-lg"
                style={{ fontFamily: theme.fonts.sans }}
              >
                MCH OMIKUJI
              </h1>
              <p className="text-sm font-medium tracking-widest uppercase" style={{ color: theme.colors.primary }}>
                My Crypto Heroes Fortune
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl mb-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <p className="mb-8 leading-relaxed text-lg font-medium relative z-10" style={{ color: theme.colors.text.primary }}>
                今日の運勢とラッキーヒーローを占います。<br />
                <span className="text-sm opacity-70 mt-2 block">あなたのブロックチェーン上の運命は？</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(243, 198, 35, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDraw}
                className="w-full py-5 rounded-2xl font-bold text-xl relative overflow-hidden mb-4 z-10"
                style={{ backgroundColor: theme.colors.primary, color: theme.colors.background }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles size={24} />
                  運命を引く
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setGameState('collection')}
                className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors relative z-10"
                style={{ border: `2px solid ${theme.colors.border}`, color: theme.colors.text.primary }}
              >
                <BookOpen size={18} />
                ヒーロー図鑑
              </motion.button>
            </div>

            <div className="text-xs opacity-40 font-mono tracking-widest">
              {version} | © 2026 MCH Omikuji
            </div>
          </motion.div>
        )}

        {gameState === 'drawing' && (
          <motion.div
            key="drawing"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 2, filter: 'blur(20px)' }}
            transition={{ duration: 0.5 }}
            className="text-center z-10 flex flex-col items-center justify-center"
          >
            <div className="relative w-64 h-64 flex items-center justify-center mb-12">
              <motion.div 
                className="absolute inset-0 magic-circle"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 3, repeat: Infinity, ease: "linear" }, scale: { duration: 1, repeat: Infinity } }}
              />
              <motion.div 
                className="absolute inset-4 magic-circle border-t-transparent"
                style={{ borderStyle: 'solid', borderColor: theme.colors.primary }}
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: ["0 0 20px rgba(243, 198, 35, 0.5)", "0 0 60px rgba(243, 198, 35, 0.8)", "0 0 20px rgba(243, 198, 35, 0.5)"]
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center"
              >
                <Trophy size={40} color="#000" />
              </motion.div>
            </div>
            <motion.h2 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-2xl font-bold tracking-widest text-gradient-gold"
            >
              ブロックチェーンと交信中...
            </motion.h2>
          </motion.div>
        )}

        {gameState === 'flash' && (
          <motion.div
            key="flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-50"
          />
        )}

        {gameState === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', damping: 15, stiffness: 100 }}
            className="max-w-md w-full z-10"
          >
            <div 
              className="rounded-[2rem] overflow-hidden glass-panel relative"
              style={{ 
                boxShadow: `0 20px 50px ${OmikujiService.getRarityColor(result.hero.rarity)}40`,
                border: `1px solid ${OmikujiService.getRarityColor(result.hero.rarity)}80`
              }}
            >
              <div className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundColor: result.fortune.color }} />
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                  className="inline-block px-10 py-3 rounded-full text-4xl font-black mb-4 relative shadow-2xl"
                  style={{ backgroundColor: result.fortune.color, color: '#000' }}
                >
                  {result.fortune.type}
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 scale-105" />
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-base font-medium relative z-10" 
                  style={{ color: theme.colors.text.primary }}
                >
                  {result.fortune.description}
                </motion.p>
              </div>

              <div className="p-8 bg-gradient-to-b from-transparent to-black/60">
                <motion.div 
                  className="relative mb-8 group"
                  whileHover={{ rotateY: 10, rotateX: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ perspective: 1000 }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ backgroundColor: OmikujiService.getRarityColor(result.hero.rarity) }}
                  />
                  <div className="relative rounded-2xl overflow-hidden border-4 shadow-2xl"
                       style={{ borderColor: OmikujiService.getRarityColor(result.hero.rarity) }}>
                    <div className="holo-glare" />
                    <img 
                      src={result.hero.imageUrl} 
                      alt={result.hero.name}
                      className="w-full aspect-square object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-start">
                      <div className="flex gap-1">
                        {Array.from({ length: getRarityStars(result.hero.rarity) }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                          >
                            <Star size={16} fill={OmikujiService.getRarityColor(result.hero.rarity)} color={OmikujiService.getRarityColor(result.hero.rarity)} />
                          </motion.div>
                        ))}
                      </div>
                      <div 
                        className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-lg"
                        style={{ backgroundColor: OmikujiService.getRarityColor(result.hero.rarity), color: '#000' }}
                      >
                        {result.hero.rarity}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center mb-8"
                >
                  <h3 className="text-xs uppercase tracking-widest mb-2 opacity-60 font-bold" style={{ color: OmikujiService.getRarityColor(result.hero.rarity) }}>
                    Lucky Hero
                  </h3>
                  <h2 className="text-3xl font-black mb-4 tracking-tight drop-shadow-md" style={{ color: theme.colors.text.primary }}>
                    {result.hero.name}
                  </h2>
                  <div className="relative">
                    <div className="absolute -left-2 -top-2 text-4xl opacity-20 font-serif">"</div>
                    <div className="absolute -right-2 -bottom-4 text-4xl opacity-20 font-serif">"</div>
                    <div 
                      className="px-6 py-4 rounded-xl bg-black/40 text-sm font-medium leading-relaxed backdrop-blur-sm border border-white/5" 
                      style={{ color: theme.colors.primary }}
                    >
                      {result.hero.quote1}
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReset}
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                  style={{ border: `2px solid ${theme.colors.border}`, color: theme.colors.text.primary }}
                >
                  <RefreshCw size={18} />
                  もう一度占う
                </motion.button>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-8 text-center"
            >
              <p className="text-sm font-medium opacity-60 tracking-widest uppercase">
                Share your destiny
              </p>
            </motion.div>
          </motion.div>
        )}

        {gameState === 'collection' && (
          <motion.div
            key="collection"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-5xl relative z-10 flex flex-col h-[90vh] glass-panel rounded-3xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/40">
              <h2 className="text-2xl font-black text-gradient-gold flex items-center gap-2">
                <BookOpen size={24} color={theme.colors.primary} />
                HERO COLLECTION
              </h2>
              <button onClick={() => setGameState('title')} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-8 bg-black/20">
              {['Legendary', 'Epic', 'Rare', 'Uncommon', 'Common'].map(rarity => {
                const heroes = MCH_HEROES.filter(h => h.rarity === rarity);
                if (heroes.length === 0) return null;
                return (
                  <div key={rarity}>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-white/10 pb-2" style={{ color: OmikujiService.getRarityColor(rarity) }}>
                      {rarity} <span className="text-xs opacity-50 text-white bg-white/10 px-2 py-1 rounded-full">{heroes.length}</span>
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                      {heroes.map(hero => (
                        <motion.div 
                          key={hero.id} 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedHero(hero)}
                          className="flex flex-col items-center group cursor-pointer bg-black/40 p-2 rounded-xl border border-white/5 hover:border-white/20 transition-colors"
                        >
                          <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 mb-2" style={{ borderColor: OmikujiService.getRarityColor(hero.rarity) }}>
                            <img src={`https://www.mycryptoheroes.net/images/heroes/64/${hero.id}.png`} alt={hero.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div className="text-[10px] font-bold text-center w-full leading-tight line-clamp-2" style={{ color: theme.colors.text.primary }}>
                            {hero.name}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Detail Modal */}
      <AnimatePresence>
        {selectedHero && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedHero(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="glass-panel p-6 rounded-2xl max-w-sm w-full border-2 relative"
              style={{ borderColor: OmikujiService.getRarityColor(selectedHero.rarity) }}
            >
              <button onClick={() => setSelectedHero(null)} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10">
                <X size={16} />
              </button>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 mb-4 shadow-2xl relative" style={{ borderColor: OmikujiService.getRarityColor(selectedHero.rarity) }}>
                  <div className="holo-glare" />
                  <img src={selectedHero.imageUrl} alt={selectedHero.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-lg mb-2" style={{ backgroundColor: OmikujiService.getRarityColor(selectedHero.rarity), color: '#000' }}>
                  {selectedHero.rarity}
                </div>
                <h2 className="text-2xl font-black mb-6">{selectedHero.name}</h2>
                
                <div className="w-full space-y-4 text-left">
                  <div className="bg-black/40 p-4 rounded-xl border border-white/10 relative">
                    <div className="text-[10px] text-yellow-500 mb-1 font-bold">名言 1</div>
                    <p className="text-sm leading-relaxed">「{selectedHero.quote1}」</p>
                  </div>
                  <div className="bg-black/40 p-4 rounded-xl border border-white/10 relative">
                    <div className="text-[10px] text-yellow-500 mb-1 font-bold">名言 2</div>
                    <p className="text-sm leading-relaxed">「{selectedHero.quote2}」</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
