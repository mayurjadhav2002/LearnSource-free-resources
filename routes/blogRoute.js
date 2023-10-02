const express = require('express');
const blog_route = express();

const bodyParser = require('body-parser');
blog_route.use(bodyParser.json());
blog_route.use(bodyParser.urlencoded({extended:true}));
const multer = require('multer');
const path = require('path');

blog_route.use(express.static('public'));
blog_route.use('/images', express.static('images'));

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, path.join(__dirname, '../public/Blogs/thumbnail'), function(e, s){
            if(e) throw e;
        })
    },
    filename: function(req, file, cb){
        const name = 'qbytespace-thumbnail-'+ Date.now()+file.originalname;
        cb(null, name, function(error1, success1){
            if(error1) throw error1;
        })
    }
});

const upload = multer({storage:storage});
const blog_controller = require('../controllers/blogController');
const auth = require('../middlewares/auth');




// Routes
blog_route.post('/create', auth, upload.single('thumbnail'), blog_controller.create_blog);
// following data needed
// title: req.body.title,
// description: req.body.description,
// thumbnail: thumbnail,
// content: req.body.content,
// created_by: req.body.user_name,
// written_by : req.body.written_by,
// blog: req.body.blog_type
// tags: req.body.tags



blog_route.get('/get-blogs', blog_controller.get_blogs);
// pass "blog_type" with get request, 0 for other, 1 for internship, 2 for courses

blog_route.get('/all-blogs', blog_controller.get_all_blogs);
// need sort_data "ascending" or "descending"
blog_route.get('/search', blog_controller.search_blogs);
// need sort_data "ascending" or "descending"


blog_route.put('/likes', blog_controller.likes);
// update likes need id

blog_route.put('/views', blog_controller.Views);
// update views need id

blog_route.get('/blog_by_id', blog_controller.blog_by_id);
// get blog by using ID need id


blog_route.put('/delete', blog_controller.delete_blog)
blog_route.put('/update', blog_controller.update)
blog_route.get('/user-blogs', blog_controller.user_blog)
blog_route.get('/total_blogs', blog_controller.get_count)

blog_route.put('/data', blog_controller.data)

blog_route.get('/recommended', blog_controller.get_Recommended)
blog_route.get('/pagination-blogs', blog_controller.pagination)


module.exports = blog_route
