/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

export interface MCHHero {
  id: string;
  name: string;
  rarity: Rarity;
  imageUrl: string;
  quote1: string;
  quote2: string;
}

export interface Fortune {
  type: string;
  description: string;
  color: string;
}

export const MCH_HEROES: MCHHero[] = [
  // Legend
  { id: '5001', name: '織田信長', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5001.png', quote1: '恃(たの)むところにある者は、恃むもののために滅びる', quote2: '是非に及ばず(しかたがない　 やむを得ない)' },
  { id: '5002', name: 'ナポレオン', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5002.png', quote1: '人はその制服どおりの人間になる', quote2: 'ひとたび戦いを決意したならば、その決意を持続しなければならない' },
  { id: '5003', name: '曹操', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5003.png', quote1: '唯(ただ)才能さえ有れば、是れを挙げ、我が採用する', quote2: '老いた駿馬は厩に伏すとも、志は千里にあり' },
  { id: '5004', name: 'ワシントン', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5004.png', quote1: '正直は常に最善の策である', quote2: '自由は、ひとたび根付き始めると、急速に成長する植物である' },
  { id: '5005', name: 'レオナルドダヴィンチ', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5005.png', quote1: 'シンプルさは究極の洗練である', quote2: '私の仕事は、他人の言葉よりも自分の経験から引き出される' },
  { id: '5006', name: 'アーサー王', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5006.png', quote1: '暴力は力ではない、思いやりは弱さではない', quote2: '暴力は力ではない、思いやりは弱さではない' },
  { id: '5007', name: 'ジャンヌダルク', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5007.png', quote1: '私たちは一つの人生しか生きられないし、信じたようにしかそれを生きられない', quote2: 'あなたが何者であるかを放棄し、信念を持たずに生きることは、死ぬことよりも悲しい' },
  { id: '5008', name: '坂本龍馬', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5008.png', quote1: '俺は議論はしない、議論に勝っても、人の生き方は変えられぬ', quote2: '日本を今一度 せんたくいたし申候' },
  { id: '5009', name: '劉備', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5009.png', quote1: 'これ賢、これ徳、よく人を服す', quote2: '身を屈して、分を守り、天の時を待つ' },
  { id: '5010', name: 'アインシュタイン', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5010.png', quote1: '間違いを犯したことのない人とは、何も新しいことをしていない人だ', quote2: '神は絶対にサイコロを振らない' },
  { id: '5012', name: 'バッハ', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5012.png', quote1: '音楽だけが世界語であり、翻訳される必要がない', quote2: '風は見えなくても風車は回っている' },
  { id: '5013', name: 'チンギスハン', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5013.png', quote1: '国は力で支配することはできるが、人の心は力で支配することはできない', quote2: '荒ぶる敵には、鷹の如くに' },
  { id: '5014', name: 'カール大帝', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5014.png', quote1: '正しい行動は知識だけより良いものだ。しかし、正しいことをするためには、何が正しいか知る必要がある', quote2: '二つ目の言語を持つということは、二つ目の魂を持つということだ' },
  { id: '5015', name: '諸葛亮', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5015.png', quote1: '時の流れがわからなければ、寛大であろうと、厳しくしようと、政治はすべて失敗する', quote2: '才に傲りてもって人に驕らず、寵をもって威を作さず' },
  { id: '5017', name: 'アレキサンダー', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5017.png', quote1: '勝っているときこそ多くの危険が潜んでいる', quote2: '挑戦を続ける限りあなたにできないことはないのだ' },
  { id: '5018', name: '始皇帝', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5018.png', quote1: '歴史を読むのは楽しい、歴史を作るのは更に楽しい', quote2: '天下が戦に苦しむのは、諸侯があるからだ' },
  { id: '5019', name: '源頼朝', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5019.png', quote1: '歴史を読むのは楽しい、歴史を作るのは更に楽しい', quote2: '天下が戦に苦しむのは、諸侯があるからだ' },
  { id: '5021', name: '安倍晴明', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5021.png', quote1: '優しい言葉ほどよく効く呪はないぞ', quote2: '優しい言葉ほどよく効く呪はないぞ' },
  { id: '5024', name: '葛飾北斎', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5024.png', quote1: '掃除をする暇があるなら、絵を描きたい', quote2: 'このままで良いのか。現状に満足してはならない' },
  { id: '5027', name: 'ガリレオガリレイ', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5027.png', quote1: 'どうして君は他人の報告を信じるばかりで、自分の眼で観察したり見たりしなかったのか', quote2: '結果にはすべて原因がある' },
  { id: '5030', name: '武則天', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5030.png', quote1: '親子が信じあうことができないようなら、家庭が睦まじくなることは有り得ない', quote2: '官に就くものは平静であるべき。財に近付いても清廉潔白でいるべき' },
  { id: '5031', name: 'スキピオ', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5031.png', quote1: '国家に対してわれわれは、金銭での責任でなく、行為の責任を負う', quote2: '我、神仏を尊びて、神仏を頼らず' },
  { id: '5032', name: '宮本武蔵', rarity: 'Legendary', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/5032.png', quote1: '構えあって構えなし', quote2: '構えあって構えなし' },

  // Epic
  { id: '4002', name: 'ナイチンゲール', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4002.png', quote1: '人生は呑気な楽しい休日でも、気の利いたことが記されている書物でもありません', quote2: '天使とは、美しい花をまき散らす者ではなく、苦悩する者のために戦う者である' },
  { id: '4003', name: 'ベートーベン', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4003.png', quote1: '静寂と自由は、最大の財宝である', quote2: '墓の下にいても、あなた達の役に立てる。これほどの嬉しいことがあるだろうか' },
  { id: '4005', name: '勝海舟', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4005.png', quote1: '行いは己のもの。批判は他人のもの。知ったことではない', quote2: '世の中に無神経ほど強いものはない' },
  { id: '4007', name: 'エジソン', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4007.png', quote1: '天才とは、１％のひらめきと99％の努力である', quote2: '失敗したわけではない。 それを誤りだと言ってはいけない。 勉強したのだと言いたまえ' },
  { id: '4008', name: 'マルコポーロ', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4008.png', quote1: '旅は私の学校だ。 自分の目で見、自分の頭で考える', quote2: '旅は私の学校だ。 自分の目で見、自分の頭で考える' },
  { id: '4009', name: '伊達政宗', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4009.png', quote1: '小事より大事は発するものなり。油断すべからず', quote2: 'まともでない人間の相手をまともにすることはない' },
  { id: '4011', name: 'マルクス', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4011.png', quote1: 'それが誰の役にも立たないならそれは商品とは言えない', quote2: '過去のすべての社会の歴史は、階級闘争の歴史である' },
  { id: '4012', name: '沖田総司', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4012.png', quote1: '刀で斬るな、体で斬れ', quote2: '大刀を損じれば小刀を抜きなさい。小刀を損じれば鞘で、鞘を損じれば素手でも戦いなさい 。戦場では誰も待ってはくれないのですよ' },
  { id: '4013', name: 'チャイコフスキー', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4013.png', quote1: '過去を悔やむ。未来に希望を持つ。そして現在に決して満足しない。それが私のこれまでの人生でやってきたことだ', quote2: '我々は常に働かなければならない。そして、自尊心を持った芸術家は、その気にならないという口実をもって、自分の手を停めていてはならない' },
  { id: '4014', name: 'マリーアントワネット', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4014.png', quote1: 'わたしは育てられたのではなく、作りだされたのです', quote2: '苦難はまず、自分がどういう人間なのかを自覚させる' },
  { id: '4016', name: '呂布', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4016.png', quote1: '曹操が歩兵を、自分が騎兵を率いたならば天下を取るのは容易い', quote2: '曹操が歩兵を、自分が騎兵を率いたならば天下を取るのは容易い' },
  { id: '4017', name: 'キュリー夫人', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4017.png', quote1: '人々の力になること、これは人類の共通の義務なのです', quote2: '個人の改善なくして、社会の改革はありません' },
  { id: '4018', name: '孫権', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4018.png', quote1: '死んだ者は帰ってはこない', quote2: '死んだ者は帰ってはこない' },
  { id: '4021', name: 'ゴッホ', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4021.png', quote1: '私はいつも、まだ自分ができないことをする。そのやり方を学ぶために', quote2: '美しい景色を探すな。景色の中に美しいものを見つけるんだ' },
  { id: '4024', name: '岳飛', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4024.png', quote1: '戦陣を構えてから戦うのは兵法の決まりだが、その時に応じて活用するのは人の心にある', quote2: '戦陣を構えてから戦うのは兵法の決まりだが、その時に応じて活用するのは人の心にある' },
  { id: '4025', name: '武田信玄', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4025.png', quote1: '一生懸命だと知恵が出る、中途半端だと愚痴が出る、いい加減だと言い訳が出る', quote2: '信頼してこそ人は尽くしてくれるものだ' },
  { id: '4026', name: 'カエサル', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4026.png', quote1: '人は喜んで自己の望むものを信じるものだ', quote2: 'わたしは王ではない。カエサルである' },
  { id: '4027', name: '土方歳三', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4027.png', quote1: '一日過ぎると、その一日を忘れるようにしている。過去はもう私にとって何の意味もない', quote2: '目的は単純であるべきである dream思想は単純であるべきである' },
  { id: '4028', name: 'ダーウィン', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4028.png', quote1: '生き残る種とは、最も強いものではない。 最も知的なものでもない。 それは、変化に最もよく適応したものである', quote2: '一時間の浪費をなんとも思わない人は、人生の価値をまだ発見してはいない' },
  { id: '4030', name: 'モーツァルト', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4030.png', quote1: '本当にわたしは怠けることが嫌いで、働くことが好きなんだ', quote2: '他人の賞賛や非難など一切気にしない。自分自身の感性に従うのみだ' },
  { id: '4032', name: '上杉謙信', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4032.png', quote1: '義とは、人が人としてあることの美しさよ', quote2: '人の上に立つ対象となるべき人間の一言は、深き思慮を持ってなすべきだ。軽率なことを言ってはならぬ' },
  { id: '4033', name: 'リンカーン', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4033.png', quote1: 'あなたが転んでしまったことに関心はない。そこから立ち上がることに関心があるのだ', quote2: '木を切り倒すのに6時間もらえるなら、私は最初の4時間を斧を研ぐことに費やしたい' },
  { id: '4035', name: '近藤勇', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4035.png', quote1: '只まさに一死をもって君恩に報いん', quote2: '英雄ではない者が真の英雄である' },
  { id: '4039', name: '西郷隆盛', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4039.png', quote1: '我を愛する心を以って人を愛せ。自己を許すが如く人を許せ。人を責めるが如く自己を責めよ', quote2: '世のすべての人からけなされても落ち込まず、すべての人から褒められてもうぬぼれるな' },
  { id: '4040', name: '韓信', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4040.png', quote1: '逃げられる道は前しかない。死中に活を求めよ', quote2: '一時の恥を我慢してお前の股をくぐったから、今この地位につくことができた' },
  { id: '4041', name: 'ニコラ・テスラ', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4041.png', quote1: 'ある者が「神」と呼ぶものを、他の者は「物理法則」と呼ぶ', quote2: 'あなたの憎しみを電気に変えたら、世界中を明るくできるだろう' },
  { id: '4042', name: 'ブッダ', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4042.png', quote1: '周囲に惑わされず、自分の心に従いなさい', quote2: '心を強く保つには、体が元気でなければ' },
  { id: '4044', name: 'ファーブル', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4044.png', quote1: '多くを学ぶより創造するほうが優る。創造は人生の根底なり', quote2: '人間は自分で探し求め、発見したことしか長く覚えることはできない' },
  { id: '4047', name: 'ハンニバル', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4047.png', quote1: '方法は見つける。なければ作る', quote2: '言葉は生き物である。それらには性格や、視点、議題がある' },
  { id: '4048', name: '周瑜', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4048.png', quote1: '人間は生まれればいつか必ず死が訪れる。短い生涯を終えるのもまた天命である', quote2: '自らの志を実現できない事が残念でならない' },
  { id: '4049', name: '夏侯惇', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4049.png', quote1: '目を射抜かれたとてひるんでたまるか。この眼は父と母の血からできめおる.けして捨てるわけにはいかぬのだ', quote2: '目を射抜かれたとてひるんでたまるか。この眼は父と母の血からできめおる.けして捨てるわけにはいかぬのだ' },
  { id: '4050', name: '司馬懿仲達', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4050.png', quote1: '機敏、すなわち「機をみるに敏なり」', quote2: '機敏、すなわち「機をみるに敏なり」' },
  { id: '4052', name: 'フランシスドレーク', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4052.png', quote1: '偉業を成すのも小さな一歩から', quote2: '偉業を成すのも小さな一歩から' },
  { id: '4054', name: '菅原道真', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4054.png', quote1: '未だかつて邪は正に勝たず', quote2: '未だかつて邪は正に勝たず' },
  { id: '4055', name: '本多忠勝', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4055.png', quote1: '本多忠勝も傷を負ったら終わりだな', quote2: '采配が良かったのではない、敵が弱すぎたのだ' },
  { id: '4056', name: '夏目漱石', rarity: 'Epic', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/4056.png', quote1: '真面目とはね、君、真剣勝負の意味だよ', quote2: '馬は走る。花は咲く。人は書く。自分自身になりたいが為に' },

  // Rare
  { id: '3002', name: 'ダルタニャン', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3002.png', quote1: '１人はみんなのために、みんなは１人のために', quote2: '１人はみんなのために、みんなは１人のために' },
  { id: '3003', name: '平賀源内', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3003.png', quote1: '良薬は口に苦く、出る杭は打たれる習ひ', quote2: '良薬は口に苦く、出る杭は打たれる習ひ' },
  { id: '3008', name: 'ノストラダムス', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3008.png', quote1: '私は人間であり、間違うかもしれないし、しくじるかもしれないし、騙されるかもしれない', quote2: '私は人間であり、間違うかもしれないし、しくじるかもしれないし、騙されるかもしれない' },
  { id: '3011', name: '前田慶次', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3011.png', quote1: '山間からふわっと雲が浮んでくるように、予期していない事態もそれなりに趣があるものだ', quote2: '人生良いときも悪いときも、必ず巡ってくるのだ' },
  { id: '3012', name: '天草四郎', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3012.png', quote1: '来世まで友になる', quote2: '天も地も根は同じで、全ての物は一体である' },
  { id: '3013', name: '石川五右衛門', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3013.png', quote1: '絶景かな絶景かな。春のながめは値千金とは小さなたとえ、この五右衛門からは万両', quote2: '絶景かな絶景かな。春のながめは値千金とは小さなたとえ、この五右衛門からは万両' },
  { id: '3014', name: '直江兼続', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3014.png', quote1: '天の時 地の利 人の和', quote2: '天の時 地の利 人の和' },
  { id: '3015', name: 'イワン雷帝', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3015.png', quote1: '戦争の終わりにあってさえ、戦いは始まったばかりだと思わねばならない', quote2: '戦争の終わりにあってさえ、戦いは始まったばかりだと思わねばならない' },
  { id: '3016', name: '松尾芭蕉', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3016.png', quote1: '松のことは松に習え、竹のことは竹に習え', quote2: '古人の跡を求めず個人の求めたる所を求めよ' },
  { id: '3018', name: '武蔵坊弁慶', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3018.png', quote1: '前世からの約束事かも知れない。ならば従おう', quote2: '後世もそのまた後世もめぐり逢おう' },
  { id: '3022', name: 'ポカホンタス', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3022.png', quote1: '君に出会えないことよりも、死を選ぶ', quote2: '君に出会えないことよりも、死を選ぶ' },
  { id: '3024', name: 'ルーベンス', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3024.png', quote1: '私は地味で孤独な男さ。古いブラシをもって神にインスピレーションを求めるだけのね', quote2: '若い乙女を描くのは、思うままにはしゃぎまわるのと似ている。最高のリフレッシュメントだ' },
  { id: '3025', name: '真田幸村', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3025.png', quote1: '恩義を忘れ、私欲を貪り、人と呼べるか', quote2: 'このご恩、土地や金子などに到底変えられない' },
  { id: '3028', name: 'モネ', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3028.png', quote1: '私は鳥が歌うように、絵を描きたい', quote2: 'すべては千変万化する。石でさえも' },
  { id: '3030', name: 'シェイクスピア', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3030.png', quote1: '険しい丘に登るためには、最初にゆっくり歩くことが必要である', quote2: '成し遂げんとした志をただ一回の敗北によって捨ててはいけない' },
  { id: '3031', name: 'ワイアットアープ', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3031.png', quote1: '噂なんていい加減なものだ。 たいてい噂の方がよくできているんだから', quote2: '賢い者ほど最後まで銃を手にとらない' },
  { id: '3034', name: 'パーシヴァル', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3034.png', quote1: '社会が性格にとって有益なものであると同じように、孤独は想像力にとって有益なものである', quote2: '社会が性格にとって有益なものであると同じように、孤独は想像力にとって有益なものである' },
  { id: '3035', name: '小野小町', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3035.png', quote1: '思いつつ　寝ればや人の見えつらん　夢と知りせば覚めざらましを', quote2: '思いつつ　寝ればや人の見えつらん　夢と知りせば覚めざらましを' },
  { id: '3039', name: 'ラクシュミーバーイ', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3039.png', quote1: '我がジャーンシーは決して放棄しない', quote2: '我がジャーンシーは決して放棄しない' },
  { id: '3041', name: 'ラファエロ', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3041.png', quote1: '絵を描く時、人は思考していない', quote2: '絵を描く時、人は思考していない' },
  { id: '3042', name: 'コロンブス', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3042.png', quote1: '航海することが前提であり、生存することが前提ではない', quote2: '0から1を創るのは、難しい' },
  { id: '3043', name: 'ニュートン', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3043.png', quote1: '年がら年中、そのことばかりを考えていただけです', quote2: '天体の動きなら計算できるが、群集の狂気は計算できない' },
  { id: '3044', name: '徳川家康', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3044.png', quote1: '堪忍は無事長久の基。怒りは敵と思え', quote2: 'いさめてくれる部下は、一番槍をする勇士より値打ちがある' },
  { id: '3046', name: 'マリアテレジア', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3046.png', quote1: '私は寝ません。 死に直面しても起きていたいの', quote2: 'きれいな歯は体型に劣らず大切なことです' },
  { id: '3047', name: 'アッティラ', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3047.png', quote1: '決断とは、それだけでもたいへんな努力を要するもの', quote2: '決断とは、それだけでもたいへんな努力を要するもの' },
  { id: '3051', name: '源頼朝', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3051.png', quote1: '冷静にじっくりと計略を練るようにしなさい', quote2: '「あなたを信頼している」と言ってくれたとしても、それは本当に誠であるのであろうか' },
  { id: '3052', name: 'キャシャーン', rarity: 'Rare', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/3052.png', quote1: 'たったひとつの命を捨てて生まれ変わった不死身のからだ鉄の悪魔を叩いて砕くキャシャーンがやらねば誰がやる', quote2: 'たったひとつの命を捨てて生まれ変わった不死身のからだ鉄の悪魔を叩いて砕くキャシャーンがやらねば誰がやる' },

  // Uncommon
  { id: '2001', name: 'ライト兄弟', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2001.png', quote1: '夢中になれるものがあったので、朝が待ち遠しくて仕方がなかった。それが幸せというものさ', quote2: 'いま正しい事も、数年後間違っていることもある。逆にいま間違っていることも、数年後正しいこともある' },
  { id: '2002', name: 'スパルタクス', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2002.png', quote1: '勝てば馬は幾らでも手に入る。負ければもう必要ない', quote2: '勝てば馬は幾らでも手に入る。負ければもう必要ない' },
  { id: '2004', name: 'シューベルト', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2004.png', quote1: 'あるべき姿ではなくありのままの人間を受け入れよう', quote2: 'あるべき姿ではなくありのままの人間を受け入れよう' },
  { id: '2014', name: '徳川慶喜', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2014.png', quote1: 'これからはお前の道を行きなさい', quote2: 'これからはお前の道を行きなさい' },
  { id: '2015', name: 'モンテスキュー', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2015.png', quote1: '真に偉大な人間になるためには、人々の上に立つのではなく、彼らと共に立たなければならない', quote2: '偉大なことを成し遂げる人は、つねに大胆な冒険者である' },
  { id: '2020', name: '明智光秀', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2020.png', quote1: '仏のうそは方便という。武士のうそは武略という。土民百姓はかわゆきことなり', quote2: '心しらぬ　人は何とも　言はばいへ　身をも惜まじ　名をも惜まじ' },
  { id: '2021', name: '高杉晋作', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2021.png', quote1: 'おもしろき　こともなき世を　おもしろく　すみなすものは　心なりけり', quote2: '苦労する身は厭わねど、苦労し甲斐のあるように' },
  { id: '2022', name: 'アンデルセン', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2022.png', quote1: 'われわれが自分の心の中に持っているほかに悪魔はいない', quote2: '目は目を見ることができない' },
  { id: '2023', name: 'ミケランジェロ', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2023.png', quote1: 'やる価値のあることなら、たとえ最初は下手であっても、やる価値がある', quote2: '最大の危機は、目標が高すぎて失敗することではなく、低すぎる目標を達成することだ' },
  { id: '2026', name: '豊臣秀吉', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2026.png', quote1: '負けると思えば負ける、勝つと思えば勝つ。 逆になろうと、人には勝つと言い聞かすべし', quote2: '財産を貯め込むのは、良い人材を牢に押し込むようなものだ' },
  { id: '2029', name: '一休', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2029.png', quote1: '門松は冥土の旅の一里塚、めでたくもあり、めでたくもなし', quote2: '袈裟が有り難く見えるのは、在家の他力本願' },
  { id: '2031', name: 'ビスマルク', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2031.png', quote1: '選挙の前と、戦争の最中と、狩りの後ほど人は嘘をつかないものだ', quote2: '愚者は自分の経験に学ぶと言う、私はむしろ他人の経験に学ぶのを好む' },
  { id: '2032', name: 'モンゴメリ', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2032.png', quote1: 'なにかを待つってその楽しさの半分にあたるわ', quote2: '一生懸命やって負けること' },
  { id: '2033', name: 'ゲーテ', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2033.png', quote1: '愛することより愛されることのほうが難しい', quote2: '愛する人の欠点を愛することのできない者は、真に愛しているとは言えない' },
  { id: '2034', name: 'プラトン', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2034.png', quote1: '偉大な人物たらんとする者は、自分自身や自分に属するものをではなく、正しいことをこそ愛すべきなのだ', quote2: '世間の同情を乞おうとしてはならない。なぜなら、同情の中には軽蔑の念が含まれているからだ' },
  { id: '2036', name: '樋口一葉', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2036.png', quote1: '何をなすべきかを考え、その道をひたすら歩んで行くだけです', quote2: '命ある限りはどんな苦しみにも耐え、頑張って学問をしたいと思う' },
  { id: '2039', name: 'ドストエフスキー', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2039.png', quote1: '恋の悩みや嫉妬はすべて退屈のなせるわざなのだ。惰性に押し潰されたのだ', quote2: '苦しむこともまた才能の一つである' },
  { id: '2041', name: 'ベンジャミン・フランクリン', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2041.png', quote1: '時間を浪費するな、人生は時間の積み重ねなのだから', quote2: 'もし財布の中身を頭につぎこんだら、誰も盗むことはできない。 知識への投資がいつの世でも最高の利子を生む' },
  { id: '2044', name: 'ソクラテス', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2044.png', quote1: '生きるために食べよ、食べるために生きるな', quote2: '自分自身が無知であることを知っている人間は、自分自身が無知であることを知らない人間より賢い' },
  { id: '2045', name: '達磨', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2045.png', quote1: '仏の心で生きる人が仏である', quote2: '悟りそのものを文字で示すことはできない' },
  { id: '2046', name: '北条政子', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2046.png', quote1: 'その御恩は、海よりも深く山よりも高いのです', quote2: '皆さん、心を一つにして聞きなさい。これが私からの最後の言葉です' },
  { id: '2047', name: 'アリストテレス', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2047.png', quote1: '批判を避けたいのであれば、何もせず、何も言わず、何者にもなるべきではない', quote2: '自分を知ることは、すべての知恵の始まりである' },
  { id: '2048', name: 'ルノワール', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2048.png', quote1: 'どれだけ素晴らしいパレットを持っていても意味がない。大事なのは、どんな眼を持っているかなんだ', quote2: 'ようやく何かわかりかけてきたような気がする。私はまだ、進歩している' },
  { id: '2049', name: 'ショパン', rarity: 'Uncommon', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/2049.png', quote1: '健康で強い体があれば毎日喜んで働く', quote2: '毎朝、非常にゆっくりのテンポで練習し、指をしなやかにしなさい' },

  // Common
  { id: '1001', name: 'コナンドイル', rarity: 'Common', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/1001.png', quote1: '見るべき場所を見ないから、それで大切なものを全て見落とすのさ', quote2: '物語の知られざる側面を明かすとき、崇高な道徳心が最高の知恵であることに気付くであろう' },
  { id: '1004', name: 'シートン', rarity: 'Common', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/1004.png', quote1: '野バラは花を守るために、とげを身につけて武装した', quote2: '野生動物には降伏の2字はない' },
  { id: '1005', name: '伊能忠敬', rarity: 'Common', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/1005.png', quote1: '人間は夢を持ち前へ歩き続ける限り、余生はいらない', quote2: '後世の役に立つような、しっかりとした仕事がしたい' },
  { id: '1006', name: 'ピタゴラス', rarity: 'Common', imageUrl: 'https://www.mycryptoheroes.net/images/heroes/2000/1006.png', quote1: '愛は理解の別名なり', quote2: 'よくできたと満足して休みなさい。そして他の人が君についてあれこれ何と言おうと言わせておけばよいのです' },
];

export const FORTUNES: Fortune[] = [
  { type: '大吉', description: '今日は最高の1日になるでしょう！クリプトの神が微笑んでいます。', color: '#fbbf24' },
  { type: '中吉', description: '良い運勢です。新しいヒーローに出会えるかもしれません。', color: '#f59e0b' },
  { type: '小吉', description: 'まずまずの運勢です。地道な努力が実を結びます。', color: '#d97706' },
  { type: '吉', description: '平穏な1日です。クエストでのドロップに期待しましょう。', color: '#b45309' },
  { type: '末吉', description: '慎重に行動すれば、災いを避けられるでしょう。', color: '#92400e' },
  { type: '凶', description: '今日は無理をせず、スタミナを温存するのが吉です。', color: '#78350f' },
];
