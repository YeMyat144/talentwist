import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Card, CardContent, Grid2, Container, List, ListItem, IconButton, ListItemText, CircularProgress } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from '../components/style';
import Header from '../components/Header';

function StoryPage() {
  const { storyId } = useParams();
  const [currentNode, setCurrentNode] = useState(null);
  const [storyNodes, setStoryNodes] = useState([]);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  
  useEffect(() => {
    if (avatar) {
      localStorage.setItem('userAvatar', avatar);
    }
  }, [avatar]);


  useEffect(() => {
    const stories = {
      1: {
        title: 'The Dark Forest',
        author: 'John Doe',
        coverImage: '/assets/black.jpeg',
        startNode: {
          id: 1,
          text: 'You find yourself deep in the heart of a dark, ominous forest, with towering trees that block out almost all the light. The air is thick with the smell of moss and damp earth, and the occasional sound of rustling leaves keeps you on edge. As you glance around, you notice that the forest seems to stretch endlessly in all directions, except for two faintly visible paths in front of you. The left path looks well-trodden, the ground beneath it worn and soft from what must have been years of travelers. The right path, however, is covered in thorny vines, almost as if nature itself is trying to keep people away. You feel a chill run down your spine as you contemplate your decision. Should you take the path that many before you have taken, or will you brave the unknown?',
          choices: [
            { text: 'Take the left path', nextNode: 2 },
            { text: 'Take the right path', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You cautiously step onto the left path, and as you move forward, the atmosphere begins to shift. The dense canopy above gradually gives way, allowing faint rays of sunlight to pierce through, casting long shadows on the forest floor. The deeper you venture, the quieter it becomes, until the only sound you can hear is your own footsteps. After walking for what feels like hours, you stumble upon an ancient, moss-covered chest hidden beneath the roots of a massive oak tree. You kneel down and wipe away the dirt and moss, revealing intricate carvings that suggest this chest has been here for centuries. Could it contain treasure? Or is it better left unopened?',
            choices: [{ text: 'Open the treasure chest', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'The moment you step onto the right path, you realize that this journey will not be easy. The thorny vines tug at your clothing, and the ground beneath your feet is uneven, making each step a struggle. As you push forward, the air around you grows colder, and the eerie silence is broken only by the occasional rustle of unseen creatures in the underbrush. Suddenly, you find yourself standing face-to-face with a massive dragon, its scales shimmering in the dim light. The beast lets out a low growl, smoke curling from its nostrils as it glares down at you with piercing eyes. You have only seconds to decide — will you face the dragon in battle, or try to flee before it strikes?',
            choices: [{ text: 'Fight the dragon', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'You carefully pry open the chest, the hinges creaking loudly as if they havent been disturbed in centuries. Inside, your eyes widen as you see piles of gold coins, sparkling jewels, and strange artifacts that seem almost too valuable to be real. As you lift a golden goblet from the pile, you feel a sense of triumph, knowing that this treasure could change your life forever. However, you also feel a strange unease — could there be a curse that comes with this newfound wealth? Regardless, for now, you have won this part of the adventure. The forest may still hold many secrets, but you leave with more than you ever imagined.',
            choices: [],
          },
          {
            id: 5,
            text: 'With adrenaline pumping through your veins, you grip your weapon tightly and charge at the dragon. The ground shakes beneath your feet as the beast lets out a deafening roar and unleashes a stream of fire in your direction. You dodge the flames, feeling the intense heat as they singe the air around you. For what feels like an eternity, you engage in a fierce battle, dodging, striking, and avoiding the dragons deadly attacks. Finally, with one well-timed strike, you manage to wound the dragon, forcing it to retreat into the shadows of the forest. Exhausted but alive, you realize that you have narrowly escaped death. Though the dragon is gone for now, you know it may return, and the forest still holds many more dangers.',
            choices: [],
          },
          {
            id: 6,
            text: 'You find a secret tunnel. Where does it lead?',
            choices: [],
          },
        ],
      },
      2: {
        title: 'The Haunted Mansion',
        author: 'Jane Smith',
        coverImage: '/assets/horse.jpeg',
        startNode: {
          id: 1,
          text: 'The once grand and stately mansion looms before you, its towering turrets and weathered stone walls casting long shadows in the fading light of dusk. Once a symbol of wealth and power, it now stands as a haunting relic of the past. Windows, long shattered, gape like hollow eyes, and vines have crept up the sides, as though nature itself is trying to reclaim the forsaken building. A chill hangs in the air, sending shivers down your spine, but you can’t shake the curiosity that has drawn you here. They say no one who enters the mansion comes out the same — if they come out at all. As you stand at the front gates, you spot two possible entrances: the grand front door, once used by noble guests, or a small side door that appears partially ajar. The mansion calls to you, but which way will you answer?',
          choices: [
            { text: 'Enter through the front door', nextNode: 2 },
            { text: 'Enter through the side door', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You decide to approach the front door, its massive, intricately carved surface now faded and weather-beaten. With a deep breath, you push the heavy door open, its creaking hinges echoing through the grand foyer. Inside, the mansion’s former glory is still evident. A grand chandelier, caked in dust, hangs precariously from the ceiling, casting eerie shadows over the faded wallpaper and tattered curtains. In the center of the room, a grand staircase winds up into darkness, its bannister adorned with cobwebs. As you step deeper inside, the door slams shut behind you with a deafening thud. You turn, heart pounding, but there’s no one there. You notice two hallways branching off — one to the east, where a faint light flickers, and another to the west, where the air feels colder, almost oppressive. Which path will you choose?',
            choices: [
              { text: 'Go down the east hallway', nextNode: 4 },
              { text: 'Go down the west hallway', nextNode: 5 },
            ],
          },
          {
            id: 3,
            text: 'Steeling your nerves, you slip through the side door, the rusted hinges groaning as it opens just wide enough for you to squeeze through. You find yourself in a narrow, dimly lit corridor, the air thick with dust and the musty smell of decay. The wallpaper is peeling, and the floorboards creak beneath your feet as you make your way forward. As you move deeper into the mansion, you notice strange markings scratched into the walls — symbols you can’t quite make out, but that fill you with an inexplicable sense of dread. Suddenly, a low, whispering voice echoes from somewhere ahead, beckoning you further. Your heart races, and you pause. Before you is a winding staircase leading down into the cellar, while to your right, a door creaks open slightly, revealing what appears to be an old study. What will you do?',
            choices: [
              { text: 'Descend into the cellar', nextNode: 6 },
              { text: 'Enter the study', nextNode: 7 },
            ],
          },
          {
            id: 4,
            text: 'You move cautiously down the east hallway, following the faint flicker of light. As you approach, the light grows stronger, revealing a dusty, neglected room at the end of the hall. Inside, you find an old oil lamp sitting on a table, its dim flame casting long, wavering shadows on the walls. Beside it, a large portrait hangs crooked on the wall — a regal woman in period clothing, her expression stern, her eyes almost lifelike. Beneath the portrait is a dusty old journal, its cover worn and fragile with age. You feel drawn to the journal, as though it holds the answers to the mansion’s many secrets. But just as you’re about to open it, you hear the unmistakable sound of footsteps echoing from somewhere deeper in the mansion. Someone — or something — is coming. What will you do?',
            choices: [
              { text: 'Descend into the cellar', nextNode: 5 },
              { text: 'Enter the study', nextNode: 4 },
            ],
          },
          {
            id: 5,
            text: 'The moment you step into the west hallway, the temperature drops noticeably, and you can see your breath in the cold air. The walls here are lined with dusty, old portraits of people long gone — their expressions dark and unforgiving. As you continue forward, the faint sound of a music box playing a haunting melody drifts through the air, though you can’t quite place its source. The hallway seems to stretch on forever, twisting and turning in ways that defy logic. You begin to feel disoriented, unsure of how long you’ve been walking. At last, you reach a small, dilapidated door at the end of the hallway, the music louder now, as though it’s coming from just beyond. Do you dare open the door, or will you turn back before it’s too late?',
            choices: [],
          },
          {
            id: 6,
            text: 'With a sense of dread, you descend the staircase into the mansion’s cellar, the air growing colder and more oppressive with each step. The stairs creak beneath your weight, and the darkness around you seems to swallow all light. When you reach the bottom, you find yourself in a large, dimly lit chamber filled with old crates and barrels. The smell of dampness and decay is overpowering. As you move forward, you notice something strange — scratch marks on the stone walls, as if something had been trying to claw its way out. Before you can investigate further, you hear a low growl coming from the shadows. You freeze, your heart pounding, as a pair of glowing red eyes slowly emerge from the darkness. Whatever is lurking down here is no ordinary creature. Do you run, or do you face the creature?',
            choices: [],
          },
          {
            id: 7,
            text: 'You cautiously enter the old study, the door creaking softly behind you. The room is filled with dusty, leather-bound books and faded maps, their pages yellowed with age. A large, ornate desk sits in the center, covered in papers and quills, as though the room’s occupant had only just stepped away. As you move further inside, you notice a faint, ghostly figure standing in the corner, its form shifting and indistinct. It seems to be trying to communicate with you, though no words are spoken. Instead, you feel a sense of urgency, as though the figure is trying to warn you of some impending danger. Just as you’re about to ask a question, the figure vanishes, leaving you alone in the study. What will you do next?',
            choices: [],
          },
        ],
      },
      3: {
        title: 'The Space Odyssey',
        author: 'Alex Johnson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Space+Odyssey',
        startNode: {
          id: 1,
          text: 'The vastness of space stretches endlessly before you as your ship, the Starfire Explorer, drifts silently through the void. You’ve been traveling for months, navigating uncharted territories in search of a distant planet rumored to hold the key to humanity’s future survival. The once-vibrant colors of your ship’s interior have dulled, the hum of the engine now a background melody in the symphony of deep space. Suddenly, your navigation panel begins to flash with urgency — an anomaly has been detected. The screen displays a strange signal, unlike anything you’ve encountered before, coming from a nearby star system. It pulses rhythmically, as though beckoning you closer. Should you investigate this mysterious signal, or continue on your original course toward the distant planet?',
          choices: [
            { text: 'Investigate the anomaly', nextNode: 2 },
            { text: 'Stay on course to the distant planet', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'Curiosity gets the better of you, and you redirect the ship toward the source of the signal. As you approach, the anomaly becomes clearer — a massive, metallic structure floating in the void. It’s like nothing youve ever seen, its surface covered in strange symbols and markings that seem ancient, yet far more advanced than human technology. The signal grows stronger, pulsing through your ship’s systems, and you feel an odd sensation — as though something is watching you. Your onboard AI, Luna, advises caution, but you sense an opportunity for discovery. Docking procedures initiate automatically, and the ship is drawn toward an airlock on the structure. Do you suit up and explore this mysterious vessel, or heed Luna’s warning and retreat before it’s too late?',
            choices: [
              { text: 'Suit up and explore the structure', nextNode: 4 },
              { text: 'Retreat to a safe distance', nextNode: 5 },
            ],
          },
          {
            id: 3,
            text: 'Deciding to stick to the mission, you chart a course toward the distant planet, leaving the strange signal behind. Hours turn into days as you drift through the stars, the solitude of space weighing heavily on your mind. At long last, the planet Elysium-7 comes into view, a blue and green orb shimmering with promise in the endless black of space. As you prepare for descent, your ship’s scanners pick up something unexpected — signs of artificial life. Structures, far below on the planet’s surface, indicate the presence of a civilization, though none were reported in the mission’s briefing. As your ship enters the atmosphere, turbulence shakes the hull violently, and the systems begin to fail one by one. You manage a rough landing in a dense forest of enormous, glowing trees. As you step outside, your breath is taken away by the sheer beauty of the alien landscape. However, you’re not alone. Strange figures move in the shadows, watching your every step. Will you venture deeper into the forest to discover who — or what — lives here, or attempt to repair your ship and leave this unknown world?',
            choices: [
              { text: 'Explore the alien forest', nextNode: 6 },
              { text: 'Attempt to repair the ship', nextNode: 7 },
            ],
          },
          {
            id: 4,
            text: 'Clad in your space suit, you step through the airlock into the unknown. The structure’s interior is vast and eerily quiet, its walls glowing faintly with an unearthly light. As you walk, your footsteps echo in the silence. The markings you saw from the outside are etched into every surface, swirling in patterns that seem to pulse with life. Suddenly, your comms crackle, and Luna’s voice is distorted. “...malfunction...energy...danger...” But before you can respond, you stumble upon a large chamber filled with advanced technology — and something more. In the center of the room, a floating orb radiates with a soft, pulsating glow, as if it’s alive. It seems to be the source of the signal. You feel an overwhelming urge to touch it, but a warning flashes on your HUD. Luna’s voice, barely audible, urges you to leave immediately. Do you reach for the orb, or heed the warning and make a hasty retreat?',
            choices: [
              { text: 'Touch the glowing orb', nextNode: 8}
            ],
          },
          {
            id: 5,
            text: 'Deciding that the anomaly is too dangerous to risk, you initiate a reverse thrust and pull away from the strange structure. As you watch it disappear from view, the ship’s systems stabilize, and Luna returns to normal. But the encounter leaves you with a nagging feeling that something was left unexplored. Days later, your course takes you near the Icarus Nebula, a beautiful, swirling cloud of gas and light. As you pass through, your sensors pick up a faint signal — much weaker, but eerily similar to the one from the metallic structure. Luna warns that the nebula’s radiation could interfere with your systems, but you’re tempted to investigate. Will you enter the nebula and follow the signal, or stay on your safe path?',
            choices: [],
          },
          {
            id: 6,
            text: 'You decide to venture deeper into the alien forest, drawn by the strange beauty of the planet. The trees hum with energy, their bark glowing softly in the twilight. As you move through the dense foliage, you notice intricate symbols carved into the trunks — a language you don’t understand. Suddenly, a figure emerges from the shadows — tall, slender, and shrouded in a cloak of light. It moves gracefully toward you, its eyes glowing with intelligence. You instinctively raise your hand in greeting, but the figure pauses. Without a word, it gestures toward a distant structure — a temple-like building glowing on the horizon. The choice is clear: do you follow this being to the temple, or try to communicate here in the forest?',
            choices: [
            ],
          },
          {
            id: 7,
            text: 'With danger lurking in the shadows of the forest, you decide to return to the ship and attempt repairs. The damage is extensive, and it will take time to get the systems back online. As you work, strange noises echo from the forest, but nothing approaches the ship. Hours pass, and you manage to repair the main systems. Just as you prepare to initiate takeoff, the ground shakes violently, and a beam of light erupts from the forest toward the sky. Something has been awakened. The ship’s sensors detect massive energy signatures converging on your location. You have to act quickly. Do you take off immediately, or investigate the source of the disturbance?',
            choices:[],
          },
          {
            id: 8,
            text: 'Against your better judgment, you reach out and touch the glowing orb. The moment your fingers make contact, a surge of energy courses through you, overwhelming your senses. For a brief moment, your mind is flooded with images — galaxies spiraling into chaos, alien civilizations rising and falling, and a presence far beyond your understanding. The orb pulses violently, and the structure around you begins to tremble. Luna’s voice, now clear and panicked, screams for you to retreat. But it’s too late. The orb shatters, releasing a blinding light that engulfs the chamber. When the light fades, you find yourself back on your ship, disoriented and confused. The structure is gone, and the ship’s systems are completely offline. As you attempt to regain control, a message flashes on your screen: “They are coming.” What will you do now?',
            choices: [],
          }
        ],
      },
      4: {
        title: 'The Lost City',
        author: 'Emily Brown',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Lost+City',
        startNode: {
          id: 1,
          text: 'Deep in the heart of the Amazon rainforest, you stand at the edge of a long-forgotten civilization. The dense jungle surrounds you, the air thick with humidity, and the sound of wildlife reverberates all around. The legends spoke of a city lost to time, buried beneath layers of vegetation, its treasures untouched for centuries. Now, after weeks of trekking through the unforgiving wilderness with only a worn-out map and a compass, you’ve found it — Elara, the Lost City of Gold. Ancient stone walls rise before you, overgrown with vines and moss, their surfaces adorned with intricate carvings that tell stories of gods, kings, and untold riches. A massive stone archway leads into the city’s heart, but the jungle has reclaimed much of the path. To your left, a crumbling stone bridge spans a deep ravine, leading to what looks like a hidden temple. You have a choice to make — venture through the archway into the city’s core or cross the precarious bridge to investigate the temple.',
          choices: [
            { text: 'Enter the heart of the lost city', nextNode: 2 },
            { text: 'Cross the bridge to the temple', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'With a sense of awe and anticipation, you step through the grand archway and into the heart of the Lost City. The sight that greets you is breathtaking — towering stone structures loom above, some partially collapsed, while others stand tall, defying the centuries. At the center of the city, a massive ziggurat rises, its steps covered in thick vines, leading up to what appears to be a grand chamber at the top. As you walk, you notice strange markings on the ground, some forming intricate geometric patterns. The air feels heavy, almost charged with energy, as though the city itself is alive. Suddenly, the ground beneath your feet shifts, and you hear the sound of stone grinding against stone. A section of the path ahead collapses, revealing a deep pit lined with sharp spikes. It’s clear that the city was built with more than just grandeur in mind — it was designed to protect its secrets. Do you continue toward the ziggurat, or explore the safer side paths that wind around the ruins?',
            choices: [
              { text: 'Head toward the ziggurat', nextNode: 4 },
              { text: 'Explore the side paths around the ruins', nextNode: 5 },
            ],
          },
          {
            id: 3,
            text: 'Your heart races as you step onto the ancient stone bridge, its surface worn smooth by the passage of time. Below, the ravine stretches into darkness, the sound of rushing water echoing from the depths. The bridge sways slightly with each step, and you can’t help but glance nervously at the crumbling edges. As you reach the midpoint, a sudden gust of wind whips through the ravine, causing the bridge to creak ominously. For a moment, it feels as though the whole structure might collapse beneath you. But then, the wind dies down, and you reach the other side, where the temple looms before you. Its entrance is flanked by two massive stone statues, their faces weathered but still imposing, as though they’re guarding the secrets within. A faint golden glow emanates from the temple’s dark interior. Do you dare to enter the temple and uncover its mysteries, or head back across the bridge to explore the city further?',
            choices: [
              { text: 'Enter the temple', nextNode: 6 },
              { text: 'Return to the city ruins', nextNode: 7 },
            ],
          },
          {
            id: 4,
            text: 'Ignoring the danger of the collapsed pathway, you press forward toward the towering ziggurat. Each step brings you closer to the ancient structure, and as you ascend its stone steps, you can feel the weight of history pressing down on you. The carvings along the walls become more elaborate as you climb, depicting scenes of rituals, offerings, and battles long forgotten. At the top, a massive stone door stands closed, flanked by two colossal statues of jaguar-like creatures. The door is adorned with a large golden emblem, its surface polished to a shine despite the centuries. It looks as though it hasn’t been touched in ages, yet the faint hum of energy seems to radiate from it. You know this must be the entrance to the city’s treasure vault — or perhaps something far more dangerous. You could attempt to open the door, or search for another way in by circling the ziggurat.',
            choices: [],
          },
          {
            id: 5,
            text: 'Deciding to avoid the dangers of the main path, you veer off toward the side passages that wind around the city. These paths are narrower and more overgrown, but they offer a quieter, safer exploration of the ancient ruins. As you walk, you come across small alcoves and hidden chambers, each one filled with relics of the past — ornate pottery, carved idols, and remnants of tools once used by the inhabitants of this lost civilization. In one chamber, you find an ancient map etched into the stone wall, showing the layout of the city. It highlights several key locations, including what appears to be a hidden passage beneath the city, leading to a chamber deep underground. Intrigued, you could follow the map to this hidden passage or continue exploring the surface ruins.',
            choices: [
              { text: 'Follow the map to the hidden passage', nextNode: 8 },
            ],
          },
          {
            id: 6,
            text: 'The air inside the temple is thick and musty, the scent of ancient incense still lingering in the stone halls. Dim light from the golden glow illuminates the intricate carvings along the walls, depicting scenes of gods and offerings, as well as warnings written in an ancient script. As you move deeper into the temple, you notice the architecture shifts — the carvings become more ominous, showing images of sacrifices and strange, shadowy figures. At the heart of the temple, you find a large chamber with a massive stone altar. On the altar rests a glowing artifact, its surface etched with runes that seem to pulse with energy. You feel an overwhelming urge to reach for the artifact, but something in the air tells you it’s not that simple. Do you take the artifact, or investigate the rest of the temple first?',
            choices: [],
          },
          {
            id: 7,
            text: 'Rather than risk opening the massive door, you decide to circle the ziggurat in search of another way in. As you walk along its base, you find a series of smaller chambers built into the sides of the structure, each one sealed with heavy stone doors. Some of the doors bear the same golden emblem as the main vault, while others are plain and unmarked. One door, partially ajar, catches your attention. The air around it feels cooler, as though something is drawing you in. You could enter through this open door, or continue searching the exterior of the ziggurat for another entrance.',
            choices: [],
          },
          {
            id: 8,
            text: 'Guided by the ancient map, you make your way to a hidden passage beneath the city. The entrance is cleverly concealed behind a collapsed section of wall, but after some careful excavation, you find a narrow stairway leading deep into the earth. The passage is dark, and the air grows colder as you descend, but you press on, driven by the promise of discovery. Eventually, you reach a massive underground chamber, its walls lined with shimmering gold and precious gems. In the center of the room, a large stone pedestal holds a golden idol, its eyes inlaid with sparkling emeralds. It’s a treasure beyond imagination, but the room feels wrong, as though something terrible is about to happen. Do you take the idol, or retreat before triggering whatever traps may be in place?',
            choices: [],
          }
        ],
    
      },
      5: {
        title: 'The Mysterious Island',
        author: 'Chris Taylor',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Underwater+Adventure',
        startNode: {
          id: 1,
          text: 'You wake up disoriented on a sandy beach. The sound of waves crashing against the shore echoes in the distance, and the salty scent of the ocean fills your lungs. As you sit up, you realize youre on an uncharted island, far from any known civilization. The island is lush with dense vegetation, and towering mountains loom in the distance. You have no recollection of how you got here, but one thing is certain — you need to survive. You notice two paths ahead: one leading into the thick jungle, where strange noises emanate, and another leading up a rocky hill that provides a better view of the island.',
          choices: [
            { text: 'Explore the jungle', nextNode: 2 },
            { text: 'Climb the rocky hill', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'Venturing into the jungle, you feel the temperature rise as the canopy of trees traps the humid air around you. Exotic birds call from above, and unseen creatures rustle through the underbrush. Suddenly, the jungle opens up to reveal an ancient stone temple, its walls covered in vines and moss. It seems abandoned, but the faint glow of light from within suggests otherwise. You have a choice: Do you enter the temple and uncover its secrets, or do you continue deeper into the jungle, following the mysterious sounds of rushing water?',
            choices: [{ text: 'Enter the temple', nextNode: 4 },
              { text: 'Follow the sounds of water', nextNode: 5 },
            ],
          },
          {
            id: 3,
            text: 'You decide to climb the rocky hill, hoping to get a better vantage point of the island. The ascent is difficult, and sharp rocks threaten to cut your hands as you scramble up. Finally, you reach the top, panting and out of breath. From this height, you can see the entire island — a lush jungle below, a shimmering river winding through it, and in the distance, what looks like a smoking volcano. More disturbingly, you spot a wrecked ship near the shore, likely the one you were on before you woke up. Just as youre about to descend, you notice a group of strange, humanoid figures moving toward the jungle. Do you try to approach the wreckage of the ship, or do you follow the strange figures?',
            choices: [{ text: 'Approach the shipwreck', nextNode: 6 },
              { text: 'Follow the strange figures', nextNode: 7 },
            ],
          },
          {
            id: 4,
            text: 'You step cautiously into the temple, the air cool and thick with the scent of dust and decay. The dim light from outside barely illuminates the stone walls, which are carved with strange symbols and depictions of ancient gods. As you move deeper, you come across a large chamber at the heart of the temple. In the center of the room is a massive stone statue, its eyes glowing faintly. Surrounding the statue are strange artifacts and treasures. But something feels off — an overwhelming sense of being watched creeps over you. Suddenly, you hear a loud rumble as the entrance begins to close. Do you try to escape, or investigate the statue?',
            choices: [],
          },
          {
            id: 5,
            text: 'You leave the temple behind and follow the mysterious sounds of rushing water. After trekking through thick underbrush, you emerge into a hidden valley, where a majestic waterfall cascades down into a crystal-clear pool. The scene is almost too beautiful to be real. As you approach the pool, you notice something strange beneath the water — a submerged, metallic object, glinting in the sunlight. Could it be a clue to your escape, or is it something more dangerous? Nearby, a small, peaceful cave invites you to take shelter. Will you investigate the object in the water or explore the cave?',
            choices: [],
          },
          {
            id: 6,
            text: 'With renewed determination, you descend the rocky hill and make your way toward the wrecked ship. The closer you get, the more the details become clear — its the ship you were on, shattered against the jagged rocks near the shore. Debris litters the beach, and you find remnants of supplies, maps, and tools. As you sift through the wreckage, you hear faint voices in the distance. Someone else survived the crash! Do you signal to the voices and try to find the others, or do you search the wreckage for more supplies before meeting them?',
            choices: [],
          },
          {
            id: 7,
            text: 'Intrigued by the strange figures, you decide to follow them into the jungle. The dense foliage makes it difficult to keep up, but you catch glimpses of their movements ahead. Eventually, you reach a clearing where the figures have gathered around a large, mysterious object. As you approach, you realize its a portal — a shimmering gateway to another world. The figures seem to be preparing to enter, their expressions a mix of fear and excitement. Do you join them and step through the portal, or do you stay behind and observe?',
            choices: [],
          },
        ],
      },
      6: {
        title: 'The Secret Tunnel',
        author: 'Sarah Johnson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Enchanted+Forest',
        startNode: {
          id: 1,
          text: 'As you explore the dense forest, your eyes catch a glimpse of something unusual among the foliage. Pushing aside the thick vines, you uncover a small, weathered stone entrance partially hidden by overgrown plants. The entrance appears to be a tunnel leading into the earth, its mouth dark and mysterious. A sense of adventure tingles at your fingertips as you consider what might lie beyond this hidden passage.',
          choices: [
            { text: 'Enter the secret tunnel', nextNode: 2 },
            { text: 'Continue exploring the forest', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You muster up the courage and step into the tunnel. The passage is narrow and damp, with walls covered in ancient, faded inscriptions. You walk cautiously, using your flashlight to illuminate the way. As you proceed, the air grows cooler, and the tunnel seems to stretch on endlessly. Eventually, you reach a large, dimly lit chamber. The walls of the chamber are adorned with intricate carvings, depicting scenes of a bygone era. At the center of the chamber is a massive stone door, adorned with mysterious symbols and markings.',
            choices: [{ text: 'Examine the carvings on the walls', nextNode: 4 },
              { text: 'Attempt to open the stone door', nextNode: 5 },
              { text: 'Retreat back through the tunnel', nextNode: 6 },
            ],
          },
          {
            id: 3,
            text: 'Deciding to explore further into the forest, you find yourself wandering deeper into uncharted territory. The forest becomes denser, and the sounds of wildlife grow louder. Eventually, you stumble upon an old, abandoned campsite. The remnants of a long-forgotten expedition are scattered around — old maps, a rusted pickaxe, and a partially buried journal. As you sift through the items, you discover a page with a sketch of a tunnel entrance, similar to the one you passed by earlier. The realization hits you: you were right to be curious about the tunnel.',
            choices: [{ text: 'Return to the tunnel entrance', nextNode: 2},
              { text: 'Investigate the abandoned campsite further', nextNode: 7 },
            ],
          },
          {
            id: 4,
            text: 'You carefully examine the carvings on the walls of the chamber. The intricate designs depict scenes of ancient rituals and ceremonies, with figures dressed in elaborate robes and holding mysterious artifacts. One carving catches your eye — it shows a figure unlocking a hidden mechanism on the stone door. You notice that the symbols around the door match those in the carving. It seems that understanding these carvings might be the key to accessing whatever lies beyond the door.',
            choices: [
              { text: 'Attempt to decipher the symbols', nextNode: 5 },
              { text: 'Explore the chamber further', nextNode: 6 },
            ],
          },
          {
            id: 5,
            text: 'You carefully study the carvings and the symbols around the stone door. Using the clues you have gathered, you begin to manipulate the symbols and patterns on the door. With a series of twists and turns, the door creaks open, revealing a hidden chamber beyond. Inside, you find a treasure trove of ancient artifacts, glittering with a golden sheen. Old scrolls, ornate jewelry, and mysterious relics fill the chamber, hinting at a rich and enigmatic history. Among the artifacts, you discover a journal that details the history of the tunnel and its purpose.',
            choices: [],
          },
          {
            id: 6,
            text: 'Feeling that you have explored enough, you decide to turn back and leave the tunnel. As you retrace your steps, you can’t shake the feeling that you may have missed something significant. The tunnel’s dark and mysterious atmosphere remains in your mind as you exit and return to the forest. You are left with a lingering curiosity about what secrets the tunnel might have held and whether you’ll ever have the chance to uncover them.',
            choices: [],
          },
          {
            id: 7,
            text: 'You decide to investigate the abandoned campsite further. As you dig through the scattered items, you find a hidden compartment in the ground. Inside, there is a small, weathered box with a combination lock. After carefully inspecting the box, you find an old note hidden beneath it, detailing the combination. You open the box to reveal a set of old maps and a journal that describes the tunnel you discovered earlier. The journal provides detailed instructions on how to navigate the tunnel and unlock its secrets. With this newfound knowledge, you are now better prepared to explore the tunnel and uncover its mysteries.',
            choices: [],
          }
        ],
      },
      7: {
        title: 'The Underwater Adventure',
        author: 'Michael Anderson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Time+Traveler',
        startNode: {
          id: 1,
          text: 'While exploring a secluded coastal area, you discover a hidden cave partially submerged in the sea. The cave entrance is just above the waterline, with a narrow passage leading deeper into the cliff. The cave walls are lined with iridescent minerals that reflect the dim light of the setting sun, casting an otherworldly glow. As you peer inside, you notice a faint, rhythmic pulsing coming from within, almost as if the cave itself is alive. The allure of the unknown beckons you forward. You wonder what lies beyond this mysterious entrance and whether you should delve deeper into its secrets.',
          choices: [
            { text: 'Enter the cave and explore the underwater passage', nextNode: 2 },
            { text: 'Investigate the area around the cave first', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'With a sense of adventure, you don your diving gear and plunge into the water, swimming toward the cave entrance. The water is surprisingly warm and clear, allowing you to see the vibrant marine life surrounding you. As you swim deeper, the cave opens up into an expansive underwater cavern. Schools of colorful fish dart around, and bioluminescent algae light up the walls, illuminating ancient carvings that hint at a long-lost civilization. The deeper you go, the more you sense that you are not alone in this underwater realm. A strange, echoing sound reverberates through the cavern, guiding you further in.',
            choices: [{ text: 'Follow the echoing sound deeper into the cavern', nextNode: 4 },
              { text: 'Examine the ancient carvings on the walls', nextNode: 5 },
            ],
          },
          {
            id: 3,
            text: 'You decide to explore the area around the cave entrance. As you investigate, you find several old shipwrecks and pieces of nautical equipment scattered around the shoreline. Among the wreckage, you discover a weathered map with cryptic symbols and instructions written in an ancient script. The map appears to indicate that the cave is part of an intricate network of underwater tunnels leading to hidden treasures. The discovery piques your curiosity, and you consider whether to follow the maps directions or dive straight into the cave.',
            choices: [{ text: 'Follow the map’s directions to explore other underwater tunnels', nextNode: 6 },
              { text: 'Enter the cave as initially planned ', nextNode: 2 }
            ],
          },
          {
            id: 4,
            text: 'You decide to follow the echoing sound deeper into the cavern. The path becomes narrower, and the water grows colder. After navigating through a series of tight passages, you emerge into a grand, submerged chamber. At the center of the chamber is an ancient, ornate pedestal with a shimmering, mysterious orb resting upon it. The orb emits a soft, pulsating light, and you can feel a strong current of energy emanating from it. The chamber walls are adorned with more intricate carvings, depicting scenes of ocean deities and mythical sea creatures.',
            choices: [{ text: 'Investigate the orb on the pedestal', nextNode: 7},
              { text: 'Study the carvings on the chamber walls', nextNode: 5 },
            ],
          },
          {
            id: 5,
            text: 'ou decide to examine the ancient carvings on the cavern walls. The carvings tell the story of an ancient maritime civilization that revered the ocean and its mystical properties. The scenes depict a grand city submerged beneath the waves, ruled by powerful sea deities. One carving catches your eye: it shows a ritual involving a glowing orb similar to the one you saw on the pedestal. The carving suggests that the orb is a key to unlocking a hidden treasure or secret. With this knowledge, you feel compelled to investigate the orb further.',
            choices: [
              { text: 'Investigate the orb on the pedestal', nextNode: 7 },
              { text: 'Return to the cave entrance and explore other areas', nextNode: 6 },
            ],
          },
          {
            id: 6,
            text: 'You decide to follow the map directions to explore other underwater tunnels. Swimming through the tunnels, you come across a series of interconnected caves. Each cave contains different artifacts and remnants of the ancient civilization: ornate pottery, old scrolls, and treasure chests. In one of the caves, you find a peculiar key with a strange symbol etched into it. The key appears to match the symbol on the ancient map, leading you to believe it might be connected to the orb you saw earlier.',
            choices: [
              { text: 'Return to the grand chamber with the orb', nextNode: 7 },
              { text: 'Continue exploring the underwater tunnels', nextNode: 8 },
            ],
          },
          {
            id: 7,
            text: 'You carefully approach the orb on the pedestal, feeling the powerful energy it radiates. Using the key you discovered earlier, you unlock a hidden compartment within the pedestal. Inside, you find a beautifully crafted chest, encrusted with jewels and adorned with intricate designs. The chest seems to hum with the same energy as the orb. With a sense of anticipation, you open the chest to reveal a collection of ancient artifacts and scrolls, as well as a detailed map of the lost city depicted in the carvings. This discovery opens the door to further adventures and mysteries waiting to be unraveled.',
            choices: [
              { text: 'Continue exploring the underwater cavern', nextNode: 8 },
              { text: 'Return to the surface with your newfound treasures'},
            ], 
          },
          {
            id: 8,
            text: 'You decide to continue exploring the underwater tunnels, driven by the thrill of discovery. Following the key and map, you navigate through hidden passages and ancient underwater ruins. Each discovery brings you closer to understanding the full extent of the lost civilizations secrets. You find additional artifacts, each more fascinating than the last, and uncover the full story of a once-great city now submerged beneath the waves. The adventure leaves you with a deep sense of accomplishment and a newfound appreciation for the mysteries of the ocean.',
            choices: [],
          }
        ],
      },
      8: {
        title: 'The Time Traveler',
        author: 'Emma Wilson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Magical+Kingdom',
        startNode: {
          id: 1,
          text: 'In a dusty, forgotten corner of an old antique shop, you stumble upon a peculiar device that immediately catches your attention. It’s an intricately designed pocket watch with an array of strange dials and symbols etched onto its surface. The shopkeeper, an eccentric old man with a twinkle in his eye, explains that the device belonged to a renowned inventor who claimed it could manipulate time. Skeptical yet intrigued, you purchase the device and take it home. As you examine it further, you notice that it seems to pulse with a faint, rhythmic glow. You cant help but wonder if there is some truth to the shopkeepers tale.',
          choices: [
            { text: 'Attempt to activate the device and see what happens', nextNode: 2 },
            { text: 'Research the history of the inventor and the device first', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You decide to test the device. Following the instructions scribbled on a faded piece of parchment found in the box, you twist the dials and press a series of buttons. Suddenly, the pocket watch begins to glow brightly, and you feel a rush of disorienting energy. When the light subsides, you find yourself in a completely different place. The surroundings are unfamiliar—a bustling cityscape filled with futuristic technology and towering skyscrapers. You realize that the device has transported you to a future time. The air is filled with the hum of advanced machinery, and people are dressed in sleek, high-tech clothing. As you wander through the streets, you must figure out how to navigate this new world and find a way back.',
            choices: [{ text: 'Explore the futuristic city and gather information', nextNode: 4 },
              { text: 'Attempt to activate the device and return to your time', nextNode: 5 },
            ],
          },
          {
            id: 3,
            text: 'You decide to research the history of the inventor and the device. After hours of sifting through old records and manuscripts, you uncover fascinating details about the inventor’s experiments with time manipulation. It turns out that the inventor was obsessed with discovering the secrets of time travel and had created several prototypes. Among the records, you find a reference to a specific location—a hidden laboratory where the final prototype was developed. The notes suggest that this laboratory holds the key to understanding and controlling the time device’s powers. Excited by the prospect of further discovery, you decide to seek out this hidden laboratory.',
            choices: [{ text: 'Search for the hidden laboratory based on the clues found', nextNode: 6 },
              { text: 'Continue your research for more information on time travel', nextNode: 7 },
            ],
          },
          {
            id: 4,
            text: 'In the futuristic city, you marvel at the advanced technology surrounding you. Holographic advertisements float above the streets, and autonomous vehicles glide silently by. You stumble upon a high-tech research center where you meet a scientist who is intrigued by your story. She reveals that the city is a hub for technological innovation and that time travel research is an ongoing project. She offers to help you investigate the device and its origins. Together, you delve into the city’s archives and discover that the device was created as part of an experimental program to test the limits of time travel. The scientist suggests that you might be able to use the city’s technology to return to your original time.',
            choices: [
              { text: 'Collaborate with the scientist to activate the device and return home', nextNode: 5 },
              { text: 'Continue exploring the city and learning about its advancements', nextNode: 8 },
            ],
          },
          {
            id: 5,
            text: 'With the scientist’s help, you attempt to reverse the time travel. The city’s advanced technology provides you with new tools and insights into the device’s workings. After several days of experimentation, you manage to recalibrate the device and prepare for a return journey. As you activate the device, a whirlwind of energy surrounds you, and you feel yourself being pulled through time. When the light fades, you find yourself back in the familiar setting of your home, the antique shop in the background. The device is now silent, its glow extinguished. You’ve returned to your original time, but the experience has left you with a deeper understanding of time travel and its implications.',
            choices: [
              { text: 'Keep the device and study it further', nextNode: 7 },
            ],
          },
          {
            id: 6,
            text: 'You follow the clues to the hidden laboratory, a secretive location tucked away in an abandoned part of the city. The laboratory is filled with old, dusty equipment and half-finished experiments. Among the clutter, you find the final prototype of the time device—an elaborate contraption with advanced features and an extensive set of controls. As you examine the prototype, you discover detailed instructions on how to operate it and manipulate time with greater precision. With this newfound knowledge, you realize that you have the power to explore different eras and make significant changes in the timeline.',
            choices: [
              { text: 'Activate the prototype and test its capabilities', nextNode: 8 },
              { text: 'Continue your research on time manipulation', nextNode: 7 },
            ],
          },
          {
            id: 7,
            text: 'You decide to spend more time understanding the intricacies of the time device. Delving into the inventor’s notes and experimenting with different settings, you gain a profound understanding of how time travel works and the potential consequences of altering the timeline. You learn about the risks of creating paradoxes and the ethical implications of meddling with history. With this knowledge, you feel more prepared to use the device responsibly. The experience has also sparked a deep curiosity about the possibilities that time travel offers, and you are eager to explore them further.',
            choices: [],
          },
          {
            id: 8,
            text: 'As you explore the futuristic city or the hidden laboratory, you realize that the possibilities with time travel are vast and exhilarating. Whether you’re fascinated by the advanced technology of the future or the secrets of the lost laboratory, you understand that time travel holds both great opportunities and great responsibilities. With your newfound knowledge and experiences, you are ready to embark on further adventures, explore different eras, and uncover the mysteries of time itself. The journey has only just begun, and you’re excited about the future.',
            choices: [],
          }
        ],
      },
      9: {
        title: 'The Pirate Treasure',
        author: 'David Thompson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Pirate%27s+Treasure',
        startNode: {
          id: 1,
          text: 'While rummaging through an old trunk in your attic, you uncover a weathered, yellowed parchment. Unfolding it carefully, you realize it’s an ancient map adorned with cryptic symbols and faded writing. The map depicts a distant island marked with an X and surrounded by dangerous reefs and uncharted waters. Along the edge, a faded inscription reads: "To the brave heart who seeks the treasure, follow the stars and face the storm to claim your prize." The map allure is irresistible; the promise of hidden pirate treasure beckons you. With a mix of excitement and trepidation, you decide to set out on a journey to find this legendary treasure.',
          choices: [
            { text: 'Prepare for the journey and set sail immediately', nextNode: 2 },
            { text: 'Research the map and its origins before starting your adventure', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You gather supplies, enlist a crew of adventurous souls, and set sail towards the island marked on the map. The voyage is long and treacherous, with unpredictable weather and rough seas testing your resolve. After weeks at sea, you finally catch sight of the island, shrouded in mist and looming with an air of mystery. As you approach, you navigate through treacherous reefs and anchor your ship near a hidden cove. The island dense jungle and rocky cliffs present an imposing challenge. Undeterred, you and your crew disembark, ready to uncover the secrets hidden within.',
            choices: [{ text: 'Explore the island jungle for clues', nextNode: 4 },
              { text: 'Search the coastline for hidden caves or passages', nextNode: 5 },
            ],
          },
          {
            id: 3,
            text: 'You delve into research about the map’s origins, visiting libraries and consulting historians. Through your investigation, you uncover tales of the infamous pirate Captain Blackthorn, who was rumored to have hidden his vast fortune on an island that matches the map’s description. Historical records suggest that Captain Blackthorn’s treasure was fiercely guarded by traps and puzzles, and many who sought it never returned. Armed with this knowledge, you gather more detailed information about the island geography and potential hazards. With a solid plan in hand, you set out to find the treasure, ready to face the challenges that lie ahead.',
            choices: [{ text: 'Set sail for the island with the knowledge you’ve gained', nextNode: 2 },
              { text: 'Prepare further by seeking out experts on pirate lore and treasure hunting', nextNode: 6 },
            ],
          },
          {
            id: 4,
            text: 'The jungle is a dense, tangled maze of vines and towering trees. As you and your crew forge ahead, you encounter numerous obstacles—hidden pits, venomous snakes, and dense thickets. Following the map’s clues, you discover a series of ancient stone markers partially obscured by foliage. These markers seem to form a path leading deeper into the jungle. At one of the markers, you find a weathered inscription that hints at the next step in your quest: "Seek the guardian of the lost treasure, where the moonlight meets the stone." Determined to decipher this clue, you press on, your excitement growing as you approach the heart of the island.',
            choices: [{ text: 'Follow the path indicated by the stone markers', nextNode: 7 },
              { text: 'Search for the guardian of the lost treasure', nextNode: 8 },
            ],
          },
          {
            id: 5,
            text: 'The hidden cove is a secluded, rocky inlet with a small, hidden cave entrance partially submerged in the water. You carefully explore the cave, which is damp and echoing with the sounds of dripping water. Inside, you find remnants of old pirate equipment and a chest that has long since rusted. Upon opening the chest, you discover a collection of old nautical charts and a journal with faded entries describing the islands dangers and secrets. One entry stands out, mentioning a hidden entrance to a treasure vault buried within the island’s cliffs. Armed with this new information, you regroup with your crew and head to the cliffs to investigate further.',
            choices: [
              { text: 'Search the cliffs for the hidden entrance to the treasure vault', nextNode: 7 },
              { text: 'Use the nautical charts and journal to plan a more detailed search', nextNode: 8 },
            ],
          },
          {
            id: 6,
            text: 'You decide to seek expert advice on pirate lore and treasure hunting. Consulting with renowned treasure hunters and historians, you gather invaluable insights into the tricks and traps that pirates often used to protect their hoards. One expert reveals that Captain Blackthorn treasure was likely hidden in a complex maze of tunnels beneath the island. Armed with this knowledge, you refine your plan and acquire the necessary tools and equipment to navigate underground passages. With your preparations complete, you set sail for the island, ready to tackle the new challenges ahead.',
            choices: [
              { text: 'Proceed to the island and begin the treasure hunt', nextNode:2 },
              { text: 'Conduct additional research to ensure you’re fully prepared', nextNode: 4 },
            ],
          },
          {
            id: 7,
            text: 'You follow the path through the jungle, guided by the stone markers. Eventually, you reach a large stone altar at the center of the island, bathed in moonlight. The altar is adorned with intricate carvings and symbols that match those on the map. At the base of the altar, you find a hidden lever. Pulling it reveals a secret passage leading down into the earth. Descending into the passage, you find yourself in a vast underground chamber filled with ancient traps and puzzles. Navigating through the chamber, you encounter a series of challenges that test your wits and courage.',
            choices: [{ text: 'Solve the puzzles and traps to reach the treasure vault', nextNode: 8 },
              { text: 'Retreat and regroup to plan a safer approach', nextNode: 5 },
            ],
          },
          {
            id: 8,
            text: 'After overcoming the puzzles and traps, you reach the treasure vault. The chamber is filled with glittering piles of gold coins, shimmering jewels, and priceless artifacts. At the center of the room stands a grand chest, adorned with ornate carvings and bound with iron chains. As you approach the chest, you notice a final inscription: "Only those with a pure heart shall claim the prize." With great anticipation, you unlock the chest and discover not only the pirate wealth but also a note from Captain Blackthorn himself. The note reveals that the true treasure was not the gold, but the journey and the wisdom gained along the way. With a sense of accomplishment, you realize that the adventure has been more rewarding than the treasure itself.',
            choices: [],
          }
        ]
      },


    };

    const story = stories[storyId];
    if (story) {
      setCurrentNode(story.startNode);
      setStoryNodes(story.nodes);
    }
  }, [storyId]);

  const handleChoice = (nextNodeId) => {
    const nextNode = storyNodes.find((node) => node.id === nextNodeId);
    setCurrentNode(nextNode);
  };

  return (
    <div style={styles.root}>
      <Header avatar={avatar} />
      <Container maxWidth="md" sx={{ mt: 5 }}>
      {currentNode ? (
        <Card sx={{ mt: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {currentNode.text}
            </Typography>

            <List>
              {currentNode.choices.map((choice, index) => (
                <ListItem button key={index} onClick={() => handleChoice(choice.nextNode)}>
                  <ListItemText primary={choice.text} />
                  <ArrowForwardIosIcon />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ) : (
        <Grid2 container justifyContent="center" sx={{ mt: 5 }}>
          <CircularProgress />
        </Grid2>
      )}

      {/* Return to Home Button */}
      <Grid2 container justifyContent="center" sx={{ mt: 4 }}>
        <Button variant="contained" color="secondary" startIcon={<HomeIcon />} component={Link} to="/home">
          Return to Home
        </Button>
      </Grid2>
      </Container>
    </div>
  );
}

export default StoryPage;
