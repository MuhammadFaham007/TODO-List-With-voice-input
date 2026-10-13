  const todolist = [{
            
            name:'Make dinner',
            Duedate:'2025-1-23',
            Phone:'887997232'
        },
        {
        
            name:'Make dinner',
            Duedate:'2025-1-23',
            Phone:'879070414'
        }
    ];

    renderTodo();

    function renderTodo(){
        let todolistHTML = '';

        for(let i = 0;i<todolist.length;i++){
            const todoObject = todolist[i];

            // const voice = todoObject.name;
            const name = todoObject.name;
            const Duedate = todoObject.Duedate;
            const Phone = todoObject.Phone;

            const html = `
            <div>${name}</div>
            <div>${Duedate}</div>
            <div>${Phone}</div>
            <button class="js-delete delete-button">Delete</button
            `
            todolistHTML += html;
        }

        console.log(todolistHTML);

        document.querySelector('.js-todo-list').innerHTML = todolistHTML;

        document.querySelectorAll('.js-delete').forEach((deleteButton,index) => {
            deleteButton.addEventListener('click', () => {
                todolist.splice(index,1);
                renderTodo();
            } );
        });

    }

    function addtodo(){

        // const inputVoice = document.querySelector('.startbtn');
        // const voice = inputVoice.value;
          
        const inputElement = document.querySelector('.js-input');
        const name = inputElement.value;

        const inputDate = document.querySelector('.js-date');
        const Duedate = inputDate.value;

        const inputPhone = document.querySelector('.js-phone');
        const Phone = inputPhone.value;

        // if(voice){
        //     todolist.push({
        //         voice,
        //         Duedate,
        //         Phone
        //     });
        // } else {
        //     todolist.push({
        //     name,
        //     Duedate,
        //     Phone
        //     })
        // }

        todolist.push({
            name,
            Duedate,
            Phone
        });
        console.log(todolist);
        renderTodo();

        // inputVoice.value = '';
        inputElement.value = '';
        inputDate.value = '';
        inputPhone.value = '';


    }

   
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
       if(!SpeechRecognition){
        alert("Speech Recognition not supported in this browser.");
       }
        
       const recognition = new SpeechRecognition();
       recognition.lang = 'en-US';
       recognition.interimResults = false; // get only final results
       recognition.maxAlternatives = 1;; // stop after one result
       
       function voiceover(){
        recognition.start();
        }

        recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("You said:", transcript);
        document.querySelector('.js-input').value = transcript;
        };

        recognition.onerror = (event) => {
        console.error("Error occurred:", event.error);
        };

        // recognition.onend = () => {
        // console.log("Voice recognition ended.");
        // };

        // // Start recognition
        // document.querySelector(".startbtn").addEventListener("click", () => {
        // recognition.start();
        // });


 