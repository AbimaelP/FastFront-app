<template>
      <button id="button">Mudar</button>
</template>

<script>
export default {
  name:'ButtonDefault'
}
</script>

<style scoped>
  button {
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 150px;
        display: flex;
        margin-top: 20px;
        border: none;
        font-family:Calibri, 'Trebuchet MS', sans-serif;
        font-size: 22px;
        border-radius: 5px;
        color: rgb(250, 221, 168);
        background-color: rgb(37, 37, 73);
    }
    button:hover {
        cursor: pointer;
        color: #cbce50;
        background-color: rgb(22, 22, 39);
    }
</style>