README.md

var p = [
  {
    "name": " Micro-peeling purifying gel",
    "price": 493000,
    "description": "Làm sạch, giảm mụn Khắc phục các vết thâm mụn",
    "rating": 509000,
    "image": "effaclarmicropeelingpurifyinggel400ml2salicylicacidoilyskinfss.webp",
    "line": "Effaclar"
  },
  {
    "name": "Effaclar PURIFYING FOAMING GEL",
    "price": 493000,
    "description": "Làm sạch dịu nhẹ, giảm bã nhờn Dành cho da dầu mụn",
    "rating": 5,
    "image": "la-roche-posay-productpage-acne-effaclar-cleansing-foaming-gel.webp",
    "line": "Effaclar"
  },
  {
    "name": "Effaclar ASTRINGENT LOTION",
    "price": 493000,
    "description": "Toner giúp cân bằng & làm sạch sâu cho da dầu mụn",
    "rating": 5,
    "image": "la-roche-posay-face-care-effaclar-micro-exfoliating-astringent-toner-200ml-3433422408159-front.webp",
    "line": "Effaclar"
  },
  {
    "name": "MẶT NẠ KIỂM SOÁT BÃ NHỜN EFFACLAR",
    "price": 493000,
    "description": "Thông thoáng & thanh lọc, kiểm soát bã nhờn",
    "rating": 5,
    "image": "larocheposayfacemaskeffaclaruncloggingpurifyingsebocontrollingmask100mlantishine0003337875533317fron.webp",
    "line": "EFFACLAR"
  },
  {
    "name": "MICELLAR WATER",
    "price": 493000,
    "description": "Nước tẩy trang & làm sạch sâu Micellar Water dành cho da dầu mụn",
    "rating": 5,
    "image": "la-roche-posay-face-cleanser-effaclar-micellar-water-ultra-400ml-3337872412516-front.webp",
    "line": "EFFACLAR"
  },
  {
    "name": "DUO(+)",
    "price": 397000,
    "description": "Kem dưỡng giảm mụn, ngừa thâm và ngăn mụn tái phát",
    "rating": 5,
    "image": "larocheposayfacecareeffaclarduo40ml3337875598071front.webp",
    "line": "EFFACLAR"
  },
  {
    "name": "A.I.",
    "price": 479000,
    "description": "Chăm sóc da điều trị đốm mụn chuyên biệt",
    "rating": 5,
    "image": "la-roche-posay-face-care-effaclar-ai-targeted-imperfection-corrector-15ml-3433422406704-front.webp",
    "line": "EFFACLAR"
  },
  {
    "name": "K (+)",
    "price": 439000,
    "description": "Kem dưỡng giúp kiềm dầu suốt 8 giờ và giúp giảm mụn đầu đen",
    "rating": 5,
    "image": "larocheposayfacecareeffaclark30ml3337872419638front.webp",
    "line": "EFFACLAR"
  },
  {
    "name": "UVMUNE 400 INVISIBLE FLUID",
    "price": 443000,
    "description": "Kem dưỡng giúp kiềm dầu suốt 8 giờ và giúp giảm mụn đầu đen",
    "rating": 5,
    "image": "larocheposayproductsunantheliosuvmune400fluidspspf503337875797597frontpng-1.webp",
    "line": "ANTHELIOS"
  },
  {
    "name": "DRY TOUCH FINISH MATTIFYING EFFECT",
    "price": 443000,
    "description": "Bảo vệ da vượt trội. Giúp kiềm dầu tới 9H nhờ hợp chất Airlicium",
    "rating": 5,
    "image": "la-roche-posay-anthelios-gel-cream-non-perfumed-50ml-tube-packshot-frontnew.webp",
    "line": "ANTHELIOS"
  }
];

p.forEach((e, index) => { e.id = index; });

localStorage.setItem("products", JSON.stringify(p));