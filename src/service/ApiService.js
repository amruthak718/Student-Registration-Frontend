import axios from "axios";

const SAVE_DATA = "http://localhost:8080/api/save"
const STUDENT_DATA = "http://localhost:8080/api/students"

class ApiService {
    saveStudent(student) {
        return axios.post(SAVE_DATA, student);
    }

    getStudents() {
        return axios.get(STUDENT_DATA);
    }
}

export default new ApiService();