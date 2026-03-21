
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
                minHearts: 2
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
                minHearts: 2
            },
            {
                item: "society:geode",
                count: 2,
                chance: 0.3,
                minHearts: 4
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
                minHearts: 2
            },
            {
                item: "society:geode",
                count: 4,
                chance: 0.45,
                minHearts: 4
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
                minHearts: 2
            },
            {
                item: "society:omni_geode",
                count: 1,
                chance: 0.45,
                minHearts: 10
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
                minHearts: 9
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
                minHearts: 0
            },
            {
                item: "society:carp_roe",
                count: 3,
                chance: 1,
                minHearts: 4
            },
            {
                item: "society:carp_roe",
                count: 3,
                chance: 1,
                minHearts: 6
            },
            {
                item: "society:carp_roe",
                count: 3,
                chance: 1,
                minHearts: 8
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
                minHearts: 0
            },
            {
                item: "society:piranha_roe",
                count: 3,
                chance: 1,
                minHearts: 4
            },
            {
                item: "society:piranha_roe",
                count: 3,
                chance: 1,
                minHearts: 6
            },
            {
                item: "society:piranha_roe",
                count: 3,
                chance: 1,
                minHearts: 8
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
                minHearts: 6
            },
            {
                item: "mysticaloaktree:wise_oak",
                count: 1,
                chance: 0.01,
                minHearts: 10
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
                minHearts: 6
            },
            {
                item: "mysticaloaktree:wise_oak",
                count: 1,
                chance: 0.01,
                minHearts: 10
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
                minHearts: 0
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
                minHearts: 0
            },
            {
                item: "vintagedelight:salt_block",
                count: 1,
                chance: 0.25,
                minHearts: 8
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
                minHearts: 0
            },
            {
                item: "vintagedelight:salt_block",
                count: 4,
                chance: 1,
                minHearts: 4
            },
            {
                item: "vintagedelight:salt_block",
                count: 4,
                chance: 1,
                minHearts: 8
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
                hasQuality: true,
                minHearts: 2
            },
            {
                item: "bakery:bundt_cake",
                count: 1,
                chance: 1,
                hasQuality: true,
                minHearts: 6
            },
            {
                item: "bakery:jam_roll",
                count: 1,
                chance: 1,
                hasQuality: true,
                minHearts: 10
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
                hasQuality: true,
                minHearts: 4
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
                minHearts: 2
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
                minHearts: 2
            },
            {
                item: "minecraft:sand",
                count: 64,
                chance: 1,
                minHearts: 2
            },
            {
                item: "minecraft:sand",
                count: 64,
                chance: 1,
                minHearts: 2
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
                minHearts: 2
            },
            {
                item: "minecraft:coal",
                count: 1,
                chance: 1,
                minHearts: 2
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
                minHearts: 2
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
                minHearts: 2
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
                minHearts: 2
            },
            {
                item: "society:sandstone_slate",
                count: 1,
                chance: 1,
                minHearts: 2
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
                minHearts: 2
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
                minHearts: 3
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
                minHearts: 3
            },
            {
                item: "moreminecarts:glass_spines",
                count: 8,
                chance: 0.25,
                minHearts: 7
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
                minHearts: 3
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
                minHearts: 3
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
                minHearts: 3
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
                minHearts: 4
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
                minHearts: 4
            },
            {
                item: "society:scavenged_food_bag",
                count: 2,
                chance: 1,
                minHearts: 8
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
                minHearts: 4
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
                minHearts: 4
            },
            {
                item: "quark:diamond_heart",
                count: 1,
                chance: 0.25,
                minHearts: 10
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
                minHearts: 4
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
                minHearts: 4
            },
            {
                item: "autumnity:snail_shell_block",
                count: 1,
                chance: 0.2,
                minHearts: 8
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
                minHearts: 3
            },
            {
                item: "vintagedelight:gearo_berry_mason_jar",
                count: 1,
                chance: 0.5,
                minHearts: 7
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
                minHearts: 3
            },
            {
                item: "society:star_coquito",
                count: 1,
                chance: 0.15,
                minHearts: 10
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
                hasQuality: true,
                minHearts: 3
            },
            {
                item: "untitledduckmod:duck_egg",
                count: 1,
                chance: 1,
                hasQuality: true,
                minHearts: 0
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
                hasQuality: true,
                minHearts: 3
            },
            {
                item: "society:large_duck_egg",
                count: 1,
                chance: 1,
                hasQuality: true,
                minHearts: 4
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
                minHearts: 3
            },
            {
                item: "minecraft:nautilus_shell",
                count: 1,
                chance: 0.04,
                minHearts: 8
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
                minHearts: 3
            },
            {
                item: "minecraft:nautilus_shell",
                count: 1,
                chance: 0.4,
                minHearts: 8
            },
            {
                item: "crabbersdelight:pearl",
                count: 1,
                chance: 1,
                minHearts: 9
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
                minHearts: 3
            },
            {
                item: "society:sunlit_pearl",
                count: 1,
                chance: 0.03,
                minHearts: 10
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
                hasQuality: true,
                minHearts: 3
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
                hasQuality: true,
                minHearts: 3
            },
            {
                item: "quark:crab_shell",
                count: 1,
                chance: 0.25,
                hasQuality: true,
                minHearts: 8
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
                hasQuality: true,
                minHearts: 4
            },
            {
                item: "cluttered:fly_agaric",
                count: 4,
                chance: 0.4,
                hasQuality: true,
                minHearts: 8
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
                hasQuality: true,
                minHearts: 1
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
                hasQuality: true,
                minHearts: 1
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
                hasQuality: true,
                minHearts: 1
            },
            {
                item: "windswept:elder_feather",
                count: 4,
                chance: 1,
                hasQuality: true,
                minHearts: 6
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
                hasQuality: true,
                minHearts: 0
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
                hasQuality: true,
                minHearts: 0
            },
            {
                item: "cobblemon:medicinal_brew",
                count: 1,
                chance: 1,
                minHearts: 5
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
                hasQuality: true,
                minHearts: 0
            },
            {
                item: "cobblemon:medicinal_brew",
                count: 2,
                chance: 1,
                minHearts: 5
            },
            {
                item: "society:supreme_mayonnaise",
                count: 1,
                chance: 0.05,
                hasQuality: true,
                minHearts: 10
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
                minHearts: 4
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
                minHearts: 4
            },
            {
                item: "botania:dragonstone",
                count: 1,
                chance: 0.2,
                minHearts: 8
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
                minHearts: 4
            },
            {
                item: "botania:dragonstone",
                count: 1,
                chance: 0.45,
                minHearts: 8
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
                minHearts: 1
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
                minHearts: 1
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
                minHearts: 1
            },
            {
                item: "society:prismatic_shard",
                count: 1,
                chance: 0.01,
                minHearts: 10
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
                minHearts: 0
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
                minHearts: 0
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
                minHearts: 0
            },
            {
                item: "vintagedelight:golden_egg",
                count: 1,
                chance: 0.75,
                hasQuality: true,
                minHearts: 10
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
                hasQuality: true,
                minHearts: 6
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
                hasQuality: true,
                minHearts: 4
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
                hasQuality: true,
                minHearts: 3
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
                hasQuality: true,
                minHearts: 3
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
                minHearts: 3
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
                minHearts: 3
            },
            {
                item: "create:andesite_alloy",
                count: 4,
                chance: 1,
                minHearts: 8
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
                minHearts: 3
            },
            {
                item: "create:brass_ingot",
                count: 2,
                chance: 0.5,
                minHearts: 10
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
                minHearts: 6
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
                minHearts: 6
            },
            {
                item: "sunlit_cobblemon:greater_tm_pack",
                count: 1,
                chance: 0.05,
                minHearts: 8
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
                minHearts: 6
            },
            {
                item: "sunlit_cobblemon:greater_tm_pack",
                count: 1,
                chance: 0.15,
                minHearts: 8
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
                minHearts: 3
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
                minHearts: 3
            },
            {
                item: "create:large_cogwheel",
                count: 4,
                chance: 0.75,
                minHearts: 5
            },
            {
                item: "create:gearbox",
                count: 2,
                chance: 0.75,
                minHearts: 7
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
                minHearts: 3
            },
            {
                item: "create:large_cogwheel",
                count: 4,
                chance: 0.75,
                minHearts: 5
            },
            {
                item: "create:gearbox",
                count: 2,
                chance: 0.75,
                minHearts: 7
            },
            {
                item: "create:precision_mechanism",
                count: 1,
                chance: 0.15,
                minHearts: 10
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
                minHearts: 3
            },

            {
                item: "society:legendary_ink",
                count: 1,
                chance: 0.15,
                minHearts: 6
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
                hasQuality: true,
                minHearts: 3
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
                hasQuality: true,
                minHearts: 3
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
                hasQuality: true,
                minHearts: 3
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
                hasQuality: true,
                minHearts: 3
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
                hasQuality: true,
                minHearts: 3
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
                hasQuality: true,
                minHearts: 3
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
                minHearts: 4
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
                minHearts: 4
            },
            {
                item: "society:jade",
                count: 4,
                chance: 0.1,
                minHearts: 8
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
                minHearts: 1
            },
            {
                item: "minecraft:ancient_debris",
                count: 1,
                chance: 0.04,
                minHearts: 10
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
                minHearts: 1
            },
            {
                item: "oreganized:silver_nugget",
                count: 1,
                chance: 0.15,
                minHearts: 5
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
                minHearts: 1
            },
            {
                item: "oreganized:silver_ingot",
                count: 1,
                chance: 0.25,
                minHearts: 5
            },
            {
                item: "oreganized:electrum_nugget",
                count: 1,
                chance: 0.15,
                minHearts: 8
            }
        ],
    },
    {
        pokemon: "sunkern",
        forages: [
            {
                item: "sunlit_cobblemon:sun_drops",
                count: 1,
                chance: 0.15,
                minHearts: 8
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
                minHearts: 0
            },
            {
                item: "sunlit_cobblemon:sun_drops",
                count: 2,
                chance: 0.15,
                minHearts: 8
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
                minHearts: 1
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
                minHearts: 1
            },
            {
                item: "cobblemon:syrupy_apple",
                count: 1,
                chance: 0.04,
                minHearts: 10
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
                minHearts: 1
            },
            {
                item: "cobblemon:syrupy_apple",
                count: 1,
                chance: 0.04,
                minHearts: 10
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
                minHearts: 1
            },
            {
                item: "society:maple_syrup",
                count: 1,
                chance: 0.25,
                minHearts: 6
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
                hasQuality: true,
                minHearts: 10
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
                hasQuality: true,
                minHearts: 10
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
                hasQuality: true,
                minHearts: 6
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
                hasQuality: true,
                minHearts: 6
            },
            {
                item: "herbalbrews:oolong_tea",
                count: 1,
                chance: 0.2,
                hasQuality: true,
                minHearts: 10
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
                hasQuality: true,
                minHearts: 3
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
                hasQuality: true,
                minHearts: 3
            },
            {
                item: "herbalbrews:oolong_tea",
                count: 1,
                chance: 0.2,
                hasQuality: true,
                minHearts: 10
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
                minHearts: 3
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
                hasQuality: true,
                minHearts: 3
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
                hasQuality: true,
                minHearts: 3
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
                minHearts: 4
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
                minHearts: 4
            },
            {
                item: "golemoverhaul:honey_blob",
                count: 3,
                chance: 0.5,
                minHearts: 6
            },
            {
                item: "society:beemonican_seal",
                count: 1,
                chance: 0.5,
                minHearts: 10
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
                minHearts: 1
            },
            {
                item: "windswept:pinecone_block",
                count: 1,
                chance: 0.5,
                minHearts: 6
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
                hasQuality: true,
                minHearts: 5
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
                hasQuality: true,
                minHearts: 5
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
                minHearts: 3
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
                minHearts: 3
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
                minHearts: 6
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
                minHearts: 3
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
                minHearts: 3
            },
            {
                item: "cobblemon:relic_coin",
                count: 1,
                chance: 1,
                minHearts: 4
            },
            {
                item: "cobblemon:relic_coin",
                count: 1,
                chance: 1,
                minHearts: 6
            },
            {
                item: "cobblemon:relic_coin",
                count: 1,
                chance: 1,
                minHearts: 8
            },
            {
                item: "cobblemon:relic_coin",
                count: 1,
                chance: 1,
                minHearts: 10
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
                minHearts: 3
            },
            {
                item: "cobblemon:relic_coin",
                count: 2,
                chance: 1,
                minHearts: 4
            },
            {
                item: "cobblemon:relic_coin",
                count: 2,
                chance: 1,
                minHearts: 6
            },
            {
                item: "cobblemon:relic_coin",
                count: 2,
                chance: 1,
                minHearts: 8
            },
            {
                item: "cobblemon:relic_coin_sack",
                count: 10,
                chance: 0.01,
                minHearts: 10
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
                minHearts: 10
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
                minHearts: 3
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
                minHearts: 3
            },
            {
                item: "numismatics:sun",
                count: 1,
                chance: 0.05,
                minHearts: 6
            },
            {
                item: "numismatics:neptunium_coin",
                count: 1,
                chance: 0.002,
                minHearts: 9
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
                minHearts: 3
            },
            {
                item: "numismatics:sun",
                count: 1,
                chance: 0.25,
                minHearts: 6
            },
            {
                item: "numismatics:neptunium_coin",
                count: 1,
                chance: 0.02,
                minHearts: 9
            },
            {
                item: "numismatics:ancient_coin",
                count: 1,
                chance: 0.0001,
                minHearts: 10
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
                hasQuality: true,
                minHearts: 5
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
                hasQuality: true,
                minHearts: 1
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
                hasQuality: true,
                minHearts: 1
            },
            {
                item: "minecraft:goat_horn",
                count: 1,
                chance: 0.1,
                hasQuality: true,
                minHearts: 5
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
                hasQuality: true,
                minHearts: 5
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
                hasQuality: true,
                minHearts: 5
            },
            {
                item: "society:sparkstone_dust",
                count: 4,
                chance: 0.5,
                minHearts: 8
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
                minHearts: 5
            },
            {
                item: "society:sparkstone",
                count: 4,
                chance: 1,
                minHearts: 8
            }
        ],
    }
]


ItemEvents.rightClicked('fightorflight:oran_lucky_egg', (e) => {
    const { player } = e;
    ranchingDef.forEach((def) => {
        if (def.forages) {
            def.forages.forEach((forage) => {
                if (Item.of(forage.item).id === "minecraft:air") player.tell(req.item);
            });
        }
    });
    player.tell("ranching defs validated!")
});