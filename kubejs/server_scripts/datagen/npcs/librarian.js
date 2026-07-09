// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("librarian", {
    name: "Veronica",
    intro: [
      "Hello @i, my name is Veronica. I've been brought on here to help you get your storage in order.",
      "Caroline tells me that your homestead is a 'disgusting pile of unorganized rubbish'...",
      "I feel like that was a slight exaggeration, but hopefully some of my cataloging supplies can help you out.",
      "Please stop by the next time you get the chance."
    ],
    chatter: {
      friendship0: [
        "Heya! Need something?",
      ],
      friendship1: [
        ["Upgrading your tools is important, but don't slack on the armor either!", "Cave diving can be pretty dangerous if you're not wearing any."],
      ],
      friendship2: [
        "Busy day today @i?",
      ],
      friendship3: [
        "Hello my friend! What do you need!",
      ],
      friendship4: [
        "Well well well, @i's back in my shop!",
      ],
      friendship5: [
        "Heya @i! What do you need!",
      ],
    },
    giftResponse: {
      loved: [
        ["I should let you know that I'm supposed to file a report for gifts this sweet... ♡"],
        ["Why would you show me a garment this beautiful, I could never get my hands on something like this...", "...? You're giving it to me?", "Thank you @i, I'll take perfect care of it, I have a spare garment bag and everything ♡"],
        ["How did you get your hands on something like this!?", "French seams like this are difficult to pull off on a garment of this size.", "It must have been made by someone who truly loves the craft ♡"],
        "The texture of this is incredible, Maria must have taught you how to raise sheep with such kindness ♡",
        "What a wonderful gift, I can't wait to catalog this for my collection... ♡"
      ],
      liked: [
        "Thank you @i, I appreciate the kindness.",
        "Thanks for the gift, small things like this go a long way.",
        "Oh! It's not so often I receive gifts, thank you.",
        ["Do you need a special container for this? It seems nice.", "Oh this is for me? Thank you @i."],
        "Thank you for the gift, I know someone who'd love something like this."
      ],
      neutral: [
        "Hmmm? Oh you can put that over in section E6.",
        "I'll take care of this for you @i, when do you want it back?",
        "Gift? Why do I need a gift?",
        ["I don't really do deliveries, that seems like Ace's type of thing.", "Oh, it's a gift. Thanks."],
        "Put that one on the pile back there please."
      ],
      disliked: [
        "I don't really want this.",
        "I'm not a fan of things like this.",
        "Did you mean to give this to someone else? I don't understand...",
        "Can you give that to someone else? I don't really like it.",
        "I don't really have a need for this.",
      ],
      hated: [
        "Don't come to me for advice on how to store your disgusting garbage.",
        "What have I done to deserve your ire?",
        ["I should let you know that I have to file a report for things like this.", "I'll let Caroline deal with you, please leave."],
        "This is disgusting.",
        "If Aiden knew you gave people things like this, it would break his heart."
      ],
    },
    unique: [
      {
        name: "five_gift",
        text: [
          "Oh hey hey hey it's my best friend @i!! I've got something that'll make your day even brighter!"
        ]
      },
    ]
  });
}