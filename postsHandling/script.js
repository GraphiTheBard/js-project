
        var postsInitial = [
            { id: 1, title: "Daily JS news" },
            { id: 2, title: "Weekly JS news" },
            { id: 3, title: "Monthly JS news" },
            { id: 4, title: "Yearly JS news" }
        ];

        function addPost() {
        
            var idNo = document.getElementById("idNo").value;
            var titleText = document.getElementById("titleText").value;
    
        
            const jsonStringRetrieved = localStorage.getItem("myPosts");
            var posts = jsonStringRetrieved ? JSON.parse(jsonStringRetrieved) : [];
        
            var newEntry = {
                id: Number(idNo), 
                title: titleText,
            };
        
            posts.push(newEntry);
         
            localStorage.setItem("myPosts", JSON.stringify(posts));
        
            alert(`Added: ${idNo} - ${titleText}`);
        
            window.location.href = "index.html";
            displayPosts();
        }
        
        function displayPosts() {
            const jsonStringRetrieved = localStorage.getItem("myPosts");
            var posts = jsonStringRetrieved ? JSON.parse(jsonStringRetrieved) : [];
        
            var tableBody = document.querySelector("#postsTable tbody");
    
            tableBody.innerHTML = "";
        
   
            posts.forEach(post => {
                var row = document.createElement("tr");
                row.innerHTML = `<td>${post.id}</td><td>${post.title}</td>`;
                tableBody.appendChild(row);
            });
            
        }
        
    
        displayPosts();


        function redirectToForm(){
            window.location.href = "form.html";
        }