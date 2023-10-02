const Course = require('../model/courses')

const create = async(req, res)=>{
    const course_data = req.body
    if(req.body){
        try {
            const new_course = new Course({
                title: req.body.title,
                description: req.body.description,
                author: req.userId
            })
            await new_course.save()
            res.status(200).json(new_course)
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(400).json('Kindly provide the neccessary details')
    }
}

const single_course = async(req, res)=>{
    const course_id = req.params.id
    const found_course = await Course.findById(course_id)
    if (found_course){
        res.status(200).json(found_course)
    }else{
        res.status(400).json('course not found')
    }
}

const all_course = async(req, res)=>{
    const all_course = await Course.find()
    if(all_course){
        res.status(200).json(all_course)
    }else{
        res.status(400).json('no course yet')
    }
}

const upload = async(req, res)=>{
    const course_file = await Course.findById(req.params.id)
    if (!course_file) res.status(400).json('Course does not exist')
    if ((req.body.file && req.body.name)){
        const file_extension = req.body.name.split('.')[(req.body.name.split('.')).length - 1]
        if (file_extension.toLowerCase() == 'pdf'){
            const pdf_data = fs.readFileSync(req.body.file)
            await Course.findByIdAndUpdate(course_file._id, {"$push": {files: pdf_data}}, {new: true, upsert: true}, (err, data)=>{
                if (err) res.status(500).json(err)
                res.status(200).json(data)
            })
        }else{
            res.status(200).json('Wrong file type')
        }
    }else{
        res.status(400).json('kindly attach a file')
    }
}

const delete_course = async(req, res)=>{
    const course = await Course.findById(req.params.id)
    if (req.userId == course.author){
        try {
            await Course.findByIdAndDelete(course._id)
            res.status(200).json('course successfully deleted')
        } catch (error) {
            res.status(500).json('error deleting course')
        }
    }else{
        res.status(400).json('Unauthorize')
    }
}


module.exports = {create, single_course, all_course, upload, delete_course}