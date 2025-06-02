export interface Product {
  id: string
  name: string
  price: number
  image: any
  description: string
  details: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Apple iPhone 16',
    price: 700,
    image: require('../assets/phones.png'),
    description: `About this item
This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.
There will be no visible cosmetic imperfections when held at an arm's length. There will be no visible cosmetic imperfections when held at an arm's length.
This product will have a battery which exceeds 80% capacity relative to new.
Accessories will not be original, but will be compatible and fully functional. Product may come in generic Box.
This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied.`,
    details: '128GB|Teal'
  },
  {
    id: '2',
    name: 'M4 Macbook Air 13',
    price: 1000,
    image: require('../assets/screen.png'),
    description: `About this item
This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.
There will be no visible cosmetic imperfections when held at an arm's length. There will be no visible cosmetic imperfections when held at an arm's length.
This product will have a battery which exceeds 80% capacity relative to new.
Accessories will not be original, but will be compatible and fully functional. Product may come in generic Box.
This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied.`,
    details: '256GB|Sky blue'
  },
  {
    id: '3',
    name: 'Google Pixel 9A',
    price: 499,
    image: require('../assets/phone2.png'),
    description: `About this item
This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.
There will be no visible cosmetic imperfections when held at an arm's length. There will be no visible cosmetic imperfections when held at an arm's length.
This product will have a battery which exceeds 80% capacity relative to new.
Accessories will not be original, but will be compatible and fully functional. Product may come in generic Box.
This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied.`,
    details: '128GB|Iris'
  },
  {
    id: '4',
    name: 'Apple Airpods 4',
    price: 129,
    image: require('../assets/earpod.png'),
    description: `About this item
This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.
There will be no visible cosmetic imperfections when held at an arm's length. There will be no visible cosmetic imperfections when held at an arm's length.
This product will have a battery which exceeds 80% capacity relative to new.
Accessories will not be original, but will be compatible and fully functional. Product may come in generic Box.
This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied.`,
    details: 'Active Noise Cancellation|Teal'
  },
  // Add more products...
]