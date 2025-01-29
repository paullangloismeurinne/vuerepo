<template>
  <div class="app-header">
    <div class="logo">Logo</div>
    <nav>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.logo {
  font-size: 24px; /* Adjust size as needed */
  font-weight: bold;
  margin-right: 20px;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin: 0 10px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}
</style>
