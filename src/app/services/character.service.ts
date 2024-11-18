import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private characters = [
    {
      name: 'Viper Ning',
      abilities: ['Yushan Enigma', 'Twilight Crimson'],
      description: 'A master of assassination and stealth.',
      imageUrl: 'assets/images/viper-ning.jpg'
    },
    {
      name: 'Matari',
      abilities: ['Silent Flutter', 'Unseen Wings'],
      description: 'An agile and fast-moving warrior.',
      imageUrl: 'assets/images/Matari.jpg'
    },
    {
      name: 'Akos Hu',
      abilities: ['Roar', 'Feral Frenzy'],
      description: 'Rough, rude, and reckless.',
      imageUrl: 'assets/images/Akos.jpg'
    },
    {
      name: 'Feria Shen',
      abilities: ['Gunplay', 'Mech Mayhem'],
      description: 'She is a charming young girl with a charming personality.',
      imageUrl: 'assets/images/Feria.jpg'
    },
    {
      name: 'Justina Gu',
      abilities: ['Ice Shield', 'Artic Wraith'],
      description: 'the graceful owner of the Pluvial Pavilion.',
      imageUrl: 'assets/images/Justina.jpg'
    },
    {
      name: 'Kurumi',
      abilities: ['Healing Ray', 'Purified Circle'],
      description: 'Kurumi, known as the Flower of Helioth.',
      imageUrl: 'assets/images/Kurumi.jpg'
    },
    {
      name: 'Takeda Nobutada',
      abilities: ['Mythic Grab', 'Demonic Aid'],
      description: 'Live a live free of desire, with no regrets left behind.',
      imageUrl: 'assets/images/Takeda.jpg'
    },
    {
      name: 'Tarka Ji',
      abilities: ['Flame Force', 'Fire Frenzy'],
      description: 'Live fast, drink well, and be merry.',
      imageUrl: 'assets/images/Tarka.jpg'
    },
    {
      name: 'Temulch',
      abilities: ['Zephyr Wisp', 'Storm Prison'],
      description: 'Temulch awakens his inner power.',
      imageUrl: 'assets/images/Temulch.jpg'
    },
    {
      name: 'Tessa',
      abilities: ['Tail Strike', 'Enchant'],
      description: 'A young Herald sharing her soul with an ancient fox spirit.',
      imageUrl: 'assets/images/Tessa.jpg'
    },
    {
      name: 'Tianhai',
      abilities: ['Divine Bell', 'Titan call'],
      description: 'During his travels throughout the lands, he finally found his calling.',
      imageUrl: 'assets/images/Tianhai.jpg'
    },
    {
      name: 'Valda Cui',
      abilities: ['Water Trap', 'Rising Tide'],
      description: 'Valda Cui, descendent of a general, sighed at the way fate hate unfolded as she headed abroad.',
      imageUrl: 'assets/images/Valda.jpg'
    },
    {
      name: 'Wuchen',
      abilities: ['Spirit Blades', 'Tai Chi Teleport'],
      description: 'Practice impermanence, and know when to act.',
      imageUrl: 'assets/images/Wuchen.jpg'
    },
    {
      name: 'Yoto Hime',
      abilities: ['Flying Edge', 'Demon Blade'],
      description: 'one can evade the blows from her demonic blade.',
      imageUrl: 'assets/images/Yoto.jpg'
    },
    {
      name: 'Yueshan',
      abilities: ['Scorching Dash', 'General Call'],
      description: 'Gazing ahead at Centralis, with the memories of our match last year still fresh in my mind.',
      imageUrl: 'assets/images/Yueshan.jpg'
    },
    {
      name: 'Zai Ji',
      abilities: ['Flame Ward', 'Chain Scythe'],
      description: 'Zai life is defined by pain and struggle.',
      imageUrl: 'assets/images/Zai.jpg'
    },
    {
      name: 'Ziping Yin',
      abilities: ['Nature Touch', 'Saving Grace'],
      description: 'Gifted and selfless, she gives her all in healing and treating anyone in need.',
      imageUrl: 'assets/images/Ziping.jpg'
    },
    
    
    
  ];

  getCharacters() {
    return this.characters;
  }
}