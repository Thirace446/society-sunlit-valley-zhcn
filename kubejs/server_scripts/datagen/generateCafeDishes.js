
const formatItemName = (id) => Item.of(id).displayName.getString().replace('[', '').replace(']', '')
let wikiTable = []
const blacklist = ['herbalbrews:dried_green_tea', 'unusualfishmod:raw_aero_mono_stick', 'herbalbrews:dried_black_tea', 'herbalbrews:dried_oolong_tea'];
let dishGenerator = (dish, productType, categoryOverride) => {
    if (blacklist.includes(dish.item)) return;
    let category = "main";
    ["jam", "tart", "sorbet", "muffin", "candy", "candied", "pie", "cake", "Slice of", "cookie", "pudding", "jam", "jelly", "sweet", "tart", "chocolate", "snow", "gateau", "custard", "honey"].forEach((keyword) => {
        if (dish.item.path.includes(keyword)) category = "dessert"
    });

    ["bottle", "drink", "eggnog", "coffee", "latte", "_tea", "juice", "cider", "hot_cocoa"].forEach((keyword) => {
        if (dish.item.path.includes(keyword)) category = "drink"
    });
    let modid = dish.item.split(':')[0];
    let finalizedPrice = Math.round(dish.value * 1.5);
    let menuJson = {};
    if (false) {
        // Cozy Cafe prices
        finalizedPrice = Math.max(1, Math.min(64, Math.round(dish.value / 8)))
        menuJson.conditions = [
            {
                "type": "forge:mod_loaded",
                "modid": modid
            }
        ]
    }

    menuJson.item = dish.item;
    menuJson.category = categoryOverride || category;
    menuJson.price = finalizedPrice;
    menuJson.product_type = productType;
    menuJson.flavors = [];
    menuJson.themes = [];
    try {
        JsonIO.write(`kubejs/data/cozycafe/menu/${modid}/${dish.item.split(":")[1]}.json`, menuJson);
    } catch (err) {
        console.error(`Failed to write JSON for ${modid}: ${err}`);
    }
    wikiTable.push({ name: formatItemName(dish.item), price: finalizedPrice, category: categoryOverride || category, productType: productType })
}
global.cooking.forEach((dish) => {
    dishGenerator(dish, "shippingbin:crop_sell_multiplier")
});

global.wines.forEach((dish) => {
    dishGenerator(dish, "shippingbin:wood_sell_multiplier", "drink")
});

global.brews.forEach((dish) => {
    dishGenerator(dish, "shippingbin:wood_sell_multiplier", "drink")
});

global.cocktails.forEach((dish) => {
    dishGenerator(dish, "shippingbin:crop_sell_multiplier", "drink")
});

global.herbalBrews.forEach((dish) => {
    dishGenerator(dish, "shippingbin:crop_sell_multiplier", "drink")
});

global.smokedFish.forEach((dish) => {
    dishGenerator(dish, "shippingbin:crop_sell_multiplier", "main")
});
const categoryOrder = {
    'drink': 1,
    'main': 2,
    'dessert': 3
};

const sortedData = wikiTable.slice().sort((a, b) => {
    let weightA = categoryOrder[a.category.toLowerCase()] || 99;
    let weightB = categoryOrder[b.category.toLowerCase()] || 99;

    if (weightA !== weightB) {
        return weightA - weightB;
    }
    return Number(a.price) - Number(b.price);
});

function arrayToWikimediaTable(data) {
    if (!data || data.length === 0) return '';

    const headers = Object.keys(data[0]);
    let table = '{| class="wikitable sortable"\n';

    headers.forEach(header => {
        let formattedHeader = header === 'productType'
            ? 'Product Type'
            : header.charAt(0).toUpperCase() + header.slice(1);

        table += `! ${formattedHeader}\n`;
    });

    data.forEach(item => {
        table += '|-\n';
        headers.forEach(header => {
            let value = item[header];

            if (header === 'price') {
                value = global.formatPrice(Number(value));
            } else {
                value = String(value)
                value = value.charAt(0).toUpperCase() + value.slice(1)
            }
            table += `| ${value}\n`;
        });
    });

    table += '|}';
    return table;
}

console.log(arrayToWikimediaTable(sortedData));