import { Component } from '@angular/core';

@Component({
  selector: 'nx-micro-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mtg-singles';
  list = [
    {
      title: 'Force of Will',
      image:
        'https://c1.scryfall.com/file/scryfall-cards/large/front/d/d/dd60b291-0a88-4e8e-bef8-76cdfd6c8183.jpg?1598303900',
      description:
        'You may pay 1 life and exile a blue card from your hand rather than pay this spell’s mana cost. Counter target spell.',
      description_sub: '“I alone determine my destiny.”',
    },
    {
      title: 'Snapcaster Mage',
      image:
        'https://c1.scryfall.com/file/scryfall-cards/large/front/7/e/7e41765e-43fe-461d-baeb-ee30d13d2d93.jpg?1547516526',
      description:
        'Flash When Snapcaster Mage enters the battlefield, target instant or sorcery card in your graveyard gains flashback until end of turn. The flashback cost is equal to its mana cost.',
      description_sub: '“I alone determine my destiny.”',
    },
  ];
}
