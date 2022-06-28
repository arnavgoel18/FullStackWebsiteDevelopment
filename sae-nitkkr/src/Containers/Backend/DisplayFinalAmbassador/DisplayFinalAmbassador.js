import React, {useMemo, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./DisplayFInalAmbassador.css"
import PageHeader from "../../../Components/Backend/PageHeader/PageHeader";
import BackSignOutPanel from "../../../Components/Backend/BackSignOutPanel/BackSignOutPanel";

//firestore
import db from "../../../Firebase.js";
import {
    collection,
    getDocs,
    Timestamp,
    doc,
    setDoc,
    addDoc
} from "firebase/firestore";

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
        document.querySelector('.displayFInalAmbassador_loader').style.display = 'block';
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
            document.querySelector('.displayFInalAmbassador_loader').style.display = 'none';
            document.querySelector('.displayFInalAmbassador_responseText').style.display = 'block';
            document.querySelector('.displayFInalAmbassador_responseText').textContent = 'upload done!';
            setLoading(true)
            getInfo()
            setTimeout(()=>{
                document.querySelector('.displayFInalAmbassador_responseText').style.display = 'none';
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
                <PageHeader heading="Selected Ambassador" />
                <div className="displayFInalAmbassador_displayDiv">
                    <BackSignOutPanel/>
                    <div className="displayFInalAmbassador_uploadBox">
                        <input type="file" id="userFileInput" onChange={processFile} accept=".csv"/>
                        <div className="displayFInalAmbassador_uploadFileButton" onClick={triggerFileInput}>Upload New</div>
                        <div className="displayFInalAmbassador_loader"></div>
                        <div className="displayFInalAmbassador_responseText"></div>
                    </div>
                    <a className="displayFInalAmbassador_downloadCsv">
                    <i
                        onClick={downloadCsv}
                        className="fa fa-download"
                        aria-hidden="true"
                    ></i>
                    </a>
                    <div className="displayFInalAmbassador_ambassadorBlock">
                       {/* <Table columns={columns} data={studentDetails} /> */}
                       <table>
                           <thead>
                               <tr>
                                    <th className="displayFInalAmbassador_th">Name</th>
                                    <th className="displayFInalAmbassador_th">College</th>
                                    <th className="displayFInalAmbassador_th">Semester</th>
                                    <th className="displayFInalAmbassador_th">Branch</th>
                                    <th className="displayFInalAmbassador_th">Phone</th>
                                    <th className="displayFInalAmbassador_th">Email</th>
                                    <th className="displayFInalAmbassador_th">Referral Code</th>
                                    <th className="displayFInalAmbassador_th">No. of Referrals</th>
                               </tr>
                           </thead>
                           <tbody>
                            {studentDetails.map(item => {
                                return <tr>
                                    <td className="displayFInalAmbassador_td">{item.studentName} </td>
                                    <td className="displayFInalAmbassador_td">{item.collegeName} </td>
                                    <td className="displayFInalAmbassador_td">{item.semester} </td>
                                    <td className="displayFInalAmbassador_td">{item.branch} </td>
                                    <td className="displayFInalAmbassador_td">{item.phone} </td>
                                    <td className="displayFInalAmbassador_td">{item.email} </td>
                                    <td className="displayFInalAmbassador_td">{item.referralCode} </td>
                                    <td className="displayFInalAmbassador_td">{item.numberReferrals} </td>
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
