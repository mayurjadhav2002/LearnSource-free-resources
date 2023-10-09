'use client'
import React, { useEffect, useRef, useState } from 'react'
import '../styles/write.css'
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CiCircleRemove } from 'react-icons/ci'
import { useUserContext } from '@/app/auth/userContext/userContext';


const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'blockquote', 'code-block',
  'list', 'bullet',
  'script', 'super', 'sub',
  'indent', 'direction', 'size',
  'color', 'background', 'font', 'align',
  'link', 'image', 'video',
];


function handleImageUpload() {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/image`, formData);

        if (response.status === 200) {
          const imageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/static/Blogs/static/${response.data.url.image}` // Assuming your API returns the image URL
          const quill = window.quill; // Get the Quill instance
          const range = quill.getSelection();
          quill.insertEmbed(range.index, 'image', imageUrl);
        } else {
          console.error('Image upload failed.');
        }
      } catch (error) {
        console.error('Image upload error:', error);
      }
    }
  };
}



const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    handlers: {
      image: handleImageUpload, // Assign your image upload handler here
    },

  },

  history: {
    delay: 2000,
    maxStack: 500,
    userOnly: true,
  },
};


const Write = () => {
  const { user } = useUserContext();

  const [hide1, sethide1] = useState(false);

  const selectedTags = tags => console.log(tags);
  const [blog, setblog] = useState('');
  const [tags, setTags] = useState([])

  const [description, setdescription] = useState('');
  const [loading, setloading] = useState(false)
  const [image, setImage] = useState({ preview: 'https://flowbite.com/docs/images/examples/image-3@2x.jpg', data: '' })
  const [blogtype, setblogtype] = useState(0)





  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (editor) {
      window.quill = editor.getEditor(); // Save the Quill instance to a global variable
    }
  }, [editor]);
  // Title
  const [title, setTitle] = useState("");
  const textAreaRef = useRef(null);
  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [title]);



  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };

  const handleFileChange2 = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    event.target.value = null;

    console.log(event.target.files);

    console.log(fileObj);
    console.log(fileObj.name);
  };





  const handleSubmit = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/create?token=${user.token}`

    const formData = new FormData();
    formData.append('thumbnail', image.data);
    formData.append('title', title);
    formData.append('content', blog);
    formData.append('description', description);
    formData.append('tags', tags);
    formData.append('created_by', user.name);
    formData.append('written_by', user._id);
    formData.append('blog_type', blogtype);


    const headers = {
      Authorization: `${user.token}`, // Assuming your token format is "Bearer token"
    };

    await fetch(url, { method: 'POST', body: formData, headers: headers }).then(res => { console.log(res); console.log("Blog Posted"); removeData() }).catch(err => { console.log(err); alert("error") })
    // Reset your form fields here (e.g., setTitle(''), setdescription(''), ...)

  };


  const removeData = e => {
    setTitle('')
    setdescription('')
    setblog('')
    setTags([])
    setblogtype('')
    sethide1(false)
    alert("Blog Posted")
  }
  const handleFileChange = async (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)


  }




  // Tag Input
  const addTags = event => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, `${event.target.value}`]);
      selectedTags([...tags, `${event.target.value}`]);

      event.target.value = "";
    }
  };

  const removeTags = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };







  // If content in rte changed

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("image", file);
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}}/api/admin/image`, {
              method: "post",
              body: body
              // mode: "no-cors"
            })
              .then((res) => res.json())
              .then((res) => {
                console.log(res)

                resolve({
                  default: `${process.env.NEXT_PUBLIC_BACKEND_URL}/static/Blogs/static/${res.url.image}`
                });
              })
              .catch((err) => {
                alert(err);
              });
          });
        });
      }
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  const handleTitle = e => {
    setTitle(e.target.value);
  };




  // if the meta description changed
  const onChangeDescription = e => {
    setdescription(e.target.value);
  };




  // if form submitted
  const onNext = e => {
    sethide1(true);
    console.log(tags)
  }


  function onValueChange(event) {
    // Updating the state with the selected radio button's value
    setblogtype(event.target.value)
    console.log(blogtype)

  }






  // var toolbarOptions = [
  //   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  //   ['blockquote', 'code-block'],

  //   [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  //   [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  //   [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  //   [{ 'direction': 'rtl' }],                         // text direction

  //   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  //   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  //   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  //   [{ 'font': [] }],
  //   [{ 'align': [] }],
  //   ['link', 'image', "video"],

  //   ['clean']                                         // remove formatting button
  // ];
  // const modules = {
  //   toolbar: toolbarOptions,
  //   history: {
  //     delay: 2000,
  //     maxStack: 500,
  //     userOnly: true
  //   },

  // }


  //   const handleSubmitmit = e => {
  //     const headers = { 
  //       'Authorization': user.token,
  //   }
  //   console.log("Tags", tags)

  // const data = tags
  //     axios.post('http://localhost:3000/api/blog/create', data, {headers})

  //   }
  // title: req.body.title,
  // description: req.body.description,
  // thumbnail: thumbnail,
  // content: req.body.content,
  // created_by: req.body.user_name,
  // written_by : req.body.written_by,
  // blog: req.body.blog_type
  // tags: req.body.tags



  return (
    <div>

      <div className={hide1 ? 'hidden' : 'block mb-20'}>

        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">Create New Article</span>

        <div className='w-full py-10
    '>
          <textarea type="text"
            ref={textAreaRef} value={title} onChange={handleTitle} rows={1} name="" placeholder='Enter the Title ...' id=""
            className='title w-full focus:border-0 border-0 selection:border-0
     border-none focus:ring-0 font-bold text-2xl lg:text-5xl '
          ></textarea>
        </div>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}

          onChange={setblog}
          placeholder='Hello'
          id="textarea"
          className='min-h-48 max-h-auto'
          ref={(el) => setEditor(el)}
        />



      </div>

      <div className={hide1 ? 'block' : 'hidden'}>
        <div onClick={handleClick} className='w-auto border-dotted border-4 text-center p-2 py-5 
        
        cursor-pointer hover:bg-blue-200 rounded-lg border-blue-200'>

          <h1 className='text-lg'>Add Thumbnail</h1>

          <figure class="mx-auto relative max-w-sm transition-all duration-300 overflow-hidden">
            {image.preview && <img src={image.preview} className='min-h-44 min-w-cover rounded-lg object-cover' />}
            <input type='file'
              ref={inputRef} className='hidden' name='file' onChange={handleFileChange}></input>
          </figure>

        </div>

        <div className='w-full pt-10'>
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Description</h3>
          <textarea onChange={onChangeDescription} id="message" rows="4" className="block p-2.5 w-full text-sm 
