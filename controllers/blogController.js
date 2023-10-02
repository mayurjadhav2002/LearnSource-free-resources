const express = require('express');
const Blog = require('../models/blogModel');
const Search = require('../models/Search');


const user_blog = async (req, res) => {
    try {
        const id = req.body.id || req.query.id;
        const blogs = await Blog.find({ written_by: id });


        if (blogs) {
            res.send({ total: blogs.length, blogs: blogs });

        } else {
            res.status(500).send({ success: false, msg: "No blog found" });

        }

    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again", data: error });
    }
}
const create_blog = async (req, res) => {
    try {
        const thumbnail = req.file.filename || 'thumbnail.png';
        const blog = new Blog({
            title: req.body.title,
            description: req.body.description,
            thumbnail: thumbnail,
            content: req.body.content,
            created_by: req.body.created_by,
            written_by: req.body.written_by,
            blog: req.body.blog_type,
            tags: req.body.tags,
  
        });
        const blog_data = await blog.save();

        if (blog_data) {
            // Update the creator's blogs array with the ID of the created blog
            const user = await User.findById(req.body.written_by);
            if (user) {
                user.blogs.push(blog_data._id);
                await user.save();
            }

            res.status(200).send({ success: true, msg: "Blog Published", data: blog_data });
        }

    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });
    }
}
const get_count = async (req, res) => {
    try {
        const total = await Blog.find().count()
        if (total) {
            res.send({ total })
        } else {
            res.status(400).send({ "msg": "Some error Occured" })
        }

    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
}
const get_all_blogs = async (req, res) => {
    try {
        var page = req.body.page || req.query.page;
        var skip;
        const limit = 10;
        if (page <= 1) {
            skip = 0;
        } else {
            skip = (page - 1) * limit;
        }

        const blogs = await Blog.find({}).sort({ "created_on": 'descending' }).skip(skip).limit(limit).populate({
            path: 'written_by', // Use 'creator' field to populate author information
            select: 'name image short_bio role instagram github linkedin website' // Select the fields you want from the User model
        });
;
        if (blogs) {
            res.send(blogs);


        } else {
            res.status(500).send({ success: false, msg: "No blog found" });


        }
    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });
    }
};



const get_blogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ blog: req.body.blog_type }).sort({ "created_on": 'descending' });
        if (blogs) {
            res.send(blogs);

        } else {
            res.status(500).send({ success: false, msg: "No blog found" });

        }
    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
};




