class Product {
  constructor(id, line, name, price, description, rating, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.rating = rating;
    this.image = image;
    this.line = line;
  }

  get priceString() {
    return this.price.toLocaleString("en-US");
  }
}

// const products = [
//   new Product(
//     "Effaclar",
//     " Micro-peeling purifying gel",
//     493000,
//     "Làm sạch, giảm mụn Khắc phục các vết thâm mụn",
//     509000,
//     "effaclarmicropeelingpurifyinggel400ml2salicylicacidoilyskinfss.webp"
//   ),
//   new Product(
//     "Effaclar",
//     "Effaclar PURIFYING FOAMING GEL",
//     493000,
//     "Làm sạch dịu nhẹ, giảm bã nhờn Dành cho da dầu mụn",
//     5,
//     "la-roche-posay-productpage-acne-effaclar-cleansing-foaming-gel.webp"
//   ),
//   new Product(
//     "Effaclar",

//     "Effaclar ASTRINGENT LOTION",
//     493000,
//     "Toner giúp cân bằng & làm sạch sâu cho da dầu mụn",
//     5,
//     "la-roche-posay-face-care-effaclar-micro-exfoliating-astringent-toner-200ml-3433422408159-front.webp"
//   ),
//   new Product(
//     "EFFACLAR",
//     "MẶT NẠ KIỂM SOÁT BÃ NHỜN EFFACLAR",
//     493000,
//     "Thông thoáng & thanh lọc, kiểm soát bã nhờn",
//     5,
//     "larocheposayfacemaskeffaclaruncloggingpurifyingsebocontrollingmask100mlantishine0003337875533317fron.webp"
//   ),
//   new Product(
//     "EFFACLAR",

//     "MICELLAR WATER",
//     493000,
//     "Nước tẩy trang & làm sạch sâu Micellar Water dành cho da dầu mụn",
//     5,
//     "la-roche-posay-face-cleanser-effaclar-micellar-water-ultra-400ml-3337872412516-front.webp"
//   ),
//   new Product(
//     "EFFACLAR",
//     "DUO(+)",
//     397000,
//     "Kem dưỡng giảm mụn, ngừa thâm và ngăn mụn tái phát",
//     5,
//     "larocheposayfacecareeffaclarduo40ml3337875598071front.webp"
//   ),
//   new Product(
//     "EFFACLAR",
//     "A.I.",
//     479000,
//     "Chăm sóc da điều trị đốm mụn chuyên biệt",
//     5,
//     "la-roche-posay-face-care-effaclar-ai-targeted-imperfection-corrector-15ml-3433422406704-front.webp"
//   ),
//   new Product(
//     "EFFACLAR",
//     "K (+)",
//     439000,
//     "Kem dưỡng giúp kiềm dầu suốt 8 giờ và giúp giảm mụn đầu đen",
//     5,
//     "larocheposayfacecareeffaclark30ml3337872419638front.webp"
//   ),
//   new Product(
//     "ANTHELIOS",
//     "UVMUNE 400 INVISIBLE FLUID",
//     443000,
//     "Kem dưỡng giúp kiềm dầu suốt 8 giờ và giúp giảm mụn đầu đen",
//     5,
//     "larocheposayproductsunantheliosuvmune400fluidspspf503337875797597frontpng-1.webp"
//   ),
//   new Product(
//     "ANTHELIOS",
//     "DRY TOUCH FINISH MATTIFYING EFFECT",
//     443000,
//     "Bảo vệ da vượt trội. Giúp kiềm dầu tới 9H nhờ hợp chất Airlicium",
//     5,
//     "la-roche-posay-anthelios-gel-cream-non-perfumed-50ml-tube-packshot-frontnew.webp"
//   ),
// ];
