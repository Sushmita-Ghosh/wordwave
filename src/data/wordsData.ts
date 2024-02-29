interface WordDetails {
  image: string;
  description: string;
}

interface CommonWords {
  [word: string]: string[];
}

interface WordsData {
  commonWords: CommonWords;
  wordDetails: { [word: string]: WordDetails };
}

const wordsData: WordsData = {
  commonWords: {
    A: ["Apple", "Ant", "Airplane"],
    B: ["Banana", "Bear", "Ball"],
    C: ["Cat", "Car", "Cloud"],
    D: ["Dog", "Dolphin", "Diamond"],
  },
  wordDetails: {
    Apple: {
      image:
        "https://images.freeimages.com/images/large-previews/2b3/apple-1179663.jpg?fmt=webp&h=350",
      description: "A juicy fruit",
    },
    Ant: {
      image:
        "https://images.unsplash.com/photo-1588470045344-4393b295297c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A tiny insect",
    },
    Airplane: {
      image:
        "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A flying vehicle",
    },
    Banana: {
      image:
        "https://images.freeimages.com/images/large-previews/a3b/banana-1190667.jpg?fmt=webp&h=350",
      description: "A yellow fruit",
    },
    Bear: {
      image:
        "https://images.freeimages.com/images/large-previews/dc9/bear-1399923.jpg?fmt=webp&h=350",
      description: "A large mammal",
    },
    Ball: { image: "ball.jpg", description: "A round object used in games" },
    Cat: { image: "cat.jpg", description: "A domesticated feline" },
    Car: { image: "car.jpg", description: "A motor vehicle" },
    Cloud: {
      image: "cloud.jpg",
      description: "A visible mass of water droplets",
    },
    Dog: { image: "dog.jpg", description: "A domesticated canine" },
    Dolphin: { image: "dolphin.jpg", description: "An aquatic mammal" },
    Diamond: { image: "diamond.jpg", description: "A precious gemstone" },
  },
};

export default wordsData;