const search_blogs = async (req, res) => {
    try {
        const sort_data = req.body.sort_data || 'descending';
        var search = req.body.search;
        const blogs = await Blog.find({
            $or:
                [{ "title": { $regex: ".*" + search + ".*", $options: 'i' } },
                { "content": { $regex: ".*" + search + ".*", $options: 'i' } },
                { "tags": { $regex: ".*" + search + ".*", $options: 'i' } },

                ]
        }).sort({ "created_on": sort_data }); //"content":{$regex: ".*"+search+".*", $options: 'i'}
        if (blogs) {
            await res.status(200).send({ total: blogs.length, blogs });
            try {
                new Search({
                    search_query: search
                })
            } catch {
                console.log("failed to insert search query")
            }

        } else {
            res.status(200).send({ success: true, msg: "No Blog Found" })
        }

    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
}

const get_Recommended = async (req, res) => {
    try {
        var limit = 5;
        const blogs = await Blog.find({ recommended: 1 }).sort({ 'created_on': 'ascending' }).limit(limit)
        if (blogs) {
            res.send(blogs)

        } else {
            res.status(200).send({ success: true, msg: "No Blog Found" })

        }

    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
}


const Views = async (req, res) => {
    try {
        const blog_id = req.body.id;
        const update = await Blog.findByIdAndUpdate({ _id: blog_id }, { $inc: { views: 1 } });

        if (update) {
            res.status(200).send({ success: true, msg: "Views Updated" });

        } else {
            res.status(200).send({ success: false, msg: "Error Updating Views" })

        }


    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
}


const likes = async (req, res) => {
    try {
        const id = req.body.id;
        const update = await Blog.findByIdAndUpdate({ _id: id }, { $inc: { likes: 1 } })
        if (update) {
            res.status(200).send({ success: true, msg: "Likes Updated" });

        } else {
            res.status(501).send({ success: false, msg: "Error Updating Likes" })

        }


    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
}
const blog_by_id = async (req, res) => {
    try {
        const blog_id = req.query.id;
        const blog = await Blog.findById(blog_id).populate({
            path: 'written_by', // Use 'creator' field to populate author information
            select: 'name image short_bio role instagram github linkedin website' // Select the fields you want from the User model
        });

        if (blog) {
            const author = blog.written_by; // Assuming there's only one author
            res.status(200).send({
                success: true,
                blog: {
                    _id: blog._id,
                    title: blog.title,
                    description: blog.description,
                    thumbnail: blog.thumbnail,
                    content: blog.content,
                    tags: blog.tags,
                    views: blog.views,
                    likes: blog.likes,
                    created_on: blog.created_on,
                    // Include author's information
                    author: {
                        name: author.name,
                        image: author.image,
                        short_bio: author.short_bio,
                        role: author.role,
                        instagram: author.instagram,
                        github: author.github,
                        linkedin: author.linkedin,
                        website: author.website
                    },
                    // Include other blog details as needed
                    // ...
                }
            });
        } else {
            res.status(200).send({ success: false, msg: "Error" });
        }
    } catch (error) {
        res.status(500).send({ success: false, msg: "Some error occurred, please try again", error: error.message });
    }
}


const update = async (req, res) => {
    try {
        const user_id = req.body.user_id;
        const blog_id = req.body.blog_id;
        const thumbnail = req.file.filename;

        const blog = await Blog.findOne({ _id: blog_id });

        if (user_id == blog.written_by) {
            const Blog = await Blog.findByIdAndUpdate({ _id: blog_id },
                {
                    $set: {


                        title: req.body.title,
                        description: req.body.description,
                        thumbnail: thumbnail,
                        content: req.body.content,
                        blog: req.body.blog_type,
                        tags: req.body.tags
                    }
                }, { new: true });
            if (Blog) {
                res.status(200).send({ success: true, msg: "blog updated", blog: Blog });
            } else {
                res.status(500).send({ success: false, msg: "Not found! May be already deleted" });
            }
        } else {
            res.status(500).send({ success: false, msg: "You Cannot update this post" });
        }
    } catch (error) {

    }
}

const data = async (req, res) => {
    try {
        const blog_id = req.body.blog_id;
        const blog = await Blog.findOne({ _id: blog_id });
        console.log(blog.written_by)
        if (blog.written_by == "64a5c1a6a376424a1f864844") {
            console.log("match")
        } else {
            console.log("Not matched")
        }
    } catch (error) {

    }
}


const delete_blog = async (req, res) => {
    try {
        const user_id = req.body.user_id;
        const blog_id = req.body.blog_id;
        const blog = await Blog.findOne({ _id: blog_id });

        if (user_id == blog.written_by) {
            const delBlog = await Blog.findByIdAndRemove({ _id: blog_id });
            if (delBlog) {
                res.status(200).send({ success: true, msg: "blog deleted" });
            } else {
                res.status(500).send({ success: false, msg: "Not found! May be already deleted" });
            }
        } else {
            res.status(500).send({ success: false, msg: "You Cannot delete this post" });
        }


    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
}



const pagination = async (req, res) => {
    try {
        var page = req.body.page || req.query.page;
        
        var productdata;
        var skip;
        const limit = 2;
        if (page <= 1) {
            skip = 0;
        } else {
            skip = (page - 1) * limit;
        }

        productdata = await Blog.find().populate({
            path: 'written_by', // Use 'creator' field to populate author information
            select: 'name image short_bio role instagram github linkedin website' // Select the fields you want from the User model
        }).sort({ "created_on": "ascending" }).skip(skip).limit(limit)
        res.status(200).send({ success: true, data: productdata });


    } catch (error) {
        res.status(400).send({ success: false, msg: "No blog found" });

    }
}


module.exports = {
    create_blog, get_blogs, get_all_blogs, search_blogs, likes, Views, blog_by_id, delete_blog, update, data,
    pagination, user_blog, get_count, get_Recommended
}