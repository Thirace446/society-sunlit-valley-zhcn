console.info("[SOCIETY-S-COBBLEMON] addCobblemonCookingRecipes.js loaded");

ServerEvents.recipes((e) => {
    const mochiBase = (vitamin, mochi) => {
        e.custom({
            type: "farmersdelight:cooking",
            cookingtime: 2000,
            experience: 3.0,
            ingredients: [
                {
                    item: "farmersdelight:cooked_rice",
                },
                {
                    item: "golemoverhaul:honey_blob",
                },
                {
                    item: `cobblemon:${vitamin}`,
                }
            ],
            result: {
                item: `cobblemon:${mochi}_mochi`,
                count: 4
            },
        });
    }

    mochiBase("hp_up", "health");
    mochiBase("iron", "resist");
    mochiBase("protein", "muscle");
    mochiBase("carbos", "swift");
    mochiBase("calcium", "genius");
    mochiBase("zinc", "clever");

    e.custom({
        type: "farmersdelight:cooking",
        cookingtime: 2000,
        experience: 3.0,
        ingredients: [
            {
                item: "farmersdelight:cooked_rice",
            },
            {
                item: "golemoverhaul:honey_blob",
            },
            {
                item: `sunlit_cobblemon:venomshine`,
            }
        ],
        result: {
            item: `cobblemon:fresh_start_mochi`,
        },
    });


    const hyperCandyBase = (candy, mochi, increase) => {
        e.custom({
            type: "farmersdelight:cooking",
            cookingtime: 2000,
            experience: 3.0,
            ingredients: [
                {
                    item: `cobblemon:${mochi}_mochi`,
                },
                {
                    item: "cobblemon:enigma_berry",
                },
                {
                    item: "sunlit_cobblemon:mystica_branch",
                },
                {
                    item: "cobblemon:exp_candy_l",
                },
                {
                    item: "cobblemon:exp_candy_l",
                },
                {
                    item: increase ? "society:mystic_syrup" : `sunlit_cobblemon:venomshine`,
                }
            ],
            result: {
                item: `cobblemon:${candy}_candy`,
                count: increase ? 2 : 4
            },
        });
    }


    hyperCandyBase("health", "health", true);
    hyperCandyBase("tough", "resist", true);
    hyperCandyBase("mighty", "muscle", true);
    hyperCandyBase("quick", "swift", true);
    hyperCandyBase("smart", "genius", true);
    hyperCandyBase("courage", "clever", true);

    hyperCandyBase("sickly", "health");
    hyperCandyBase("brittle", "resist");
    hyperCandyBase("weak", "muscle");
    hyperCandyBase("slow", "swift");
    hyperCandyBase("numb", "genius");
    hyperCandyBase("coward", "clever");

    const poffletBase = (pofflet, catalyst) => {
        e.custom({
            type: "farm_and_charm:stove",
            experience: 1.2,
            ingredients: [
                {
                    "item": "bakery:sweet_dough"
                },
                {
                    item: catalyst,
                },
                {
                    item: "sunlit_cobblemon:sun_drops",
                }
            ],
            item: `sunlit_cobblemon:${pofflet}_pofflet`,
            count: 1
        });
    }

    poffletBase("plain", "sunlit_cobblemon:moomoo_cheese");
    poffletBase("mossy", "sunlit_cobblemon:strange_spore");
    poffletBase("frosty", "society:frozen_tear");
    poffletBase("deadly", "sunlit_cobblemon:venomshine");
    poffletBase("deadly", "sunlit_cobblemon:spider_milk");
    poffletBase("spicy", "vintagedelight:pepper_jam_mason_jar");
    poffletBase("captivating", "sunlit_cobblemon:mystica_branch");
    poffletBase("crystalline", "society:spinel");
    poffletBase("mana", "society:mana_fruit");
})