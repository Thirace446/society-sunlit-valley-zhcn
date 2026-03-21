
const runRanchingDataGen = false;

if (runRanchingDataGen) {
    const cowMilk = { sm: "society:milk", lg: "society:large_milk" };

    const sheepMilk = { sm: "society:sheep_milk", lg: "society:large_sheep_milk" };

    const ranchingDef = [
        {
            pokemon: "corsola",
            forages: [
                {
                    item: "crabbersdelight:coral_fragments",
                    count: 4,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "geodude",
            forages: [
                {
                    item: "society:geode",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:geode",
                    count: 2,
                    chance: 0.3,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "graveler",
            forages: [
                {
                    item: "society:geode",
                    count: 2,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:geode",
                    count: 4,
                    chance: 0.45,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "golem",
            forages: [
                {
                    item: "society:geode",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:omni_geode",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "komala",
            forages: [
                {
                    item: "society:tanuki_leaf",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 9
                }
            ],
        },
        {
            pokemon: "magikarp",
            forages: [
                {
                    item: "society:carp_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:carp_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:carp_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:carp_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "carvanha",
            forages: [
                {
                    item: "society:piranha_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:piranha_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:piranha_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:piranha_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "cubone",
            forages: [
                {
                    item: "betterarcheology:artifact_shards",
                    count: 3,
                    chance: 0.25,
                    min_hearts: 6
                },
                {
                    item: "mysticaloaktree:wise_oak",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "trevenant",
            forages: [
                {
                    item: "society:pine_tar",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                },
                {
                    item: "mysticaloaktree:wise_oak",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "nacli",
            forages: [
                {
                    item: "meadow:alpine_salt",
                    count: 4,
                    chance: 1,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "naclstack",
            forages: [
                {
                    item: "meadow:alpine_salt",
                    count: 8,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "vintagedelight:salt_block",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "naclstack",
            forages: [
                {
                    item: "meadow:alpine_salt",
                    count: 16,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "vintagedelight:salt_block",
                    count: 4,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "vintagedelight:salt_block",
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "dachsbun",
            forages: [
                {
                    item: "bakery:bun",
                    count: 8,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 2
                },
                {
                    item: "bakery:bundt_cake",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: "bakery:jam_roll",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "eiscue",
            forages: [
                {
                    item: "society:penguin_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "sandygast",
            forages: [
                {
                    item: "minecraft:sand",
                    count: 64,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "palossand",
            forages: [
                {
                    item: "minecraft:sand",
                    count: 64,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "minecraft:sand",
                    count: 64,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "minecraft:sand",
                    count: 64,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "delibird",
            forages: [
                {
                    item: "society:furniture_box",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "minecraft:coal",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "iron_bundle",
            forages: [
                {
                    item: "society:furniture_box",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "silicobra",
            forages: [
                {
                    item: "minecraft:sand",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "sandaconda",
            forages: [
                {
                    item: "minecraft:sand",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:sandstone_slate",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "bergmite",
            forages: [
                {
                    item: "minecraft:ice",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "cacnea",
            forages: [
                {
                    item: "atmospheric:barrel_cactus",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "cacturne",
            forages: [
                {
                    item: "atmospheric:barrel_cactus",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "moreminecarts:glass_spines",
                    count: 8,
                    chance: 0.25,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "aron",
            forages: [
                {
                    item: "minecraft:iron_ingot",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "lairon",
            forages: [
                {
                    item: "minecraft:iron_ingot",
                    count: 16,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "aggron",
            forages: [
                {
                    item: "minecraft:iron_block",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "omanyte",
            forages: [
                {
                    item: "minecraft:nautilus_shell",
                    count: 1,
                    chance: 0.4,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "garbodor",
            forages: [
                {
                    item: "furniture:trash_bag",
                    count: 4,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:scavenged_food_bag",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "omastar",
            forages: [
                {
                    item: "minecraft:nautilus_shell",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "carbink",
            forages: [
                {
                    item: "minecraft:diamond",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "quark:diamond_heart",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "slugma",
            forages: [
                {
                    item: "autumnity:snail_goo",
                    count: 4,
                    chance: 0.4,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "macargo",
            forages: [
                {
                    item: "autumnity:snail_goo",
                    count: 4,
                    chance: 0.4,
                    min_hearts: 4
                },
                {
                    item: "autumnity:snail_shell_block",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "bounsweet",
            forages: [
                {
                    item: "vintagedelight:gearo_berry",
                    count: 8,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "vintagedelight:gearo_berry_mason_jar",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "exeggutor",
            forages: [
                {
                    item: "beachparty:coconut",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:star_coquito",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "lechonk",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "oinkologne",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 10,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "spoink",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 0.3,
                    min_hearts: 3,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "grumpig",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 0.9,
                    min_hearts: 3,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "oinkologne",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 0.3,
                    min_hearts: 3,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "swinub",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 0.3,
                    min_hearts: 3,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "piloswine",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 4,
                    has_quality: true
                },
                {
                    item: "species:frozen_hair",
                    countMult: 4,
                    chance: 0.35,
                    min_hearts: 7,
                }
            ],
        },
        {
            pokemon: "mamoswine",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: "species:frozen_hair",
                    countMult: 4,
                    chance: 0.45,
                    min_hearts: 7,
                }
            ],
        },
        {
            pokemon: "ducklett",
            forages: [
                {
                    item: "untitledduckmod:duck_feather",
                    count: 1,
                    chance: 0.35,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "untitledduckmod:duck_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                },
                {
                    item: "society:large_duck_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "swanna",
            forages: [
                {
                    item: "untitledduckmod:goose_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                },
                {
                    item: "society:large_goose_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "psyduck",
            forages: [
                {
                    item: "untitledduckmod:duck_feather",
                    count: 1,
                    chance: 0.15,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "untitledduckmod:duck_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "golduck",
            forages: [
                {
                    item: "untitledduckmod:duck_feather",
                    count: 1,
                    chance: 0.35,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "society:large_duck_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "shellder",
            forages: [
                {
                    item: "twigs:roseate_seashell",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 3
                },
                {
                    item: "minecraft:nautilus_shell",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "cloyster",
            forages: [
                {
                    item: "twigs:roseate_seashell",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 3
                },
                {
                    item: "minecraft:nautilus_shell",
                    count: 1,
                    chance: 0.4,
                    min_hearts: 8
                },
                {
                    item: "crabbersdelight:pearl",
                    count: 1,
                    chance: 1,
                    min_hearts: 9
                },
            ],
        },
        {
            pokemon: "clamperl",
            forages: [
                {
                    item: "crabbersdelight:pearl",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:sunlit_pearl",
                    count: 1,
                    chance: 0.03,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "crabby",
            forages: [
                {
                    item: "quark:crab_leg",
                    count: 1,
                    chance: 0.45,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "kingler",
            forages: [
                {
                    item: "quark:crab_leg",
                    count: 1,
                    chance: 0.45,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "quark:crab_shell",
                    count: 1,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "foongus",
            forages: [
                {
                    item: "cluttered:fly_agaric",
                    count: 4,
                    chance: 0.35,
                    has_quality: true,
                    min_hearts: 4
                },
                {
                    item: "cluttered:fly_agaric",
                    count: 4,
                    chance: 0.4,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "starly",
            forages: [
                {
                    item: "minecraft:egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "staravia",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "staraptor",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "windswept:elder_feather",
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "happiny",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "chansey",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                },
                {
                    item: "cobblemon:medicinal_brew",
                    count: 1,
                    chance: 1,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "blissey",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                },
                {
                    item: "cobblemon:medicinal_brew",
                    count: 2,
                    chance: 1,
                    min_hearts: 5
                },
                {
                    item: "society:supreme_mayonnaise",
                    count: 1,
                    chance: 0.05,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "cleffa",
            forages: [
                {
                    item: "botania:pixie_dust",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "clefairy",
            forages: [
                {
                    item: "botania:pixie_dust",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "botania:dragonstone",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "clefable",
            forages: [
                {
                    item: "botania:black_lotus",
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "botania:dragonstone",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "smeargle",
            forages: [
                {
                    item: "minecraft:painting",
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "lunatone",
            forages: [
                {
                    item: "society:lunarite",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "minior",
            forages: [
                {
                    item: "society:lunarite",
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "society:prismatic_shard",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "togepi",
            forages: [
                {
                    item: "society:thunder_egg",
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "togetic",
            forages: [
                {
                    item: "society:thunder_egg",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "togekiss",
            forages: [
                {
                    item: "society:thunder_egg",
                    count: 3,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "vintagedelight:golden_egg",
                    count: 1,
                    chance: 0.75,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "doduo",
            forages: [
                {
                    item: "society:large_egg",
                    count: 2,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "dodrio",
            forages: [
                {
                    item: "society:large_egg",
                    count: 3,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "capsakid",
            forages: [
                {
                    item: "veggiesdelight:bellpepper",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "scovillain",
            forages: [
                {
                    item: "vintagedelight:ghost_pepper",
                    count: 2,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "klink",
            forages: [
                {
                    item: "create:andesite_alloy",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "klang",
            forages: [
                {
                    item: "create:andesite_alloy",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "create:andesite_alloy",
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "klinklang",
            forages: [
                {
                    item: "create:andesite_alloy",
                    count: 16,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "create:brass_ingot",
                    count: 2,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "porygon",
            forages: [
                {
                    item: "sunlit_cobblemon:tm_pack",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "porygon2",
            forages: [
                {
                    item: "sunlit_cobblemon:tm_pack",
                    count: 1,
                    chance: 0.35,
                    min_hearts: 6
                },
                {
                    item: "sunlit_cobblemon:greater_tm_pack",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "porygon-z",
            forages: [
                {
                    item: "sunlit_cobblemon:tm_pack",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                },
                {
                    item: "sunlit_cobblemon:greater_tm_pack",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "tinkatink",
            forages: [
                {
                    item: "create:cogwheel",
                    count: 4,
                    chance: 0.75,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "tinkatuff",
            forages: [
                {
                    item: "create:cogwheel",
                    count: 4,
                    chance: 0.75,
                    min_hearts: 3
                },
                {
                    item: "create:large_cogwheel",
                    count: 4,
                    chance: 0.75,
                    min_hearts: 5
                },
                {
                    item: "create:gearbox",
                    count: 2,
                    chance: 0.75,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "tinkaton",
            forages: [
                {
                    item: "create:cogwheel",
                    count: 4,
                    chance: 0.75,
                    min_hearts: 3
                },
                {
                    item: "create:large_cogwheel",
                    count: 4,
                    chance: 0.75,
                    min_hearts: 5
                },
                {
                    item: "create:gearbox",
                    count: 2,
                    chance: 0.75,
                    min_hearts: 7
                },
                {
                    item: "create:precision_mechanism",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "octillery",
            forages: [
                {
                    item: "crabbersdelight:raw_squid_tentacles",
                    count: 4,
                    chance: 0.25,
                    min_hearts: 3
                },

                {
                    item: "society:legendary_ink",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "tropius",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 5,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "society:banana_karenina",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "shroodle",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "grafaiai",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "mankey",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "slakoth",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 8,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "vigoroth",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 16,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "slaking",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 64,
                    chance: 0.5,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "timburr",
            forages: [
                {
                    item: "meadow:fire_log",
                    count: 1,
                    chance: 0.9,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "conkeldurr",
            forages: [
                {
                    item: "society:earth_crystal",
                    count: 4,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:jade",
                    count: 4,
                    chance: 0.1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "sandy_shocks",
            forages: [
                {
                    item: "oreganized:lead_ingot",
                    count: 4,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "minecraft:ancient_debris",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "magneton",
            forages: [
                {
                    item: "oreganized:lead_nugget",
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "oreganized:silver_nugget",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "magnezone",
            forages: [
                {
                    item: "oreganized:lead_ingot",
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "oreganized:silver_ingot",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 5
                },
                {
                    item: "oreganized:electrum_nugget",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "butterfree",
            forages: [
                {
                    item: "society:butterfly_amber",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:butterfly_amber",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:butterfly_amber",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "vivillon",
            forages: [
                {
                    item: "society:butterfly_amber",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:butterfly_amber",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:butterfly_amber",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "venomoth",
            forages: [
                {
                    item: "society:moth_pollen",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "frosmoth",
            forages: [
                {
                    item: "society:moth_pollen",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                },
                {
                    item: "windswept:frozen_branch",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "masquerain",
            forages: [
                {
                    item: "society:moth_pollen",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "volcarona",
            forages: [
                {
                    item: "minecraft:blaze_powder",
                    count: 1,
                    chance: 0.4,
                    min_hearts: 0

                },
                {
                    item: "society:moth_pollen",
                    count: 2,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 4,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 8,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "slitherwing",
            forages: [
                {
                    item: "society:moth_pollen",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 5,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 9,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "ironmoth",
            forages: [
                {
                    item: "minecraft:blaze_powder",
                    count: 4,
                    chance: 0.4,
                    min_hearts: 0

                },
                {
                    item: "society:moth_pollen",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "dewpider",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 5
                },
                {
                    item: "aquaculture:neptunium_nugget",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "araquanid",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 2,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.9,
                    min_hearts: 5
                },
                {
                    item: "aquaculture:neptunium_ingot",
                    count: 1,
                    chance: 0.3,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "tarountula",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "spidops",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 2,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.9,
                    min_hearts: 5
                },
                {
                    item: "species:wicked_mask",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "galvantula",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "crittersandcompanions:silk_cocoon",
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "spinarak",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 5
                },
            ],
        },
        {
            pokemon: "ariados",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.8,
                    min_hearts: 5
                },
                {
                    item: "crittersandcompanions:silk_cocoon",
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "scatterbug",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "wurmple",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "weedle",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "caterpie",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "sunflora",
            forages: [
                {
                    item: "minecraft:sunflower",
                    count: 4,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "sunlit_cobblemon:sun_drops",
                    count: 2,
                    chance: 0.05,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "applin",
            forages: [
                {
                    item: "minecraft:apple",
                    count: 2,
                    chance: 1,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "appletun",
            forages: [
                {
                    item: "farmersdelight:apple_pie",
                    count: 4,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "cobblemon:syrupy_apple",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "flapple",
            forages: [
                {
                    item: "society:aged_apple_wine",
                    count: 1,
                    chance: 0.8,
                    min_hearts: 1
                },
                {
                    item: "cobblemon:syrupy_apple",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "dipplin",
            forages: [
                {
                    item: "buzzier_bees:honey_apple",
                    count: 4,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "society:maple_syrup",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "lopunny",
            forages: [
                {
                    item: "minecraft:rabbit_foot",
                    count: 1,
                    chance: 0.15,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "lopunny",
            forages: [
                {
                    item: "minecraft:rabbit_foot",
                    count: 1,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "sinistea",
            forages: [
                {
                    item: "herbalbrews:black_tea",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "polteageist",
            forages: [
                {
                    item: "herbalbrews:black_tea",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: "herbalbrews:oolong_tea",
                    count: 1,
                    chance: 0.2,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "poltchageist",
            forages: [
                {
                    item: "herbalbrews:green_tea",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "sinistcha",
            forages: [
                {
                    item: "herbalbrews:green_tea",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "herbalbrews:oolong_tea",
                    count: 1,
                    chance: 0.2,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "rellor",
            forages: [
                {
                    item: "farm_and_charm:fertilizer",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "swirlix",
            forages: [
                {
                    item: "minecraft:sugar",
                    count: 4,
                    chance: 0.75,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "slurpuff",
            forages: [
                {
                    item: "minecraft:sugar",
                    count: 8,
                    chance: 0.75,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "combee",
            forages: [
                {
                    item: "minecraft:honeycomb",
                    count: 4,
                    chance: 1,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "vespiquen",
            forages: [
                {
                    item: "minecraft:honeycomb",
                    count: 16,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "golemoverhaul:honey_blob",
                    count: 3,
                    chance: 0.5,
                    min_hearts: 6
                },
                {
                    item: "society:beemonican_seal",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "pineco",
            forages: [
                {
                    item: "windswept:pinecone",
                    count: 4,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "windswept:pinecone_block",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "swablu",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "altaria",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 8,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "cottonee",
            forages: [
                {
                    item: "etcetera:cotton_flower",
                    count: 16,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "whimsicott",
            forages: [
                {
                    item: "etcetera:cotton_flower",
                    count: 16,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "pumpkaboo",
            forages: [
                {
                    item: "autumnity:pumpkin_bread",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "gourgeist",
            forages: [
                {
                    item: "minecraft:pumpkin",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "gimmighoul",
            forages: [
                {
                    item: "cobblemon:relic_coin",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "gimmighoul",
            forages: [
                {
                    item: "cobblemon:relic_coin",
                    count: 2,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "cobblemon:relic_coin_sack",
                    count: 10,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "cosmog",
            forages: [
                {
                    item: "sunlit_cobblemon:cosmic_dust",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "sandile",
            forages: [
                {
                    item: "numismatics:crown",
                    count: 3,
                    chance: 0.2,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "krokorok",
            forages: [
                {
                    item: "numismatics:crown",
                    count: 3,
                    chance: 0.2,
                    min_hearts: 3
                },
                {
                    item: "numismatics:sun",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 6
                },
                {
                    item: "numismatics:neptunium_coin",
                    count: 1,
                    chance: 0.002,
                    min_hearts: 9
                }
            ],
        },
        {
            pokemon: "krookodile",
            forages: [
                {
                    item: "numismatics:crown",
                    count: 3,
                    chance: 0.4,
                    min_hearts: 3
                },
                {
                    item: "numismatics:sun",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                },
                {
                    item: "numismatics:neptunium_coin",
                    count: 1,
                    chance: 0.02,
                    min_hearts: 9
                },
                {
                    item: "numismatics:ancient_coin",
                    count: 1,
                    chance: 0.0001,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "minccino",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "society:white_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "cinccino",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 0.5,
                    has_quality: true,
                    min_hearts: 2
                },
                {
                    item: "society:white_sheet",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "milktank",
            milk: { sm: "sunlit_cobblemon:moomoo_milk", lg: "sunlit_cobblemon:large_moomoo_milk" },
        },
        {
            pokemon: "skiddo",
            milk: { sm: "society:goat_milk", lg: "society:large_goat_milk" },
        },
        {
            pokemon: "gogoat",
            milk: { sm: "society:goat_milk", lg: "society:large_goat_milk" },
        },
        {
            pokemon: "gogoat",
            forages: [
                {
                    item: "minecraft:goat_horn",
                    count: 1,
                    chance: 0.1,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "bouffalant",
            milk: { sm: "society:buffalo_milk", lg: "society:large_buffalo_milk" },
        },
        {
            pokemon: "tauros",
            milk: { sm: "society:buffalo_milk", lg: "society:large_buffalo_milk" },
        },
        {
            pokemon: "wooloo",
            milk: sheepMilk,
        },
        {
            pokemon: "wooloo",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "dubwool",
            milk: sheepMilk,
        },
        {
            pokemon: "dubwool",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 0.8,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "minecraft:goat_horn",
                    count: 1,
                    chance: 0.1,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "mareep",
            milk: sheepMilk,
        },
        {
            pokemon: "mareep",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 3,
                    chance: 0.8,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "flaafy",
            milk: sheepMilk,
        },
        {
            pokemon: "flaafy",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 0.8,
                    has_quality: true,
                    min_hearts: 5
                },
                {
                    item: "society:sparkstone_dust",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "ampharos",
            milk: sheepMilk,
        },
        {
            pokemon: "ampharos",
            forages: [
                {
                    item: "society:sparkstone_dust",
                    count: 4,
                    chance: 1,
                    min_hearts: 5
                },
                {
                    item: "society:sparkstone",
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        }
    ]

    let recipe
    ranchingDef.forEach((def) => {
        recipe = {
            type: "cobble_workers:ranching_station",
            pokemon: def.pokemon,
        }
        if (def.milk) {
            recipe.action_type = "milking"
            recipe.milk = def.milk
        } else {
            recipe.action_type = "forage"
            recipe.forages = def.forages
        }
        JsonIO.write(`kubejs/data/cobble_workers/recipes/ranching_station/${def.milk ? "milk" : "forage"}/${def.pokemon}.json`, recipe);
    });

    ItemEvents.rightClicked('fightorflight:oran_lucky_egg', (e) => {
        const { player } = e;
        ranchingDef.forEach((def) => {
            if (def.forages) {
                def.forages.forEach((forage) => {
                    if (Item.of(forage.item).id === "minecraft:air") player.tell(forage.item);
                });
            }
        });
        player.tell("ranching defs validated!")
    });
}