function validateInput() {
    const btn = document.querySelector("#contact-btn");
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        validateData(getData());
       
    })

    function getData() {
        const name = document.querySelector(".input-name").value
        const email = document.querySelector(".input-email").value
        const phone = document.querySelector(".input-phone").value
        const text = document.querySelector(".input-text").value
        return {
            name:name,
            email:email,
            phone:phone,
            text:text
        }
    }
    function validateData(props) {
        let count=0;
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ( props.name.length < 2) {
            document.querySelector(".err-name").style.display="block";
            document.querySelector(".err-name span").textContent="Name can't be empty"
            count++;
        } else {
            document.querySelector(".err-name").style.display="block";
        }
        if ( props.email.length < 2) {
            document.querySelector(".err-email").style.display="block";
            document.querySelector(".err-email span").textContent="Email can't be empty"
            count++;

        } else  {
            document.querySelector(".err-email").style.display="none";
        }
        if (!re.test(props.email)) {
            document.querySelector(".err-email").style.display="block";
            document.querySelector(".err-email span").textContent="It doesn't look like an email"
            count++;
        }
        else {
            document.querySelector(".err-email").style.display="block";
        }
        if ( props.phone.length < 2) {
            document.querySelector(".err-phone").style.display="block";
            document.querySelector(".err-phone span").textContent="Phone can't be empty"
            count++;
        }
        {
            document.querySelector(".err-phone").style.display="block";
        }
        if ( props.text.length < 2) {
            document.querySelector(".err-text").style.display="block";
            document.querySelector(".err-text span").textContent="Don't forget the message!"
            count++;

        }
        document.querySelector(".err-text").style.display="block";
        if (count> 0) {
            count=0;
            return false;
        }
    }

}


validateInput();

