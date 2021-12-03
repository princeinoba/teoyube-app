const mongoose = require('mongoose')
const db = require('../models')

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/reactrecipes',
  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}
)

const recipeSeed = [
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-18.jpg?raw=true',
    href: 'http://www.recipezaar.com/Baked-Turkey-Sausage-Penne-327796',
    description: [
      'The eyes of your understanding being enlightened; ',
      'that ye may know what is the hope of his calling, ',
      'and what the riches of the glory of his inheritance in the saints, ',
      '-Ephesians 1:18- ',
    ],
    title: 'TEOYUBE; TYMAKWITHOHIS, CAWTROTGLOHINITS'
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-7.jpg?raw=true',
    href: 'http://teoyube.com/Promises/Iatdobymiameni-Hesbesasgianoafip-Ephphatha/Bihetcitnotlo/Tbugodfohug/Video.aspx',
    description: [
      'We then, ',
      'as workers together with him, ',
      'beseech you also that ye receive not the grace of God in vain. ',
      '-2Corinthians 6:1- ',
    ],
    title: 'WETAWTWHIBYATYRNTGOGODIV '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-10.jpg?raw=true',
    href: 'http://teoyube.com/Promises/IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG/Video.aspx',
    description: [
      '(For he saith, ',
      'I have heard thee in a time accepted, ',
      'and in the day of salvation have I succored thee: ', 
      'behold, ',
      'now is the day of salvation.) ',
      '-2Corinthians 6:2- ',
    ],
    title: 'FOHSIHAHTIATAAITDOSHISTBNITDOS '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-27.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Tuscan-Turkey-Sausage-Soup/Detail.aspx',
    description: [
      'Giving no offense in any thing, ',
      'that the mininstry be not blamed: ',
      '-2Corinthians 6:3- ',
    ],
    title: 'GNOIATTTMBNB '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-16.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Turkey-Sausage-Pie/Detail.aspx',
    description: [
      'But in all things approving ourselves as the misnisters of God, ',
      'in much patience, ',
      'in afflictions, ',
      'in necessities, ',
      'in distresses, ',
      '-2Corinthians 6:4- ',
    ],
    title: 'BIATAOATMOGODIMPIAINID '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-36.jpg?raw=true',
    href: 'http://www.grouprecipes.com/74096/turkey-sausage-stuffed-zucchini.html',
    description: [
      'In stripes, ', 
      'in imprisonments, ', 
      'in tum-ults, ', 
      'in labours, ',
      'in watchings, ', 
      'in fastings, ',
      '-2Corinthians 6:5- ',
    ],
    title: 'ISIIMITILIWIF '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-8.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Potato-and-Turkey-Sausage-Soup/Detail.aspx',
    description: [
      'By pureness, ',
      'by knowledge, ',
      'by long-suffering, ',
      'by kindness, ',
      'by the Holy Ghost, ',
      'by love unfeigned, ',
      '-2Corinthians 6:6- ',
    ],
    title: 'BPBKBLSBKBTHGBLU '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-21.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Moms-Turkey-Sausage-Patties/Detail.aspx',
    description: [
      'By the word of truth, ',
      'by the power of God, ',
      'by the armour of righteousness on the right hand and on the left, ',
      '-Corinthians 6:7- ',
    ],
    title: "BTWOTBTPOGODBTAOROTRHAOTL "
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-39.jpg?raw=true',
    href: 'http://www.epicurious.com/recipes/food/views/Turkey-Sausage-Patties-350914',
    description: [
      'By honour and dishonour, ',
      'by evil report and good report: as deceivers, ',
      'and yet true; ',
      '-2Corinthians 6:8- ',
    ],
    title: 'BHADBERAGRADAYT '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-33.jpg?raw=true',
    href: 'http://www.grouprecipes.com/24920/bears-turkey-sausage.html',
    description: [
      'As unknown, ',
      'and yet wellknown; ', 
      'as dying, ',
      'and ',
      'behold, ',
      'we live; as chastened, ',
      'and not killed, ',
      '-2Corinthians 6:9- ',
    ],
    title: 'AUAYWADABWLACANK '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-9.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Country-Potato-Pancakes/Detail.aspx',
    description: [
      'As sorrowful, ',
      'yet always rejoicing; as poor, ',
      'yet making many rich; as having nothing, ',
      'and yet possessing all things. ',
      '-2Corinthians 6:10- ',
    ],
    title: 'ASYARAPYMMRAHNAYPAT '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-51.jpg?raw=true',
    href: 'http://www.grouprecipes.com/20346/blender-potato-pancakes.html',
    description: [
      'O ye Prince, ',
      'our mouth is open unto you, ',
      'our heart is enlarged. ',
      '-2Corinthians 6:11- ',
    ],
    title: 'OYPOMIOUYOHIE '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-52.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Sweet-Potato-Pancakes-2/Detail.aspx',
    description: [
      'Ye are not straitened in us, ', 
      'but ye are straitened in your own bowels. ',
      '-2Corinthians 6:12- ',
    ],
    title: 'YANSIUBYASIYOB '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-55.jpg?raw=true',
    href: 'http://www.recipezaar.com/Rievkooche-or-Reibekuchen-Cologne-Style-Potato-Pancakes-173315',
    description: [
      'Now for a recompense in the same, ',
      '(I speak as unto my children,) ',
      'be ye also enlarged. ',
      '-2Corinthians 6:13- ',
    ],
    title: 'NFARISISAUMCBYAE '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-37.jpg?raw=true',
    href: 'http://www.recipezaar.com/Potato-Pancakes-With-Smoked-Salmon-211538',
    description: [
      'Be ye not unequally yoked together with believers: ',
      'for what fellowship hath righteousness with unrighteouness? ',
      'and what communion hath light with darkness? ',
      '-2Corinthians 6:14- ',
    ],
    title: 'BYNUYTWBFWFHRWUAWCHLWD '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-50.jpg?raw=true',
    href: 'http://www.epicurious.com/recipes/food/views/Bird-Flanagan-Potato-Pancakes-104867',
    description: [
      'And what concord hath Christ with Belial? ',
      'or what part hath he that believeth with an infidel? ',
      '-2Corinthians 6:15- ',
    ],
    title: 'AWCHCHRISTWBOWPHHTBWAI '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-15.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Sweet-Potato-Pancakes/Detail.aspx',
    description: [
      'And what agreement hath the temple of God with idols? ',
      'for ye are the temple of the living God; ',
      'as God hath said, ',
      'I will dwell in them, ',
      'and walk in them; ',
      'and I will be their God, ',
      'and they shall be my people. ',
      '-2Corinthians 6:16-',
    ],
    title: 'AWAHTTOGODWIFYATTOTLGODAGODHSIWDITAWITAIWBTGODATSBMP '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-11.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Old-Fashioned-Potato-Pancakes/Detail.aspx',
    description: [
      'Wherefore come out from among them, ',
      'and be ye separate, ',
      'saith the Lord, ',
      'and touch not the unclean thing; ',
      'and I will receive you ',
      '-2Corinthians 6:17- ',
    ],
    title: 'WCOFATABYSSTLATNTUTAIWRY '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-14.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Confetti-Potato-Pancakes/Detail.aspx',
    description: [
      'And will be a Father unto you, ', 
      'and ye shall be my sons and daughters, ', 
      'saith the Lord Almighty. ',
      '-2Corinthians 6:18- ',
    ],
    title: 'AWBAFUYAYSBMSADSTLA '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-13.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Authentic-Potato-Pancakes/Detail.aspx',
    description: [
      'Having therefore these promises, ',
      'dearly beloved, ',
      'let us cleanse ourselves from all filthiness of the flesh and spirit, ',
      'perfecting holiness in the fear of God. ',
      '-2Corinthians 7:1- ',
    ],
    title: 'HTTPDBLUCOFAFOTFASPHITFOGOD '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-6.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Taqueria-Style-Tacos---Carne-Asada/Detail.aspx',
    description: [
      'Receive us;',
      'we have wronged no man, ',
      'we have corrupted no man, ',
      'we have defrauded no man. ',
      '-2Corinthians 7:2- ',
    ],
    title: 'RUWHWNMWHCNMWHDNM '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-5.jpg?raw=true',
    href: 'http://www.recipezaar.com/Amazing-Salmon-Tacos-133959',
    description: [
      'I speak not this to condemn you: for I have said before, ',
      'that ye are in our heart to die and live with you. ',
      '-2Corinthians 7:3- ',
    ],
    title: 'ISNTTCYFIHSBTYAIOHTDALWY '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-12.jpg?raw=true',
    href: 'http://www.recipezaar.com/Chicken-Tacos-the-Tahiti-Way-94613',
    description: [
      'Great is my boldness of speech toward you, ',
      'great is my glorying of you: I am filled with comfort, ',
      'I am exceeding joyful in all our tribulation. ',
      '-2Corinthians 7:4- ',
    ],
    title: 'GIMBOSPTYGIMGOYIAFWCIAEJIAOT '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-20.jpg?raw=true',
    href: 'http://www.recipezaar.com/Chili-Tacos-47685',
    description: [
      'For,',
      'when we were come into Macedonia, ',
      'our flesh had no rest, ',
      'but we were troubled on every side; ',
      'without were fightings, ',
      'within were fears. ',
      '-2Corinthians 7:5- ',
    ],
    title: 'FWWWCIMOFHNRBWWTOESWWFWWF '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-31.jpg?raw=true',
    href: 'http://www.grouprecipes.com/81244/the-taco-rack-seafood-tacos.html',
    description: [
      'Nevertheless God, ',
      'that comforteth those that are cast down, ',
      'comforted us by the coming of Titus; ',
      '-2Corinthians 7:6- ',
    ],
    title: 'NGODTCTTACDCUBTCOT '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-28.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Slow-Cooker-Shredded-Venison-for-Tacos/Detail.aspx',
    description: [
      'And not by his coming only, ',
      'but by the consolation wherewith he was comforted in you, ',
      'when he told us your earnest desire, ',
      'your mourning, ',
      'your fervent mind toward me; ',
      'so that I rejoiced the more. ',
      '-2Corinthians 7:7- ',
    ],
    title: 'ANBHCOBBTCWHWCIYWHTUYEDYMYFMTMSTIRTM '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-25.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Chipotle-Tilapia-Tacos-with-Mango-Cilantro-Salsa/Detail.aspx',
    description: [
      'For though I made you sorry with a letter, ', 
      'I do not repent, ', 
      'though I did repent: for I perceive that the same epistle hath made you sorry, ', 
      'though it were but for a season. ',
      '-2Corinthians 7:8- ',
    ],
    title: 'FTIMYSWALIDNRTIDRFIPTTSEHMYSTIWBFAS '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-38.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Oaxacan-Tacos/Detail.aspx',
    description: [
      'Now I rejoice, ',
      'not that ye were made sorry, ',
      'but that ye sorrowed to repentance: ',
      'for ye were made sorry after a godly manner, ',
      'that ye might receive damage by us in nothing. ',
      '-2Corinthians 7:9- ',
    ],
    title: 'NIRNTYWMSBTYSTRFYWMSAAGMTYMRDBUIN '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-26.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Pie-Iron-Tacos/Detail.aspx',
    description: [
      'For godly sorrow worketh repentance to salvation not to be repented of: ',
      'but the sorrow of the world worketh death. ',
      '-2Corinthians 7:10- ',
    ],
    title: 'Pie Iron Tacos '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-44.jpg?raw=true',
    href: 'http://www.recipezaar.com/Spicy-Beef-Tacos-139608',
    description: [
      'For behold this selfsame thing, ',
      'that ye sorrowed after a godly sort, ',
      'what carefullness it wrought in you, ',
      'yea, ',
      'what clearing of yourselves, ',
      'yea, ',
      'what indignation, ',
      'yea, ',
      'what fear, ',
      'yea, ',
      'what vehement desire, ',
      'yea, ',
      'what zeal, ',
      'yea, ',
      'what revenge! ',
      'In all things ye have approved yourselves to be clear in this matter. ',
      '-2Corinthians 7:11-  ',
    ],
    title: 'FBTSTTYSAAGSWCIWIYYWCOYYWIYWFYWVDYWZYWR '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-49.jpg?raw=true',
    href: 'http://www.recipezaar.com/Cajun-Hamburger-Steak-122095',
    description: [
      'Wherefore, ',
      'though I wrote unto you, ',
      'I did it not for his cause that had done the wrong, ',
      'nor for his cause that suf-fered wrong, ',
      'but that our care for you in the sight of God might appear unto you. ',
      '-2Corinthians 7:12-  ',
    ],
    title: 'WTIWUYIDINFHCTHDTWNFHCTSWBTOCFYITSOGODMAUY '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-42.jpg?raw=true',
    href: 'http://www.recipezaar.com/Hamburger-or-Sandwich-Buns-or-Hot-Dog-Buns-94993',
    description: [
      'Therefore we were comforted in your comfort: ',
      'yea, ',
      'and exceedingly the more joyed we for the joy of Titus, ',
      'because his spirit was refreshed by you all. ',
      '-2Corinthians 7:13-  ',
    ],
    title: 'TWWCIYCYAETMJWFTJOTBHSWRBYA '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-47.jpg?raw=true',
    href: 'http://www.grouprecipes.com/73371/arabic-bread-loaf-or-hamburger-buns.html',
    description: [
      'For if I have boasted any thing to him of you, ',
      'I am not ashamed; ',
      'but as we spake all things to you in truth, ',
      'even so our boasting, ',
      'which I made before Titus, ',
      'is founda truth. ',
      '-2Corinthians 7:14- ',
    ],
    title: 'FIIHBATTHOYIANABAWSATTYITESOBWIMBTIFT '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-56.jpg?raw=true',
    href: 'http://www.recipezaar.com/Hamburger-and-Kidney-Beans-103316',
    description: [
      'And his inward affection is more abundant toward you ',
      'whilst he remembereth the obedience of you all, ',
      'how with fear and trembling ye received him. ',
      '-2Corinthians 7:15-  ',
    ],
    title: 'AHIAIMATYWHRTOOYAHWFATYRH '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-53.jpg?raw=true',
    href: 'http://www.grouprecipes.com/44639/hamburger-soup-corchef-style.html',
    description: [
      'I rejoice therefore that I have confi-dence in you in all things. ',
      '-2Corinthians 7:16-  ',
    ],
    title: 'IRTTIHCIYIAT '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-54.jpg?raw=true',
    href: 'http://www.recipezaar.com/Deviled-Beef-Hamburger-Patties-277747',
    description: [
      'Therefore being justified by faith, ',
      'we have peace with God through our Lord Jesus Christ: ',
      '-Romans 5:1- ',
    ],
    title: 'TBJBFWHPWGODTOLJESUSCHRIST '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-46.jpg?raw=true',
    href: 'http://www.recipezaar.com/Easy-and-Tasty-Hamburger-Gravy-253447',
    description: [
      'By whom also we have access by faith into this grace wherein we stand, ',
      'and rejoice in hope of the glory of God.  ',
      '-Romans 5:2-  ',
    ],
    title: 'BWAWHABFITGWWSARIHOTGOGOD '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-45.jpg?raw=true',
    href: 'http://www.recipezaar.com/Nanas-Favorite-Hamburger-Gravy-139492',
    description: [
      'And not only so ',
      'but we glory in tribulations also; ',
      'knowing that tribulation worketh patience  ',
      '-Romans 5:3-  ',
    ],
    title: "ANOSBWGITAKTTWP "
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-37.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Hamburger-Soup-V/Detail.aspx',
    description: [
      'And patience, ',
      'experience; ',
      'and experience, ',
      'hope:    ',
      '-Romans 5:4-',
    ],
    title: 'APEAEH '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-35.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Hamburger-Casserole/Detail.aspx',
    description: [
      'And hope maketh not ashamed; ',
      'because the love of God is shed abroad in our hearts by the Holy Ghost which is given unto us.  ',
      '-Romans 5:5-  ',
    ],
    title: 'AHMNABTLOGODISAIOHBTHOLYGHOSTWIGUU '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-28.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Homemade-Crispy-Seasoned-French-Fries/Detail.aspx',
    description: [
      'For when we were yet without strength, ', 
      'in due time Christ died for the ungodly. ',
      '-Romans 5:6-   ',
    ],
    title: 'FWWWYWSIDTCHRISTDFTU '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-30.jpg?raw=true',
    href:  'http://www.recipezaar.com/Cauliflower-That-Tastes-Like-French-Fries-116591',
    description: [
      'For scarcely for a righteous man will one die: ',
      'yet peradventure for a good man some would even dare to die. ',
      '-Romans 5:7-  ',
    ],
    title: 'FSFARMWODYPFAGMSWEDTD '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-29.jpg?raw=true',
    href: 'http://www.grouprecipes.com/70293/masala-french-fries.html',
    description: [
      'But God commendeth his love toward us, ', 
      'in that, ', 
      'while we were yet sinners, ', 
      'Christ died for us.  ',
      '-Romans 5:8-   ',
    ],
    title: 'BGODCHLTUITWWWYSCHRISTDFU '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-23.jpg?raw=true',
    href: 'http://www.grouprecipes.com/68899/french-fries.html',
    description: [
      'Much more then, ',
      'being now justified by his blood, ',
      'we shall be saved from wrath through him.  ',
      '-Romans 5:9-  ',
    ],
    title: 'MMTBNJBHBWSBSFWTH '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-24.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Yuca-French-Fries/Detail.aspx',
    description: [
      'For if, ', 
      'when we were enemies, ', 
      'we were reconciled to God by the death of his Son; ', 
      'much more, ',
      'being reconciled, ', 
      'we shall be saved by his life.  ',
      '-Romans 5:10-  ',
    ],
    title: 'FIWWWEWWRTGODBTDOHSMMBRWSBSBHL '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-19.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Cilantro-French-Fries/Detail.aspx',
    description: [
      'And not only so, ', 
      'but we also joy in God through our Lord Jesus Christ, ', 
      'by whom we have now received the atonement.  ',
      '-Romans 5:11-  ',
    ],
    title: 'ANOSBWAJIGODTOLJESUSCHRISTBWWHNRTA '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-40.jpg?raw=true',
    href: 'http://www.recipezaar.com/Frozen-French-Fries-52058',
    description: [
      'Wherefore, ', 
      'as by one man sin entered into the world, ', 
      'and death by sin, ',
      'and so death pased upon all men, ', 
      'for that all have sinned:  ',
      '-Romans 5:12-   ',
    ],
    title: 'WABOMSEITWADBSASDPUAMFTAHS '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-41.jpg?raw=true',
    href: 'http://www.recipezaar.com/Buffalo-Fries-333244',
    description: [
      '(For until the law sin was in the world: ', 
      'but sin is not imputed when there is no law   ',
      '-Romans 5:13-    ',
    ],
    title: '(FUTLSWITWBSINIWTINL '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-43.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Tail-Burner-Firehouse-French-Fries/Detail.aspx',
    description: [
      'Nevertheless death reigned from Adams to Moses, ',
      'even over them that had not sinned after the similitude of Adams transgression, ',
      'who is the figure of him that was to come.  ',
      '-Romans 5:14-   ',
    ],
    title: 'NDRFATMEOTTHNSATSOATWITFOHTWTC '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-46.jpg?raw=true',
    href: 'http://www.recipezaar.com/Oven-French-Fries-29704',
    description: [
      'But not as the offense, ',
      'so also is the free gift. ',
      'For if through the offense of one many be dead, ',
      'much more the grace of God, ',
      'and the gift by grace, ',
      'which is by one man, ',
      'Jesus Christ, ',
      'hath abounded unto many. ',
      '-Romans 5:15- ',
    ],
    title: 'BNATOSAITFGFITTOOOMBDMMTGOGODATGBGWIBOMJESUSCHRISTHAUM '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-56.jpg?raw=true',
    href: 'http://www.grouprecipes.com/66391/fruity-quinoa-salad.html',
    description: [
      'And not as it was by one that sinned, ', 
      'so is the gift: ', 
      'for the judgement was by one to condemnation, ', 
      'but the free gift is of many offenses unto justification.  ',
      '-Romans 5:16-   ',
    ],
    title: 'ANAIWBOTSSITGFTJWBOTCBTFGIOMOUJ '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-18.jpg?raw=true',
    href: 'http://www.recipezaar.com/Curried-Quinoa-Salad-With-Cranberries-122057',
    description: [
      'For if by one man offense death reigned by one; ',
      'much more they which receive abundance of grace and of the gift of righteousness shall reign in life by one, ',
      'Jesus Christ.)  ',
      '-Romans 5:17-  ',
    ],
    title: 'FIBOMODRBOMMTWRAOGAOTGORSRILBOJESUSCHRIST '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-45.jpg?raw=true',
    href: 'http://www.recipezaar.com/Basic-Quinoa-235534',
    description: [
      'Therefore,',
      'as by the offense of one judgment came upon all men to condemnation; ',
      'even so by the righteousness of one the free gift came upon all men unto justification of life.   ',
      '-Romans 5:18-  ',
    ],
    title: 'TABTOOOJCUAMTCESBTROOTFGCUAMUJOL '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-49.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Quinoa-Salad-with-Dried-Fruit-and-Nuts/Detail.aspx',
    description: [
      'For as by one man disobedience many were made sinners, ',
      'so by the obedience of one shall many be made righteous. ',
      '-Romans 5:19-  ', 
    ],
    title: 'FABOMDMWMSSBTOOOSMBMR '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-37.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Quinoa-with-Mushrooms/Detail.aspx',
    description: [
      'Moreover the law entered, ',
      'that the offense might abound. ',
      'But where sin abounded, ',
      'grace did much more abound: ',
      '-Romans 5:20-  ',
    ],
    title: 'MTLETTOMABWSAGDMMA '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-55.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Tomato-Mint-Quinoa-Salad/Detail.aspx',
    description: [
      'That as sin hath reigned unto death, ',
      'even so might grace reign through righteousness unto eternal life by Jesus Christ our Lord. ',
      '-Romans 5:21-  ',
    ],
    title: 'TASHRUDESMGRTRUELBJESUSCHRISTOL '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-48.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Veggie-Quinoa/Detail.aspx',
    description: [
      'What shall we say then? ',
      'Shall we continue in sin, ',
      'that grace may abound? ',
      '-Romans 6:1-',
    ],
    title: 'WSWSTSWCISTGMA '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-14.jpg?raw=true',
    href: 'http://www.recipezaar.com/Quinoa-Salad-331992',
    description: [
      'God forbid. ',
      'How shall we, ',
      'that are dead to sin, ',
      'live any longer therein?   ',
      '-Romans 6:2-   ',
    ],
    title: 'GODFHSWTADTSLALT '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-20.jpg?raw=true',
    href: 'http://www.recipezaar.com/Five-Or-More-Ingredient-Garlic-Quinoa-121064',
    description: [
      'Know ye not, ',
      'that so many of us as were baptized into Jesus Christ were baptized into his death?   ',
      '-Romans 6:3-   ',
    ],
    title: 'KYNTSMOUAWBIJESUSCHRISTWBIHD '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-10.jpg?raw=true',
    href: 'http://www.recipezaar.com/Quinoa-Pilaf-103775',
    description: [
      'Therefore we are buried with him by baptism into death: ',
      'that like as Christ was raised up from the dead by the glory of the Father, ',
      'even so we also should walk in newness of life.   ',
      '-Romans 6:4-    ',
    ],
    title: 'TWABWHBBIDTLACHRISTWRUFTDBTGOTFESWASWINOL '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-38.jpg?raw=true',
    href: 'http://www.grouprecipes.com/11241/home-fried-chicken.html',
    description: [
      'For if we have been planted together in the likeness of his death, ',
      'we shall be also in the likeness of his resurrection:    ',
      '-Romans 6:5-    ',
    ],
    title: 'FIWHBPTITLOHDWSBAITLOHR '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-18.jpg?raw=true',
    href: 'http://www.recipezaar.com/Chicken-in-a-Pot-Plus-Stock-or-Dumplings-115070',
    description: [
      'Knowing this,',
      'that our old man is crucified with him, ',
      'that the body of sin might be destroyed, ',
      'that henceforth we should not serve sin.    ',
      '-Romans 6:6-     ',
    ],
    title: 'KTTOOMICWHTTBOSMBDTHWSNSS '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-7.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Tipsy-Chicken/Detail.aspx',
    description: [
      'For he that is dead is freed from sin,   ',
      '-Romans 6:7-      ',
    ],
    title: 'FHTIDIFFS '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-9.jpg?raw=true',
    href: 'http://www.recipezaar.com/2-in-1-Herbed-Chicken-Leftover-Chicken-Salad-108955',
    description: [
      'Now if we be dead with Christ, ',
      'we believe that we shall also live with him:   ',
      '-Romans 6:8-    ',
    ],
    title: 'NIWBDWCHRISTWBTWSALWH '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-21.jpg?raw=true',
    href: 'http://www.recipezaar.com/Beer-Can-Chicken-312508',
    description: [
      'Knowing that Christ being raised from the dead dieth no more, ',
      'death hath no more dominion over him.  ',
      '-Romans 6:9-    ',
    ],
    title: 'KTCHRISTBRFTDDNMDHNMDOH '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-28.jpg?raw=true',
    href: 'http://www.grouprecipes.com/67612/asian-chicken-noodle-soup.html',
    description: [
      'For in that he died, ',
      'he died unto sin once: ',
      'but in that he liveth, ',
      'he liveth unto God.  ',
      '-Romans 6:10-     ',
    ],
    title: 'FITHDBITHLHLUGOD '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-27.jpg?raw=true',
    href: 'http://www.recipezaar.com/Chez-Panisse-Brine-for-Pork-Chicken-and-Turkey-131506',
    description: [
      'Likewise reckon ye also yourselves to be dead indeed unto sin,  ',
      'but alive unto God through Jesus Christ our Lord.    ',
      '-Romans 6:11-     ',
    ],
    title: 'LRYAYTBDIUSBAUGODTJESUSCHRISTOL '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-22.jpg?raw=true',
    href: 'http://www.recipezaar.com/Chicken-Breasts-Stuffed-With-Olives-and-Goat-Cheese-113177',
    description: [
      'Let not sin therefore reign in your mortal body, ',
      'that ye should obey it in the lusts thereof    ',
      '-Romans 6:12-     ',
    ],
    title: 'LNSTRIYMBTYSOIITLT '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-23.jpg?raw=true',
    href: 'http://www.recipezaar.com/Ask-for-More-Chicken-332993',
    description: [
      'Neither yield ye your members as instruments of unrighteousness unto sin: ',
      'but yield yourselves unto God, ',
      'as those that are alive from the dead, ',
      'and your members as instruments of righteousness unto God.      ',
      '-Romans 6:13-    ',
    ],
    title: 'NYYYMAIOUUSATTAAFTDAYMAIORUGOD '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-30.jpg?raw=true',
    href: 'http://www.recipezaar.com/Chicken-Quesadillas-Homemade-200392',
    description: [
      'For sin shall not have dominion over you: ',
      'for ye are not under the law, ',
      'but under grace. ',
      '-Romans 6:14-     ',
    ],
    title: 'FSSNHDOYFYANUTLBUG '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-35.jpg?raw=true',
    href: 'http://www.recipezaar.com/BBQ-Chicken-Pizza-144689',
    description: [
      'What then? ',
      'shall we sin, ',
      'because we are not under the law, ',
      'but under grace? ',
      'God forbid.   ',
      '-Romans 6:15-',
    ],
    title: 'WTSWSBWANUTLBUGGODF'
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-51.jpg?raw=true',
    href: 'http://www.grouprecipes.com/65487/basic-chicago-style-pizza.html',
    description: [
      'Know ye not, ',
      'that to whom ye yield yourselves servants to obey, ',
      'his servants ye are to whom ye obey; ',
      'whether of sin unto death, ',
      'or of obedience unto righteousness?   ',
      '-Romans 6:16-   ',
    ],
    title: 'KYNTTWYYYSTOHSYATWYOWOSUDOOOUR '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-48.jpg?raw=true',
    href: 'http://www.recipezaar.com/BBQd-Cheeseburger-Pizza-299376',
    description: [
      'But God be thanked, ',
      'that ye were the servants of sin, ',
      'but ye have obeyed from the heart that form of doctrine which was delivered you.   ',
      '-Romans 6:17-    ',
    ],
    title: "BGODBTTYWTSOSBYHOFTHTFODWWDY "
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-46.jpg?raw=true',
    href: 'http://www.recipezaar.com/Healthy-Italian-Bread-Sticks-or-Pizza-Crust-252423',
    description: [
      'Being then made free from sin, ',
      'ye became the servants of righteousness.  ',
      '-Romans 6:18-     ',
    ],
    title: 'BTMFFSYBTSOR '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-45.jpg?raw=true',
    href: 'http://www.recipezaar.com/Bacon-Cheeseburger-Pizza-205270',
    description: [
      'I speak after the manner of men because of the infirmity of your flesh: ',
      'for as ye have yielded your members servants to uncleanness and to iniquity unto iniquity; ',
      'even so now yield your members servants to righteousness unto holiness.    ',
      '-Romans 6:19-       ',
    ],
    title: 'ISATMOMBOTIOYFFAYHYYMSTUATIUIESNYYMSTRUH '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-44.jpg?raw=true',
    href: 'http://www.recipezaar.com/Cinnamon-Pizza-Sticks-With-Dipping-Glaze-167598',
    description: [
      'For when ye were the servants of sin, ',
      'ye were free from righteousness.    ',
      '-Romans 6:20-   ',
    ],
    title: 'FWYWTSOSYWFFR '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-43.jpg?raw=true',
    href: 'http://www.recipezaar.com/Gluten-Free-Pepperoni-Pizza-Quesadilla-302814',
    description: [
      'What fruit had ye then in those things whereof ye are now ashamed? ',
      'for the end of those things is death. ',
      '-Romans 6:21-   ',
    ],
    title: 'WFHYTITTWYANAFTEOTTID '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-33.jpg?raw=true',
    href: 'http://allrecipes.com/Recipe/Italian-Escarole-Pizza/Detail.aspx',
    description: [
      'But now being made free from sin, ',
      'and become servants to God, ',
      'ye have your fruit unto holiness, ',
      'and the end everlasting life.   ',
      '-Romans 6:22-     ',
    ],
    title: 'BNBMFFSABSTGODYHYFUHATEEL '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-16.jpg?raw=true',
    href:  'http://allrecipes.com/Recipe/Goat-Cheese-Arugula-Pizza---No-Red-Sauce/Detail.aspx',
    description: [
      'For the wages of sin is death; ',
      'but the gift of God is eternal life through Jesus Christ our Lord.   ',
      '-Romans 6:23-     ',
    ],
    title: 'FTWOSIDBTGOGODIELTJESUSCHRISTOL '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-39.jpg?raw=true',
    href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
    description: [
      'Prince, ',
      'a servant and an apostle of Jesus Christ, ',
      'to them that have obtained like precious faith with us through the righteousness of God and our Saviour Jesus Christ:    ',
      '-2Peter 1:1-      ',
    ],
    title: 'PASAAAOJESUSCHRISTTTTHOLPFWUTTROGODAOSJESUSCHRIST '
  },
  {
    thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-32.jpg?raw=true',
    href: '',
    description: [
      'Grace and peace be multiplied unto you through the knowledge of God, ',
      'and of Jesus our Lord  ',
      '-2Peter 1:2-   ',
    ],
    title: 'GAPBMUYTTKOGODAOJESUSOL'
  },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-42.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'According as his divine power hath given unto us all things that pertain unto life and godliness, ',
  //     'through the knowledge of him that hath called us to glory and virtue:   ',
  //     '-2Peter 1:3-    ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-47.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'Whereby are given unto us exceeding great and precious promises: ',
  //     'that by these ye might be partakers of the divine nature, ',
  //     'having escaped the corruption that is in the world through lust.     ',
  //     '-2Peter 1:4-    ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-26.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'And beside this, ',
  //     'giving all diligence, ',
  //     'add to your faith virtue; ',
  //     'and to virtue, ',
  //     'knowledge;     ',
  //     '-2Peter 1:5-     ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-13.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'And to knowledge temperance; ',
  //     'and to temperance, ',
  //     'patience; ',
  //     'and to patience, ',
  //     'godliness;   ',
  //     '-2Peter 1:6-     ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-36.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'And to godliness, ',
  //     'and to brotherly kindness, ',
  //     'charity.   ',
  //     '-2Peter 1:7-    ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-54.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'For if these things be in you, ',
  //     'and abound, ',
  //     'they make you that ye shall neither be barren nor unfaithful in the knowledge of our Lord Jesus Christ.    ',
  //     '-2Peter 1:8-      ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-38.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'But he that lacketh these things is blind, ',
  //     'and cannot see afar off, ',
  //     'and hath forgotten that he was purged from his old sins,    ',
  //     '-2Peter 1:9-  ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-12.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'Wherefore the rather, ',
  //     'brethren, ',
  //     'give deligence to make your calling and election sure: ',
  //     'for if ye do these things, ',
  //     'ye shall never fall: ',
  //     '-2Peter 1:10-',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-37.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'For so an entrance shall be ministered unto you abundantly into the everlasting kingdom of our Lord and Saviour Jesus Christ.   ',
  //     '-2Peter 1:11-   ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-6.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'Wherefore I will not be negligent to put you always in remembrance of these things, ',
  //     'though ye know them, ',
  //     'and be established in the present truth.  ',
  //     '-2Peter 1:12-   ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-25.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'Yea, ',
  //     'I think it meet, ',
  //     'as long as I am in this tabernacle, ',
  //     'to stir you up by putting you in remembrance, ',
  //     '-2Peter 1:13-   ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-55.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description:[
  //     'Knowing that shortly I must put off this my tabernacle, ',
  //     'even as our Lord Jesus Christ hath showed me.   ',
  //     '-2Peter 1:14-     ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-34.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'Moreover I will endeavor that ye may be able after my decease to have these things always in remembrance.  ',
  //     '-2Peter 1:15-    ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-8.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'For we have not followed cunningly devised fables, ',
  //     'when we made known unto you the power and coming of our Lord Jesus Christ, ',
  //     'but were eyewitnesses of his majesty.    ',
  //     '-2Peter 1:16-   ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-31.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'For he received from God the Father honor and glory, ',
  //     'whenthere came such a voice to him from the excellent glory, ',
  //     'This is my beloved Son, ',
  //     'in whom I am well pleased.   ',
  //     '-2Peter 1:17-',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-24.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'And this voice which came from heaven we heard, ',
  //     'when we were with him in the holy mount.   ',
  //     '-2Peter 1:18-    ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-28.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'We have also more sure word of prophecy; ',
  //     'whereunto ye do well that ye take heed, ',
  //     'as unto light that shineth in a dark place, ',
  //     'until the day dawn, ',
  //     'and the day star arise in your hearts.   ',
  //     '-2Peter 1:19-   ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-15.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'Knowing this first, ',
  //     'that no prophecy of the scripture is of any private interpretation.   ',
  //     '-2Peter 1:20- ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // },
  // {
  //   thumbnail: 'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-10.jpg?raw=true',
  //   href: 'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
  //   description: [
  //     'For the prophecy came not in old time by the will of man: ',
  //     'but holy men of God spake as they were moved by the Holy Ghost.    ',
  //     '-2Peter 1:21-   ',
  //     'Script: IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG.'
  //   ],
  //   title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) '
  // }
]

db.Recipe.remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
