
// const formatItemName = (id) => Item.of(id).displayName.getString().replace('[', '').replace(']', '')
// let wikiTable = []
// let dishGenerator = (dish, productType, categoryOverride) => {
//     let category = "main";
//     ["jam", "tart", "sorbet", "muffin", "candy", "candied", "pie", "cake", "cookie", "pudding", "jam", "jelly", "sweet", "tart", "chocolate", "snow", "gateau", "custard", "honey"].forEach((keyword) => {
//         if (dish.item.path.includes(keyword)) category = "dessert"
//     });

//     ["bottle", "drink", "eggnog", "coffee", "latte", "_tea", "juice", "cider", "hot_cocoa"].forEach((keyword) => {
//         if (dish.item.path.includes(keyword)) category = "drink"
//     });
//     let modid = dish.item.split(':')[0];

//     try {
//         JsonIO.write(`kubejs/data/cozycafe/menu/${modid}/${dish.item.split(":")[1]}.json`,
//             {
//                 "item": dish.item,
//                 "category": categoryOverride || category,
//                 "price": dish.value * 1.5,
//                 "product_type": productType,
//                 "flavors": [],
//                 "themes": []
//             });
//     } catch (err) {
//         console.error(`Failed to write JSON for ${modid}: ${err}`);
//     }
//     wikiTable.push({ name: formatItemName(dish.item), price: dish.value * 1.5, category: categoryOverride || category, productType: productType })
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