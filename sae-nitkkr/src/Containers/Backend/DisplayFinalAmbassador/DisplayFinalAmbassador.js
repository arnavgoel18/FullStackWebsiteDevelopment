import React, {useMemo, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./DisplayFInalAmbassador.css"
import db from "../../../Firebase.js";
import {
    collection,
    getDocs,
    Timestamp,
    doc,
    setDoc,
    addDoc
} from "firebase/firestore";
import PageHeader from "../../../Components/Backend/PageHeader/PageHeader";
import { connectStorageEmulator } from "firebase/storage";
import BackSignOutPanel from "../../../Components/Backend/BackSignOutPanel/BackSignOutPanel";

//function to get data form database
function DisplayFinalAmbassador() {
    var studentDetails = [];
    var cvsFileData = [];
    var mergedCsvData = [];

    var [studentDetails, setStudentDetail] = useState({});
    var [CsvDetail, setCsvDetail] = useState({});
    var [tester, setTester] = useState(false);
    var [isLoading, setLoading] = useState(true);

    //Get Information from Firebase into detailList array
    async function getInfo() {
        const studentAmbassador = collection(db, "finalStudentAmbassador");
        var amb_doc = await getDocs(studentAmbassador);
        studentDetails = amb_doc.docs.map((doc) => doc.data());

        amb_doc.forEach((doc) => {
            cvsFileData = [
                [doc.data().studentName],
                [doc.data().collegeName],
                [doc.data().semester],
                [doc.data().branch],
                [doc.data().phone],
                [doc.data().email],
                [doc.data().referralCode],
                [doc.data().numberReferrals.toString()]
            ];

            mergedCsvData.push(cvsFileData);
        });
       
        setStudentDetail(studentDetails);
        setLoading(false);
        setCsvDetail(mergedCsvData);
    }
    if(tester == false){
        (async () => {await getInfo();})();
        setTester(true)
    }
    const columns = useMemo(
        () => [
          {
            Header: "Name"
          },
          {
            Header: "College"
          },
          {
            Header: "Semester"
          },
          {
            Header: "Branch"
          },
          {
            Header: "Phone"
          },
          {
            Header: "Email"
          },
          {
            Header: "Referral Code"
          },
          {
            Header: "No. of Referrals"
          }
        ],
        []
      );
    
      function downloadCsv() {
        if (CsvDetail.length == 0) {
          alert("There are no responses yet!");
          return;
        }

        //define the heading for each row of the data
        var csv =
          "Name,Collegename,Semester,Branch,PhoneNo,EmailId,referralCode,numReferrals";
        csv += "\n";

        //merge the data with CSV
        CsvDetail.forEach(function (row) {
          //to replace , with ;
          row.forEach(function (row1) {
            row1[0] = row1[0].replace(/,/g, ";");
            row1[0] = row1[0].replace(/\n/g, ";");
          });
          csv += row.join(",");
          csv += "\n";
        });

        var hiddenElement = document.createElement("a");
        hiddenElement.href =
          "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csv);
        hiddenElement.target = "_blank";

        //provide the name for the CSV file to be downloaded
        hiddenElement.download = "finalStudentAmbassadorData.csv";
        hiddenElement.click();
      }

    //var csv is the CSV file with headers
    function csvObj(csv){

        var lines=csv.split("\n");
    
        var result = [];
    
        var headers=lines[0].split(",");
    
        for(var i=1;i<lines.length;i++){
    
            var obj = [];
            var currentline=lines[i].split(",");
    
            for(var j=0;j<headers.length;j++){
                obj.push(currentline[j]);
            }
    
            result.push(obj);
        }
        return result; 
    }

    function triggerFileInput(){
        document.querySelector('#userFileInput').click();
    }
    async function processFile(){
        document.querySelector('.loader').style.display = 'block';
        const ref = await getDocs(collection(db, "LengthSelectedStudent"));
        var counter = ref.docs.map((doc) => doc.data())[0].len
        var myFile = document.querySelector('#userFileInput').files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function() {
            var dataObj = csvObj(this.result)

            for(var i = 0; i < dataObj.length; i++){
                if(dataObj[i][1]!= undefined){
                    var obj = {
                        studentName : dataObj[i][0],
                        collegeName : dataObj[i][1],
                        semester : dataObj[i][2],
                        branch: dataObj[i][3],
                        phone : dataObj[i][4],
                        email : dataObj[i][5],
                        referralCode : dataObj[i][0].substring(0, 3) + counter,
                        numberReferrals: 0
                    };
                    (async () => {
                        await addDoc(collection(db, "finalStudentAmbassador"), obj);    
                    })();
                    counter++;
                }
            }
            //update counter
            (async () => {await setDoc(doc(collection(db, "LengthSelectedStudent"), "1111"), {"len": counter});
            document.querySelector('.loader').style.display = 'none';
            document.querySelector('.responseText').style.display = 'block';
            document.querySelector('.responseText').textContent = 'upload done!';
            setLoading(true)
            getInfo()
            setTimeout(()=>{
                document.querySelector('.responseText').style.display = 'none';
            }, 3000)
        })();
        });
        reader.readAsText(myFile);
    }
    
    const token = localStorage.getItem("token");

    let loggedin = true;
    if (token == null) {
        loggedin = false;
    }

    if (loggedin == false) {
        return <Redirect to="/admin/login" />;
    } else if(isLoading) {
        return null;
    }
    else{
        return (
            <>
                <PageHeader heading="Ambassador Responses" />
                <div className="displayDiv">
                    <BackSignOutPanel/>
                    <div className="uploadBox">
                        <input type="file" id="userFileInput" onChange={processFile} accept=".csv"/>
                        <div className="uploadFileButton" onClick={triggerFileInput}>Upload New</div>
                        <div className="loader"></div>
                        <div className="responseText"></div>
                    </div>
                    <a className="downloadCsv">
                    <i
                        onClick={downloadCsv}
                        className="fa fa-download"
                        aria-hidden="true"
                    ></i>
                    </a>
                    <div className="ambassadorBlock">
                       {/* <Table columns={columns} data={studentDetails} /> */}
                       <table>
                           <thead>
                               <tr>
                                    <th>Name</th>
                                    <th>College</th>
                                    <th>Semester</th>
                                    <th>Branch</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Referral Code</th>
                                    <th>No. of Referrals</th>
                               </tr>
                           </thead>
                           <tbody>
                            {studentDetails.map(item => {
                                return <tr>
                                    <td>{item.studentName} </td>
                                    <td>{item.collegeName} </td>
                                    <td>{item.semester} </td>
                                    <td>{item.branch} </td>
                                    <td>{item.phone} </td>
                                    <td>{item.email} </td>
                                    <td>{item.referralCode} </td>
                                    <td>{item.numberReferrals} </td>
                                    
                                </tr>;
                                })}
                           </tbody>
                       </table>
                       
                    </div>
                </div>
            </>
        );
    }
}

export default DisplayFinalAmbassador;
