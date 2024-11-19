(() => {
    console.log("Js is Connected");
    console.log("IIFE Fired");

    // Animated Earbuds Scrub Frame
    const canvas = document.querySelector('#scrub-frame');
    const context = canvas.getContext('2d');

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 780;

    const imgs = [];

    // Image Sequences Frame

    for(let i = 0; i < frameCount; i++) {
      const img = new Image();

      img.src = `images/earbuds-sequence/Earbuds-Sequence${(i+1).toString().padStart(4, '0')}.jpg`;
      imgs.push(img);
    }

    const airpodsSequence = {
      frame: 0
    }

    gsap.to(airpodsSequence, {
      frame: 779,
      snap: "frame",
      scrollTrigger: {
        trigger: "#scrub-frame",
        pin: true,
        scrub: 3,
        markers: false,
        start: "top top"
      },
      onUpdate: render
    })

    // Render Frames Function
    function render() {
      console.log(imgs[airpodsSequence.frame]);

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imgs[airpodsSequence.frame], 0, 0);
    }

    // Render Event Listener
    imgs[0].addEventListener("load", render);

    // ============================================
    
    // Hamburger Menu
    // Mobile Navigation
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeBurgerBtn = document.querySelector('.close-btn');
    const offMenu = document.querySelector('.off-menu');

    // Functions
    // =====================
    function openBurger() {
        offMenu.classList.toggle('active');
        console.log('Hamnburger Menu Opened');
    }

    function closeBurger() {
        offMenu.classList.toggle('active');
        console.log('Hamburger Menu Closed');
    }

    // Event Listener
    // =====================
    hamburgerBtn.addEventListener('click', openBurger);
    closeBurgerBtn.addEventListener('click', closeBurger)

    // Hotspot Variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot")

    // Data
    const infoBoxes = [
      {
        title: "Comfortable Earbuds",
        text: "Convenient all day wear due to the High-quality and Comforting materials for the buds silicone.",
        image: "./images/buds.jpg"
      },
      {
        title: "Noise Cancelling Microphone",
        text: "Call with your loved ones without any disturbance. This Noise Cancelling Microphone will only hear your voice.",
        image: "./images/mic.jpg"
      },
      {
        title: "Customized Body",
        text: "Express yourself by customizing the body of your own Airpods Play!",
        image: "./images/body.jpg"
      },
      {
        title: "Fast Charging Case",
        text: "Use it with ease because the battery won't drop that fast and it charged super fast.",
        image: "./images/case.jpg"
      },
      {
        title: "High Definition Audio",
        text: "Your eardrums will be pleased by this High-Definition Audio quality.",
        image: "./images/audio.jpg"
      }
    ]

    // Loading Data
    function loadInfo() {
      infoBoxes.forEach((infoBox, index)=>{
  
        let selected = document.querySelector(`#hotspot-${index+1}`);
        
        let imgSpecs = document.createElement("img");
        imgSpecs.src = infoBox.image;

        let titleSpecs = document.createElement("h2");
        titleSpecs.textContent = infoBox.title;
  
        let detailSpecs = document.createElement("p");
        detailSpecs.textContent = infoBox.text;
        
        selected.appendChild(imgSpecs);
        selected.appendChild(titleSpecs);
        selected.appendChild(detailSpecs);

      })
    }

    // Show/Hide Hotspot Info
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    // Evet Listeners
    
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseenter", showInfo);
      hotspot.addEventListener("mouseleave", hideInfo);
    });

    // Initialize Data Load
    loadInfo();
    
  })();