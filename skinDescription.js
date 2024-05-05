const skinDescriptions = {
    //Knives
    "★ Karambit": 'Knife with a curved blade and reverse grip. It was originally developed as a melee weapon for the Asian martial discipline of silat. The in-game Karambit is based on the United Cutlery Honshu Karambit knife. Karambit has several unique inspect animations and is one of the first knives added to the game. Very popular in the game community.',
    "★ M9 Bayonet": 'The knife was originally intended to be mounted on a rifle. This modification of the knife (M9 Bayonet) was developed in the USA in 1984. The in-game knife is based on the Smith & Wesson SW3B knife. This is one of the first knives added to the game. Very popular in the game community. This is also one of the most expensive knives in the game.',
    "★ Butterfly Knife": 'Folding knife. Based on the traditional Philippine balisong. Butterfly Knife has 2 unique draw animations and 3 inspect animations. This is one of the most popular knives in the game. Added to the game on July 1, 2014, alongside the start of Operation Phoenix.',
    "★ Talon Knife": 'Knife with a curved blade and reverse grip. This is a modified version of karambit. Talon Knife has several unique inspect animations and is one of the most popular knives in the game. Added to the game on August 3, 2018, alongside the release of the Horizon Case.',
    "★ Skeleton Knife": 'Melee weapon. Based on Renegade Tactical Steel Stryker Throwing Knife. Skeleton knife has a unique inspect animation - the character rotates the knife on the index finger. Added to the game on November 18, 2019, alongside the start of Operation Shattered Web.',
    "★ Classic Knife": 'One of the first knives in CS:GO. Classic knife is a modification of the standard knife from previous versions of the game. The in-game Classic Knife is based on the Badlands Bowie knife designed by Mick Strider. Classic Knife has a rare inspect animation - the character tosses the knife. Added to the game on October 18, 2019, alongside the release of the CS20 Case.',
    "★ Bayonet": 'The knife was originally intended to be mounted on a rifle. This modification of the knife was developed in the USA in 1984. The in-game Bayonet is based on the Smith & Wesson SW2B knife. This is one of the first knives added to the game.',
    "★ Stiletto Knife": 'Automatic folding knife. The first Stiletto knives appeared in Italy at the beginning of the 16th century. The in-game knife is presumably based on the Corsican knife. It has a rare inspect animation - the character tosses the knife. Added to the game on August 3, 2018, alongside the release of the Horizon Case.',
    "★ Ursus Knife": 'Melee weapon. Presumably based on the Gerber Prodigy Tanto Fix knife. Has a rare draw animation - the character tosses the knife, and a rare inspect animation - the character rotates the knife. Added to the game on August 3, 2018, alongside the release of the Horizon Case.',
    "★ Paracord Knife": 'Melee weapon. Based on Linton Seal Tactical L-90008B. The knife has a rare draw animation - the character throws the knife from hand to hand, and a rare inspect animation - the character flips the knife several times. Added to the game on November 18, 2019, alongside the start of Operation Shattered Web.',
    "★ Nomad Knife": 'Melee weapon. Based on Strider 3CR13 Folding Knife. The knife has a rare inspect animation - the character flips the knife several times, and a rare draw animation - the character accidentally hurts his finger when pulling out the knife. Added to the game on November 18, 2019, alongside the start of Operation Shattered Web.',
    "★ Survival Knife": 'Melee weapon. Based on Wayland Survival Knife. Has a rare draw animation - the character tosses the knife. Added to the game on November 18, 2019, alongside the start of Operation Shattered Web.',
    "★ Huntsman Knife": 'Melee weapon. Based on MTech USA Xtreme knife. Added to the game on May 1, 2014, alongside the release of the Huntsman Weapon Case.',
    "★ Flip Knife": 'Folding knife. Based on the Benchmade 860 Bedlam knife. In real life, the in-game knife would be impossible to fold, as its blade is longer than the handle. This is one of the first knives added to the game.',
    "★ Bowie Knife": 'Melee weapon. This knife was developed at the beginning of the 19th century. Based on the Aitor Oso Negro knife. Rock musician David Bowie chose his nickname after this knife. Added to the game on February 17, 2019, alongside the start of Operation Wildfire.',
    "★ Falchion Knife": 'Folding knife. The first falchions appeared in Europe in the middle of the 13th century. The in-game falchion is based on the Cold Steel Espada Large knife. The knife has a rare inspect animation - the character balances the knife vertically on the palm of his hand.',
    "★ Gut Knife": 'Melee weapon. The knife features a gut hook located on the spine. Based on the Buck 193 Alpha Hunter knife. This is one of the first knives added to the game and one of the most inexpensive in-game knives.',
    "★ Kukri Knife": 'Used in traditional rituals, such as weddings or stabbings.',
    "★ Navaja Knife": 'Folding knife. Appeared in Spain at the end of the 17th century. Presumably based on the Emerson Gipsy Jack folding knife. Added to the game on August 3, 2018, alongside the release of the Horizon Case. This is one of the most inexpensive knives in the game.',
    "★ Shadow Daggers": 'Melee weapon. Presumably based on the Gerber Tactical Uppercut Push Dagger knife. These are some of the most inexpensive knives in the game and the only paired in-game knives. Added to the game on September 17, 2015, alongside the release of the Shadow Case.',
    //Rifles
    "AK-47": 'Automatic assault rifle. Based on a rifle developed in the Soviet Union in 1949. To date, this is the most popular and widely used rifle in the world. Among the main advantages of AK-47 are high damage and a relatively low price. Disadvantages include low accuracy and high recoil after several shots.',
    "AWP": 'Sniper rifle featuring a scope. Based on the Accuracy International Arctic Warfare rifle developed in the UK. This is one of the most popular weapons in CS:GO. Among the main advantages of the AWP are very high damage and high accuracy at long distances. This rifle’s damage is enough to kill 5 opponents standing in a row with a single bullet. Disadvantages include a high price, low rate of fire, and low kill award.',
    "M4A4": 'Automatic assault rifle. Based on the M4 rifle developed in the USA. It has been in service with the US Army since 1994. M4A4 is the only weapon in the game to have a “Contraband” quality skin (Howl). Among the main advantages of the M4A4 are large magazine capacity and relatively low recoil when firing in bursts. Disadvantages include high price and high damage dropoff.',
    "M4A1-S": 'Automatic assault rifle featuring a silencer. Based on the M16A1 rifle developed in the USA. Among the main advantages of M4A1-S are high accuracy, low recoil, and low weight. The disadvantages include low magazine capacity and incapacity to deliver a one-hit headshot kill with a helmet equipped. According to statistics, M4A1-S is more commonly used in the game than M4A4.',
    "AUG": 'Automatic assault rifle that can be used both with or without scope. Based on the Steyr AUG rifle developed in Austria in 1978. Among the main advantages of AUG are large magazine capacity and high efficiency at long distances thanks to the scope. The main disadvantages include high price and high bullet spread when burst-firing.',
    "SG 553": 'Automatic assault rifle featuring a scope. Based on the SIG SG 550 rifle developed in Switzerland in 1980. Among the main advantages of SG 553 are high armor penetration and high efficiency at long distances thanks to the scope. The main disadvantages include high price, high recoil and high bullet spread when burst-firing. This is the only weapon in the game with 100% armor penetration.',
    "Galil AR": 'Automatic assault rifle. Based on the Galil rifle developed in Israel. Among the main advantages of Galil AR are high rate of fire, low price, and large magazine capacity. The main disadvantages include low accuracy at long distances and large spread, especially when moving. The first in-game version of Galil AR featured a scope.',
    "FAMAS": `Automatic assault rifle. Based on a rifle (Fusil d'Assaut de la Manufacture d'Armes de Saint-Étienne) developed in France in 1971. Among the main advantages of FAMAS are low price, low recoil, and high accuracy when burst-firing. The main disadvantages include low damage and poor accuracy in the automatic mode.`,
    "SSG 08": 'Sniper rifle featuring a scope. Based on the Steyr-Mannlicher SSG 08 rifle developed in Austria in 2008. Among the main advantages of SSG 08 are high accuracy when jump shooting, low price, and low weight. The main disadvantages include low rate of fire and low damage. This is the only weapon in the game that features a dark gray camouflage pattern by default. Often used by snipers in eco rounds.',
    "SCAR-20": 'Sniper rifle featuring a scope. Based on the FN SCAR rifle developed in Belgium in 2003. Among the main advantages of SCAR-20 are high accuracy, fast reloading, and low recoil. The main disadvantages include high price and large weight.',
    "G3SG1": 'Sniper rifle featuring a scope. Based on the HK G3 SG1 rifle developed in Germany in 1973. Among the main advantages of G3SG1 are high damage and the highest rate of fire among all the sniper rifles in the game. Disadvantages include high price and high recoil. This is the only rifle in the game that has five sticker slots instead of four.',
    //Pistols
    "USP-S": 'Semi-automatic pistol featuring a silencer. Based on the Heckler & Koch USP pistol developed in Germany in 1993. Among the main advantages of USP-S are high damage, high accuracy, and very high efficiency at long ranges. The main disadvantages include low rate of fire, low armor penetration, and small magazine capacity. One of the counter-terrorist spawn pistols.',
    "Glock-18": 'Semi-automatic pistol capable of firing short bursts. Based on a pistol developed in Austria in 1987. Among the main advantages of Glock-18 are high rate of fire, low recoil, and capability to fire in bursts. The main disadvantages include low damage, low accuracy at long distances and when firing in bursts.',
    "Desert Eagle": 'Semi-automatic pistol. Based on a pistol developed by engineers from the USA and Israel in 1983. Among the main advantages of Desert Eagle are high accuracy at long distances and very high damage. This pistol’s damage is enough to kill 3 opponents standing in a row with a single bullet. The main disadvantages include low rate of fire, high spread, and high recoil. The in-game Desert Eagle has two inspect animations.',
    "P250": 'Semi-automatic pistol. Based on a pistol developed by engineers from the USA and Germany in 2007. Among the main advantages of P250 are low price, relatively high armor penetration, and low recoil. The main disadvantages include low accuracy and small magazine capacity.',
    "Five-SeveN": 'Semi-automatic pistol. Based on a pistol developed in Belgium in the 1990s. Among the main advantages of Five-SeveN are its relatively low price, high damage, and capability to deliver a one-hit headshot kill even with a helmet equipped. The main disadvantage is low accuracy during continuous firing.',
    "CZ75-Auto": 'Fully-automatic pistol. Based on a pistol developed in Czechoslovakia in 1975. Among the main advantages of CZ75-Auto are relatively low price, high armor penetration, and capability to fire in bursts. The main disadvantages include small magazine capacity, high recoil, and low kill award. This is the first automatic pistol in CS:GO.',
    "P2000": 'Semi-automatic pistol. Based on the Heckler & Koch P2000 pistol developed in Germany in 2001. Among the main advantages of P2000 are relatively high accuracy and high damage. The main disadvantages include small magazine capacity, low armor penetration, and low rate of fire. One of the counter-terrorist spawn pistols.',
    "Tec-9": 'Semi-automatic pistol. Based on the Intratec TEC-DC9 pistol developed in Sweden in the 1980s. Among the main advantages of Tec-9 are high accuracy and high damage. The main disadvantages include high recoil and high spread. The in-game Tec-9 experienced several nerfs. In the real world, possession of this weapon is considered illegal in most countries.',
    "R8 Revolver": '8-shot revolver. Based on the Smith & Wesson M&P R8 revolver developed in the USA in the 1970s. Among the main advantages of R8 Revolver are high damage and capability to deliver a one-hit headshot kill even with a helmet equipped. This is the most powerful pistol in the game. The main disadvantages include small magazine capacity and low rate of fire. R8 Revolver is the only pistol in the game with five sticker slots instead of four.',
    "Dual Berettas": 'Semi-automatic pistols. These are the only paired pistols in the game. Based on the Beretta 92 pistol developed in Italy in the 1970s. Among the main advantages of Dual Berettas are high rate of fire, relatively high damage, and low recoil. The main disadvantage is high damage dropoff.',
    //SMGs
    "P90": 'Submachine gun. Based on the FN P90 submachine gun developed in Belgium in the 1980s. Among the main advantages of P90 are large magazine capacity, high rate of fire, and low recoil. Disadvantages include low accuracy, low damage, and low kill award. This is the most expensive submachine gun in the game. Due to the futuristic design, the real-life weapon is often used in sci-fi movies.',
    "UMP-45": 'Submachine gun. Based on the Heckler & Koch UMP submachine gun developed in Germany in the 1990s. Among the main advantages of UMP-45 are low price, high damage, and high kill award. Disadvantages include low rate of fire, small magazine capacity, and high damage dropoff.',
    "MAC-10": 'Submachine gun. Based on the Ingram MAC-10 submachine gun developed in the USA in the 1960s. Among the main advantages of MAC-10 are low price and high rate of fire. Disadvantages include low accuracy, high recoil, and low armor penetration.',
    "MP7": 'Submachine gun. Based on the Heckler & Koch MP7 submachine gun developed in Germany in the early 2000s. Among the main advantages of MP7 are high accuracy, low spread, and high kill award. Disadvantages include high price and low armor penetration.',
    "MP9": 'Submachine gun. Based on the Brugger & Thomet APC9 submachine gun developed in Switzerland in 2010. Among the main advantages of MP9 are high accuracy, low price, and high kill award. Disadvantages include high recoil, low spread, low armor penetration, and low damage.',
    "MP5-SD": 'Submachine gun. Based on the Heckler & Koch MP5 submachine gun developed in Germany in the 1960s. Among the main advantages of MP5-SD are high accuracy and the integrated silencer. The main disadvantage is relatively low damage.',
    "PP-Bizon": 'Submachine gun. Based on the PP-19 Bizon submachine gun developed in Russia in 1993. Among the main advantages of PP-19 Bizon are high rate of fire, low recoil, low price, and high kill award. Disadvantages include low accuracy and low damage. This is the only weapon in the game with a helical magazine.',
    //Heavy
    "Sawed-Off": 'Shotgun. Based on the pump-action shotgun Remington 870 developed in the USA in 1950. Among the main advantages of Sawed-Off are high damage at close range and low price. Disadvantages include low rate of fire, high recoil, and low efficiency at medium and long ranges.',
    "MAG-7": 'Shotgun. Based on the MAG-7 shotgun developed in South Africa in 1995. Among the main advantages of MAG-7 are high damage, high accuracy, and high kill award. Disadvantages include large spread, low rate of fire, and low efficiency at long ranges. This is one of the most popular shotguns in the game.',
    "Nova": 'Shotgun. Based on the Benelli Nova shotgun developed in Italy. Among the main advantages of Nova are lethal damage at close range, low price, and high kill award. Disadvantages include low rate of fire and low efficiency at long ranges.',
    "XM1014": 'Automatic shotgun. Based on the Benelli M4 Super 90 shotgun developed in Italy in the mid-1990s. Among the main advantages of XM1014 are high damage at close ranges, high rate of fire, and high kill award. Disadvantages include high price, high recoil, and low efficiency at long ranges. This is the only automatic shotgun in the game.',
    "Negev": 'Machine gun. Based on the Negev machine gun developed in Israel in 1995. Among the main advantages of Negev are high damage at close ranges, very high rate of fire, large magazine capacity, and capacity to deliver a one-hit headshot kill even with a helmet equipped. Disadvantages include high recoil, high price, and low accuracy. This weapon has the highest rate of fire in the game.',
    "M249": 'Machine gun. Based on the FN Minimi machine gun developed in Belgium in 1974. Among the main advantages of M249 are very high rate of fire, large magazine capacity, and capacity to deliver a one-hit headshot kill even with a helmet equipped. Disadvantages include high recoil, high price, and low accuracy. This is one of the least popular weapons in the game.'
}