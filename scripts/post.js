// your-script.js
function toggleEditSave() {
    var editButton = document.getElementById('editButton');
    var postTitle = document.getElementById('postTitle');
    var postText = document.getElementById('postText');

    if (editButton.innerHTML.includes('Edit')) {
        // Enable editing mode
        editButton.innerHTML = "Save <i class='fa fa-save'></i>";
        postTitle.contentEditable = true;
        postText.contentEditable = true;
        postTitle.style.border = '2px solid pink';
        postText.style.border = '2px solid pink';
    } else {
        // Save changes and exit editing mode
        editButton.innerHTML = "Edit <i class='fa fa-edit'></i>";
        postTitle.contentEditable = false;
        postText.contentEditable = false;
        postTitle.style.border = 'none';
        postText.style.border = 'none';
    }
}
var numberOfClicks = 0;

function likePost() {
    document.getElementById("LikePostBtn").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked";
    numberOfClicks += 1;
    if (numberOfClicks !== 0) {
        if (numberOfClicks === 1) {
            document.getElementById('LikesCount').innerHTML = numberOfClicks + " person likes this!";
        } else {
            document.getElementById('LikesCount').innerHTML = numberOfClicks + " people like this!";
        }
    }
}

function addComment() {
    var comment = document.getElementById("commentText").value;
    var node = document.createElement("div");
    node.innerHTML = "<br>";
    node.style.backgroundColor = "#fff";
    node.style.margin = "10px 10px 10px 10px";
    node.style.padding = "0 20px 20px 10px";
    var textnode = document.createTextNode(comment);
    node.appendChild(textnode);

    if (comment === "") {
        alert("Please add a comment!");
    } else {
        var latestComment = document.getElementById("allCommentsBox");
        latestComment.style.display = "block";
        latestComment.insertBefore(node, latestComment.childNodes[0]);
        document.getElementById('commentText').value = "";
    }
}