text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>

        <div className='lg:flex grid lg:justify-between gap-4 py-10 '>
          <div className="tags-input w-full lg:w-2/4 focus:border-0 border-0 selection:border-0 border-none focus:ring-0 ">
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Tags</h3>
            <input
              className='rounded-lg w-full border-gray-300 focus:border-blue-100' onKeyUp={event => addTags(event)}
              type="text" placeholder="Press enter to add tags" />
            <ul className='flex flex-wrap mt-3 py-2 gap-2'>
              {tags.map((tag, index) => (
                <li key={index} className='bg-blue-50 px-2 rounded-lg flex gap-2 items-center'>
                  <span className='text-light'>{tag}</span>

                  <CiCircleRemove className="material-icons text-red-700 cursor-pointer " onClick={() => removeTags(index)} />

                </li>
              ))}
            </ul>
          </div>


          <div className='w-full lg:w-2/4'>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Blog Type</h3>
            <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input id="horizontal-list-radio-license" type="radio"
                    value={1}
                    onChange={onValueChange} name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Internship </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input id="horizontal-list-radio-id" type="radio"
                    onChange={onValueChange} name="list-radio" value={2}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Courses</label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input id="horizontal-list-radio-millitary"
                    onChange={onValueChange}
                    type="radio" value={0} name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2
             dark:bg-gray-600 dark:border-gray-500"/>
                  <label for="horizontal-list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>

      <div className='flex justify-between'>
        {
          hide1 ?
            <button
              type="button"
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'


              onClick={(e) => sethide1(false)}>Previous</button> :
            <button type="button"
              className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              disabled>Previous</button>

        }

        {hide1 ? <button onClick={handleSubmit} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button> :
          <button onClick={onNext} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Next                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        }




      </div>
    </div>
  )
}

export default Write