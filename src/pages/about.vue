<template>
  <div class="about-container">
    <h3 class="about-title">About Our Hotel</h3>
    <div class="about-content">
      <div class="about-image">
        <img src="https://example.com/about-image.jpg" alt="About Image">
      </div>
      <div class="about-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at elit iaculis, volutpat ligula eget, finibus justo. Mauris id maximus arcu. Sed commodo leo non elit tristique, eget pulvinar enim bibendum. Curabitur volutpat sagittis fermentum. Vivamus eget arcu vel nibh lacinia consequat. Morbi semper turpis et urna faucibus facilisis.
        </p>
        <p>
          Sed lobortis vestibulum purus non ultrices. Fusce sit amet lacus quis mi cursus mattis in sit amet ex. Nullam quis odio vitae neque rutrum scelerisque. Curabitur id elit et nunc faucibus condimentum. Sed vitae convallis felis. Morbi tristique urna ut felis lacinia, nec dictum arcu bibendum. Fusce pulvinar tellus id iaculis lobortis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.about-container {
  padding: 2rem;
}

.about-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-image {
  margin-bottom: 1rem;
}

.about-image img {
  width: 300px;
  height: auto;
}

.about-description {
  text-align: justify;
  line-height: 1.5;
}
</style>
