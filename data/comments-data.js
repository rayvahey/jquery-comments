var commentsArray = [  
{  
   "id": 1,
   "parent": null,
   "created": "2015-01-01",
   "modified": "2015-01-01",
   "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
   "pings": [],
   "fullname": "Simon Powell",
   "profile_picture_url": "https://app.viima.com/static/media/user_profiles/user-icon.png",
   "created_by_admin": false,
   "created_by_current_user": false,
   "upvote_count": 3,
   "user_has_upvoted": false
},
{  
   "id": 2,
   "parent": null,
   "created": "2015-01-02",
   "modified": "2015-01-02",
   "content": "Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
   "pings": [],
   "fullname": "Administrator",
   "profile_picture_url": "https://app.viima.com/static/media/user_profiles/admin-user-icon.png",
   "created_by_admin": true,
   "created_by_current_user": false,
   "upvote_count": 2,
   "user_has_upvoted": false
},
{  
   "id": 3,
   "parent": null,
   "created": "2015-01-03",
   "modified": "2015-01-03",
   "content": "Sed posuere #interdum sem.\nQuisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
   "pings": [],
   "fullname": "You",
   "profile_picture_url": "https://app.viima.com/static/media/user_profiles/user-icon.png",
   "created_by_admin": false,
   "created_by_current_user": true,
   "upvote_count": 2,
   "user_has_upvoted": true
},
{  
   "id": 4,
   "parent": 3,
   "created": "2015-01-04",
   "modified": "2015-01-04",
   "file_url": "http://www.w3schools.com/html/mov_bbb.mp4",
   "file_mime_type": "video/mp4",
   "fullname": "Todd Brown",
   "profile_picture_url": "https://app.viima.com/static/media/user_profiles/user-icon.png",
   "created_by_admin": false,
   "created_by_current_user": false,
   "upvote_count": 0,
   "user_has_upvoted": false
},
{  
   "id": 5,
   "parent": 4,
   "created": "2015-01-05",
   "modified": "2015-01-05",
   "content": "Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
   "pings": [],
   "fullname": "Hank Smith",
   "profile_picture_url": "https://app.viima.com/static/media/user_profiles/user-icon.png",
   "created_by_admin": false,
   "created_by_current_user": false,
   "upvote_count": 0,
   "user_has_upvoted": false
},
{  
   "id": 6,
   "parent": 1,
   "created": "2015-01-06",
   "modified": "2015-01-06",
   "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
   "pings": [],
   "fullname": "Jack Hemsworth",
   "profile_picture_url": "https://app.viima.com/static/media/user_profiles/user-icon.png",
   "created_by_admin": false,
   "created_by_current_user": false,
   "upvote_count": 1,
   "user_has_upvoted": false
},
{  
   "id": 7,
   "parent": 1,
   "created": "2015-01-07",
   "modified": "2015-01-07",
   "content": "Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
   "pings": [],
   "fullname": "Administrator",
   "profile_picture_url": "https://app.viima.com/static/media/user_profiles/admin-user-icon.png",
   "created_by_admin": true,
   "created_by_current_user": false,
   "upvote_count": 0,
   "user_has_upvoted": false
},
{  
   "id": 8,
   "parent": 6,
   "created": "2015-01-08",
   "modified": "2015-01-08",
   "content": "Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
   "pings": [],
   "fullname": "You",
   "profile_picture_url": "https://app.viima.com/static/media/user_profiles/user-icon.png",
   "created_by_admin": false,
   "created_by_current_user": true,
   "upvote_count": 0,
   "user_has_upvoted": false
},
{  
   "id": 9,
   "parent": 8,
   "created": "2015-01-09",
   "modified": "2015-01-10",
   "content": "Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
   "pings": [],
   "fullname": "Bryan Connery",
   "profile_picture_url": "https://app.viima.com/static/media/user_profiles/user-icon.png",
   "created_by_admin": false,
   "created_by_current_user": false,
   "upvote_count": 0,
   "user_has_upvoted": false
},
{  
   "id": 10,
   "parent": 9,
   "created": "2015-01-10",
   "modified": "2015-01-10",
   "content": "Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
   "pings": [],
   "fullname": "You",
   "profile_picture_url": "https://app.viima.com/static/media/user_profiles/user-icon.png",
   "created_by_admin": false,
   "created_by_current_user": true,
   "upvote_count": 0,
   "user_has_upvoted": false
}
]

var usersArray = [
{
   id: 1,
   fullname: "Bryan Connery",
   email: "bryan.connery@viima.com",
   profile_picture_url: "https://app.viima.com/static/media/user_profiles/user-icon.png"
},
{
   id: 2,
   fullname: "Jack Hemsworth",
   email: "jack.hemsworth@viima.com",
   profile_picture_url: "https://app.viima.com/static/media/user_profiles/user-icon.png"
},
{
   id: 3,
   fullname: "Hank Smith",
   email: "hank.smith@viima.com",
   profile_picture_url: "https://app.viima.com/static/media/user_profiles/user-icon.png"
},
{
   id: 4,
   fullname: "Todd Brown",
   email: "todd.brown@viima.com",
   profile_picture_url: "https://app.viima.com/static/media/user_profiles/user-icon.png"
},
{
   id: 5,
   fullname: "Administrator",
   email: "administrator@viima.com",
   profile_picture_url: "https://app.viima.com/static/media/user_profiles/user-icon.png"
},
{
   id: 6,
   fullname: "Simon Powell",
   email: "simon.powell@viima.com",
   profile_picture_url: "https://app.viima.com/static/media/user_profiles/user-icon.png"
},
]