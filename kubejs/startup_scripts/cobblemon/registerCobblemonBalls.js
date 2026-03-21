
console.info("[SOCIETY-S-COBBLEMON] registerCobblemonBalls.js loaded");

// Based on a script by Chesoku
const $CatchRateModifier = Java.loadClass('com.cobblemon.mod.common.api.pokeball.catching.CatchRateModifier')
const $PokeBall = Java.loadClass('com.cobblemon.mod.common.pokeball.PokeBall');
const $PokeBallItem = Java.loadClass('com.cobblemon.mod.common.item.PokeBallItem');
const $Resourcelocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const $Behavior = Java.loadClass("com.cobblemon.mod.common.api.pokeball.catching.CatchRateModifier$Behavior");
const $PokeBalls = Java.loadClass("com.cobblemon.mod.common.api.pokeball.PokeBalls");
const $CobblemonItems = Java.loadClass("com.cobblemon.mod.common.CobblemonItems");

let pokeballsDefaultsField = $PokeBalls.INSTANCE.getClass().getDeclaredField("defaults")
pokeballsDefaultsField.setAccessible(true);
let pokeballMap = pokeballsDefaultsField.get($PokeBalls.INSTANCE)
let sunlitBallMap = {}
const NAMESPACE = "sunlit_cobblemon"

const PokeballDB = {
	// dummy_ball: {
	// 	name: "Dummy Ball",
	// 	spriteModel: null, // If null, will just use <domain>/item/balls/<id>
	// 	modelModel: null, // If null, will just use <domain>/item/balls/<id>_model
	// 	waterDrag: 1.0,
	// 	throwPower: 1.5,
	// 	throwable: true,
	// 	catchModifier: {
	// 		//All this is the same as it would be for https://gitlab.com/cable-mc/cobblemon/-/blob/1.5.2/common/src/main/kotlin/com/cobblemon/mod/common/api/pokeball/catching/CatchRateModifier.kt
	// 		isGuaranteed: false,

	// 		calculateValue: function (livingEntityThrower, pokemon) { //Must return float
	// 			return 1.0
	// 		},

	// 		calculateBehavior: function (livingEntityThrower, pokemon, behavior) { //Must return Behavior enum
	// 			return behavior.ADD
	// 		},

	// 		calculateIsValid: function (livingEntityThrower, pokemon) { //Must return boolean
	// 			return true
	// 		},

	// 		calculateModifyCatchRate: function (currentCatchRate, livingEntityThrower, pokemon) { //Must return float
	// 			return 1.0
	// 		}
	// 	}
	// },
	skull_ball: {
		name: "Skull Ball",
		spriteModel: null,
		modelModel: null,
		waterDrag: 1.0,
		throwPower: 1.5,
		throwable: true,
		catchModifier: {
			isGuaranteed: false,
			calculateValue: function (livingEntityThrower, pokemon) {
				console.log(pokemon.entity.level.dimension === "society:skull_cavern")
				if (pokemon.entity.level.dimension === "society:skull_cavern") return 4.0
				else return 1.0
			},
			calculateBehavior: function (livingEntityThrower, pokemon, behavior) {
				return behavior.ADD
			},
			calculateIsValid: function (livingEntityThrower, pokemon) {
				return true
			},
			calculateModifyCatchRate: function (currentCatchRate, livingEntityThrower, pokemon) {
				if (pokemon.entity.level.dimension === "society:skull_cavern") return 4.0
				else return 1.0
			}
		}
	},
	mana_ball: {
		name: "Mana Ball",
		spriteModel: null,
		modelModel: null,
		waterDrag: 1.0,
		throwPower: 1.5,
		throwable: true,
		catchModifier: {
			isGuaranteed: false,
			calculateValue: function (livingEntityThrower, pokemon) {
				return 3.5
			},
			calculateBehavior: function (livingEntityThrower, pokemon, behavior) {
				return behavior.ADD
			},
			calculateIsValid: function (livingEntityThrower, pokemon) {
				return true
			},
			calculateModifyCatchRate: function (currentCatchRate, livingEntityThrower, pokemon) {
				return 3.5
			}
		}
	},
	prismatic_ball: {
		name: "Prismatic Ball",
		spriteModel: null,
		modelModel: null,
		waterDrag: 1.0,
		throwPower: 1.5,
		throwable: true,
		catchModifier: {
			isGuaranteed: false,
			calculateValue: function (livingEntityThrower, pokemon) {
				if (pokemon.shiny == true) return 4.5
				else return 3.0
			},
			calculateBehavior: function (livingEntityThrower, pokemon, behavior) {
				return behavior.ADD
			},
			calculateIsValid: function (livingEntityThrower, pokemon) {
				return true
			},
			calculateModifyCatchRate: function (currentCatchRate, livingEntityThrower, pokemon) {
				if (pokemon.shiny == true) return 4.5
				else return 3.0
			}
		}
	}
}

StartupEvents.registry('item', (e) => {
	for (let ball in PokeballDB) {
		let customBallDB = PokeballDB[ball]
		let loc = new $Resourcelocation(NAMESPACE, ball)
		let customBall = new $PokeBall(
			loc,
			new JavaAdapter($CatchRateModifier, {
				isGuaranteed() {
					return customBallDB.catchModifier.isGuaranteed
				},
				value(thrower, pokemon) {
					return customBallDB.catchModifier.calculateValue(thrower, pokemon)
				},
				behavior(thrower, pokemon) {
					return customBallDB.catchModifier.calculateBehavior(thrower, pokemon, $Behavior)
				},
				isValid(thrower, pokemon) {
					return customBallDB.catchModifier.calculateIsValid(thrower, pokemon)
				},
				modifyCatchRate(currentCatchRate, thrower, pokemon) {
					return customBallDB.catchModifier.calculateModifyCatchRate(currentCatchRate, thrower, pokemon)
				}
			}),
			[],
			customBallDB.waterDrag,
			new $Resourcelocation(NAMESPACE, 'balls/' + (customBallDB.spriteModel || ball)),
			new $Resourcelocation(NAMESPACE, 'balls/' + (customBallDB.modelModel || ball + "_model")),
			customBallDB.throwPower,
			customBallDB.throwable
		)
		pokeballMap.put(loc, customBall)
		sunlitBallMap[NAMESPACE + ":" + ball] = customBall
		e.createCustom(NAMESPACE + ":" + ball, () => new $PokeBallItem(customBall));
	}
})



StartupEvents.postInit((e) => {
	for (let ballName in PokeballDB) {
		let newBallItem = Item.of(NAMESPACE + ":" + ballName).getItem()
		sunlitBallMap[NAMESPACE + ":" + ballName].item = newBallItem;
	}
})