  <script>
      const img = [
        "https://cdn.pixabay.com/photo/2014/04/03/10/24/one-310338_640.png",
        "https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312622__340.png",
        "https://cdn.pixabay.com/photo/2014/04/03/10/24/two-310337_960_720.png",
        "https://storage.needpix.com/rsynced_images/dice-310333_1280.png",
        "https://fastpng.com/images/file/dice-q53b71v2l7d59c5e.png",
        "https://www.clker.com/cliparts/8/j/J/g/R/n/dice3.svg.hi.png",
      ];
      const roll = () => {
        let num = Math.floor(Math.random() * 6);
        document.getElementById("ludo").src = img[num];
      };
    </script>
