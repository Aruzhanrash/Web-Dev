import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card.component/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Apple flagship smartphone with A17 Pro chip and titanium design.',
      price: 599000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9b/h62/86319883485214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h37/hcb/86319883517982.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-natural-titanium-113138930/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Premium Android smartphone with powerful camera and S-Pen.',
      price: 580000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h16/h23/84963123527710.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-116089281/'
    },
    {
      id: 3,
      name: 'MacBook Air M1',
      description: 'Lightweight laptop with Apple M1 chip and all-day battery.',
      price: 620000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },
    {
      id: 4,
      name: 'Sony WH-1000XM5',
      description: 'Industry-leading noise cancelling wireless headphones.',
      price: 210000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h4e/65099689000990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-black-104985038/'
    },
    {
      id: 5,
      name: 'Apple Watch Series 9',
      description: 'Smartwatch with health tracking and Always-On display.',
      price: 240000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd9/h0b/83874224865310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h87/83874224930846.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45-mm-113720318/'
    },
    {
      id: 6,
      name: 'Xiaomi Robot Vacuum X10',
      description: 'Smart robot vacuum cleaner with powerful suction.',
      price: 180000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p33/pd6/6400041.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p17/pd6/6400042.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfb/pd5/6400043.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdf/pd5/6400044.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x10-106980049/'
    },
    {
      id: 7,
      name: 'LG 55” 4K Smart TV',
      description: 'Ultra HD Smart TV with HDR and webOS platform.',
      price: 320000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc2/p50/72356962.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pfb/p50/72356964.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p17/p51/72356965.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p33/p51/72356966.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lg-55ua73006la-140-sm-chernyi-147936570/?c=750000000'
    },
    {
      id: 8,
      name: 'Logitech MX Master 3S',
      description: 'Advanced wireless mouse for productivity and design.',
      price: 65000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/h51/64417186480158.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h13/ha1/64417188675614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h01/64417190739998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/hf5/64417192050718.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006559-chernyi-106172365/?c=750000000'
    },
    {
      id: 9,
      name: 'PlayStation 5',
      description: 'Next-gen gaming console with ultra-fast SSD and ray tracing.',
      price: 350000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p2a/78474504.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-825-gb-white-100746577/'
    },
    {
      id: 10,
      name: 'GoPro HERO12',
      description: 'Action camera for extreme adventures and 5.3K video.',
      price: 210000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1b/pd7/67184221.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h70/hb3/83574234644510.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h6e/83574234841118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h88/83574235037726.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-12-113156475/?c=750000000'
    }
  ];
}