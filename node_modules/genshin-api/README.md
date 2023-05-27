<center>

## Unofficial Genshin Api
##### This package use [genshin.dev](https://genshin.dev/) for the information and is not affiliated with the Genshin.dev website and its developers
If you need help feel free to join my [Discord Server](https://discord.gg/43Cap3paDN)

![](https://uploadstatic-sea.mihoyo.com/hk4e/upload/officialsites/202004/GIEN_1587984203_6764.png)</center>



### Example

```javascript
const genshin = require("genshin-api")

//In this example we want to get some information about a character
genshin.Characters('qiqi').then((data) => {
  console.log(data) // This return an array with information
})

//OR with async/await function

const data = async() => {
    const data = await genshin.Characters('qiqi');
    console.log(data); // This return an array with information too
}
```
### Example response from Above

```json
{
  "name": "Qiqi",
  "image": "https://api.genshin.dev/characters/qiqi/portrait",
  "vision": "Cryo",
  "weapon": "Sword",
  "nation": "Liyue",
  "affiliation": "Bubu Pharmacy",
  "rarity": 5,
  "constellation": "Pristina Nola",
  "birthday": "0000-03-03",
  "description": "An apprentice and herb gatherer at Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.",
  "skillTalents": [
    {
      "name": "Ancient Sword Art",
      "unlock": "Normal Attack",
      "description": "Normal Attack\nPerforms up to 5 rapid strikes.\nCharged Attack\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.",
      "upgrades": [
        {
          "name": "1-Hit DMG",
          "value": "37.8%"
        },
        {
          "name": "2-Hit DMG",
          "value": "38.9%"
        },
        {
          "name": "3-Hit DMG",
          "value": "24.2% + 24.2%"
        },
        {
          "name": "4-Hit DMG",
          "value": "24.7% + 24.7%"
        },
        {
          "name": "5-Hit DMG",
          "value": "63%"
        },
        {
          "name": "Charged Attack DMG",
          "value": "64.3% + 64.3%"
        },
        {
          "name": "Charged Attack Stamina Cost",
          "value": "20"
        },
        {
          "name": "Plunge DMG",
          "value": "63.9%"
        },
        {
          "name": "Low / High Plunge DMG",
          "value": "128% / 160%"
        }
      ],
      "type": "NORMAL_ATTACK"
    },
    {
      "name": "Adeptus Art: Herald of Frost",
      "unlock": "Elemental Skill",
      "description": "Using the Icevein Talisman, Qiqi brings forth the Herald of Frost, dealing Cryo DMG to nearby enemies.\nHerald of Frost\n\nWhen Qiqi hits a target with her Normal or Charged Attacks, she regenerates HP for all party members and all nearby allied characters. Healing scales based on Qiqi's ATK.\nRegenerates HP for current character at regular intervals.\nFollows the character around, dealing Cryo DMG to enemies in its path.\n",
      "upgrades": [
        {
          "name": "Skill DMG",
          "value": "96%"
        },
        {
          "name": "Regeneration on Hit",
          "value": "10.56% atk + 67"
        },
        {
          "name": "Continuous Regeneration",
          "value": "69.60% atk + 451"
        },
        {
          "name": "Herald of Frost DMG",
          "value": "36%"
        },
        {
          "name": "Duration",
          "value": "15s"
        },
        {
          "name": "CD",
          "value": "30s"
        }
      ],
      "type": "ELEMENTAL_SKILL"
    },
    {
      "name": "Adeptus Art: Preserver of Fortune",
      "unlock": "Elemental Burst",
      "description": "Qiqi releases the adeptus power sealed within her body, marking nearby enemies with a Fortune-Preserving Talisman that deals Cryo DMG.\nFortune-Preserving Talisman\nWhen enemies affected by this Talisman take DMG, the character that dealt this DMG regenerates HP.",
      "upgrades": [
        {
          "name": "Skill DMG",
          "value": "285%"
        },
        {
          "name": "Healing",
          "value": "90% atk + 577"
        },
        {
          "name": "Duration",
          "value": "15s"
        },
        {
          "name": "CD",
          "value": "20s"
        },
        {
          "name": "Energy Cost",
          "value": "80"
        }
      ],
      "type": "ELEMENTAL_BURST"
    }
  ],
  "passiveTalents": [
    {
      "name": "Life-Prolonging Methods",
      "unlock": "Unlocked at Ascension 1",
      "description": "When a character under the effects of Adeptus Art: Herald of Frost triggers an Elemental Reaction, their Incoming Healing Bonus is increased by 20% for 8s.",
      "level": 1
    },
    {
      "name": "A Glimpse into Arcanum",
      "unlock": "Unlocked at Ascension 4",
      "description": "When Qiqi hits enemies with her Normal and Charged Attacks, she has a 50% chance to apply a Fortune-Preserving Talisman to them for 6s. This effect can only occur once every 30s.",
      "level": 4
    },
    {
      "name": "Former Life Memories",
      "unlock": "Unlocked Automatically",
      "description": "Displays the location of nearby resources unique to Liyue on the mini-map."
    }
  ],
  "constellations": [
    {
      "name": "Ascetics of Frost",
      "unlock": "Constellation Lv. 1",
      "description": "When the Herald of Frost hits an enemy marked by a Fortune-Preserving Talisman, Qiqi regenerates 2 Energy.",
      "level": 1
    },
    {
      "name": "Frozen to the Bone",
      "unlock": "Constellation Lv. 2",
      "description": "Qiqi's Normal and Charge Attack DMG against enemies affected by Cryo is increased by 15%.",
      "level": 2
    },
    {
      "name": "Ascendant Praise",
      "unlock": "Constellation Lv. 3",
      "description": "Increases the Level of Adeptus Art: Preserver of Fortune by 3.\nMaximum upgrade level is 15.",
      "level": 3
    },
    {
      "name": "Divine Suppression",
      "unlock": "Constellation Lv. 4",
      "description": "Targets marked by the Fortune-Preserving Talisman have their ATK decreased by 20%.",
      "level": 4
    },
    {
      "name": "Crimson Lotus Bloom",
      "unlock": "Constellation Lv. 5",
      "description": "Increase the Level of Adeptus Art: Herald of Frost by 3.\nMaximum upgrade level is 15.",
      "level": 5
    },
    {
      "name": "Rite of Resurrection",
      "unlock": "Constellation Lv. 6",
      "description": "Using Adeptus Art: Preserve of Fortune revives all nearby fallen characters and regenerates 50% of their HP.\nThis effect can only occur once every 15 mins.",
      "level": 6
    }
  ],
  "vision_key": "CRYO",
  "weapon_type": "SWORD"
}
```


#### Following Functions you can use too:
|     Function      |
|:-----------------:|
| `Artifacts(type)` |
| `Characters(type)` |
| `Domains(type)` |
| `Elements(type)` |
| `Enemies(type)` |
| `Nations(type)` |
| `Weapons(type)` |

> ### ❗ Note ❗
> If you leave the type blank you get all available options you can use.


