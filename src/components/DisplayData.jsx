import { Component } from "react"
import ApiService from "../service/ApiService.js"

// const index = 0;
export default class DisplayData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            studentData:[],
        }
    }

    componentDidMount() {
       ApiService.getStudents().then((response) => {
            this.setState({
                studentData: response.data
            })
        });
    }

    // incrementNum() {
        
    // }
    
    render() {
        return(
            <div className="col-sm-8">
                <div className="container bg-white border mt-4 mb-4 pt-3">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            {/* <th scope="col">Sl.No</th> */}
                            <th scope="col">Admission No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Class</th>
                            <th scope="col">Division</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.studentData.map(
                                student =>
                                <tr key = {student.id}>
                                    {/* <th scope="row">{index + 1}</th> */}
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.dob}</td>
                                    <td>{student.classroom}</td>
                                    <td>{student.division}</td>
                                    <td>{student.gender}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}