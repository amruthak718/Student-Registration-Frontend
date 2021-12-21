import { Component } from "react/cjs/react.development";
import ApiService from "../service/ApiService.js";

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            dob: "",
            classroom: "",
            division: "",
            gender: "Male",
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDobChange = this.handleDobChange.bind(this);
        this.handleClassChange = this.handleClassChange.bind(this);
        this.handleDivisionChange = this.handleDivisionChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
    }

    refreshPage = () => {
        window.location.reload();
    }

    handleNameChange (e) {
        this.setState({
            name: e.target.value,
        });
    }

    handleDobChange (e) {
        this.setState({
            dob: e.target.value,
        });
    }

    handleClassChange (e) {
        this.setState({
            classroom: e.target.value,
        });
    }

    handleDivisionChange (e) {
        this.setState({
            division: e.target.value,
        });
    }

    handleGenderChange (e) {
        this.setState({
            gender: e.target.value,
        });
    }
 
    addStudent = () => {
      
        let studentData = {
            name: this.state.name,
            dob: this.state.dob,
            classroom: this.state.classroom,
            division: this.state.division,
            gender: this.state.gender
        }


        ApiService.saveStudent(studentData).then((response) => {
            if(response.data === "200") {
                this.refreshPage();
            } else {
                alert("Enter a valid name");
            }
        });

    }

    render() {
        return (
            <div className="col-sm-4">
                <div className="container border h-47 bg-white mt-4 ml-2 pt-3">
                <p className="text-muted text-center lead">Registration form</p>
                <form>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <label>Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <label>Date of Birth</label>
                            <input type="date" className="form-control" id="dob" placeholder="DD-MM-YYYY" value={this.state.dob} onChange={this.handleDobChange} required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label>Class</label>
                            <select id="studentClass" className="form-control" value={this.state.classroom} onChange={this.handleClassChange} required>
                                <option defaultValue="I">Select...</option>
                                <option>I</option>
                                <option>II</option>
                                <option>III</option>
                                <option>IV</option>
                                <option>V</option>
                                <option>VI</option>
                                <option>VII</option>
                                <option>VIII</option>
                                <option>IX</option>
                                <option>X</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Division</label>
                            <select id="division" className="form-control" value={this.state.division} onChange={this.handleDivisionChange} required>
                                <option defaultValue="A">Select...</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                            </select>
                        </div>
                    </div>
                    <fieldset className="form-group">
                    <div className="row">
                    <legend className="col-form-label col-sm-4 pt-0">Gender</legend>
                    <div className="col-sm-4" onChange={this.handleGenderChange} >
                    <div className="form-check">
                        <input className="form-check-input bg-primary" type="radio" name="gender" id="Male" value="Male" defaultChecked />
                        <label className="form-check-label">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="Female" value="Female"/>
                        <label className="form-check-label">
                            Female
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="Other" value="Other"/>
                        <label className="form-check-label">
                            Other
                        </label>
                    </div>
                    </div>
                    </div>
                    </fieldset>
                </form>
                <center><button type="submit" className="btn btn-primary" onClick={this.addStudent}>Register</button></center>
            </div>
        </div>
        )
    }
}