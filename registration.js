
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
  import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const modal = document.getElementById("myModal");
        const btn = document.getElementById("openModalBtn");
        const span = document.getElementById("closeModalBtn");

        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


