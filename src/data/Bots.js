const dataBots = [{
    id: '1',
    name: 'Thresh',
    avatar: 'https://www.mobafire.com/images/avatars/thresh-classic.png',
    description: "Garde aux chaines",
    actions: [
        {
          title: "Sort Ultime",
          keyWords: ["ultime"],
          response: () => { 'Mon sort ultime est : "La cage"'
          }
        },
        {
          title: "role",
          keyWords: ["role"],
          response: () => 'Je suis joué principalement comme support'
        },
        {
          title: "help",
          keyWords: ["/help", "/help "],
          response: () => 'Les commandes sont : "ultime" pour voir le nom du sort ultime - "role" pour voir à quel role je suis joué'
        }
      ]
},{
    id: '2',
    name: 'Blitzcrank',
    avatar: 'https://www.mobafire.com/images/avatars/blitzcrank-classic.png',
    description: "Golem de vapeur",
    actions: [
        {
          title: "Sort Ultime",
          keyWords: ["ultime"],
          response: () => { 'Mon sort ultime est : "Champ de stase"'
          }
        },
        {
          title: "role",
          keyWords: ["role"],
          response: () => 'Je suis joué principalement comme support'
        },
        {
          title: "help",
          keyWords: ["/help", "/help "],
          response: () => 'Les commandes sont : "ultime" pour voir le nom du sort ultime - "role" pour voir à quel role je suis joué'
        }
      ]
}]

export default dataBots