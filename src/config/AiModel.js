const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 30 second video on topic: interesting historical story along with Ai image prompt: Realistic format for each scene and give me result in JSON format  with imagePrompt and ContentText as a field "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"scene\": 1,\n    \"duration\": 3,\n    \"imagePrompt\": \"Realistic painting of a bustling Roman marketplace, overflowing with produce, merchants haggling, and citizens in togas. Dawn light, warm colors, focus on detail.\",\n    \"ContentText\": \"Did you know that Roman Emperors sometimes held mock naval battles inside the Colosseum?\"\n  },\n  {\n    \"scene\": 2,\n    \"duration\": 7,\n    \"imagePrompt\": \"Realistic digital illustration of the Colosseum interior flooded with water. Warships are engaged in fierce combat, with miniature gladiators fighting on board. Detailed water effects, smoke, and roaring crowd.\",\n    \"ContentText\": \"They'd flood the arena to stage 'Naumachiae,' elaborate recreations of famous sea battles.\"\n  },\n  {\n    \"scene\": 3,\n    \"duration\": 5,\n    \"imagePrompt\": \"Realistic photograph of Emperor Titus, portrayed by an actor, sitting in his imperial box in the Colosseum. He is smiling and gesturing towards the battle with enthusiasm. Rich robes, detailed throne, golden light.\",\n    \"ContentText\": \"Imagine Emperor Titus, a man of immense power, orchestrating these spectacles to entertain the masses!\"\n  },\n  {\n    \"scene\": 4,\n    \"duration\": 5,\n    \"imagePrompt\": \"Realistic rendering of Roman engineers frantically working to drain the Colosseum after the naval battle. Show them using complex pulley systems, aqueducts, and pumps. Muddy conditions, frantic energy, authentic tools.\",\n    \"ContentText\": \"Draining the Colosseum afterwards was an enormous feat of engineering.  It had to be cleared quickly for the next event!\"\n  },\n  {\n    \"scene\": 5,\n    \"duration\": 5,\n    \"imagePrompt\": \"Realistic illustration of gladiators preparing for battle in the Colosseum. Depict them oiling their bodies, sharpening their weapons, and psyching themselves up.  Intense expressions, muscle definition, detailed armor.\",\n    \"ContentText\": \"So, from mock naval battles to gladiatorial combat... the Colosseum was truly a marvel of its time.\"\n  },\n  {\n    \"scene\": 6,\n    \"duration\": 5,\n    \"imagePrompt\": \"Realistic photograph of the Colosseum at dusk, bathed in a warm orange glow. Emphasize the scale and grandeur of the ancient amphitheater. A few tourists can be seen admiring the structure in the foreground.\",\n    \"ContentText\": \"A testament to Roman ingenuity and a reminder of a captivating, if sometimes brutal, past.\"\n  }\n]\n```\n"},
          ],
        },
      ],
    });
