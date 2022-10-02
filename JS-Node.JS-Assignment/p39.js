//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Album
console.log("Output Excercise # 40");

// with tracks

function make_album(artist, title, Tracks=0){
    //create list for album.
    
    var album_list = {
        'artist': artist,
        'title': title,
        
        }
        if(Tracks>0)
        album_list['tracks'] = Tracks
    return album_list;
    }
var album = make_album('Awais Raza Qadri', 'Sarkar Ka Madina');
console.log(album);

var album = make_album('Awais Raza Qadri', 'Wah Kya Baat Is Mahinay');
console.log(album);

var album = make_album('Awais Raza Qadri', 'Jashn-e-Aamad-e-Rasool');
console.log(album);

var album = make_album('iron maiden', 'piece of mind', tracks=8);
console.log(album);