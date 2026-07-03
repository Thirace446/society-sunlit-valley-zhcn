
// const formatItemName = (id) => Item.of(id).displayName.getString().replace('[', '').replace(']', '')
// let wikiTable = []
// let dishGenerator = (dish, productType, categoryOverride) => {
//     let category = "main";
//     ["jam", "tart", "sorbet", "muffin", "candy", "candied", "pie", "cake", "cookie", "pudding", "jam", "jelly", "sweet", "tart", "chocolate", "snow", "gateau"].forEach((keyword) => {
//         if (dish.item.path.includes(keyword)) category = "dessert"
//     });

//     ["bottle", "drink", "eggnog", "coffee", "latte", "_tea", "juice", "cider", "hot_chocolate"].forEach((keyword) => {
//         if (dish.item.path.includes(keyword)) category = "drink"
//     });

//     JsonIO.write(`kubejs/data/cozycafe/menu/${dish.item.replace(":", "_")}.json`,
//         {
//             "item": dish.item,
//             "category": categoryOverride || category,
//             "price": dish.value,
//             "product_type": productType,
//             "flavors": [],
//             "themes": []
//         });
//     wikiTable.push({ name: formatItemName(dish.item), price: dish.value, category: categoryOverride || category, productType: productType })
// }
// global.cooking.forEach((dish) => {
//     dishGenerator(dish, "farmer")
// });

// global.wines.forEach((dish) => {
//     dishGenerator(dish, "artisan", "drink")
// });

// global.brews.forEach((dish) => {
//     dishGenerator(dish, "artisan", "drink")
// });

// global.cocktails.forEach((dish) => {
//     dishGenerator(dish, "farmer", "drink")
// });

// global.herbalBrews.forEach((dish) => {
//     dishGenerator(dish, "farmer", "drink")
// });

// global.smokedFish.forEach((dish) => {
//     dishGenerator(dish, "farmer", "main")
// });
// const categoryOrder = {
//     'drink': 1,
//     'main': 2,
//     'dessert': 3
// };

// const sortedData = wikiTable.slice().sort((a, b) => {
//     let weightA = categoryOrder[a.category.toLowerCase()] || 99;
//     let weightB = categoryOrder[b.category.toLowerCase()] || 99;

//     if (weightA !== weightB) {
//         return weightA - weightB;
//     }
//     return Number(a.price) - Number(b.price);
// });

// function arrayToWikimediaTable(data) {
//     if (!data || data.length === 0) return '';

//     const headers = Object.keys(data[0]);
//     let table = '{| class="wikitable sortable"\n';

//     headers.forEach(header => {
//         let formattedHeader = header === 'productType'
//             ? 'Product Type'
//             : header.charAt(0).toUpperCase() + header.slice(1);

//         table += `! ${formattedHeader}\n`;
//     });

//     data.forEach(item => {
//         table += '|-\n';
//         headers.forEach(header => {
//             let value = item[header];

//             if (header === 'price') {
//                 value = global.formatPrice(Number(value));
//             } else {
//                 value = String(value)
//                 value = value.charAt(0).toUpperCase() + value.slice(1)
//             }
//             table += `| ${value}\n`;
//         });
//     });

//     table += '|}';
//     return table;
// }

// console.log(arrayToWikimediaTable(sortedData));