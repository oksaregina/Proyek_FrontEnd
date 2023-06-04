<template>
  <div>
    <h1 class="home-title font-bold text-center text-2xl mt-4 text-cyan-blue-500">Produk</h1>
    <div class="flower-container">
      <div class="flower-item">
        <a href="/collections/buket/products/velvet-love-bouquet">
          <div class="flower-image-container">
            <img class="flower-image" :src="imageSrc1" alt="Velvet Love Bouquet" />
          </div>
          <div class="flower-title">{{ productName1 }}</div>
        </a>
      </div>
      <div class="flower-item">
        <a href="/collections/buket/products/white-roses">
          <div class="flower-image-container">
            <img class="flower-image" :src="imageSrc2" alt="White Roses" />
          </div>
          <div class="flower-title">{{ productName2 }}</div>
        </a>
      </div>
      <div class="flower-item">
        <a href="/collections/buket/products/classic midnight">
          <div class="flower-image-container">
            <img class="flower-image" :src="imageSrc3" alt="Clasic Midnight" />
          </div>
          <div class="flower-title">{{ productName3 }}</div>
        </a>
      </div>
      <div class="flower-item">
        <a href="/collections/buket/products/sunny shine">
          <div class="flower-image-container">
            <img class="flower-image" :src="imageSrc4" alt="Sunny Shine" />
          </div>
          <div class="flower-title">{{ productName4 }}</div>
        </a>
      </div>
      <div class="flower-item">
        <a href="/collections/buket/products/majestic blue">
          <div class="flower-image-container">
            <img class="flower-image" :src="imageSrc5" alt="Majestic Blue" />
          </div>
          <div class="flower-title">{{ productName5 }}</div>
        </a>
      </div>
      <div class="flower-item">
        <a href="/collections/buket/products/utopia garden">
          <div class="flower-image-container">
            <img class="flower-image" :src="imageSrc6" alt="Utopia Garden" />
          </div>
          <div class="flower-title">{{ productName6 }}</div>
        </a>
      </div>
      <div class="flower-item">
        <a href="/collections/buket/products/vienna flow">
          <div class="flower-image-container">
            <img class="flower-image" :src="imageSrc7" alt="Vienna Flower" />
          </div>
          <div class="flower-title">{{ productName7 }}</div>
        </a>
      </div>
      <div class="flower-item">
        <a href="/collections/buket/products/mon amour">
          <div class="flower-image-container">
            <img class="flower-image" :src="imageSrc8" alt="Mon Amour" />
          </div>
          <div class="flower-title">{{ productName8 }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc1: "//cdn.shopify.com/s/files/1/1589/6833/products/Velvet-Love-Bouquet_350x.jpg?v=1674706453",
      productName1: "Velvet Love Bouquet",
      imageSrc2: "https://cdn.shopify.com/s/files/1/1589/6833/products/ASMBUN1019_20-White-Roses-in-Bouquet_350x.jpg?v=1612262342",
      productName2: "White Roses",
      imageSrc3: "https://cdn.shopify.com/s/files/1/1589/6833/products/6905abef-e2dc-4e68-a9ef-2182cba3196a_b908ec1c-87ff-4907-b3b4-9530a2b2165d_350x.jpg?v=1588924193",
      productName3: "Classic Midnight",
      imageSrc4: "https://cdn.shopify.com/s/files/1/1589/6833/products/OUFBUN1016_Sunny-Shine-Up_ffa2af8f-3df0-43cf-a3c1-811ca778a033_350x.jpg?v=1589356539",
      productName4: "Sunny Shine",
      imageSrc5: "https://cdn.shopify.com/s/files/1/1589/6833/products/blue-romance_350x.jpg?v=1612263243",
      productName5: "Majestic Blue",
      imageSrc6: "https://cdn.shopify.com/s/files/1/1589/6833/products/OUFBUN1236_Utopia-Garden-Bouquet_0c3d8bf2-47ab-4c3a-9ae9-3844121240c1_350x.jpg?v=1631614011",
      productName6: "Utopia Garde",
      imageSrc7: "https://cdn.shopify.com/s/files/1/1589/6833/products/Vienna-Bouquet_350x.jpg?v=1643429432",
      productName7: "Vienna Flow",
      imageSrc8: "https://cdn.shopify.com/s/files/1/1589/6833/products/Mon-Amour-Hand-Bouquet_95390a66-b870-4149-bf1f-0a751b749fd2_350x.jpg?v=1612350372",
      productName8: "Mon Amour",
    };
  },
};
</script>

<style>
.text-cyan-blue-500 {
  color: #284a6d;
}

.flower-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.flower-item {
  padding: 1rem;
  text-align: center;
  background-color: #ffffff;
  margin: 10px;
  border-radius: 7px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.flower-image-container {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
}

.flower-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
}

.flower-title {
  font-size: 1.0 rem;
  font-weight: bold;
  margin-top: 10px;
  color: #284a6d;
}
</style>
