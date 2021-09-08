<template>
  <label for="toggle">
    <input type="checkbox" id="toggle">
    <span></span>
  </label>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
$button-height: 22px;
$button-width: $button-height*2;
$toggle-diameter: $button-height/2;
$button-toggle-offset: ($button-height - $toggle-diameter)/2;
$toggle-shadow-offset: 1px;
$toggle-wider: 1px;
$color-grey: #E9E9E9;
$color-dark-grey: #39393D;
$color-green: #30D158;

span {
  display: inline-block;
  width: $button-width;
  height: $button-height;
  background-color: $color-grey;
  border-radius: $button-height/2;
  position: relative;
  transition: .3s all ease-in-out;
}

span::after {
  content: '';
  display: inline-block;
  width: $toggle-diameter;
  height: $toggle-diameter;
  background-color: #fff;
  border-radius: $toggle-diameter/2;
  position: absolute;
  top: $button-toggle-offset;
  transform: translateX($button-toggle-offset);
  box-shadow: $toggle-shadow-offset 0 $toggle-shadow-offset*4 rgba(0, 0, 0, .10);
  transition: .3s all ease-in-out;
}

input[type="checkbox"]:checked + span {
  background-color: $color-green;
}

input[type="checkbox"]:checked + span::after {
  transform: translateX($button-width - $toggle-diameter - $button-toggle-offset);
  box-shadow: -$toggle-shadow-offset 0 $toggle-shadow-offset*4 rgba(0, 0, 0, .10);
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:active + span::after {
  width: $toggle-wider;
}

input[type="checkbox"]:checked:active + span::after {
  transform: translateX($button-width - $toggle-wider - $button-toggle-offset);
}

@media(prefers-color-scheme: dark) {
  body {
    background-color: #1C1C1E;
  }

  span {
    background-color: $color-dark-grey;
  }
}
</style>