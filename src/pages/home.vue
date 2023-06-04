<template>
  <div class="home-container">
    <img src="https://2.bp.blogspot.com/-visXVbIoFEg/USTy7LGG1oI/AAAAAAAAJ4o/tpngrxBvbM4/s1600/IMG_0342lr+copy.jpg" alt="Hotel Image" class="home-image">
    <h3 class="home-title">Buket Bunga Fresh</h3>
    <p class="home-description">Temukan keindahan bunga terbaik di Konekti Bloom
      Menyediakan bunga segar dan indah untuk setiap momen indah anda.
    </p>
    <p class="home-description">Rangkaian bunga yang dapat menjadi pilihan untuk dihadiahkan bagi pasangan, keluarga, teman maupun yang lainnya, dalam merayakan momen-momen penting dan bahagia bersama.</p>
</div>
  
</template>

<script>
export default {
  name: 'YourComponentName',
  // Tambahkan komponen Vue.js lainnya di sini sesuai kebutuhan
}
</script>

<style>
.home-container {
  padding: 15% 2rem;
  text-align: center;
  background-image: url('https://2.bp.blogspot.com/-visXVbIoFEg/USTy7LGG1oI/AAAAAAAAJ4o/tpngrxBvbM4/s1600/IMG_0342lr+copy.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.home-image {
  display: none;
}

.home-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color:   #ffffff;
}

.home-description {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 2rem;
}

.sub-cats {
    transform: translate3d(0px, 0px, 0px);
    transition-duration: 0ms;
  }

  .sub-cat {
    width: 139.857px;
    margin-right: 8px;
  }

  .subcircle {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
