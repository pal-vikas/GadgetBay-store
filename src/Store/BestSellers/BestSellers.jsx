import React from 'react'
import BestSellersDeatils from "./BestSellersDeatils/"
import "./Bestsellers.css"
const newArrivals = [
  {
    id: 1,
    category: "Smartphone",
    name: "Google Pixel 9 Pro",
    brand: "Google",
    price: 1099,
    rating: 4.7,
    image: "https://www.dxomark.com/wp-content/uploads/medias/post-176677/Google-Pixel-9-Pro-XL_featured-image-packshot-review.png",
    description: "AI-enhanced camera system with Tensor G3 chip and improved battery life."
  },
  {
    id: 2,
    category: "Laptop",
    name: "ASUS ZenBook Pro 16",
    brand: "ASUS",
    price: 1899,
    rating: 4.6,
    image: "https://cdn.cs.1worldsync.com/d9/8f/d98fad49-9ae7-4454-9a21-1e3d0d232848.jpg",
    description: "Lightweight laptop with 4K OLED display and Intel Core i9 processor."
  },
  {
    id: 3,
    category: "Tablet",
    name: "Samsung Galaxy Tab S9",
    brand: "Samsung",
    price: 1199,
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/51lLmjLSupL._AC_SL1500_.jpg",
    description: "14.6-inch AMOLED display with Snapdragon 8 Gen 2 and S Pen support."
  },
  {
    id: 4,
    category: "Camera",
    name: "Canon EOS R8",
    brand: "Canon",
    price: 1799,
    rating: 4.7,
    image: "https://www.scandinavianphoto.dk/globalassets/1057884_canon_eos_r6_mark_ii.jpg?ref=C0E5F9F230&w=640&h=640&mode=max",
    description: "Compact full-frame mirrorless camera with fast autofocus and 4K video."
  },
  {
    id: 5,
    category: "Smartwatch",
    name: "Apple Watch Series 10",
    brand: "Apple",
    price: 499,
    rating: 4.8,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM83ref_FV99_VW_34FR+watch-case-46-aluminum-rosegold-nc-s10_VW_34FR+watch-face-46-aluminum-rosegold-s10_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=RS9tdlNZM2NaZ0FSNHV6djJaNGYzVW5TeWJ6QW43NUFnQ2V4cmRFc1VnWWYyNHkrWFJNZ1BodmdwcWlUcmtNMkhaMkVQZTdleWFvVytrdnNBQmJzc2RGNnlaeXQ4NGFKQTAzc0NGeHR2aWJiLzMwazFsQmpWNUowMkIwc3EzL0xpSkl2OTJEMEdGMUpkR2p1bmRlWnpuY0dmQWU1UUhxNENQZVRyQjk5ZnRCcVBpVENpMUluRnVNbld0T1NWSFh2cXlYK1hMV0U1ZW9xcCtlRHF3V3gyZThGL0dtL1JkeEJQSnRCMXJsZFBFY2doN2ZiODFwWklZeDgrZ0RtbVRXag",
    description: "Larger Always-On display with improved health and fitness tracking."
  },
  {
    id: 6,
    category: "Headphones",
    name: "Sennheiser Momentum 4",
    brand: "Sennheiser",
    price: 349,
    rating: 4.7,
    image: "https://sdmntprukwest.oaiusercontent.com/files/00000000-a508-6243-90a9-5269e073b250/raw?se=2025-07-26T15%3A07%3A07Z&sp=r&sv=2024-08-04&sr=b&scid=5a809be3-b6c1-5dcd-b4bb-39bf53bf490b&skoid=f28c0102-4d9d-4950-baf0-4a8e5f6cf9d4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-26T14%3A00%3A23Z&ske=2025-07-27T14%3A00%3A23Z&sks=b&skv=2024-08-04&sig=%2BWnsKzqvZSZZ1xk1jBJM%2Bpzgt24emmUW8fOTYo4%2Bvi8%3D",
    description: "Premium sound, lightweight design, and 60-hour battery life."
  },
  {
    id: 7,
    category: "Laptop",
    name: "Dell Inspiron 16 Plus",
    brand: "Dell",
    price: 1299,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRaXz1E2pSCvFqMHDWOpVWg5KbzqhvNX3GnutuoGfhnwCOi58hd1ispAhQS2XgCDxYZpiSo0i-OcLiwz1kW7kT-EkveilNMmXVjlvBDsNst4-uOujZoC07W",
    description: "Powerful 16-inch laptop with Intel Core i7 and NVIDIA RTX graphics."
  },
  {
    id: 8,
    category: "Camera",
    name: "Fujifilm X-S20",
    brand: "Fujifilm",
    price: 1399,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtH7VRtEOotTfZVz_ru048rlQ7EZwqCQYOQ&s",
    description: "Versatile APS-C mirrorless camera with advanced video features."
  },
  {
    id: 9,
    category: "Smartphone",
    name: "OnePlus 12 Pro",
    brand: "OnePlus",
    price: 999,
    rating: 4.6,
    image: "https://image01.oneplus.net/media/202405/28/e2566b9853071dbb7fe9306713bbe51f.png?x-amz-process=image%2Fformat%2Cwebp%2Fquality%2CQ_80",
    description: "Flagship smartphone with Snapdragon 8 Gen 3 and 120Hz AMOLED display."
  },
  {
    id: 10,
    category: "Tablet",
    name: "iPad Pro M3",
    brand: "Apple",
    price: 1399,
    rating: 4.8,
    image: "https://sdmntprukwest.oaiusercontent.com/files/00000000-36bc-6243-8730-90c884e7eb2e/raw?se=2025-07-26T15%3A02%3A56Z&sp=r&sv=2024-08-04&sr=b&scid=fe3048f6-f21e-5ecd-ba39-0f21b777a3b2&skoid=f28c0102-4d9d-4950-baf0-4a8e5f6cf9d4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-25T20%3A40%3A36Z&ske=2025-07-26T20%3A40%3A36Z&sks=b&skv=2024-08-04&sig=h4Mhl8q1f28jMpQ/jmxofZ5QhAEepzVDdGwsqd1hrDM%3D",
    description: "Powerful tablet with M3 chip and Liquid Retina XDR display."
  }
];



function BestSellers() {

  return (
    <div>
            <div className="bestSellers-page">
                 {/* <h1>BestSellers</h1> */}
                 {
                      newArrivals.map(New =><BestSellersDeatils name={New.name} img={New.image} price={New.price} />)
                 }
            </div>
    </div>
  )
}

export default BestSellers
